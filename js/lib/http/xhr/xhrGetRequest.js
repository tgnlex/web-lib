const url = "page.html"

function getRequest(url) {
	function ajaxError(e) {
	  console.log('Error occurred during http request')
	}
	function onComplete(e) {
	  console.log('Request completed.')
	}
	function reqListener(e) {
	  console.log(this.responseText)
	};
	const xhr = new XMLHttpRequest();
	xhr.addEventListener("load", reqListener)
	xhr.addEventListener("error", ajaxError)
	xhr.addEventListner("loadEnd", onComplete)
	xhr.open("GET", url);
	xhr.send("");
};
