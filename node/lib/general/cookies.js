let dt = new Date;

const cookieValidator = async (cookie) => {
  try {
    await externallyValidateCookie(cookie);
  } catch (error) {
    throw error;
  }
};

const timestampCookie = (res) => {
  let timestamp = dt.toLocaleString();
  res.cookie('Timestamp', `${timestamp}`);
  console.log('Set Time Cookie');
}
const setDateCookie = (res) => {
  let date = dt.toLocaleDateString(); 
  res.cookie('Date', `${date}`);
  console.log('Set Date Cookie')
}

const setTimeCookie = (res) => {
  let time = dt.toLocaleTimeString();
  res.cookie('Time', `${time}`)
  console.log(`Set timestamp Cookie.`)
}
