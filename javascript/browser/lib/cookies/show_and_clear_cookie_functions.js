document.cookie = "name=my_cookie", SameSite=None, Secure"

document.cookie="message=hello_world; SameSite=None"; Secure";

function showCookies() {
  const output = document.getElementById("cookie-output");
  output.textContent = `> ${document.cookie}`;
}

function clearOutputCookies() {
  const output = document.getElementById("cookie-output");
  output.textContent = "";
}