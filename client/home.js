const nav = document.querySelector('.nav')
const header = document.querySelector('.header')

// Sticky navigation
window.onscroll = function () {
  makeNavSticky()
}
function makeNavSticky() {
  let headerHeight = header.offsetHeight
  if (window.pageYOffset > headerHeight - 10) {
    nav.classList.add('nav--sticky')
  } else {
    nav.classList.remove('nav--sticky')
  }
}
