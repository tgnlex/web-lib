function addChildren(element: string, html: string): void {

  const e = document.querySelector(`${element}`)

  e.innerHTML = `${html}`;
}
// Example: 
// addChildren("#app", "<h1>Hello World</h1>")

function getChildren(element: string) {
  const e = document.querySelector(`${element}`)
  return e.children;
}

function getChildNodes(element: string) {
  const e = document.querySelector(`${element}`)
  return e.childNodes;
}

