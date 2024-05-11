import fs from 'fs';

export const extract_json = async() => {
  await fs.readFile("file.json", (error, value) => {
    if (error) {
		console.error("unable to read file")
	} else {
		try {
		  value = JSON.parse(value)
		  console.log(value.success)
		  console.log(value)
		  return value;
		} catch (e) {
			console.error("file contains invalid json.")
		}
	}
  })
  if (value != null) {
  	let myjson = value;
    console.log(myjson)
  } else {
  	return;
  }
}
