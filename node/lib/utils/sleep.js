
const sleep = (i) => {
    const duration = i * 1000;
    setTimeout(() => console.info('sleeping...'), duration)
    .then(() => console.info('done'))
  }

 const sleepMs = (i) => {
    console.info('server', `Will sleep for ${i} milliseconds`, )
    setTimeout(() => console.info('sleeping...', i))
    .then(() => console.info('done'))
 }

