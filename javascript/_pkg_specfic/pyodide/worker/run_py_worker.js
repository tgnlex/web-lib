import { asyncRun } from './py-worker';
const pyodideWorker = new Worker('./pyworker.js')
const script = `
  import statistics
  from js import my_vals
  statistics.stdev(my_vals)
`


const context = {
  my_vals: [0.8, 0.4, 1.2, 3.7, 2.6, 5.8]
}
async function main() {
  try {
    const { results, error} = await asyncRun(script, context);
    if (results) {
      console.log(`[PY::WORKER]: Your results are: ${results}`)
    } else if (error) {
      console.log(`[PY::WORKER]: Error: ${error}`)
    }
  } catch(e) {
    console.log (`
        [PY::WORKER]: Error occured while trying to run py-worker.\n
        Error located at: ${filename}, Line: ${e.lineno}.\n
        Error Message: ${e.message}   
    `);
  }
}
main();