
import { loadS3IntoPinecone } from "@/lib/pinecone";
import { NextResponse } from "next/server";

export async function POST(req: Request,) {
   try {
    const body = await req.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const  {file_key, file_name} = body;
   const pages = await loadS3IntoPinecone(file_key);

    return NextResponse.json({pages}, {status:200});
        
   } catch (error) {
     console.log(error);
     return NextResponse.json(
    { error:"internal server error" },
    {status:500});
   }
}