let years = 8
function years_to_milliseconds(i) {	
	const minute = 1000 * 60
	const hour = minute * 60;
	const day = hour * 24
	const year = day * 365
	 
	 
	let result = year * i 

	console.log(result)
	return result
}

years_to_milliseconds(years)