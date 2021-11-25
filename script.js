
const skills = document.querySelector("#skills");
const subNavigation = document.querySelector("#subNavigation");
const readMore = document.querySelector("#readMore");


function scrollToContent() {
    skills.scrollIntoView({behavior: "smooth"});
}
readMore.addEventListener("click", scrollToContent);

// https://webdesign.tutsplus.com/tutorials/how-to-intersection-observer--cms-30250
