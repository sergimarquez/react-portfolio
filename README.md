# React Portfolio

Modern portfolio website built with React 17, featuring responsive design, dark/light theme switching, and performance optimization.

**Live Site**: [sergimarquez.com](https://sergimarquez.com)

## Features

- Dark/Light theme switching with CSS variables
- Fully responsive design with mobile-first approach
- Performance optimized with lazy loading and efficient re-renders
- Accessible with semantic HTML and proper ARIA labels
- SEO optimized with meta tags and structured data
- Live developer experience timer with real-time updates

## Tech Stack

- **React 17** - Component-based architecture with hooks
- **JavaScript ES6+** - Modern syntax, destructuring, arrow functions
- **CSS3** - Custom properties, flexbox, grid, animations
- **Material-UI Icons** - SVG icon components
- **React Context** - State management for theme switching
- **ESLint + Prettier** - Code quality and formatting
- **Create React App** - Build toolchain and dev server

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── About/           # About section with social links
│   ├── Contact/         # Contact information
│   ├── DeveloperTime/   # Live coding experience timer
│   ├── Footer/          # Site footer
│   ├── Header/          # Navigation and branding
│   ├── Navbar/          # Navigation menu
│   ├── Now/             # Current activities section
│   ├── Projects/        # Project showcase
│   ├── ProjectContainer/# Individual project cards
│   ├── ScrollToTop/     # Scroll to top functionality
│   └── Skills/          # Skills categorization
├── contexts/            # React context providers
│   └── theme.js         # Theme management
├── hooks/               # Custom React hooks
│   └── useConsoleEasterEgg.js # Developer console message
├── assets/              # Images and static files
├── portfolio.js         # Portfolio data and content
├── App.js              # Main application component
└── index.js            # Application entry point
```

## Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
git clone https://github.com/sergimarquez/react-portfolio.git
cd react-portfolio
npm install
npm start
```

### Build

```bash
npm run build  # Production build
npm run deploy # Deploy to GitHub Pages
```

## Architecture

### Data Structure
All content is centralized in `src/portfolio.js` for easy maintenance.

### Theme Management
- CSS custom properties for consistent theming
- React Context for theme state management
- Automatic system preference detection

### Performance
- Component-level CSS modules
- Efficient re-rendering with React hooks
- Optimized bundle size with Create React App

## Deployment

### Netlify
```bash
# Build command: npm run build
# Publish directory: build
```

### GitHub Pages
```bash
npm run deploy
```

## License

MIT
