// Example: 
// app/items/route.ts

export async function POST(request: Request) {
  const res = await request.json()
  return Response.json({ res })
}