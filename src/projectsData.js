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
    description: "Developed a real-time particle simulation system using Three.js with WebGL rendering, applying physics concepts such as particle interactions, gravitational attraction, and collision detection implemented efficiently in JavaScript. Integrated performance monitoring and leveraged WebGL for hardware-accelerated graphics, increasing FPS by 22% consistently. Switched from a 2D to a 3D library to make graphics more dynamic while optimizing for faster rendering than the 2D approach."
  },
  {
    id: 3,
    title: "BowieForum",
    tech: "React, MongoDB, SQL, Node.js",
    // 2. Use the imported variable, not a string
    image: bowieImg, 
    link: "https://bowieforum.com/",
    description: "Designed and deployed a student forum platform with 150+ users. Utilized optimized SQL queries to reduce server load and pagination to efficiently load posts, cutting strain on both client and server while keeping low latency. Developed the React frontend, Node.js backend, and integrated a SQL database hosted in MongoDB."
  },
  // {
  //   id: 4,
  //   title: "Locked Buds",
  //   tech: "Data Science, API Integration, Algorithms",
  //   image: lockedBuds,
  //   link: "https://lockedbuds.com/",
  //   description: "I designed and developed Locked Buds as a dynamic academic management application. The system allows users to input their grades and schedule, which is then processed to provide a comprehensive, point-based overview of their academic standing. It tracks essential metrics like percent completion of necessary tasks and overall schedule adherence. The final academic score is calculated using a proprietary algorithm that synthesizes all user-provided data into a single, actionable performance metric."
  // },
  


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