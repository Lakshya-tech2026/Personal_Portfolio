/**
 * ─────────────────────────────────────────────────────────────
 * EDIT EVERYTHING HERE.
 * This is the single source of truth for the whole portfolio:
 * personal info, social links, skills, projects, journey,
 * achievements and contact details.
 * ─────────────────────────────────────────────────────────────
 */
import aboutImage from "../assets/lakshya-about.jpeg";
import portraitAsset from "../assets/lakshya-portrait.png.asset.json";
import aboutPhotoAsset from "../assets/lakshya-about.png.asset.json";
import certificateAsset from "../assets/lakshya-row-33-certificate.pdf";
import certificateAssetAlt from "../assets/lakshya-row-33-certificate-chandra.pdf";
import certificatePreview1 from "../assets/certificates/certificate-row-33-1.png";
import certificatePreview2 from "../assets/certificates/certificate-row-33-2.png";

export const personal = {
  brand: "Lakshya.Tech",
  name: "Lakshya Chandra",
  role: "Aspiring AI/ML Engineer",
  tagline: "Building Today. Innovating Tomorrow.",
  footerTagline: "Think Today. Code Today. Create a New Tomorrow.",
  status: "Open to Opportunities",
  education: "B.Tech CSE — AI & ML",
  institute: "PW Institute of Innovation",
  focus: "AI / ML / Software Development",
  currentStatus: "Student & Builder",
  hero: {
    eyebrow: "ASPIRING",
    headlineLead: "AI/ML",
    headlineHighlight: "Engineer",
    subtitle: "Building intelligent solutions with code, data, and a vision for a better tomorrow.",
    primaryCta: "View My Work",
    secondaryCta: "Let's Connect",
    strengths: ["Python", "Java", "Machine Learning"],
  },
  about: {
    heading: "Turning Curiosity Into Code.",
    paragraphs: [
      "I'm Lakshya, a B.Tech CSE student specializing in Artificial Intelligence and Machine Learning at PW Institute of Innovation. I'm interested in understanding how technology works, building software, experimenting with AI, and continuously turning ideas into practical projects.",
      "I learn by building. Most of what I know comes from writing code, breaking things, reading documentation and rebuilding them better — across AI/ML, programming fundamentals and problem solving. Every project is an experiment in getting a little sharper than the last one.",
    ],
  },
};

// ── PROFILE PHOTO CARD (About section) ───────────────────────
// Drop your portrait in src/assets, then import it here.
// Recommended: a 4:5 portrait crop with you centered.
export const profile = {
  /** Set to your imported image URL. Empty string shows a placeholder frame. */
  photo: portraitAsset.url,
  /** Photo shown in the About section profile card (falls back to `photo`). */
  aboutPhoto: aboutImage,
  photoAlt: "Portrait of Lakshya Chandra",
  name: "Lakshya Chandra",
  role: "Aspiring AI/ML Engineer",
  degree: "B.Tech CSE (AI/ML)",
  institute: "PW Institute of Innovation",
  keywords: ["AI/ML", "Python", "Java", "Generative AI"],
};

// ── SOCIAL / CONTACT LINKS (edit these) ──────────────────────
export const links = {
  github: "https://github.com/Lakshya-tech2026",
  githubUsername: "Lakshya-tech2026",
  linkedin: "https://www.linkedin.com/in/lakshya-tech-0042ba433",
  email: "lakshya.tech2026@gmail.com",
};

// ── NAVIGATION ───────────────────────────────────────────────
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#journey" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// ── SKILLS ───────────────────────────────────────────────────
export type SkillIcon =
  | "code"
  | "coffee"
  | "brain"
  | "sparkles"
  | "cpu"
  | "layout"
  | "palette"
  | "braces"
  | "smartphone"
  | "git"
  | "github"
  | "figma"
  | "puzzle"
  | "pen"
  | "lightbulb";

export type Skill = {
  name: string;
  description: string;
  icon: SkillIcon;
  /** "learning" | "working" | "comfortable" — honest, no fake percentages */
  level?: "Learning" | "Working knowledge" | "Comfortable";
};

