// Assign new value to existing variable
pyodide.globals.set('foo', "foo will now be bar")
// Makes alert function callable from pyodide
pyodide.globals.set('alert', alert)