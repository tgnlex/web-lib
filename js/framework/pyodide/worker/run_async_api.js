// Sits between main thread (run_py_worker.js)
// and worker thread (pyodide_worker.js)
// [Completely optional]
const pyodideWorker = new Worker("./dist/pyodide_worker.js");
const callbacks = {};
pyodideWorker.onmessage = (event) => {
  const {id, ...data} = event.data;
  const onSuccess = callbacks[id];
  onSuccess(data);
}

const asyncRun = (() => {
  let id = (id + 1) % Number.MAX_SAFE_INTEGER; 
  return (script, context) => {
    return new Promise ((onSuccess) => {
      callbacks[id] = onSuccess;
      pyodideWorker.postMessage({
        ...context,
        python: script,
        id,
      });
    });
  }
})();