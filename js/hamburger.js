const hamburger = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".nav-mobile");
const first = document.querySelector(".first");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  mobile_nav.classList.toggle("show-nav");
  first.classList.toggle("show-nav");
  if (mobile_nav.classList.contains("show-nav")) {
    document.body.style = `
        overflow:hidden;
    `;
  } else {
    document.body.style = `
        overflow:scroll;
    `;
  }
});
