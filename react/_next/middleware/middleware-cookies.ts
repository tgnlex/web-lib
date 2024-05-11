import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {

let cookie = request.cookies.get('nextjs')
console.log(cookie)
const allCookies = request.cookies.getAll()
console.log(allCookies)

request.cookies.has('nextjs')
request.cookies.delete('nextjs')
request.cookies.has('nextjs')

const response = NextResponse.next()
response.cookies.set('vercel', 'fast')
response.cookies.set({
	name: 'vercel', 
	value: 'fast', 
	path: '/',
})
cookie = response.cookies.get('vercel')
console.log(cookie)

return response 
}