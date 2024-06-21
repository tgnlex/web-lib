importScripts("./node_modules/xhr-shim/src/index.js");
self.XMLHttpRequest = XMLHttpRequestShim;
importScripts("./pyodide_sw.js");

let modifyData;
let pyodide;

loadPyodide({}).then((_pyodide) => {
  pyodide = _pyodide;
  let namespace = pyodide.globals.get("dict")();

  pyodide.runPython(
    `
    import json 
    counter = 0
    def modify_data(data):
    global counter 
    counter += 1
    dict = data.to_py()
    dict['count'] = counter
    return dict
    `,
    { globals: namespace },
  );
  modifyData = namespace.get("modify_data");
  namespace.destroy();
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.endsWith("json")) {
    if (!modifyData) {
      event,respondWith(
        Promise.reject("[PYSW]: Python code isnt set up yet, try again shortly.")
      );
    } else {
      event.respondWith(
        fetch(event.request)
          .then((v) => v.json())
          .then((originalData) => {
            let proxy = modifyData(originalData);
            let pyproxies = [];
            // Transform to plain js
            let result = JSON.stringify(
              Object.fromEntries(
                proxy.toJs({
                  pyproxies,
                }),
              ),
            );
            // craft new json response 
            return new Response(result, {
              headers: {"Content-Type": "application/json"},
            });
          }),
      );
    }
  }
});

self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim)
})