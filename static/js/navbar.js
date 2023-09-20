const toggleMenuBtn = document.querySelector("#menu-btn");
const toggleMenu = document.querySelector("#toggle-menu");

toggleMenuBtn.addEventListener("click", toggleNav);

function toggleNav() {
  // Utilisez "transform" comme classe CSS à ajouter ou supprimer
  toggleMenu.classList.toggle("transform");
}
