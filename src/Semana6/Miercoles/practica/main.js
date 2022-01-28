const button = document.querySelector(".js_button");

function toggleMenu() {
  const menu = this.querySelector(".collapseOne");
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
console.log("%0", button);

/* button.addEventListener("click", toggleMenu); */
