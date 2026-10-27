import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  X,
  Code2,
  Cpu,
  Database,
  Layout,
  Briefcase,
  GraduationCap,
  Trophy,
  Play,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  // New Imports for Research Section
  Network,
  Zap,
  LineChart,
  Microscope
} from 'lucide-react';

// Assuming ParticleBackground is correctly implemented and works
import ParticleBackground from './ParticleBackground';

// --- IMPORT THE PROJECTS DATA ---
import PROJECTS_DATA from './projectsData';

import research1 from './assets/researchPhotos/research1.png';
import research2 from './assets/researchPhotos/research2.png';
import research3 from './assets/researchPhotos/research3.png';
import research4 from './assets/researchPhotos/research4.png';
import research5 from './assets/researchPhotos/research5.png';
import research6 from './assets/researchPhotos/research6.png';
import research7 from './assets/researchPhotos/research7.png';

const PORTFOLIO_DATA = {
  name: "ALEX HASENBEIN",
  title: "Full-Stack Developer & Machine Learning Engineer",
  about: "I am a Computer Science major with a Mathematics minor at The Pennsylvania State University, and I completed the Behrend Honors Program. I build full-stack applications, ML pipelines, and multi-agent systems, from production analytics dashboards to research-grade evaluation frameworks. My goal is to create something that truly makes peoples lives better.",

  // Categorized skills from your resume
  skills: [
    { category: "Languages", icon: <Code2 size={20} />, items: "Java, C++, C#, JavaScript, TypeScript, Python, SQL, Go, VB.NET, HTML, CSS" },
    { category: "Frameworks", icon: <Layout size={20} />, items: "React, Next.js, Express.js, Spring, ASP.NET, FastAPI, Flask, PyTorch, LightGBM, Optuna, pandas, scikit-learn, Plotly, NumPy, Three.js, Discord.js" },
    { category: "Tools & Tech", icon: <Cpu size={20} />, items: "Git, Docker, MongoDB, SQL Server, Node.js, OpenRouter, CI/CD Pipelines, AWS, Azure" },
    { category: "Focus Areas", icon: <Database size={20} />, items: "Full-Stack Development, Machine Learning & AI, Data Science, Backend Engineering, Multi-Agent Systems" },
  ],

  email: "hasenbeinalex@gmail.com",
  website: "https://alexhasenbein.com",
  location: "Austin, TX",
  linkedin: "https://www.linkedin.com/in/alex-hasenbein-287b53325/",
  github: "https://github.com/AHasenbein"
};

// --- SHARED UI: keeps every section on the same type scale, spacing, and card style ---
const SectionHeader = ({ icon, eyebrow, title, subtitle }) => (
  <div className="mb-12 max-w-3xl">
    <div className="flex items-center gap-2 text-indigo-600 mb-3">
      {icon}
      <span className="font-semibold tracking-widest text-xs uppercase">{eyebrow}</span>
    </div>
    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">{title}</h2>
    {subtitle && <p className="mt-4 text-lg text-gray-600 leading-relaxed">{subtitle}</p>}
  </div>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-100">
    {children}
  </span>
);

