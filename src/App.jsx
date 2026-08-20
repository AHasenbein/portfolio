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
  Briefcase,
  GraduationCap,
  FileText, 
  Download,
  // New Imports for Research Section
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
import resumeImg from './assets/HasenbeinResumePhoto.png'; // <--- UNCOMMENT THIS AFTER ADDING FILE
import resumePDF from './assets/HasenbeinResume.pdf'; // <--- UNCOMMENT THIS AFTER ADDING FILE

import research1 from './assets/researchPhotos/research1.png';
import research2 from './assets/researchPhotos/research2.png';
import research3 from './assets/researchPhotos/research3.png';
import research4 from './assets/researchPhotos/research4.png';
import research5 from './assets/researchPhotos/research5.png';
import research6 from './assets/researchPhotos/research6.png';
import research7 from './assets/researchPhotos/research7.png';

// FOR NOW, I am using placeholders so the code doesn't crash when you copy-paste.
// REPLACE these variables with the imports above when you are ready.
const RESUME_PREVIEW_IMAGE = resumeImg; 
const RESUME_PDF_LINK = resumePDF; 

// --- RESUME DATA POPULATION ---
const PORTFOLIO_DATA = {
  name: "ALEX HASENBEIN",
  title: "Full-Stack Developer & Machine Learning Engineer",
  about: "I am a dual-major student at The Pennsylvania State University (Computer Science & Mathematics) with a Penn State Honors background. I build full-stack applications, ML pipelines, and multi-agent systems — from production analytics dashboards to research-grade evaluation frameworks. My goal is to change the world and ultimately create something that is uniquely mine.",

  // Categorized skills from your resume
  skills: [
    { category: "Languages", icon: <Code2 size={20} />, items: "Java, C++, C#, JavaScript, TypeScript, Python, SQL, Rust, VB.NET" },
    { category: "Frameworks", icon: <Layout size={20} />, items: "React, Next.js, Node.js, Spring, ASP.NET, FastAPI, Flask, LightGBM, pandas, scikit-learn, Plotly" },
    { category: "Tools & Tech", icon: <Cpu size={20} />, items: "Git, Docker, MongoDB, SQL Server, OpenRouter, CI/CD Pipelines" },
    { category: "Focus Areas", icon: <Database size={20} />, items: "Full-Stack Development, Machine Learning & AI, Data Science, Backend Engineering, Multi-Agent Systems" },
  ],

  email: "hasenbeinalex@gmail.com",
  phone: "(512) 962-2736",
  website: "https://alexhasenbein.com",
  location: "Austin, TX",
  linkedin: "https://www.linkedin.com/in/alex-hasenbein-287b53325/",
  github: "https://github.com/AHasenbein"
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
          <a href="#work" className="hover:text-indigo-600 transition-colors">Work Experience</a>
          <a href="#research" className="hover:text-indigo-600 transition-colors">Research</a>
          <a href="#resume" className="hover:text-indigo-600 transition-colors">Resume</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const ResearchSection = () => {
    const researchCarouselImages = [
        research1,
        research2,
        research3,
        research4,
        research5,
        research6,
        research7
    ];
    const [activeResearchImage, setActiveResearchImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveResearchImage((prev) => (prev + 1) % researchCarouselImages.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [researchCarouselImages.length]);
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
                            <span className="font-bold tracking-widest text-sm uppercase">Penn State Honors Research</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                            Hyperoptimization of Artificial Intelligence-Based <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                                Quadratic Equation Predictors
                            </span>
                        </h2>
                    </div>
                    <div className="flex-1 pt-4">
                        <div className="prose prose-invert prose-lg text-slate-400">
                            <p className="text-xl">
                                A research project exploring how small neural networks learn mathematical function approximation, using quadratic root prediction as a controlled testbed for studying hyperparameter optimization. I implemented and compared three search strategies (Bayesian optimization, random search, and multi-objective Pareto search) to understand the trade-offs between model accuracy and efficiency. The project pairs a stratified data generation pipeline (balanced across real, complex, and repeated roots) with a comprehensive evaluation suite and interactive dashboards for visualizing training progress, hyperparameter importance, and trial history. The goal wasn't to solve a hard problem, but to run a clean, well-instrumented experiment that surfaces practical, transferable lessons about optimizing small ML models.
                            </p>
                        </div>
                        <div className="mt-8 w-full max-w-3xl">
                            <div className="relative group rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-800/90 shadow-xl transition-all duration-300 hover:border-indigo-500">
                                <div className="absolute top-0 left-0 right-0 z-20 px-5 py-3 bg-slate-900/90 border-b border-slate-700 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Layers size={20} className="text-indigo-400" />
                                        <span className="text-sm font-extrabold tracking-widest text-white uppercase">Research Carousel</span>
                                    </div>
                                    <span className="text-xs text-slate-300 font-mono">
                                        {activeResearchImage + 1}/{researchCarouselImages.length}
                                    </span>
                                </div>

                                <div className="w-full relative pt-16" style={{ paddingBottom: '58%' }}>
                                    {researchCarouselImages.map((image, idx) => (
                                        <img
                                            key={idx}
                                            src={image}
                                            alt={`Research visual ${idx + 1}`}
                                            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                                                idx === activeResearchImage ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveResearchImage((prev) =>
                                            prev === 0 ? researchCarouselImages.length - 1 : prev - 1
                                        )
                                    }
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-slate-900/80 text-white text-lg hover:bg-indigo-600 transition-colors"
                                    aria-label="Previous research image"
                                >
                                    ‹
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveResearchImage((prev) => (prev + 1) % researchCarouselImages.length)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-slate-900/80 text-white text-lg hover:bg-indigo-600 transition-colors"
                                    aria-label="Next research image"
                                >
                                    ›
                                </button>

                                <div className="px-5 py-4 border-t border-slate-700 bg-slate-900/80 flex items-center justify-center gap-2">
                                    {researchCarouselImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => setActiveResearchImage(idx)}
                                            className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                                idx === activeResearchImage ? 'bg-indigo-400' : 'bg-slate-600 hover:bg-slate-400'
                                            }`}
                                            aria-label={`Go to research image ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ⚙️ Bottom Section: Technical Detail Cards (Grid) */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Card 1 */}
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-indigo-500 transition-all duration-300 group">
                        <Zap className="text-indigo-400 mb-4 group-hover:scale-[1.05] transition-transform" size={32} />
                        <h4 className="font-bold text-white mb-3 text-xl">Multi-method Optimization</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Compared Bayesian optimization (Optuna), random search, and multi-objective Pareto search to analyze accuracy-efficiency trade-offs in neural network design.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-indigo-500 transition-all duration-300 group">
                        <Database className="text-indigo-400 mb-4 group-hover:scale-[1.05] transition-transform" size={32} />
                        <h4 className="font-bold text-white mb-3 text-xl">Balanced Experimental Design</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Built a stratified data generation pipeline to eliminate root-type sampling bias, a common blind spot in synthetic math datasets.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-indigo-500 transition-all duration-300 group">
                        <LineChart className="text-indigo-400 mb-4 group-hover:scale-[1.05] transition-transform" size={32} />
                        <h4 className="font-bold text-white mb-3 text-xl">Rigorous Evaluation</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Assessed models across MAE, RMSE, R², per-root-type error breakdowns, parameter count, and inference speed, not just raw accuracy.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-indigo-500 transition-all duration-300 group">
                        <Network className="text-indigo-400 mb-4 group-hover:scale-[1.05] transition-transform" size={32} />
                        <h4 className="font-bold text-white mb-3 text-xl">Interpretable Results</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Created real-time dashboards for training curves, hyperparameter importance, and trial history, turning the optimization process into something explorable rather than a black box.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WorkExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineering and Machine Learning Intern",
      company: "Flex",
      location: "Austin, TX",
      dates: "May 2026 - Present",
      responsibilities: [
        "Built and deployed a full ML pipeline in Python (LightGBM, pandas, scikit-learn) processing 1M+ records to forecast throughput, delivering 90% accuracy and sub-30-second precision on time predictions.",
        "Engineered features from SQL Server views and optimized complex queries across production datasets of 4M+ rows, implementing parallelized chunking to eliminate tempdb exhaustion.",
        "Designed web-based dashboards in C# (ASP.NET) with dynamic charts, tables, and filters, delivering real-time analytics for the process engineering team. Led two HQ-wide projects — overseeing version control, monitoring PRs handled, and roadmaps.",
        "Created data analysis apps built in Python using Plotly, Pandas, and Pydoc that reduced team-wide analysis time by 10%."
      ]
    },
    {
      title: "Undergraduate Researcher, Honors Option",
      company: "The Pennsylvania State University",
      location: "Erie, PA",
      dates: "Jan 2025 – May 2025",
      responsibilities: [
        "Built a hyperparameter optimization framework for neural networks predicting quadratic roots, benchmarking Bayesian optimization (Optuna), random search, and multi-objective Pareto search to quantify accuracy-efficiency tradeoffs.",
        "Built a data pipeline and full evaluation suite (MAE, RMSE, R², per-class error, inference speed) with interactive dashboards for hyperparameter analysis and trial exploration, ensuring reproducible, interpretable results."
      ]
    }
  ];

  return (
    <section id="work" className="py-32 bg-white border-y border-gray-200 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-indigo-100/70 blur-3xl pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 text-indigo-600 mb-3">
            <Briefcase size={24} />
            <span className="font-extrabold tracking-wider text-sm uppercase">Work Experience</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Impact</h3>
          <p className="text-lg text-gray-600 max-w-3xl">
            Building production-facing tools for engineering teams and turning process data into usable decisions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, expIdx) => (
            <div
              key={expIdx}
              className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 shadow-2xl shadow-indigo-100/40 p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 border-b border-indigo-100 pb-8 mb-8">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900">{exp.title}</h4>
                  <p className="text-indigo-700 font-semibold text-lg mt-2">{exp.company}</p>
                  <p className="text-gray-600 mt-2">{exp.location}</p>
                </div>
                <div className="inline-flex items-center rounded-full bg-indigo-600 text-white px-4 py-2 text-sm font-semibold self-start">
                  {exp.dates}
                </div>
              </div>

              <p className="text-gray-700 font-semibold mb-4">Key contributions:</p>
              <div className={`grid gap-4 ${exp.responsibilities.length > 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
                {exp.responsibilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white/80 p-4 shadow-sm">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-indigo-600 flex-shrink-0"></span>
                    <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HackathonSection = () => {
  return (
    <section id="hackathon" className="py-24 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-indigo-50 p-8 md:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
            <div>
              <p className="text-amber-700 text-sm font-extrabold tracking-wider uppercase">Hackathon Achievement</p>
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">1st Place, AI Agents & LLMs</h4>
              <p className="text-gray-700 mt-2">Penn State Hackathon</p>
            </div>
            <div className="inline-flex items-center rounded-full bg-amber-500/90 text-white px-4 py-2 text-sm font-semibold self-start">
              Built solo in 10 hours
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold">DevCord – Multi Agent AI Orchestration Platform.</span> Architected specialized agents (Manager, Dev, QA, Command) with scoped roles and task handoff in strict TypeScript using Discord.js and OpenRouter, with modular model routing to swap LLMs per agent without modifying orchestration logic.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Implemented autonomous project kickoff, thread-based task decomposition, persistent run/state tracking with pause/resume/cancel controls, plus voice-first Q&A via local Whisper STT + TTS in Discord voice channels.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Favorite Feature</p>
              <p className="text-sm text-gray-700">Join a Discord call and ask a bot questions about your live project context.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Favorite Feature</p>
              <p className="text-sm text-gray-700">Watch agents ask each other for help when the question is outside their domain.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Favorite Feature</p>
              <p className="text-sm text-gray-700">Get high-quality, cross-agent feedback while one bot is building.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.youtube.com/watch?v=mAAqsrhs_VM"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 font-semibold hover:bg-gray-700 transition-colors"
            >
              Watch Demo Video
            </a>
            <a
              href="https://github.com/AHasenbein/Devcord-Multi-Agent"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-900 px-5 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              View GitHub Repository
            </a>
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
                <span className="font-extrabold tracking-wider text-sm uppercase">Resume</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">My Resume</h3>
            <p className="text-gray-600 max-w-xl text-lg">
              A one page condensed version of me. 
            </p>
          </div>
          
          {/* Download Button */}
          <a 
            href={RESUME_PDF_LINK} 
            download="Alex_Hasenbein_Resume.pdf"
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
                <FileText size={12} /> Alex_Hasenbein_Resume.pdf (Preview)
              </div>
              <div className="w-8"></div> {/* Spacer to center text */}
            </div>

            {/* The Image itself */}
            <div className="relative bg-gray-50 overflow-hidden">
                <img 
                  src={RESUME_PREVIEW_IMAGE} 
                  alt="Alex Hasenbein Resume" 
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
          <p> User: Alex Hasenbein</p>
          <p> Location: {PORTFOLIO_DATA.location}</p>
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
            <a href={PORTFOLIO_DATA.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                <Github size={20} />
            </a>
        </div>
        <p className="text-xs text-gray-700 mt-4">
          © {new Date().getFullYear()} Alex Hasenbein. <br/> Built with React, Tailwind & Three.js particles.
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
              <h3 className="text-4xl font-bold mb-6 text-gray-900">The Pennsylvania State University</h3>
              <p className="text-indigo-700 font-semibold mb-4">University Park, PA · GPA: 3.5</p>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 border-l-4 border-indigo-400 pl-4">
                {PORTFOLIO_DATA.about}
              </p>
              <ul className="space-y-3 text-gray-600 text-lg">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></span> B.S. Computer Science & B.S. Mathematics</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></span> Expected Graduation: May 2028</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></span> Commonwealth Engineering Scholarship</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></span> Penn State Honors Program · Dean&apos;s List</li>
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

        {/* HACKATHON SECTION */}
        <HackathonSection />

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

        {/* WORK EXPERIENCE SECTION */}
        <WorkExperienceSection />

        {/* --- RESEARCH SECTION (INSERTED HERE) --- */}
        <ResearchSection />

        {/* RESUME SECTION */}
        <ResumeSection />

        {/* CONTACT SECTION */}
        <section id="contact" className="py-28 px-6 max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Let's Connect</h3>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Based in Austin, TX · Studying at University Park, PA.
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <p className="text-gray-500 mb-12">{PORTFOLIO_DATA.phone}</p>
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