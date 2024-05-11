const SERVICE_WORKER_PATH = "/py_sw.js";
const JSON_FILE_PATH  = './data.json'

const SW_OPTIONS = {
  scope: "/",
}
async function registerPyServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        SERVICE_WORKER_PATH, 
        OPTIONS,
      );
      if (registration.installing) {
        console.log("[MAIN]: Attempting to install sw")
      } 
      else if (registration.waiting ) {
        console.log("[MAIN]: Service worker installed successfully")
      }
      else if (registration.active) {
        console.log(`[SERVICE WORKER]: Service Worker Active`)
      }
    } catch (error) {
      console.error(`[MAIN]: Service Worker registration failed. Error: ${error}`)
    }
  }
}
async function FetchThanLogData() {
  console.log(`[PY::SW]: Attempting to fetch data`)
  try {
    const swFetch = await (await fetch(JSON_FILE_PATH)).json()
    console.log(`[PY::SW]: ${swFetch}`)
  } catch (e) {
    console.log(`[PY::SW]: Error while trying to fetch data: ${e}`)
  }
}
registerPyServiceWorker();