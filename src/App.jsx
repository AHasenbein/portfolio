import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  X,
  Terminal,
  Code2,
  Cpu,
  Database,
  Layout,
  GraduationCap,
  FileText, 
  Download,
  // New Imports for Research Section
  Brain,
  Network,
  Zap,
  LineChart,
  Layers,
  Microscope
} from 'lucide-react';

// Assuming ParticleBackground is correctly implemented and works
import ParticleBackground from './ParticleBackground';

// --- IMPORT THE PROJECTS DATA ---
import PROJECTS_DATA from './projectsData';

// ==========================================
// 1. PUT YOUR RESUME FILES HERE
// ==========================================
import resumeImg from './assets/resumeImg.png'; // <--- UNCOMMENT THIS AFTER ADDING FILE
import resumePDF from './assets/HasenbeinResume.pdf'; // <--- UNCOMMENT THIS AFTER ADDING FILE

import researchGraph from './assets/aiGraphs.png';
import researchDiagram from './assets/aiScript.jpg';

// FOR NOW, I am using placeholders so the code doesn't crash when you copy-paste.
// REPLACE these variables with the imports above when you are ready.
const RESUME_PREVIEW_IMAGE = resumeImg; 
const RESUME_PDF_LINK = resumePDF; 

// --- RESUME DATA POPULATION ---
const PORTFOLIO_DATA = {
  name: "ALEXANDER HASENBEIN",
  title: "Full Stack Developer & Data Scientist",
  about: "I am a dual-major Honors student at Penn State Behrend (Computer Science & Mathematics) and a Division III athlete. I am well versed in multiple programming languages, frameworks, data analytics, and building full scale applications. My goal is to change the world and ultimately creating something that is uniquely mine.",

  // Categorized skills from your resume
  skills: [
    { category: "Frontend", icon: <Layout size={20} />, items: "React, Next.js, Three.js, HTML/CSS, Tailwind" },
    { category: "Backend", icon: <Code2 size={20} />, items: "Node.js, Java, C++, C#, Python" },
    { category: "Data & DB", icon: <Database size={20} />, items: "MongoDB, MySQL, Web Scraping, Analytics" },
    { category: "Tools", icon: <Cpu size={20} />, items: "Git, PyQt6, Deployment Pipelines" },
  ],

  email: "hasenbeinalex@gmail.com",
  linkedin: "https://www.linkedin.com/in/alex-hasenbein-287b53325/",
  phone: "(412) 353-9375" 
};

