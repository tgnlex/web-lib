let field = document.getElementById("text");

if (sessionStorage.getItem("autosave")) {
  field.value = sessionStorage.getItem("autosave");
}

field.addEventListener("change", () => {
  sessionStorage.setItem("autosave", field.value);
});
