import { OpenAIApi, Configuration } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function getEmbedding(text: string) {
  text = text.replace(/\s+/g, " ").trim();
  try {
    const response = await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: text.replace(/\n/g, " "),
    });

    if (!response.ok) {
      console.error(`OpenAI API Error: ${response.statusText}`, await response.text());
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const result = await response.json();
    const embedding = result?.data?.[0]?.embedding;

    if (!embedding) {
      console.error("Invalid response structure from OpenAI API", result);
      throw new Error("Invalid embedding response from OpenAI API");
    }

    return embedding as number[];
  } catch (error) {
    console.error("Error calling OpenAI embeddings API", error);
    throw error;
  }
}
