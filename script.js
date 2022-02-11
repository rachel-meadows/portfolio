const skills = document.querySelector("#skills");
const nav = document.querySelector(".navigation");
const readMore = document.querySelector("#readMore");
const header = document.querySelector("#aboveTheFold");

// Index.html
function scrollToContent() {
    skills.scrollIntoView({behavior: "smooth"});
}
readMore.addEventListener("click", scrollToContent);

// All pages
window.onscroll = function() {
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