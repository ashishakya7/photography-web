const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar-nav");
const navLinks = document.querySelectorAll(".navbar-nav li");
const navListItem = document.querySelectorAll(".nav-item");
const navSlide = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // hide scrollbar when image opens 'visible' to display
    document.body.classList.toggle("stop-scroll");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });
    burger.classList.toggle("cross");
  });
};

const navHide = () => {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.remove("cross");
      document.body.classList.remove("stop-scroll");
      navListItem.forEach((item) => {
        item.removeAttribute("style");
      });
    });
  });
};
navHide();
navSlide();

const backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
  if (window.pageYOffset > 400) {
    //display button
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else {
    //hide button
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}
backToTopButton.addEventListener("click", backToTop);
function backToTop() {
  window.scrollTo(0, 0);
}
