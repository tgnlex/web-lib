async function loadPy () {
  let pyodide = await loadPyodide();
  console.log(pyodide.runPython`
    import sys
    sys.version  
  `);
};
main()