export const skillGroups: { group: string; skills: Skill[] }[] = [
  {
    group: "Programming",
    skills: [
      {
        name: "Python",
        description: "Core language for my AI/ML work, scripting and automation.",
        icon: "code",
        level: "Comfortable",
      },
      {
        name: "Java",
        description: "Object-oriented programming, data structures and logic building.",
        icon: "coffee",
        level: "Working knowledge",
      },
    ],
  },
  {
    group: "AI / ML",
    skills: [
      {
        name: "Machine Learning",
        description: "Supervised learning basics, model training and evaluation.",
        icon: "brain",
        level: "Learning",
      },
      {
        name: "Generative AI",
        description: "Prompting, LLM-based tooling and experimenting with AI workflows.",
        icon: "sparkles",
        level: "Working knowledge",
      },
      {
        name: "AI Concepts",
        description: "Neural networks, data pipelines and how models actually behave.",
        icon: "cpu",
        level: "Learning",
      },
    ],
  },
  {
    group: "Development",
    skills: [
      {
        name: "HTML",
        description: "Semantic, accessible markup as the base of every interface.",
        icon: "layout",
        level: "Comfortable",
      },
      {
        name: "CSS",
        description: "Layout, design systems and modern responsive styling.",
        icon: "palette",
        level: "Comfortable",
      },
      {
        name: "JavaScript",
        description: "Interactivity, DOM logic and building in the browser.",
        icon: "braces",
        level: "Working knowledge",
      },
      {
        name: "Responsive Web Development",
        description: "Interfaces that stay clean from 360px to ultrawide.",
        icon: "smartphone",
        level: "Working knowledge",
      },
    ],
  },
  {
    group: "Tools",
    skills: [
      {
        name: "Git",
        description: "Version control, branching and tracking my own progress.",
        icon: "git",
        level: "Working knowledge",
      },
      {
        name: "GitHub",
        description: "Hosting projects, collaboration and open-source reading.",
        icon: "github",
        level: "Comfortable",
      },
      {
        name: "Figma",
        description: "Wireframing and designing interfaces before writing code.",
        icon: "figma",
        level: "Working knowledge",
      },
    ],
  },
  {
    group: "Other",
    skills: [
      {
        name: "Problem Solving",
        description: "Breaking messy problems into small, testable steps.",
        icon: "puzzle",
      },
      {
        name: "UI/UX",
        description: "Clarity, hierarchy and interfaces that respect the user.",
        icon: "pen",
      },
      {
        name: "Creative Thinking",
        description: "Finding non-obvious approaches and shipping ideas fast.",
        icon: "lightbulb",
      },
    ],
  },
];

// ── PROJECTS ─────────────────────────────────────────────────
// NOTE: these are labelled PLACEHOLDER entries. Replace the copy
// and the links (liveUrl / repoUrl) with your real projects.
export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  /** Set to false once the entry describes a real, finished project. */
  placeholder: boolean;
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  repoLabel?: string;
  caseStudy: {
    overview: string;
    problem: string;
    approach: string;
    technology: string[];
    keyFeatures: string[];
    challenges: string;
    learned: string;
    future: string[];
  };
};

