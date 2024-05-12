import React from 'react';
// Example route:
// app/bloh/[slug]/page.tsx

export default function Page({ params }: { params: {slug: string } }) {
	return (<div>My Post: {params.slug}</div>)
}