const cardClass = "rounded-2xl border border-gray-200 bg-white shadow-sm";
const primaryButtonClass = "inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition-colors hover:bg-indigo-700";
const secondaryButtonClass = "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50";

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/80 backdrop-blur-md border-gray-200' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tight text-gray-900">
          TRY. FAIL. INNOVATE<span className="text-indigo-600">.</span>
        </span>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#work" className="hover:text-indigo-600 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#hackathon" className="hover:text-indigo-600 transition-colors">Hackathon</a>
          <a href="#research" className="hover:text-indigo-600 transition-colors">Research</a>
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
    const researchStats = [
        { value: "1,800", label: "networks trained (20 seeds x 3 methods x 30 trials)" },
        { value: "46.5%", label: "lower median best validation error, Bayesian (TPE) vs. random search" },
        { value: "p = 0.002", label: "paired Wilcoxon significance" },
        { value: "0.986", label: "test R² (vs. 0.980 for random search)" },
    ];
    const researchHighlights = [
        {
            icon: <Zap size={20} />,
            title: "Multi-method Optimization",
            text: "Compared Bayesian optimization (Optuna), random search, and multi-objective Pareto search to analyze accuracy-efficiency trade-offs in neural network design."
        },
        {
            icon: <Database size={20} />,
            title: "Balanced Experimental Design",
            text: "Built a stratified data generation pipeline to eliminate root-type sampling bias, a common blind spot in synthetic math datasets."
        },
        {
            icon: <LineChart size={20} />,
            title: "Rigorous Evaluation",
            text: "Assessed models across MAE, RMSE, R², per-root-type error breakdowns, parameter count, and inference speed, not just raw accuracy."
        },
        {
            icon: <Network size={20} />,
            title: "Interpretable Results",
            text: "Created a PyQt6 dashboard for training curves, hyperparameter importance, and trial history, turning the optimization process into something explorable rather than a black box."
        },
    ];
    const showPrevious = () =>
        setActiveResearchImage((prev) => (prev === 0 ? researchCarouselImages.length - 1 : prev - 1));
    const showNext = () =>
        setActiveResearchImage((prev) => (prev + 1) % researchCarouselImages.length);

    return (
        <section id="research" className="scroll-mt-16 py-24 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader
                    icon={<Microscope size={18} />}
                    eyebrow="Penn State Honors Research"
                    title={
                        <>
                            Hyperoptimization of Artificial Intelligence-Based{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                                Quadratic Equation Predictors
                            </span>
                        </>
                    }
                />

                {/* Headline results */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {researchStats.map((stat) => (
                        <div key={stat.value} className={`${cardClass} p-5`}>
                            <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-indigo-600 tabular-nums">{stat.value}</p>
                            <p className="mt-1 text-sm text-gray-500 leading-snug">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
                    <p className="text-gray-600 leading-relaxed">
                        A research project exploring how small neural networks learn mathematical function approximation, using quadratic root prediction as a controlled testbed for studying hyperparameter optimization. I implemented and compared three search strategies (Bayesian optimization, random search, and multi-objective Pareto search) to understand the trade-offs between model accuracy and efficiency. The project pairs a stratified data generation pipeline (balanced across real, complex, and repeated roots) with a comprehensive evaluation suite and a PyQt6 dashboard for visualizing training progress, hyperparameter importance, and trial history. The study trained 1,800 networks (20 seeds x 3 methods x 30 trials). Bayesian (TPE) search cut median best validation error 46.5% versus random search after 30 trials (paired Wilcoxon p = 0.002), with test R² of 0.986 vs 0.980. It is a small synthetic problem, and the goal wasn't to solve a hard problem, but to run a clean, well-instrumented experiment that surfaces practical, transferable lessons about optimizing small ML models.
                    </p>

                    {/* Research carousel */}
                    <div className={`${cardClass} overflow-hidden lg:sticky lg:top-24`}>
                        <div className="relative aspect-[16/10] bg-gray-50">
                            {researchCarouselImages.map((image, idx) => (
                                <img
                                    key={idx}
                                    src={image}
                                    alt={`Research visual ${idx + 1}`}
                                    className={`absolute inset-0 w-full h-full object-contain p-3 transition-opacity duration-500 ${
                                        idx === activeResearchImage ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            ))}
                            <button
                                type="button"
                                onClick={showPrevious}
                                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm ring-1 ring-gray-200 transition-colors hover:text-indigo-600"
                                aria-label="Previous research image"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                type="button"
                                onClick={showNext}
                                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm ring-1 ring-gray-200 transition-colors hover:text-indigo-600"
                                aria-label="Next research image"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 px-5 py-3">
                            <div className="flex items-center gap-2">
                                {researchCarouselImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => setActiveResearchImage(idx)}
                                        className={`h-2 rounded-full transition-all ${
                                            idx === activeResearchImage ? 'w-5 bg-indigo-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Go to research image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-gray-500 font-mono tabular-nums">
                                {activeResearchImage + 1} / {researchCarouselImages.length}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Technical highlights */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {researchHighlights.map((item) => (
                        <div key={item.title} className={`${cardClass} p-6 transition-colors hover:border-indigo-200`}>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
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
      dates: "May 2026 - Aug 2026",
      responsibilities: [
        "Built a LightGBM model (pandas, scikit-learn) forecasting board build time on 1M+ records; 90% of predictions landed within 30 seconds of actual on a separate, leakage-controlled test set.",
        "Eliminated tempdb exhaustion on production datasets of 4M+ rows by parallelizing query chunking; engineered features from SQL Server views and optimized complex queries.",
        "Delivered real-time C# (ASP.NET) dashboards with dynamic charts, tables, and filters for the process engineering team, plus Python (Plotly, pandas) reporting tooling that cut weekly analysis time by 2 hours on average.",
        "Owned delivery of 2 HQ-wide projects, managing version control and roadmap tracking: a PCN/deviation tool and a migration of ~20 daily emails into an engineering dashboard."
      ]
    },
    {
      title: "Undergraduate Researcher, Honors Option",
      company: "The Pennsylvania State University",
      location: "Erie, PA",
      dates: "Jan 2025 – May 2025",
      responsibilities: [
        "Cut median validation error 46.5% (p = 0.002) with Bayesian (Optuna) search versus random search in a 1,800-network PyTorch study (20 seeds x 3 methods) on quadratic-root prediction; test R² 0.986 vs 0.980 (p = 0.003).",
        "Built the framework comparing Bayesian, random, and multi-objective Pareto search, with a root-type-balanced data pipeline, an evaluation suite (MAE, RMSE, R², parameter count, inference latency), and a PyQt6 dashboard.",
        "Raised R² from near 0 to 0.98+ by restricting coefficient |a| to at least 0.5 (roots scale as 1/a), and fixed a bug that omitted the repeated-root class from validation."
            ]
    }
  ];

  return (
    <section id="work" className="scroll-mt-16 py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          icon={<Briefcase size={18} />}
          eyebrow="Work Experience"
          title="Professional Impact"
          subtitle="Building production-facing tools for engineering teams and turning process data into usable decisions."
        />

        <ol className="relative space-y-8 border-l border-gray-200 ml-2">
          {experiences.map((exp, expIdx) => (
            <li key={expIdx} className="relative pl-8 md:pl-10">
              <span className="absolute -left-[7px] top-9 h-3.5 w-3.5 rounded-full bg-indigo-600 ring-4 ring-indigo-100"></span>
              <div className={`${cardClass} p-6 md:p-8`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-indigo-700 font-semibold">{exp.company}</span>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    </p>
                  </div>
                  <span className="self-start whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 font-mono">
                    {exp.dates}
                  </span>
                </div>

                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Key contributions:</p>
                <ul className="space-y-3">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                      <p className="text-gray-600 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const HACKATHONS = [
  {
    placement: "1st Place, AI Agents & LLMs",
    event: "Behrend Hackathon",
    badge: "Built solo in 10 hours",
    name: "DevCord – Multi-Agent AI Orchestration Platform.",
    paragraphs: [
      "Four specialized agents (Manager, Dev, QA, Command) that split up and hand off tasks in Discord, built in TypeScript with Discord.js and OpenRouter. Each agent can run a different LLM, and you can ask questions by voice using local Whisper speech-to-text."
    ],
    favorites: [
      "Join a Discord call and ask a bot questions about your live project context.",
      "Watch agents ask each other for help when the question is outside their domain.",
      "Get high-quality, cross-agent feedback while one bot is building."
    ],
    video: "https://www.youtube.com/watch?v=mAAqsrhs_VM",
    repo: "https://github.com/AHasenbein/Devcord-Multi-Agent"
  },
  {
    placement: "3rd Place, c0mpiled 15",
    event: "Penn State",
    badge: "Built in 4 hours",
    name: "Levee – Flood Stress Testing for Rental Deals.",
    paragraphs: [
      "Stress-tests a rental property deal against its worst plausible year. A deal that looks fine on an average year can flip to failing once a flood year hits, with vacancy, the insurance deductible, uninsured repairs, and higher premiums applied.",
      "A deterministic engine computes every number (NOI, DSCR, out-of-pocket cost) plus a seeded 10,000-path Monte Carlo simulation, using flood zones from FEMA and Census lookups. AWS Bedrock writes an investment memo, and every figure in it is checked against the engine output. A Deal Finder agent screens listings and pays per analysis through an HTTP 402 flow under a spending cap, alongside Stripe credits and plans. Built with React, TypeScript, Hono, and Netlify Functions."
    ],
    video: "https://youtu.be/KqTA5zFdFT0",
    repo: "https://github.com/AHasenbein/Levee"
  }
];

const HackathonSection = () => {
  return (
    <section id="hackathon" className="scroll-mt-16 py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          icon={<Trophy size={18} />}
          eyebrow="Hackathon Achievements"
          title="Hackathons"
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {HACKATHONS.map((hack) => (
            <article key={hack.placement} className={`${cardClass} flex flex-col p-6 md:p-8`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 ring-1 ring-inset ring-amber-100">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{hack.placement}</h3>
                    <p className="text-sm text-gray-500">{hack.event}</p>
                  </div>
                </div>
                <span className="self-start inline-flex whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                  {hack.badge}
                </span>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                {hack.paragraphs.map((text, idx) => (
                  <p key={idx}>
                    {idx === 0 && <span className="font-semibold text-gray-900">{hack.name} </span>}
                    {text}
                  </p>
                ))}
              </div>

              {hack.favorites && (
                <div className="mt-6 rounded-xl bg-gray-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Favorite Features</p>
                  <ul className="space-y-2">
                    {hack.favorites.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                <a href={hack.video} target="_blank" rel="noreferrer" className={primaryButtonClass}>
                  <Play size={16} /> Watch Demo Video
                </a>
                <a href={hack.repo} target="_blank" rel="noreferrer" className={secondaryButtonClass}>
                  <Github size={16} /> View GitHub Repository
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: PLACEHOLDER FOR PROJECTS WITHOUT A SCREENSHOT ---
const ProjectPlaceholder = ({ title }) => (
  <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center gap-3 bg-indigo-50/60 p-6 bg-[radial-gradient(circle,_rgb(199_210_254)_1px,_transparent_1px)] [background-size:16px_16px]">
    <Code2 size={28} className="text-indigo-400" />
    <span className="text-indigo-700 text-2xl md:text-3xl font-extrabold tracking-tight text-center">{title}</span>
  </div>
);

// --- COMPONENT: PROJECT DETAILS MODAL ---
const ProjectModal = ({ project, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (!project) return;
    const handleKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;
  const gallery = project.images || (project.image ? [project.image] : []);
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-gray-200 px-6 py-4">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row overflow-y-auto">
          {/* Gallery */}
          <div className="w-full md:w-3/5 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 p-4">
            {project.image ? (
              <>
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <img
                    src={gallery[activeImg] || project.image}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-contain"
                  />
                </div>
                {gallery.length > 1 && (
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {gallery.map((img, i) => (
                      <button
                        key={i}
                        aria-label={`Show screenshot ${i + 1}`}
                        onClick={() => setActiveImg(i)}
                        className={`overflow-hidden rounded-md border-2 bg-white transition-colors ${i === activeImg ? 'border-indigo-600' : 'border-transparent opacity-70 hover:opacity-100'}`}
                      >
                        <img src={img} alt="" className="w-full aspect-[16/10] object-cover object-top" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="overflow-hidden rounded-lg border border-gray-200 aspect-[16/10]">
                <ProjectPlaceholder title={project.title} />
              </div>
            )}
          </div>

          {/* Details */}
          <div className="w-full md:w-2/5 p-6 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.split(',').map((t, i) => (
                <Tag key={i}>{t.trim()}</Tag>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={`${primaryButtonClass} mt-6 w-full`}
              >
                {project.linkLabel || 'View Live Project'} <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: STANDARD FOOTER ---
const Footer = () => (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="text-sm text-gray-600">Alex Hasenbein · Computer Science &amp; Mathematics · Penn State University Park</p>
          <p className="text-xs text-gray-400 mt-1">
            © {new Date().getFullYear()} Alex Hasenbein. Built with React, Tailwind & Three.js particles.
          </p>
        </div>
        <div className="flex items-center gap-2">
            <a href={`mailto:${PORTFOLIO_DATA.email}`} aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-indigo-600">
                <Mail size={18} />
            </a>
            <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-indigo-600">
                <Linkedin size={18} />
            </a>
            <a href={PORTFOLIO_DATA.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-indigo-600">
                <Github size={18} />
            </a>
        </div>
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
        <section id="about" className="scroll-mt-16 py-24">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                icon={<GraduationCap size={18} />}
                eyebrow="About Me & Education"
                title="The Pennsylvania State University"
                subtitle={<span className="text-indigo-700 font-semibold">University Park, PA · GPA: 3.5 / 4.0</span>}
              />
              <p className="-mt-4 text-lg text-gray-700 leading-relaxed mb-8">
                {PORTFOLIO_DATA.about}
              </p>
              <ul className="space-y-3 text-gray-600">
                {[
                  "B.S. Computer Science · Minor in Mathematics",
                  "Expected Graduation: May 2028",
                  "Coursework: Data Structures & Algorithms, Discrete Mathematics, Linear Algebra, Object-Oriented Programming",
                  "Commonwealth Engineering Scholar · Behrend Honors Program",
                  "Nittany AI Leadership Academy · Nittany AI ELP",
                ].map((fact) => (
                  <li key={fact} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* SKILLS */}
            <div id="skills" className={`${cardClass} p-6 md:p-8`}>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Core Competencies</h3>
              <div className="space-y-6">
                {PORTFOLIO_DATA.skills.map((skill, idx) => (
                  <div key={idx} className={idx > 0 ? 'pt-6 border-t border-gray-100' : ''}>
                    <div className="flex items-center gap-2 mb-3 text-indigo-600">
                      {skill.icon}
                      <h4 className="font-semibold text-gray-900">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.split(',').map((item) => (
                        <Tag key={item}>{item.trim()}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <WorkExperienceSection />

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-16 py-24 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              icon={<Code2 size={18} />}
              eyebrow="Projects"
              title="Selected Works"
              subtitle="A showcase of technical depth and design precision."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS_DATA.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  className={`${cardClass} group flex flex-col overflow-hidden text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/60 hover:border-indigo-200`}
                  onClick={() => setActiveProject(project)}
                >
                  <div className="relative overflow-hidden aspect-[16/10] bg-gray-100 border-b border-gray-200">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover object-top w-full h-full group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    ) : (
                      <ProjectPlaceholder title={project.title} />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.split(',').slice(0, 4).map((t) => (
                        <Tag key={t}>{t.trim()}</Tag>
                      ))}
                    </div>
                    <span className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
                      View details <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* HACKATHON SECTION */}
        <HackathonSection />

        {/* --- RESEARCH SECTION (INSERTED HERE) --- */}
        <ResearchSection />

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-16 py-24 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`${cardClass} px-6 py-16 md:py-20 text-center`}>
              <div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">Let's Connect</h2>
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  Based in Austin, TX · Studying at University Park, PA.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href={`mailto:${PORTFOLIO_DATA.email}`} className={`${primaryButtonClass} px-6 py-3 text-base`}>
                    <Mail size={18} />
                    {PORTFOLIO_DATA.email}
                  </a>
                  <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" className={`${secondaryButtonClass} px-6 py-3 text-base`}>
                    <Linkedin size={18} className="text-[#0077b5]" />
                    LinkedIn Profile
                  </a>
                  <a href={PORTFOLIO_DATA.github} target="_blank" rel="noreferrer" className={`${secondaryButtonClass} px-6 py-3 text-base`}>
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODAL COMPONENT */}
      <ProjectModal key={activeProject?.id} project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
};

export default App;