export const projects: Project[] = [
  {
    id: "personal-portfolio",
    number: "01",
    name: "Personal Portfolio",
    category: "Web Development",
    description:
      "A responsive personal portfolio designed to showcase projects, technical skills, learning progress, and experiments.",
    tags: ["HTML", "CSS", "JavaScript"],
    placeholder: false,
    liveUrl: "#",
    liveLabel: "Live Demo",
    repoUrl: "https://github.com/Lakshya-tech2026/lakshya-tech-portfolio",
    repoLabel: "GitHub",
    caseStudy: {
      overview:
        "The goal of this portfolio is to build my personal brand, showcase my technical skills, and present my projects in a professional way. It helps recruiters, clients, and fellow developers learn more about me.",
      problem:
        "A basic profile page does not fully demonstrate my skills or creativity. I needed a dedicated website where I could present my work, share my learning journey, and connect with opportunities.",
      approach:
        "I designed a modern, responsive portfolio with a clean layout, attractive typography, smooth animations, and separate sections for my introduction, skills, projects, and contact information.",
      technology: ["HTML", "CSS", "JavaScript"],
      keyFeatures: [
        "Responsive design for mobile, tablet, and desktop.",
        "Project showcase with descriptions.",
        "Contact and social media links.",
        "Smooth animations and modern UI.",
        "Easy-to-update content.",
      ],
      challenges:
        "As a beginner, I needed to organize the content, create a consistent design, and make the website work across different screen sizes. I focused on learning the fundamentals of web development and improving the user experience.",
      learned:
        "Created a personal platform to showcase my work, track my progress, and build my online presence as an aspiring developer.",
      future: ["Add more real-world projects.", "Improve accessibility and performance."],
    },
  },
  {
    id: "pw-ioi-tech-club-website",
    number: "02",
    name: "PW IOI Tech Club Website",
    category: "Web / Community",
    description:
      "A modern technology-club website concept focused on innovation, technical excellence, collaboration, and student community.",
    tags: ["UI/UX", "Web Development", "Figma"],
    placeholder: true,
    liveUrl: "#",
    liveLabel: "View Design",
    repoUrl: "#",
    repoLabel: "Live Demo",
    caseStudy: {
      overview: "Placeholder overview — the club, its audience and the concept behind the site.",
      problem: "Placeholder — what the community needed that existing pages didn't provide.",
      approach: "Placeholder — research, wireframes in Figma, then build.",
      technology: ["Figma", "HTML", "CSS"],
      keyFeatures: ["Events section", "Member showcase", "Join flow"],
      challenges: "Placeholder — balancing information density with a clean look.",
      learned: "Placeholder — lessons about designing for a real group of people.",
      future: ["Placeholder improvement one", "Placeholder improvement two"],
    },
  },
  {
    id: "ai-study-planner",
    number: "03",
    name: "AI Study Planner",
    category: "AI / Productivity",
    description:
      "A smart study-planning app that helps students organize tasks, track focus time, and prioritize learning goals with AI-assisted suggestions.",
    tags: ["Python", "AI", "Productivity"],
    placeholder: false,
    liveUrl: "#",
    liveLabel: "View Demo",
    repoUrl: "https://github.com/Lakshya-tech2026",
    repoLabel: "GitHub",
    caseStudy: {
      overview:
        "This project was created to make learning more structured and personalized. The idea was to help students manage daily study plans based on their workload, deadlines, and focus patterns.",
      problem:
        "Students often struggle to balance coursework, revision, and self-learning without a clear daily plan. Manual planning becomes messy and difficult to maintain over time.",
      approach:
        "I designed a simple AI-style planning workflow that organizes study tasks, groups them by priority, and suggests better daily routines based on goals and time availability.",
      technology: ["Python", "Machine Learning", "Productivity Tools"],
      keyFeatures: [
        "Priority-based weekly study planner",
        "Task organization by subject and deadlines",
        "Smart learning suggestions",
        "Progress tracking for repeated revision",
      ],
      challenges:
        "The main challenge was turning a broad idea into a functional product with a clear workflow and useful recommendations without overcomplicating the interface.",
      learned:
        "I learned how to build practical productivity solutions and how important simple user flows are when designing tools for daily habits.",
      future: ["Add a dashboard with analytics", "Improve AI recommendations and personalization."],
    },
  },
  {
    id: "mini-weather-dashboard",
    number: "04",
    name: "Weather Dashboard",
    category: "Data Visualization",
    description:
      "A clean weather dashboard that presents current conditions, trends, and useful city-based insights in a readable interface.",
    tags: ["React", "API", "UI"],
    placeholder: false,
    liveUrl: "#",
    liveLabel: "Open App",
    repoUrl: "https://github.com/Lakshya-tech2026",
    repoLabel: "GitHub",
    caseStudy: {
      overview:
        "The goal of this project was to build a user-friendly weather app that makes data easy to scan and visually appealing on both desktop and mobile screens.",
      problem:
        "Many weather apps overload users with dense information and poor visual hierarchy. I wanted a simpler dashboard with a more focused experience.",
      approach:
        "I structured the app around key metrics like temperature, humidity, wind, and forecast visibility, while keeping the layout clean and responsive.",
      technology: ["React", "JavaScript", "Weather API"],
      keyFeatures: [
        "City-based weather lookup",
        "Forecast summary cards",
        "Responsive layout",
        "Clear visual indicators for conditions",
      ],
      challenges:
        "The hardest part was balancing a polished design with useful information density, ensuring the dashboard stayed readable without feeling cluttered.",
      learned:
        "I improved my understanding of UI layout, data presentation, and creating interfaces that turn raw information into something people can use quickly.",
      future: ["Add charts for trends", "Improve theming and location auto-detect."],
    },
  },
];

// ── JOURNEY / TIMELINE ───────────────────────────────────────
export type TimelineEntry = {
  date: string;
  institution: string;
  role: string;
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    date: "Present",
    institution: "PW Institute of Innovation",
    role: "B.Tech CSE — Artificial Intelligence and Machine Learning",
    description:
      "Studying computer science with a specialization in AI and ML, while building projects alongside coursework.",
  },
];

/** Shown when no professional experience has been added. */
export const experienceFallback =
  "Currently focused on learning, building, experimenting, and developing real-world projects.";

// ── ACHIEVEMENTS ─────────────────────────────────────────────
export type Achievement = {
  title: string;
  category:
    | "Certification"
    | "Hackathon"
    | "Competition"
    | "Project"
    | "Course"
    | "Technical Milestone";
  date?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Certificate of Achievement",
    category: "Certification",
    date: "2026",
    description: "Recognition for a completed academic / technical certification milestone.",
    url: certificateAsset,
    imageUrl: certificatePreview1,
  },
  {
    title: "Certificate of Achievement",
    category: "Certification",
    date: "2026",
    description: "Alternate certificate copy for the same achievement record.",
    url: certificateAssetAlt,
    imageUrl: certificatePreview2,
  },
];

export const achievementsFallback = "More milestones coming soon.";
