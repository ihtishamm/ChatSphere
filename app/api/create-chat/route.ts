
import { NextResponse } from "next/server";

export async function POST(req: Request,) {
   try {
    const body = await req.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const  {file_key, file_name} = body;
    console.log(file_key, file_name);
    return NextResponse.json(
    { message:"success" },
    {status:200});
        
   } catch (error) {
     console.log(error);
     return NextResponse.json(
    { error:"internal server error" },
    {status:500});
   }
}