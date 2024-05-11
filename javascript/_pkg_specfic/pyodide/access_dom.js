pyodide.runPython(`
import js
div = js.document.createElement("div")
div.innerHTML = "<h1>This element was created via Pyodide (Python)/h1>"
`)
