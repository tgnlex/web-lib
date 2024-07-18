function checkString(data) {
  if (!data || typeof data !== 'string') {
    return console.error('Data is not a string.');
  }
  else { return data; }
}

function checkNum(data) {
  if(!data || typeof data !== 'string') {
    return console.error('Data is not a number');
  }
  else { return data; }
}
function checkBool(data) {
  if (!data || typeof data !== "boolean") {
    return console.error('Data is not a boolean');
  }
  else { return data; }
}
