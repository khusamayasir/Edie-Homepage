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

const scrollOffset = 100;

const scrollElement = document.querySelectorAll(".js-scroll");

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};


const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElement.forEach((el) => {
    if (elementInView(el, scrollOffset)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});