module.exports = {
  siteTitle: 'Debjyoti Ghosh | Software Engineer',
  siteDescription:
    'Debjyoti Ghosh is a s software engineer by profession, currently at Standard Chartered GBS. Building scaling, and empowering software product innovation through code and collaboration',
  siteKeywords:
    'Debjyoti Ghosh, Debjyoti, Ghosh, debjyotighosh, software engineer, full-stack engineer, devops, community building, product, management, javascript, golang, C++, IIT Kharagpur, Kolkata, India',
  siteUrl: 'https://nemani.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-164593019-1',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Debjyoti Ghosh',
  location: 'Kolkata, India',
  email: 'djpool007@gmail.com',
  github: 'https://github.com/is-this-echo',
  twitterHandle: '@is_this_echo',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/is-this-echo',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/debjyoti-ghosh-a89b45199/',
    },

    {
      name: 'Twitter',
      url: 'https://twitter.com/is_this_echo',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
  ],

  navHeight: 100,
  colors: {
    green: '#e15729',
    navy: '#17113d',
    darkNavy: '#201a4b',
  },

  srConfig: (delay = 20) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 100,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
