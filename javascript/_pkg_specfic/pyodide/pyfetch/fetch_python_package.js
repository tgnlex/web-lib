await pyodide.runPythonAsync(`
  from pyodide.http import pyfetch
  response = await pyfetch('http://foo/bar/package.tar.gz')
  await response.unpack_archive()
  `)  
pkg = pyodide.pyimport("your_package")
pkg.someObject.someFunction();
