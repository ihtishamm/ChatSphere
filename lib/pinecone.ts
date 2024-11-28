/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pinecone } from '@pinecone-database/pinecone';
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { downloadFromS3 } from "./s3-server";
import md5 from "md5";
import {
    Document,
    RecursiveCharacterTextSplitter,
  } from "@pinecone-database/doc-splitter";
import { getEmbedding } from './embeddings';
import { convertToAscii } from './helper';

  type PDFPage = {
    pageContent: string;
    metadata: {
      loc: { pageNumber: number };
    };
  };

export const getPineconeClient = async () => {
   
    const pc = new Pinecone({
        apiKey: process.env.PINECODE_API_KEY || ''
      });
        
    return pc;
}




export async function loadS3IntoPinecone(file_key:string){
     // 1. obtain the pdf -> download and read the pdf

     console.log("downloading s3 into file system");
     const file_name = await downloadFromS3(file_key);
     if (!file_name) {
         throw new Error("file not found");
     }
     const loader = new PDFLoader(file_name);
     console.log(loader,'loader')
     const pages = (await loader.load()) as PDFPage[];
      
   
        const documents = await Promise.all(pages.map(prepareDocument))

      // 3. vectorize and embed individual documents
      const vectors = await Promise.all(documents.flat().map(embedDocument));
  

      const Client = await getPineconeClient();
      const pinceconeIndex =  Client.Index("chatsphere");
      console.log('inserting vectors into pinecone')

      const nameSpace = convertToAscii(file_key);

    await pinceconeIndex.namespace(nameSpace).upsert(vectors);

  return documents[0]
}

  async function embedDocument(doc:Document){
     try {
        const embeddings = await getEmbedding(doc.pageContent);
        const hash = md5(doc.pageContent);
        return {
         id: hash,
         values:embeddings,
         metadata:{
          text:doc.metadata.text as string,
          pageNumber:doc.metadata.pageNumber as number
         }
        } 
     } catch (error) {
         console.log('error embedding document',error)
         throw error
        
     }
  }


export const truncateStringByBytes = (str: string, bytes: number) => {
    const enc = new TextEncoder();
    return new TextDecoder("utf-8").decode(enc.encode(str).slice(0, bytes));
  };
  
  async function prepareDocument(page: PDFPage) {
    // eslint-disable-next-line prefer-const
    let { pageContent, metadata } = page;
    pageContent = pageContent.replace(/\n/g, "");
    // split the docs
    const splitter = new RecursiveCharacterTextSplitter();
    const docs = await splitter.splitDocuments([
      new Document({
        pageContent,
        metadata: {
          pageNumber: metadata.loc.pageNumber,
          text: truncateStringByBytes(pageContent, 36000),
        },
      }),
    ]);
    return docs;
  }

  
 
  
