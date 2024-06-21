import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


function getCookie(req, name: string) {
	const ck = req.cookies.get(`${name}`)
  if (ck) {
		console.log(ck);
		return ck;
	} else {
		const error = new Error(`No cookie with the name of ${name} could be identified`)
		console.error(error);
		return 
	}

}
async function setCookie(req, name, value,  opts: {/*  options*/}, err = Error(/* Custom error message */)) {
	const cookie = await getCookie(req, 'nextjs');
	if (err) {
		console.log(err);
		throw err;
	}
	if (opts) {
		req.cookies.set({
			name: name,
			value: value,
			opts: {opts} 
		})
  } else {
		req.cookies.set({
			name: name,
			value: value
		})
	}
}
export function middleware(req: NextRequest, res: NextResponse) {



	setCookie(req, 'nextjs', "App Made with nextjs",{time: Date.now()})


let response = res.next()
  res.cookies.set({
	name: 'vercel', 
	value: 'fast', 
	path: '/',
})
return response 
}