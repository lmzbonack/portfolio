import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Luc Zbonack | full stack developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Luc Zbonack is a full stack developer with deep experience working on applications in the financial and insurance industries',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Luc Zbonack',
  subtitle: "I'm a full stack developer",
  cta: 'More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a passionate senior software engineer with experience working on both large and small projects in fast paced environments. Currently I am working at Equips building and scaling a platform that makes managing financial and healthcare equipment easy.",
  paragraphTwo:
    'I have experience working with several different languages, frameworks, and libraries, I spend most of my time in the JavaScript/TypeScript and Python ecosystem. However, I am always learning new things and growing my skillset. For example right now I am having a great time learning Elixir, Phoenix, and Absinthe.',
  paragraphThree:
    'When I am not coding you will find me hanging out with my dog, reading, or playing video games.',
  resume: 'https://drive.google.com/file/d/1yYd6W588gWVGRP2dwWyO8ozw6W_tFiMV/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'RecipeBox.jpg',
    title: 'Recipe Box',
    info: 'I really enjoy cooking and meal prepping so I wrote a tool that allows users to aggregate all their favorite recipes in one place, build shopping lists, and share recipes with their friends.',
    info2: 'The goal was to create a one-stop shop to make cooking fun and easy!',
    url: 'https://recipebox.dev/recipes',
    repo: 'https://github.com/lmzbonack/recipebox-API', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Absinthe.jpg',
    title: 'Absinthe Demo',
    info: 'This is a small GraphQL API that I wrote using Elixir, Phoenix, and Absinthe. It is backed by Postgres and secured with a JWT strategy.',
    info2: 'The goal here was to learn more about Elixir and GraphQL in that ecosystem.',
    url: 'https://powderblue-nippy-cormorant.gigalixirapp.com/graphiql',
    repo: 'https://github.com/lmzbonack/Absinthe-Demo', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  btn: "Let's chat",
  email: 'lmzbonack@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/luc-zbonack-524461a4/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lmzbonack/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
