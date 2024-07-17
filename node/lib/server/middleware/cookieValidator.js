async function cookieValidator (cookies) {
	try {
		await externallyValidateCookie(cookie.testCookie)
	} catch {
		throw new Error('Invalid cookies')
	}
}