import {Worker, isMainThread, parentPort, workerData} from 'node:worker_threads';

if (isMainThread) {
	function parseJSAsync(script) {
	return new Promise((resolve, reject) => {
	  const worker = new Worker(__filename, {
	  	workerData: script,
	  });
	  worker.on('message', resolve);
	  worker.on('error', reject);
	  worker.on('exit', (code) => {
	  	reject(new Error(`Worker thread stopped with exit code ${code}`));
	  });
	});
}}else {
 const script = workerData;
 parentPort.postMessage()
}