// --- COMPONENT: STICKY NAVBAR ---
const StickyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tight text-gray-900">
          TRY. FAIL. INNOVATE<span className="text-indigo-600">.</span>
        </span>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#research" className="hover:text-indigo-600 transition-colors">Research</a>
          <a href="#resume" className="hover:text-indigo-600 transition-colors">Resume</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const ResearchSection = () => {
    
    // Helper Component for the Images to maintain Aspect Ratio and fix cropping
    const AspectRatioImage = ({ src, alt, title, description, icon: Icon }) => {
        return (
            <div className="relative group rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-800 shadow-xl transition-all duration-300 hover:border-indigo-500">
                
                {/* Fixed Top Title Bar */}
                <div className="absolute top-0 left-0 right-0 z-20 px-5 py-3 bg-slate-900/90 border-b border-slate-700 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Icon size={20} className="text-indigo-400" />
                        <span className="text-sm font-extrabold tracking-widest text-white uppercase">{title}</span>
                    </div>
                </div>

                {/* Image Container that forces the aspect ratio and pushes the image down */}
                <div 
                    className="w-full relative pt-16" /* Added pt-16 (or higher, e.g., pt-20) to push the image below the title bar */
                    style={{ paddingBottom: '75%' /* Adjust this percentage to match your image's ideal aspect ratio */ }}
                >
                    <img 
                        src={src} 
                        alt={alt} 
                        // Key fix: absolute inset-0, h-full, w-full, object-contain
                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
                    />
                </div>

                {/* Permanent Bottom Description */}
                <div className="p-5 border-t border-slate-700 bg-slate-900/80">
                    <p className="text-sm text-slate-400">{description}</p>
                </div>
            </div>
        );
    };

    return (
        <section id="research" className="py-32 bg-slate-900 text-slate-100 relative overflow-hidden border-t border-slate-800">
            
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 w-[900px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] -translate-x-1/2 -mt-24 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                
                {/* 🧪 Top Section: Header & Intro */}
                <div className="flex flex-col md:flex-row gap-20 mb-20 items-start">
                    <div className="flex-1 max-w-lg">
                        <div className="flex items-center gap-3 text-indigo-400 mb-4">
                            <Microscope size={24} />
                            <span className="font-bold tracking-widest text-sm uppercase">Behrend Honors Research</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                            Hyperoptimization of AI-Based <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                                Quadratic Equation Predictors
                            </span>
                        </h2>
                    </div>
                    <div className="flex-1 pt-4">
                        <div className="prose prose-invert prose-lg text-slate-400">
                            <p className="text-xl">
                                This project explored how to hyper-optimize artificial intelligence-based quadratic predictors to achieve faster and more stable solutions to nonlinear mathematical problems. Traditional iterative methods can be computationally expensive; by integrating optimization processes directly with custom model architectures, I successfully reduced inference latency while maintaining high-precision roots.
                            </p>
                            <p className="text-lg border-l-4 border-indigo-500 pl-6 italic text-slate-500 mt-6">
                                Pushing the limits of precision in real-time nonlinear computation through custom neural architecture search and algorithmic tuning.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 📈 Middle Section: Visual Data (Images now fixed) */}
                <div className="grid lg:grid-cols-2 gap-10 mb-20">
                    
                    <AspectRatioImage
                        src={researchDiagram} 
                        alt="Model Topology" 
                        title="NETWORK ARCHITECTURE"
                        description="Visualizing the model structure and neuron repersentation."
                        icon={Layers}
                    />
                    
                    <AspectRatioImage
                        src={researchGraph} 
                        alt="Optimization Graph" 
                        title="PERFORMANCE ANALYSIS"
                        description="Convergence rates and loss reduction over training epochs."
                        icon={LineChart}
                    />

                </div>

                {/* ⚙️ Bottom Section: Technical Detail Cards (Grid) */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Card 1 */}
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-indigo-500 transition-all duration-300 group">
                        <Network className="text-indigo-400 mb-4 group-hover:scale-[1.05] transition-transform" size={32} />
                        <h4 className="font-bold text-white mb-3 text-xl">Model Structures</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Evaluated distinct ANN topologies, aggressively varying node density and layer depth to identify the optimal configuration for quadratic convergence.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-indigo-500 transition-all duration-300 group">
                        <Database className="text-indigo-400 mb-4 group-hover:scale-[1.05] transition-transform" size={32} />
                        <h4 className="font-bold text-white mb-3 text-xl">Training Data</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Generated massive synthetic datasets of coefficients (a, b, c) paired with ground-truth roots, specifically targeting edge cases and complex roots to ensure robust generalization.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-indigo-500 transition-all duration-300 group">
                        <Zap className="text-indigo-400 mb-4 group-hover:scale-[1.05] transition-transform" size={32} />
                        <h4 className="font-bold text-white mb-3 text-xl">Hyperoptimization</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Systematic tuning of Learning Rates, Batch Sizes, and Dropout rates to prevent overfitting while maximizing the speed of the predictive engine.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-indigo-500 transition-all duration-300 group">
                        <LineChart className="text-indigo-400 mb-4 group-hover:scale-[1.05] transition-transform" size={32} />
                        <h4 className="font-bold text-white mb-3 text-xl">Outcome</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Created a highly stable model capable of real-time predictions, outperforming standard iterative baselines in specific high-load scenarios.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

// --- COMPONENT: RESUME SECTION ---
const ResumeSection = () => {
  return (
    <section id="resume" className="py-28 px-6 bg-gray-50 relative overflow-hidden border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 mb-2">
                <FileText size={24} />
                <span className="font-extrabold tracking-wider text-sm uppercase">Professional Experience</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">My Resume</h3>
            <p className="text-gray-600 max-w-xl text-lg">
              A one page condensed version of me. 
            </p>
          </div>
          
          {/* Download Button */}
          <a 
            href={RESUME_PDF_LINK} 
            download="Alexander_Hasenbein_Resume.pdf"
            className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1 group font-medium"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Resume Preview Container */}
        <div className="relative group flex justify-center">
          {/* Decorative backdrop glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-transparent rounded-3xl -m-4 blur-xl opacity-50"></div>
          
          {/* The Resume "Paper" */}
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden ring-1 ring-gray-900/5 transform transition-transform duration-500 group-hover:scale-[1.01]">
            {/* Top Bar (Like a browser or document viewer) */}
            <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500/20"></div>
              </div>
              <div className="text-xs text-gray-400 font-mono flex items-center gap-2 opacity-70">
                <FileText size={12} /> Alexander_Hasenbein_Resume.pdf (Preview)
              </div>
              <div className="w-8"></div> {/* Spacer to center text */}
            </div>

            {/* The Image itself */}
            <div className="relative bg-gray-50 overflow-hidden">
                <img 
                  src={RESUME_PREVIEW_IMAGE} 
                  alt="Alexander Hasenbein Resume" 
                  className="w-full h-auto block hover:opacity-95 transition-opacity"
                />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- COMPONENT: PROJECT WINDOW MODAL ---
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm" onClick={onClose}>
      {/* Browser Window Container */}
      <div
        className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Browser Header */}
        <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 cursor-pointer" onClick={onClose}></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="bg-white px-3 py-1 rounded-md text-xs text-gray-500 border border-gray-200 flex-1 mx-6 text-center font-mono truncate">
            localhost:3000/projects/{project.title.toLowerCase().replace(/\s/g, '-')}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={18} />
          </button>
        </div>

        {/* Browser Content Area */}
        <div className="flex flex-col md:flex-row max-h-[80vh] md:max-h-none">
          {/* Image Side */}
          <div className="w-full md:w-2/3 bg-gray-50 border-r border-gray-200 relative group overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Details Side */}
          <div className="w-full md:w-1/3 p-6 bg-white flex flex-col overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.split(',').map((t, i) => (
                <span key={i} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-md border border-indigo-100">
                  {t.trim()}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {project.description}
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-700 transition-all active:scale-95 font-medium text-sm"
              >
                View Live Project <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: STANDARD FOOTER ---
const Footer = () => (
    <footer className="w-full bg-gray-950 text-gray-400 flex flex-col items-center justify-center text-center p-12 md:p-16 font-mono border-t-8 border-indigo-600/50">
      <div className="max-w-md">
        <Terminal size={48} className="mx-auto mb-6 text-indigo-500 animate-pulse" />
        <h4 className="text-xl text-gray-200 mb-2">System Status: <span className="text-green-400">Online</span></h4>
        <div className="text-sm text-gray-600 mb-8 space-y-1">
          <p> User: Alexander Hasenbein</p>
          <p> Location: Austin, TX</p>
          <p> Scroll_Depth: 100%</p>
          <p> Secret_Protocol: Initiated...</p>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
            <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Mail size={20} />
            </a>
            <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                <Github size={20} />
            </a>
        </div>
        <p className="text-xs text-gray-700 mt-4">
          © {new Date().getFullYear()} Alexander Hasenbein. <br/> Built with React, Tailwind & Three.js particles.
        </p>
      </div>
    </footer>
);

// --- MAIN APP COMPONENT ---
const App = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <StickyNavbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Particle Background Layer (Z-0) */}
        <div className="absolute inset-0 z-0 opacity-50">
          <ParticleBackground />
        </div>

        {/* Content Layer (Z-10) */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 pointer-events-none">

          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-gray-900 mb-6 leading-none">
            {PORTFOLIO_DATA.name}
          </h1>
          <p className="text-xl md:text-3xl text-gray-600 font-light mb-10">
            {PORTFOLIO_DATA.title}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="px-10 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-transform hover:-translate-y-1 shadow-xl shadow-indigo-600/30 active:scale-95 pointer-events-auto">
              View Projects
            </a>
            <a href="#contact" className="px-10 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition-transform hover:-translate-y-1 shadow-md active:scale-95 pointer-events-auto">
              Contact Me
            </a>
          </div>
        </div>

        {/* Fade Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-20 bg-gray-50">

        {/* ABOUT SECTION */}
        <section id="about" className="py-28 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 mb-4">
                <GraduationCap size={28} />
                <span className="font-extrabold tracking-wider text-sm uppercase">About Me & Education</span>
              </div>
              <h3 className="text-4xl font-bold mb-6 text-gray-900">Penn State Behrend</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 border-l-4 border-indigo-400 pl-4">
                {PORTFOLIO_DATA.about}
              </p>
              <ul className="space-y-3 text-gray-600 text-lg">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></span> BS: Computer Science & Mathematics (Honors)</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></span> Graduation: Class of 2028</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></span> UIL Academic All-State & VEX Robotics Winner</li>
              </ul>
            </div>

            {/* SKILLS GRID */}
            <div id="skills" className="grid grid-cols-1 gap-6 p-6 bg-white rounded-xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 border-b pb-3 mb-3">Core Competencies</h3>
              {PORTFOLIO_DATA.skills.map((skill, idx) => (
                <div key={idx} className="p-4 rounded-lg hover:bg-indigo-50 transition-all border border-transparent hover:border-indigo-200">
                  <div className="flex items-center gap-4 mb-1">
                    <div className="p-3 bg-indigo-100 rounded-full text-indigo-600 flex-shrink-0">
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-lg text-gray-900">{skill.category}</h4>
                  </div>
                  <p className="text-gray-600 text-sm pl-[60px]">{skill.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-28 bg-white border-y border-gray-200 shadow-inner">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-3">Selected Works</h3>
              <p className="text-xl text-gray-500">A showcase of technical depth and design precision.</p>
              <div className="mt-4 text-sm text-gray-400 font-mono">
                // Click cards to view technical details
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {PROJECTS_DATA.map((project) => (
                <div
                  key={project.id}
                  className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  onClick={() => setActiveProject(project)}
                >
                  <div className="relative overflow-hidden aspect-[4/3] rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 bg-white/90 backdrop-blur text-gray-900 px-4 py-2 rounded-full shadow-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 border border-gray-200">
                        <ExternalLink size={14} /> Preview Details
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{project.title}</h4>
                    <p className="text-sm text-gray-500 mt-1 font-mono">{project.tech}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- RESEARCH SECTION (INSERTED HERE) --- */}
        <ResearchSection />

        {/* RESUME SECTION */}
        <ResumeSection />

        {/* CONTACT SECTION */}
        <section id="contact" className="py-28 px-6 max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Let's Connect</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            I live over the summer in Austin, Texas and go to school in Erie, PA
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`mailto:${PORTFOLIO_DATA.email}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-xl shadow-indigo-600/30 font-semibold">
              <Mail size={20} />
              {PORTFOLIO_DATA.email}
            </a>
            <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors shadow-lg font-semibold">
              <Linkedin size={20} className='text-[#0077b5]' />
              LinkedIn Profile
            </a>
          </div>
          <p className="mt-12 text-gray-500 text-lg font-mono">Work Phone: {PORTFOLIO_DATA.phone}</p>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODAL COMPONENT */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
};

export default App;