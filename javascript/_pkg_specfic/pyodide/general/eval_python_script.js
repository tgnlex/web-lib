const output = document.getElementByID = output;
const script = `
def greet():
hello = "hello " + "world!"
print(hello)
`;
function addToOutput(c) {
  output.value += ">>>" + script.value + "\n" + s + "\n"
}
async function main() {
  let pyodide = await loadPyodide();
  output.value += "Ready!\n";
  return pyodide;
}
let pyodideReadyPromise = main();

async function evaluatePython() {
  let pyodide = await pyodideReadyPromise;
  try {
    let output = pyodide.runPython(script.value);
    addToOutput(output);  
  } catch (err) {
    
  }
}