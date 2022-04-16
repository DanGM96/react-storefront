import { client } from "@tilework/opus";

client.setEndpoint("http://localhost:4000/");

export async function queryResponse(query) {
  return await client.post(query);
}
