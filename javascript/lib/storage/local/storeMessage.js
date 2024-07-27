const storeMessage = (event) => {
  const store = window.localStorage;
  let record = store.getItem('messages');
  if (!record) {
    record = [];
  } else {
    record = JSON.parse(record);
  }
  record.push(event.data);
  store.setItem('messages', JSON.stringify(record))
}
