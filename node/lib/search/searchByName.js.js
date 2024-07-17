const cleanQuery = (raw) => {
  const c1 = raw.charAt(0).toUpperCase();
  const c2 = raw.slice(1).tolowerCase();
  const query = c1 + c2;
  return query;
}

const searchByID = (data, id) => {
  const arr = JSON.stringify(data);
  if (arr.data[id]) {
    return arr.data[id];
  } else {
    return "Not Found"
  }
}

const searchByString = (array, field, query) => {
  const clean = cleanQuery(query);
  for (let i = 0; i < array.data.length; i++) {
    if (array.data[i][`${field}`]===clean) {
    const reply = langs.data[i];
    console.log(reply)
    return reply;
    } else {
      const reply = `No ${field} with a value of ${query} found in ${array}`
      console.log(reply)
      return reply;
    }
  } 
}
// Example: searchJsonArray(langs, name, typescript)