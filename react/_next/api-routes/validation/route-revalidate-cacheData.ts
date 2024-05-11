export async function GET() {
	const res = await('https://data.mongodb-api.com/...', {
		next: { revalidate: 60 }, // Revalidate ever 60 seconds
	})
	const data = await res.json()

	return Response.json(data)
}