// Example: 
// app/api/route.ts

export async function GET(request: Request) {
	return new Response('Hello, World', {
	  status: 200, 
	  headers: {
	  	'Access-Control-Allow-Origin': '*',
	  	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
	  	'Access-Control-Allow-Headers': 'Content-Type, Authorization',
	  },
  })
}