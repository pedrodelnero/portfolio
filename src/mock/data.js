import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: `Pedro's Portfolio`,
  lang: 'EN',
  description: 'Web Dev Portfolio',
};

// HERO DATA
export const heroData = {
  title: `Hi, I'm`,
  name: 'Pedro Del Nero Pagán',
  subtitle: 'Currently looking for entry-level backend developer position',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I graduated with a Mechanical Engineering Technology degree, but most of my professional life has been in sales. I co-owned a succesful retail store-front where I learned leadership, customer service, sales, management, and how to be a team player. These skills have helped me throughout my career.',
  paragraphTwo:
    'I have focused this year learning Javascript, its frameworks, and libraries (more specifially ReactJS and NodeJS). While working on projects I have been able to identify where the issues are as well as opportunites to make the code more efficient.',
  paragraphThree:
    'I know that my background and aptitude will help me overcome any task or challenge given to me.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'CMSscreenshot.png',
    title: 'Content Management System App',
    info:
      'I wanted to create a WordPress clone app where one can find a "one stop shop" to build their own websites. While it still is a work in progress, I am very happy with how it turned out for having no professional web developing experience.',
    info2:
      'I used ReactJS for front-end "admin", NextJS for front-end "finished site," NodeJS for back-end, MySQL (with Sequelize) for the databse, and MaterialUI.',
    url: '',
    repo: 'https://github.com/pedrodelnero/cms',
  },
  {
    id: nanoid(),
    img: 'review_site.png',
    title: 'Product Review App',
    info:
      'For my first solo project I pictured a combination of Yelp and Reddit where one can post a review about any product and others can comment on it.',
    info2:
      'I used ReactJS (with Redux) for the front-end, NodeJS for the back-end, MongoDB (with Mongoose) for the databse, and MaterialUI.',
    url: 'https://delnero-review-site.netlify.app/',
    repo: 'https://github.com/pedrodelnero/review-site',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'pedr.delnero@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pdelnero/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/pedrodelnero',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
