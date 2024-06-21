import process from 'node';
// Example: 
// app/api/chat/route.ts
import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge';

const apiConfig = new Configuration({
	apiKey: process.env.OPENAI_API_KEY!,
})
const openai = new OpenAIApi(apiConfig)

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await openai.createChatComplete({
  	model: 'gpt-3.5-turbo',
  	stream: true, 
  	messages: messages, 
  	max_tokens: 500, 
  	temperature: 0.7, 
  	top_p: 1,
  	frequency_penalty: 1,
  	presence_penalty: 1,
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}