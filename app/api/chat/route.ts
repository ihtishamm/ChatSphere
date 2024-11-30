import { HfInference } from '@huggingface/inference';
import { NextRequest, NextResponse } from 'next/server';

const hf = new HfInference(process.env.NEXT_PUBLIC_Huggingface_API_KEY);

export const runtime = 'edge';

export async function POST(req:NextRequest) {
  try {
    const { messages } = await req.json();

    // Extract the latest message and send it to Hugging Face model
    const userMessage = messages[messages.length - 1].content;

    const response = await hf.textGeneration({
      model: 'EleutherAI/gpt-neo-2.7B',  // or another Hugging Face model
      inputs: userMessage,
      parameters: { max_length: 1000, do_sample: true },
    });


  console.log('response',response)

    return new NextResponse(JSON.stringify(response));
  } catch (error) {
    console.error('Error calling Hugging Face API', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
