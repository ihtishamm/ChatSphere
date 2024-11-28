
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { loadS3IntoPinecone } from "@/lib/pinecone";
import { getS3Url } from "@/lib/s3";
import { getAuth } from "@clerk/nextjs/server";


import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const {userId} = getAuth(req)
    if(!userId){
         return NextResponse.json(
               { error:"unauthorized" },
               {status:401});
      }
   try {
    const body = await req.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const  {file_key, file_name} = body;
    await loadS3IntoPinecone(file_key);
 const chat_id = await db.insert(chats).values({
      fileKey:file_key,
      pdfName:file_name,
      pdfUrl:getS3Url(file_key),
      userId:userId
    }).returning({
      insertedId:chats.id
    })

    return NextResponse.json({chat_id:chat_id[0].insertedId}, {status:200});


        
   } catch (error) {
     console.log(error);
     return NextResponse.json(
    { error:"internal server error" },
    {status:500});
   }
}