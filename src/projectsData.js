// 1. Import the images at the top
import bowieImg from './assets/bowieForum.png';
import particlesImg from './assets/particles.png';
import lepusImg from './assets/lepus.png';
import sand from  './assets/sand.png';
import lockedBuds from  './assets/lockedBuds.png';



const PROJECTS_DATA = [
  {
    id: 1,
    title: "Lepus Analytics",
    tech: "Python, Data Visualization, Risk Management",
    image: lepusImg,
    link: "https://lepusanalytics.com/",
    description: "Based on experience..."
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
    title: "Locked Buds",
    tech: "Data Science, API Integration, Algorithms",
    image: lockedBuds,
    link: "https://lockedbuds.com/",
    description: "Based on experience..."
  },
  {
    id: 4,
    title: "Bowie Forum",
    tech: "React, MongoDB, Modern Deployment",
    // 2. Use the imported variable, not a string
    image: bowieImg, 
    link: "https://bowieforum.com/",
    description: "Designed and deployed..."
  },


  // {
  //   id: 4,
  //   title: "Sandwhich Hero",
  //   tech: "javascript, game design, React",
  //   image: sand,
  //   link: "https://sandhero.netlify.app/",
  //   description: "Based on experience..."
  // }
];

export default PROJECTS_DATA;