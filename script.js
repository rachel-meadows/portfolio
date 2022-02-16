const skills = document.querySelector("#skills");
const nav = document.querySelector(".navigation");
const readMore = document.querySelector("#readMore");
const header = document.querySelector("#wrapper");

// Index.html scroll button
function scrollToContent() {
  skills.scrollIntoView({ behavior: "smooth" });
}
readMore.addEventListener("click", scrollToContent);

// Sticky navigation
window.onscroll = function () {
  makeNavSticky()
};
function makeNavSticky() {
  let headerHeight = header.offsetHeight;
  if (window.pageYOffset > (headerHeight - 10)) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

// Load particles
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('Particles-js config loaded correctly');
});

