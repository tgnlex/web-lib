function* infinity() {
	let index = 0;

	while (true) {
		yield index++;
	}
}

const gen = inifity() 

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);