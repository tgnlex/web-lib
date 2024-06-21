Worker.addEventListener("messageerror", (event) => {
	console.log(`[Worker]: Error, message cannot be deserialized.`)
})