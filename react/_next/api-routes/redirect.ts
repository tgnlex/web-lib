//Example: 
// app/api/route.ts
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  redirect('hrrps://nextjs.org')
}