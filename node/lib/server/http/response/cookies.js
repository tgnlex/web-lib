let dt = new Date;

const clearCookie = (res, name) => {
  res.clearcookie(name);
}
const sendCookie = (res, key, value) => {
  res.cookie(key, value)
}
const sendStampCookie = (res) => {
  let timestamp = Date.now();
  res.cookie('timestamp', `${timestamp}`);
  console.log('Set Time Cookie');
}
const sendDateCookie = (res) => {
  let date = dt.toLocaleDateString(); 
  res.cookie('date', `${date}`);
  console.log('Set Date Cookie')
}

const sendTimeCookie = (res) => {
  let time = dt.toLocaleTimeString();
  res.cookie('time', `${time}`)
  console.log(`Set timestamp Cookie.`)
}
