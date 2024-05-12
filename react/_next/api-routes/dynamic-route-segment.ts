                                                                                                                                                                                                                                                                                                                                                                                                            // Example route url: 
// app/items/[slug]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
	const slug = params.slug
}