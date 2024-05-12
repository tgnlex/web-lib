// Example: 
// app/items/route.ts
const Data: Object[] = []

export async function POST(request: Request) {
  const res = await request.json()
  const item: Object = JSON.parse(res);
  Data.push(item);
  return Response.json({ res })
}