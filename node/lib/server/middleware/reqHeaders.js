const header = (req, headerName) => {
  const header = req.getHeader(`${headerName}`)
  return header; 
}
const headerJson = (req, headerName) => {
	const header = header(`${headerName}`)
	const jHeader = JSON.stringify(header);
	console.log(jHeader);
	return jHeader;
}
const cookieHeader = (req) => {
	let cookies = header(req, 'Cookie')
	return cookies;
} 
const agentHeader = (req) => {
	let agent = header(req, 'User-Agent')
	return agent;
}
const refHeader = (req) => {
	let refer = header(req, 'Referer')
	return refer;
}
const acceptHeader = (req) => {
	let accept = header('Accept');;
	return accepted;
};
const cacheHeader = (req) => {
	let cache = header(req, 'Cache-Control');
	return cache;
}
const getHeaders = (req) => {
	const reqHeaders = [];
	let refer = refHeader(req);
	let accept = aaceptHeader(req)
	let cache = cacheheader(req);
	let cookies = cookieHeader(req);
	let agent = agentHeader(req)
	reqHeaders.push([agent, accept, cookies, refer, cache]);
	console.log(reqHeaders)
	return req_headers;
}
getJsonHeaders = (req) => {
	const reqHeaders = getHeaders(req);
	const jheaders = json.stringify(reqHeaders);
	console.log(jheaders);
	return jheaders;
}
export {header, jsonHeader, cookieHeader, agentHeader, refHeader, acceptHeader, cacheHeader, getHeaders, getJsonHeaders};