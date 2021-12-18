const navToggle = document.querySelector('.toggle');
const navPage = document.querySelector('.nav-page');

navToggle.addEventListener("click", () => {
    navPage.classList.toggle("nav-menu_visible");
});