export default [
  {
    active: true,
    name: 'serv',
    image: 'serv.png',
    title: 'SERV.',
    subtitle:
      'SERV. allows customers to get quotes from service providers at the click of a button.',
    technologies: [
      'React',
      'Redux',
      'JavaScript',
      'SQL',
      'REST API',
      'HTML',
      'CSS',
      'Express',
      'Node',
    ],
    description: `More in-depth description of the thing. More in-depth description of the thing. More in-depth description of the thing.
    More in-depth description of the thing.
    
    More in-depth description of the thing.`,
    video: '',
    gallery: ['serv_1.png', 'serv_2.png', 'serv_3.png'],
    githubLink: '',
    siteLink: '',
  },
  {
    active: false,
    name: 'fridge-magnets',
    image: 'etch_a_sketch_1.png',
    title: 'Fridge with friends',
    subtitle:
      'Finally, a virtual space to creatively place fridge magnets with your friends!',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
    description: ``,
    video: '',
    gallery: ['.png'],
    githubLink: '',
    siteLink: '',
  },
  {
    active: true,
    name: 'malaphor',
    image: 'malaphor.png',
    title: 'Malaphor generator',
    subtitle: 'A mixed metaphor generator to create unusual new idioms.',
    technologies: ['Python', 'Flask', 'Web scraping', 'HTML', 'CSS', 'SQL'],
    description: `A malaphor is an error in which two figures of speech are merged, producing an often nonsensical result.

    For example, we can take these idioms:
      - "It's not brain science"
      - "It's not rocket surgery"
    
    ...and recombine them to create the malaphor, "It's not rocket surgery."
    
    This Python program generates malaphors scraped from Wikipedia's list of English idioms.`,
    video: '',
    gallery: ['malaphor.png', 'malaphor_2.png', 'malaphor_3.png'],
    githubLink: 'https://github.com/rachel-meadows/malaphor',
    siteLink: '',
  },
  {
    name: 'pixel-picasso',
    active: true,
    image: 'pixel-picasso-1.png',
    title: 'Pixel Picasso',
    subtitle:
      'Create pixel artworks with a variety of tools, then add them to a public gallery.',
    technologies: [
      'React',
      'JavaScript',
      'Express',
      'SQL',
      'Node',
      'HTML',
      'CSS',
    ],
    description: `Anybody can be an artist using this fun tool. 
    
    Pixel Picasso lets users 'paint' a pixelated picture in the style of an Etch-A-Sketch, then share it in a collaborative gallery.

    This project began as a one-day hackathon, where I worked with four other students to plan and build a working MVP in less than 24 hours. I was the frontend lead, and was responsible for the visual designs and much of the frontend logic in the React components.

    Since then, I have extended the project beyond MVP by adding several new features. Users can now clear the grid, change the size of the grid, and switch between painting with an cumulative or solid stroke.`,
    video: '',
    gallery: [
      'pixel-picasso-1.png',
      'pixel-picasso-2.png',
      'pixel-picasso-3.png',
    ],
    githubLink: 'https://github.com/rachel-meadows/pixel-picasso',
    siteLink: 'https://pixel-picasso.herokuapp.com/',
  },
  {
    active: true,
    name: 'monsters',
    image: 'monster-keeper-3.png',
    title: 'Monster Keeper',
    subtitle: 'We call from an API to build teams of pixel monsters.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'REST API', 'React'],
    description: `Generate pixels monsters and build a team with Monster Keeper!

    This project started life as a one-day hackathon with four other students.

    I was the back-end lead for the project. I found it especially interesting figuring out how to call from an API without CORS support, and then how to handle the image data I received from the API (which comes in the form of a byte array, so needed to be converted to a base64 string).`,
    video: '',
    gallery: [
      'monster-keeper-1.png',
      'monster-keeper-2.png',
      'monster-keeper-3.png',
    ],
    githubLink: 'https://github.com/rachel-meadows/monster-keeper',
    siteLink: 'https://monster-keeper.herokuapp.com/',
  },
  {
    active: true,
    name: 'css-backronyms',
    image: 'css_backronyms_1.png',
    title: 'CSS Backronyms',
    subtitle:
      "These images and animations explore unconventional phrases that 'CSS' could stand for.",
    technologies: ['HTML', 'CSS'],
    description: `A 'backronym' is taking an existing acronym (like CSS) and attributing incorrect words to each letter (like 'Cheese Shrinking Showdown'). Whether it's a Cornea's Suspicious Stare, a Captivating Seal Spokesman, or a Contemporary Spider Sculpture, these CSS images are a ton of fun.
    
    I made this project to work on my CSS skills, including:
    - Positioning items
    - Clear element labelling using BEM (Block-Element-Modifier) layout, and
    - Working with SASS, a CSS preprocessor.`,
    video: '',
    gallery: [
      'css_backronyms_1.png',
      'css_backronyms_2.png',
      'css_backronyms_3.png',
    ],
    githubLink: 'https://github.com/rachel-meadows/css-backronyms',
    siteLink: '',
  },
  {
    active: true,
    name: 'would-you-rather',
    image: 'would_you_rather_1.png',
    title: 'Would you rather?',
    subtitle:
      "This project lets users see who agrees with them on 'would you rather' questions.",
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'SQL',
      'express',
      'node',
      'Handlebars',
    ],
    description: ``,
    video: '',
    gallery: [
      'would_you_rather_1.png',
      'would_you_rather_2.png',
      'would_you_rather_3.png',
    ],
    githubLink: 'https://github.com/rachel-meadows/would-you-rather',
    siteLink: 'https://would-you-rather-site.herokuapp.com',
  },
  {
    active: false,
    name: 'weather',
    image: 'weather_1.png',
    title: 'Weather app',
    subtitle: 'Check the weather anywhere in the world with this weather app.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    description: `One of my first projects, this weather app accesses a public API to find the weather anywhere in the world.
    
    By pulling from an API, the data are updated in real-time - so you can always know the forecast for the next few days!`,
    video: '',
    gallery: ['weather_1.png', 'weather_2.png', 'weather_3.png'],
    githubLink: 'https://github.com/rachel-meadows/weather',
    siteLink: 'https://rachel-meadows.github.io/weather/',
  },
]

// {
//   active: ,
//   name: '',
//   image: '.png',
//   title: '',
//   subtitle: '.',
//   technologies: [''],
//   description: ``,
//   video: '',
//   gallery: ['.png'],
//   githubLink: '',
//   siteLink: '',
// }
