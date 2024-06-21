async function loadPyodideAndPackages() {
  self.pyodide = await loadPyodide()
  await self.pyodide.loadPackage(["numpy", "pytz"])
}
let pyodideReadyPromise = loadPyodideAndPackages();
