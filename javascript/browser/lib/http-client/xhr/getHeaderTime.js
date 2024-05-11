function getHeaderTime(url) {
  const xhr = new XMLHttpRequest();
  function logTime() {
	console.log(this.getResponseHeader("Last-Modified"))
  }
  xhr.open("HEAD", url)
  xhr.onload = logTime;
  xhr.send();
}