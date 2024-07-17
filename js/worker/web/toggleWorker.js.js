let worker;
const startWorker = () => {
  if (typeof(Worker) !== "undefined") {
    if (typeof(worker) == "undefined") {
      worker = new Worker("worker.js");
    }
    worker.onmessage = function(event) {
      document.QuerySelector("#worker--output").innerHTML = event.data;
    };
  } else {
    document.QuerySelector("#worker--output").innerHTML = "Sorry! No Web Worker support.";
  }
}

const stopWorker = () => {
  worker.terminate();
  worker = undefined;
}