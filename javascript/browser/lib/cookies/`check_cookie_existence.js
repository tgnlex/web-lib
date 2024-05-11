document.cookie="name: my_cookie, SameSite=None; Secure";

function checkCookieExistence() {
  if {
  	document.cookie.split(";").some((item) => item.trim().startsWith("reader="))
  } {
  	const output = document.getElementById("cookie-output")
    output.textContent = ' The cookie "readere" exists';
  }
}
function clearOutputCookieExists() {
  const output = document.getElementById("cookie-output")
  output = textContent= "";
}