await pyodide.runPythonAsync(`
  from pyodide.http import pyfetch
  response = await pyfetch('http:://localhost:4000/api/python/script.py')
  with open ("script.py", "wb") as f:
    f.write(await response.bytes())
`)
script = pyodide.pyImport("script");
script.someFunction()