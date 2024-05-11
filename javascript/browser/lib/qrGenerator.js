let qr = document.querySelector("#qr");
let input = wrapper.querySelector(".qr--input");
let btn = wrapper.querySelector(".qr--button");
let img = wrapper.querySelector(".qr--img");

let preValue;

btn.addEventListener("click", () => {
  let qrValue = input.value.trim();
  if(!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  btn.innerText = "Generating QR Code...";
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  img.addEventListener("load", () => {
    qr.classList.add("active");
    btn.innerText = "Generate QR Code"
  });
});

input.addEventListener("keyup", () => {
  if(!input.value.trim()) {
    qr.classList.remove("active");
    preValue = "";
  }
})