import workerpool from 'workerpool';

function add(a, b) {
    console.log(`[WORKER]: Beginning task: Add`)
	return a + b;
}
function subtract(a, b) {
    console.log(`[WORKER]: Beginning task: Add`)
	return a - b;
}

function multiply(a, b) {
    console.log(`[WORKER]: Beginning task: Multiply`)
	return a * b
}
function divide(a, b) {
    console.log(`[WORKER]: Beginning task: Divide`)
	return a / b;
}

workerpool.worker({
	add: add, 
	multiply: multiply, 
	subtract: subtract,
	divide: divide,
})