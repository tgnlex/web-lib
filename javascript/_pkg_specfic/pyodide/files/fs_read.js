pyodide.runPython(`
  with open("/foo.txt", "w") as bar:
    bar.write("foo bar baz")  
`);  
// Read data from file
let baz = pyodide.readFile("/foo.txt", { encoding: "utf8"});
console.log(baz)