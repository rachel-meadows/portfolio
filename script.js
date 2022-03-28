const skills = document.querySelector('.skills__technical')
const nav = document.querySelector('.nav')
const readMore = document.querySelector('.header__more')
const header = document.querySelector('.header')

// Index.html scroll button
function scrollToContent() {
  skills.scrollIntoView({ behavior: 'smooth' })
}
readMore.addEventListener('click', scrollToContent)

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

// Load particles
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('Particles-js config loaded correctly')
})
