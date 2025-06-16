import threegoodImage from './assets/images/3good.png';
import siteblockrImage from './assets/images/siteblockr.png';
import portfolioImage from './assets/images/retro-portfolio.png';

const header = {
  homepage: 'https://sergimarquez.com',
  title: 'Sm.',
};

const about = {
  name: 'Sergi Marquez',
  description:
    'I love building thoughtful websites and web apps. I focus on clean code, simplicity, and meaningful user experiences.',
  social: {
    linkedin: 'https://www.linkedin.com/in/sergi-marquez/',
    github: 'https://github.com/sergimarquez',
  },
};

const projects = [
  {
    name: '3Good',
    description: 'Daily gratitude practice app — simple, privacy-first, helping users reflect on three good things each day.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    type: 'Web App',
    sourceCode: 'https://github.com/sergimarquez/three-things',
    livePreview: 'https://3good.app/',
    image: threegoodImage,
  },
  {
    name: 'SiteBlockr',
    description: 'Chrome extension for blocking distracting websites with real-time controls and privacy-focused storage.',
    stack: ['TypeScript', 'React', 'Chrome APIs', 'Tailwind CSS'],
    type: 'Browser Extension',
    sourceCode: 'https://github.com/sergimarquez/site-blockr',
    livePreview: 'https://chrome.google.com/webstore/detail/siteblockr',
    image: siteblockrImage,
  },
  {
    name: 'Portfolio Website',
    description: 'Custom-built portfolio with retro aesthetic, showcasing early projects and my growth as a developer.',
    stack: ['HTML', 'CSS', 'JavaScript', 'BEM'],
    type: 'Frontend',
    sourceCode: 'https://github.com/sergimarquez/sergimarquez',
    livePreview: 'https://sergimarquez.dev/',
    image: portfolioImage,
  },  
];


const skills = {
  'frontend frameworks': ['React', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'PHP'],
  'styling & ui': ['CSS', 'SASS', 'Responsive Design', 'UI/UX Design', 'Figma'],
  'backend & data': ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'MySQL', 'AI Integration'],
  'tools & optimization': ['Git', 'Webpack', 'Jest', 'Cypress', 'WordPress Development', 'Web Performance'],
};

const now = [
  'Building a personal finance tracker in React Native, deepening my knowledge developing iOS apps.',
  'Rebuilding my side projects with TypeScript and adding new features for better user experience.',
];

const contact = {
  email: 'hello@sergimarquez.com',
};

export { header, about, projects, skills, now, contact };
