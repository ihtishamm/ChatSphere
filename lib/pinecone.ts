import { Pinecone } from '@pinecone-database/pinecone';
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { downloadFromS3 } from "./s3-server";


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
     const pages = await loader.load();
     return pages;
}