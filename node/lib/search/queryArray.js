const searchArray = (array, query) => {
  const clean = query.toLowerCase();
  if (array[clean]) {
    let reply = array[clean]; 
    return reply;
  }  else {
    let reply = { status: "Not Found!"}  
    return reply;
  }
}