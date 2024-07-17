export function printAll(strs: string | string[] | undefined) {
	if (typeof strs === "object") {
	  for (const s of strs) {
		  console.log(s) 
		  return s; 
	  }
	} else if (typeof strs === "string") {
		console.log(strs)
		return strs; 

	} else {
		console.log('Nothing to return, value is not a string.')
	}
}
