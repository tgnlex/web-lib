const genElem = (type, value, id, className) => {
  id = id || "";
  className = className || "";
  const elem = document.createElement(type);
  elem.textContent = `${value}`;
  elem.setAttribute("id", id);
  elem.setAttribute("class", className)
  return elem;
}

const addElem = (loc, elem) => {
  const base = document.querySelector(loc);
  base.innerHTML = `${elem}`;
}
// Example 
//const header = genElem("h1", "Hello World")
//addElem('#app', header)