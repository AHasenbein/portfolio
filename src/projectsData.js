// 1. Import the images at the top
import bowieImg from './assets/bowieForum.png';
import particlesImg from './assets/particles.png';
// import lepusImg from './assets/lepus.png'; // re-enable with Lepus Analytics
import sand from  './assets/sand.png';
import dcKickoff from './assets/dc-kickoff.png';
import dcQa from './assets/dc-qa.png';
import dcGame from './assets/dc-game.png';
import chGraph from './assets/ch-graph.png';
import chHome from './assets/ch-home.png';
import chPlan from './assets/ch-plan.png';
import chInternships from './assets/ch-internships.png';
import shSwipe from './assets/sh-swipe.png';
import shDashboard from './assets/sh-dashboard.png';
import shSwipe2 from './assets/sh-swipe2.png';
import lockedBuds from  './assets/lockedBuds.png';



const PROJECTS_DATA = [
  {
    id: 9,
    title: "DevCord",
    tech: "TypeScript, Discord.js, OpenRouter, Whisper",
    image: dcKickoff,
    images: [dcKickoff, dcQa, dcGame],
    link: "https://github.com/AHasenbein/Devcord-Multi-Agent",
    linkLabel: "View on GitHub",
    description: "1st Place, AI Agents & LLMs, Behrend Hackathon. A multi-agent AI orchestration platform: I architected specialized agents (Manager, Dev, QA, Command) with scoped roles and task handoff in strict TypeScript using Discord.js and OpenRouter, with modular model routing to swap LLMs per agent without modifying orchestration logic. It implements autonomous project kickoff, thread-based task decomposition, and persistent run/state tracking with pause/resume/cancel controls, plus voice-first Q&A via local Whisper STT/TTS in Discord voice channels."
  },
  // Lepus Analytics is temporarily hidden until the site is live again.
  // {
  //   id: 1,
  //   title: "Lepus Analytics",
  //   tech: "Python, Data Visualization, Risk Management",
  //   image: lepusImg,
  //   link: "https://lepusanalytics.com/",
  //   description: "Lepus Analytics, Founder I founded Lepus Analytics to specialize in solving highly complex problems in data science, logistics, and research. I use proprietary algorithms and cutting-edge computation to tackle these challenges. My company excels at implementing solutions and optimization via a hybrid-classical stack, specifically addressing challenging computational bottlenecks and complex risk modeling."
  // },
  {
    id: 2,
    title: "Course Horse",
    tech: "Next.js, React, TypeScript, React Flow, Gemini API, MongoDB",
    image: chGraph,
    images: [chGraph, chHome, chPlan, chInternships],
    link: "https://github.com/coursehorsehackspu/USB_C_HackPSU/tree/finals",
    linkLabel: "View on GitHub",
    description: "An AI academic-planning platform for Penn State students, built by a team of 4 at HackPSU Spring 2026. I built the prerequisite graph: a recursive builder that handles OR conditions, corequisites, cycle detection, and depth limiting, rendered as an interactive React Flow visualization with Dagre auto-layout and course nodes colored by completed, available, or locked. I also integrated the Gemini-powered \"Horsey\" AI counselor into graph building, so it can construct graph views from chat through structured actions."
  },
  {
    id: 3,
    title: "SwipeHire",
    tech: "Next.js, React, TypeScript, Tailwind CSS, Zustand, Framer Motion",
    image: shSwipe,
    images: [shSwipe, shDashboard, shSwipe2],
    link: "https://github.com/nexhacks-proj/nexhacks",
    linkLabel: "View on GitHub",
    description: "An AI recruiting platform built by a team of 4 at NexHacks 2026 at Carnegie Mellon University. It ranks candidates by matching resumes to job requirements and learns from recruiter feedback in real time. I built the frontend: the Framer Motion swipe interface, candidate cards and detail views, job creation, and the jobs-management dashboard with search and filtering. I also added the MongoDB database with a local-storage fallback, error handling, and Netlify deployment fixes. 32 of the team's 74 commits in about 3 days."
  },
  {
    id: 4,
    title: "TrueSearch",
    tech: "TypeScript, React, MongoDB, LLM Extraction, Docker",
    image: null,
    link: "https://github.com/AHasenbein/TrueSearch",
    linkLabel: "View on GitHub",
    description: "A research pipeline that ingests sargassum and pyrolysis literature (500+ papers processed) through the Semantic Scholar and Crossref APIs, HTML scraping, and GROBID PDF parsing. An LLM (Gemini, with OpenRouter fallback on rate limits) extracts metrics into strict JSON with a verbatim source snippet and a confidence score for each one. A human validation UI lets me approve, edit, or reject results, and a staged search pipeline streams live progress over server-sent events. Prices are normalized to USD per metric ton and aggregated into weighted averages. Built for Nori, the Hult Prize venture where I am co-founder and CTO."
  },
  {
    id: 5,
    title: "Particles Interlinked",
    tech: "Next.js, React, Three.js, Node.js",
    image: particlesImg,
    link: "https://particlesv1.netlify.app/",
    description: "Developed a complex real-time particle simulation system using Three.js with WebGL rendering, applying physics concepts such as particle interactions, gravitational attraction, and collision detection implemented efficiently in JavaScript. Integrated performance monitoring and leveraged WebGL for hardware-accelerated graphics rendering, increasing FPS by ~22% consistently. Migrated from a 2D to a 3D library, improving visual dynamism and rendering speed over the prior implementation."
  },
  {
    id: 6,
    title: "BowieForum",
    tech: "React, MongoDB, Node.js",
    // 2. Use the imported variable, not a string
    image: bowieImg,
    link: "https://bowieforum.com/",
    description: "Designed and deployed a full-stack student forum serving 150+ active users. Added compound MongoDB indexes for thread and feed queries, cutting average response time from roughly 120 ms to 30 ms under concurrent traffic, and used pagination to load posts efficiently. Built a responsive React frontend and a RESTful Node.js backend, and deployed it with a DevOps plan."
  },
  // {
  //   id: 7,
  //   title: "Locked Buds",
  //   tech: "Data Science, API Integration, Algorithms",
  //   image: lockedBuds,
  //   link: "https://lockedbuds.com/",
  //   description: "I designed and developed Locked Buds as a dynamic academic management application. The system allows users to input their grades and schedule, which is then processed to provide a comprehensive, point-based overview of their academic standing. It tracks essential metrics like percent completion of necessary tasks and overall schedule adherence. The final academic score is calculated using a proprietary algorithm that synthesizes all user-provided data into a single, actionable performance metric."
  // },
  // {
  //   id: 8,
  //   title: "Sandwhich Hero",
  //   tech: "javascript, game design, React",
  //   image: sand,
  //   link: "https://sandhero.netlify.app/",
  //   description: "Based on experience..."
  // }
];

export default PROJECTS_DATA;