const searchByID = (data, id) => {
  const arr = JSON.stringify(data);
  if (arr.data[id]) {
    return arr.data[id];
  } else {
    return "Not Found"
  }
}
