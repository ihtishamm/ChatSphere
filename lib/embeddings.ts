import { HfInference } from '@huggingface/inference';

const HF_API_KEY = process.env.NEXT_PUBLIC_Huggingface_API_KEY || '';

const hf = new HfInference(HF_API_KEY);

export async function getEmbedding(text: string): Promise<number[]> {
  text = text.replace(/\s+/g, " ").trim(); 

  try {
    const response = await hf.featureExtraction({
      model: 'sangmini/msmarco-cotmae-MiniLM-L12_en-ko-ja',
      inputs: text.replace(/\n/g, " "),
    });

    // Validate response
    if (!Array.isArray(response)) {
      console.error("Invalid response structure from Hugging Face API", response);
      throw new Error("Invalid embedding response from Hugging Face API");
    }

    return response.flat() as number[];
  } catch (error) {
    console.error("Error calling Hugging Face embeddings API", error);
    throw error;
  }
}
