// Example: 
// app/api/route.ts

import { headers } from 'next/headers'

export async function GET(request: Request) {
  const headersList = headers()
  const referer = headersList.get('referrer')

  return new Response('Hello, world.', {
  	status: 200, 
  	headers: { referer: referer },
  })
}