function delayResolve(resolve, reject, ms) {
  if (ms >= 1000) {
    setTimeout(() => {
      resolve("Success"); 
    }, ms)
  } else {
    setTimeout(() => {
      resolve("Success") 
    }, 1000)
  }
};

const delayReject = (resolve, reject, ms) => {
  if( ms >= 1000) {
    setTimeout(() => {
      reject(new Error("Error")); 
    }, ms)
  } else {
    setTimeout(() => {
      reject(new Error("Error")); 
    }, 1000)
  }
}
