// 1. Import the images at the top
import bowieImg from './assets/bowieForum.png';
import particlesImg from './assets/particles.png';
import lepusImg from './assets/lepus.png';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Bowie Forum",
    tech: "React, MongoDB, Modern Deployment",
    // 2. Use the imported variable, not a string
    image: bowieImg, 
    link: "https://bowieforum.com/",
    description: "Designed and deployed..."
  },
  {
    id: 2,
    title: "Particles Interlinked",
    tech: "Next.js, React, Three.js, Node.js",
    image: particlesImg,
    link: "https://particlesv1.netlify.app/",
    description: "Developed an interactive..."
  },
  {
    id: 3,
    title: "Lepus Analytics",
    tech: "Python, Data Visualization, Risk Management",
    image: lepusImg,
    link: "https://lepusanalytics.com/",
    description: "Based on experience..."
  }
];

export default PROJECTS_DATA;