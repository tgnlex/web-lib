let mountDir = "/foo";
pyodide.FS.mkdir(mountDir);
pyodide.FS.mount(pyodide.FS.filesystems.NODEEFS, {root: "."}, mountDir);
pyodide.runPython("import os; print(os.listdir('/foo'))")
// Outputs list of files from node working directory