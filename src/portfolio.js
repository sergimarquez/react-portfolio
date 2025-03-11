import portfolioImage from './assets/images/retro-portfolio.png';
import rentalImage from './assets/images/rental-app.png';
import aiFlashcardImage from './assets/images/ai-app.png';

const header = {
  homepage: 'https://sergimarquez.com',
  title: 'Sm.',
};

const about = {
  name: 'Sergi Marquez',
  role: 'Full Stack Developer',
  description:
    'I love building websites and web apps. I focus on clean code, simplicity, and smooth user experiences.',
  social: {
    linkedin: 'https://linkedin.com/sergimarquez',
    github: 'https://github.com/sergimarquez',
  },
};

const projects = [
  {
    name: 'AI Game',
    description: 'An AI-powered question game for frontend developers. Generates coding questions dynamically and provides intelligent feedback using OpenAI.',
    stack: ['Next.js', 'Tailwind CSS', 'OpenAI API'],
    type: 'Full Stack',
    sourceCode: 'https://github.com/sergimarquez/ai-flashcard-game',
    livePreview: 'https://frontend-quest.netlify.app/',
    image: aiFlashcardImage,
  },
  {
    name: 'Portfolio Website',
    description:
      'A custom-built portfolio with a retro aesthetic, made with HTML, CSS, and JavaScript. Features early projects that showcase my developer growth.',
    stack: ['HTML', 'CSS', 'JavaScript', 'BEM'],
    type: 'Frontend',
    sourceCode: 'https://github.com/sergimarquez/sergimarquez',
    livePreview: 'https://sergimarquez.dev/',
    image: portfolioImage,
  },
  {
    name: 'Rental App',
    description: 'A single-page rental app with role-based authentication, CRUD functionality, and a RESTful backend.',
    stack: ['React', 'Firebase', 'Bootstrap', 'Google Maps API', 'Jest'],
    type: 'Full Stack',
    sourceCode: 'https://github.com/sergimarquez/rental-app',
    livePreview: 'https://luxury-homes-41df8.web.app/',
    image: rentalImage,
  },  
];


const skills = {
  languages: ['JavaScript', 'TypeScript', 'PHP'],
  frontend: [
    'React',
    'Next.js',
    'SASS',
    'Tailwind CSS',
    'Webpack',
    'Performance Optimization',
    'SEO',
  ],
  backend: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'MySQL'],
  cms: ['WordPress (Custom Development)', 'Shopify', 'Webflow'],
  testing: ['Cypress', 'Jest'],
};

const now = [
  '📱 Building a React Native mobile app with AI integration.',
];

const contact = {
  email: 'hello@sergimarquez.com',
};

export { header, about, projects, skills, now, contact };
