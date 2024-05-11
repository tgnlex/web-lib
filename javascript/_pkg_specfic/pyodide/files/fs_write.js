let data = "hello world";
pyodideReadyPromise.FS.writeFile("/hello.txt", data, { encoding: "utf8" });
pyodide.runPython(`
  with open("/hello.txt", "r") as fh:
    data = fh.read()
  print(data)
`);