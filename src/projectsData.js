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
    description: "Lepus Analytics, Founder I founded Lepus Analytics to specialize in solving highly complex problems in data science, logistics, and research. I use proprietary algorithms and cutting-edge computation to tackle these challenges. My company excels at implementing solutions and optimization via a hybrid-classical stack, specifically addressing challenging computational bottlenecks and complex risk modeling."
  },
  {
    id: 2,
    title: "Particles Interlinked",
    tech: "Next.js, React, Three.js, Node.js",
    image: particlesImg,
    link: "https://particlesv1.netlify.app/",
    description: "Particlesv1 (Particles Interlinked) I created Particles Interlinked, an interactive web simulation. This project allows users to visualize and manipulate complex particle systems, demonstrating my capabilities in front-end development and computational visualization."
  },
  {
    id: 3,
    title: "Locked Buds",
    tech: "Data Science, API Integration, Algorithms",
    image: lockedBuds,
    link: "https://lockedbuds.com/",
    description: "I designed and developed Locked Buds as a dynamic academic management application. The system allows users to input their grades and schedule, which is then processed to provide a comprehensive, point-based overview of their academic standing. It tracks essential metrics like percent completion of necessary tasks and overall schedule adherence. The final academic score is calculated using a proprietary algorithm that synthesizes all user-provided data into a single, actionable performance metric."
  },
  {
    id: 4,
    title: "Bowie Forum",
    tech: "React, MongoDB, Modern Deployment",
    // 2. Use the imported variable, not a string
    image: bowieImg, 
    link: "https://bowieforum.com/",
    description: "Bowie Forum, Lead Developer and Database Manager As the Lead Developer and Database Manager for Bowie Forum, I designed and deployed a complete student forum platform. I was responsible for the full stack, managing both the frontend UI and the backend infrastructure, which I built using React, MongoDB, and modern deployment tools to ensure scalability and reliability. I successfully increased user activity on the site by an astounding 3000% in just three months."
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