const projects = document.querySelectorAll('.project')
const project__tags = document.querySelectorAll('.project__tags')

// Show image instead of description on project hover
projects.forEach((project) => {
  project.addEventListener('mouseenter', (event) => {
    const project = event.target
    const title = project.children[0]
    const subtitle = project.children[1]
    const tags = project.children[2]
    subtitle.style.display = 'none'
    tags.style.display = 'none'
    // Add a hidden property or something to get the image URLs semi-dynamically
    project.style.backgroundImage = "url('../img/projects/malaphor.png')"
    project.classList.add('project--hover')
    title.classList.add('project__title--hover')
  })
  project.addEventListener('mouseleave', (event) => {
    const project = event.target
    const title = project.children[0]
    const subtitle = project.children[1]
    const tags = project.children[2]
    subtitle.style.display = 'block'
    tags.style.display = 'flex'
    project.style.backgroundImage = 'none'
    project.classList.remove('project--hover')
    title.classList.remove('project__title--hover')
  })
})
