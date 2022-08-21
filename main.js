let navbar = document.querySelector(".navbar");
let navToggle = navbar.querySelector(".material-icons");
let navManu = navbar.getElementsByTagName("ul")[0];

navToggle.addEventListener("click", () => {
  if (navManu.classList.contains("nav_visible")) {
    navManu.classList.remove("nav_visible");
  } else {
    navManu.classList.add("nav_visible");
  }
});