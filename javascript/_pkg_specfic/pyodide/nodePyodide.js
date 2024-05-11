const {loadPyodide} = require("pyodide");

async function hello_python() {
  let pyodide = await loadPyodide();
  return pyodide.runPythonAsync("sum(1+1)")
} 

hello_python().then((result) => {
  console.log("Python sais sum is: ", result )
});