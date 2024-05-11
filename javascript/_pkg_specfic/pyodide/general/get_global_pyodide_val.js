pyodide.runPython(`
  x = [3, 4]
`);

pyodide.globals.get('x').toJs();

// now I have this value in javascript !!!
console.log(x);
