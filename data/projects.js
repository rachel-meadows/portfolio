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
      'HTML / CSS',
      'CSS',
      'Express',
      'Node',
    ],
    description: `SERV. was my final project in Enspiral Dev Academy. I worked with a team of four to take this webapp from idea to reality in just 6 days.
    
    As the backend lead, I was responsible for the database functions, routes, API functions and some of the business logic. The project also required me to communicate with my teammates and manage the challenges of working under intense time pressure. 

    In the finished MVP, customers post jobs, then service businesses send quotes to bid on these jobs. Customers can check the business details and accept or reject a quote. When the job is done, the business marks it as completed, and the customer can review their work and pay for the job using Stripe.`,
    video: '/images/projects/serv.mp4',
    gallery: ['serv-1.png', 'serv-2.png', 'serv-3.png'],
    githubLink: 'https://github.com/rachel-meadows/serv',
    siteLink: 'https://serv-site.herokuapp.com/',
  },
  {
    active: false,
    name: 'fridge-magnets',
    image: 'etch_a_sketch_1.png',
    title: 'Fridge with friends',
    subtitle:
      'Finally, a virtual space to creatively place fridge magnets with your friends!',
    technologies: ['JavaScript', 'HTML / CSS', 'React'],
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
    technologies: ['Python', 'Flask', 'Web scraping', 'HTML / CSS', 'SQL'],
    description: `A 'malaphor' is when two figures of speech are merged, usually producing a nonsensical result. For example, we can combine the phrases, "It's not brain science" and "It's not rocket surgery" to create the malaphor, "It's not rocket surgery."
    
    For this project, I build a web scraper to retrieve Wikipedia's list of (over 10,000) English idioms and proverbs and insert them into a SQLite database. The program finds pairs of phrases that can be combined 'cleanly', and evaluates them on various metrics to see if they are likely to make a good malaphor.
    
    The program was originally intended to be a command-line tool, and that version has extra features such as an optional profanity filter, and the ability to choose a starting idioms.
    
    In the future, I plan to a) use better algorithms to increase speed, b) support user settings on the front-end, and c) use the "example" data to create more semantically-appropriate malaphors.
    
    [Note: This site hasn't been deployed yet, as I would need to convert a SQLite database to PostgreSQL at a larger scale than I have for other projects. Feel free to get in touch if you'd like a demonstration.]`,
    video: '',
    gallery: ['malaphor.png', 'malaphor_2.png', 'malaphor_3.png'],
    githubLink: 'https://github.com/rachel-meadows/malaphor',
    // Heroku link when I've converted db to Postgres:
    // siteLink: 'https://malaphor-generator.herokuapp.com',
    siteLink: '',
  },
  {
    active: true,
    name: 'synonym-roll',
    image: 'synonym_roll.jpg',
    title: 'Synonym Roll',
    subtitle:
      'Users enter snippets of text, which are replaced with synonyms to make the text as alliterative as possible.',
    technologies: ['JavaScript', 'HTML / CSS', 'React', 'express', 'node'],
    description: `Is your writing readable, but bland? Are you one literary device short of finishing your short story? Would you like your speeches to be more entertaining... and much, much more incoherent? If you answered 'yes' to any of those questions, Synonym Roll is for you!
    
    Synonym Roll lets users input a short snippet of text, then makes calls to the Merriam-Webster's Collegiate® Thesaurus API to find all the synonyms for each word in that snippet. A few hashmaps later, it spits out alliterative text with a similar sentiment — though sometimes with hilarious misinterpretations.
    
    For example, here's the top paragraph rewritten by Synonym Roll (punctuation added):

    "Is your line legible, but light? Live you one learned leaning low of lapsing your low lie? Leave you lean your lingos to be likewise entertaining... and much much likewise loose? If you answered 'yes' to any of those questions, Synonym Lumber is for you!"`,
    video: '',
    gallery: ['synonym_roll_1.png', 'synonym_roll_2.png', 'synonym_roll_3.png'],
    githubLink: 'https://github.com/rachel-meadows/synonym-roll',
    siteLink: 'http://synonym-roll.herokuapp.com/',
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
      'HTML / CSS',
      'CSS',
    ],
    description: `Anybody can be an artist using this fun tool. 
    
    Pixel Picasso lets users 'paint' a pixelated picture in the style of an Etch-A-Sketch, then share it in a collaborative gallery.

    This project began as a one-day hackathon, where I worked with four other students to plan and build a working MVP in less than 24 hours. I was the frontend lead, and was responsible for the visual designs and much of the frontend logic in the React components.

    Since then, I have extended the project beyond MVP by adding several new features. Users can now clear the grid, change the size of the grid, and switch between painting with a cumulative or solid stroke.`,
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
    technologies: ['JavaScript', 'HTML / CSS', 'REST API', 'React'],
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
    name: 'css-incorrect-acronyms',
    image: 'css_backronyms_1.png',
    title: 'CSS Incorrect Acronyms',
    subtitle:
      "These images and animations explore unconventional phrases that 'CSS' could stand for.",
    technologies: ['HTML / CSS', 'CSS'],
    description: `Whether it's a Cornea's Suspicious Stare, a Contemporary Spider Sculpture, or a Captivating Seal Spokesman, these CSS-only images are a ton of fun.
    
    I made this project to work on my CSS skills, such as positioning items and clear element labelling. By deliberately introducing complexity, this project has helped me identify potential issues and best practices to learn.
    
    For example, I initially worked on the images in isolation before adding them to one file, resulting in a seal with a spider's 'eyes' class. The horrifying little critter it created was my prompt to start using BEM (Block-Element-Modifier) layout.

    I plan to keep adding to this project so I can challenge myself to maintain code readability on more complex projects, and to work with technologies such as HTML Canvas and SASS.`,
    video: '',
    gallery: [
      'css_backronyms_1.png',
      // 'css_backronyms_2.png',
      'css_backronyms_3.png',
      'horrifying.gif',
    ],
    githubLink: 'https://github.com/rachel-meadows/css-fake-acronyms/',
    siteLink: 'https://rachel-meadows.github.io/css-fake-acronyms/',
  },
  {
    active: false,
    name: 'would-you-rather',
    image: 'would_you_rather_1.png',
    title: 'Would you rather?',
    subtitle:
      "This project lets users see who agrees with them on 'would you rather' questions.",
    technologies: [
      'JavaScript',
      'HTML / CSS',
      'CSS',
      'SQL',
      'express',
      'node',
      'Handlebars',
    ],
    description: `Would you rather have a lightsaber or a flaming sword? You know your answer to that... but how many people agree with you?
    
    This site gives you the percentage of people who agree with you on 'would you rather' questions - and also shows you their names, so you can share it with your friends and see who thinks the same way.
    
    As one of my earlier project, I have yet to add authentication and authorisation to this site, but it's a fun proof-of-concept for a conversation starter game.`,
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
    technologies: ['JavaScript', 'HTML / CSS', 'REST API'],
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
