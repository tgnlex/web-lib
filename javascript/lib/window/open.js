let btn = document.querySelector("#btn-target")
let win;

function newWin() {
  let win = window.open("", "", "width=500, height=500");
}

btn.addEventListener("click", newWin())