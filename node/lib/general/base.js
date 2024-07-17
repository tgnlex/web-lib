function noop() {};

const read = (data) => {
  return data;
} 
function heartbeat() {
  this.isAlive = true;
}
const log = (name, data) => {
  const src = name.toUpperCase();
  console.log(`[${src}] ${data}`)
}
const logRead = (value) => {
  log("node", data); 
  return read(data);
}
const sleep = (i) => {
    const duration = i * 1000;
    log('server', `Will sleep for ${i} second(s)`)
    setTimeout(() => log('node',  'sleeping...'), duration)
  }

 const sleepMs = (i) => {
    log('server', `Will sleep for ${i} milliseconds`, )
    setTimeout(() => log('node', 'sleeping...', i));
 }



export {noop, read, logRead, sleep, sleepMs, heartbeat};
