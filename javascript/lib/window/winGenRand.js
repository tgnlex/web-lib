Window.randomNumGen = () => {

	const vals = new UintArray(10)
	crypto.getRandomValues(vals);
	const output = document.querySelector("#target")
	const box = document.querySelector("#container")

	randText.textContent = `Stored Values: ${array.join(" ")}`
}