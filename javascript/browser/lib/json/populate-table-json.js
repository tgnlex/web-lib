const xhr = new XMLHttpRequest();
xhr.onload = function() {
  json_res = JSON.parse(this.responseText);
  let table = "<table border='1'>"
  for (let x in json_res) {
    text += "<tr><td>" + json_res[x].name + "</td></tr>";
  }
  text += "</table>"
  document.QuerySelector("#target").innerHTML = text;
}
xhr.open("GET", "localhost:3000/json/customers");
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send();