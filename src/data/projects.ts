import type { StaticImageData } from "next/image";
import planit from "@/assets/images/projects/planit.png";
import musawarah from "@/assets/images/projects/musawarah.png";
import shinyapp from "@/assets/images/projects/shiny-app.png";
import snakeGame from "@/assets/images/projects/snake-game.png";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  image: StaticImageData;
  accent: string;
  category: string;
  type: string;
  year: string;
  status: string;
  tech: string[];
  live: { label: string; href: string };
  source?: string;
  about: string[];
  features: string[];
  highlight?: { title: string; body?: string; points?: string[] };
  extras?: { title: string; body?: string; points?: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "planit",
    title: "Planit",
    tagline: "Ready to plan your trip? A comprehensive travel planning application.",
    summary: "A responsive travel planner for building itineraries, tracking budgets and sharing trips.",
    image: planit,
    accent: "text-blue-600 dark:text-blue-400",
    category: "Travel",
    type: "Web Application",
    year: "2024",
    status: "Live",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    live: { label: "Live Demo", href: "https://planit-planner.vercel.app/" },
    about: [
      "Planit is a comprehensive travel planning application designed to help users organize and plan their trips efficiently. The application provides an intuitive interface for creating detailed itineraries, managing travel expenses, and discovering new destinations.",
      "Built with modern web technologies, Planit offers a seamless user experience with responsive design that works across all devices. Users can easily add destinations, plan activities, set budgets, and share their itineraries with travel companions.",
    ],
    features: [
      "Interactive trip planning interface",
      "Budget tracking and expense management",
      "Collaborative trip sharing",
      "Destination recommendations",
      "Mobile-responsive design",
    ],
  },
  {
    slug: "musawarah",
    title: "Musawarah",
    tagline: "Autodebit donation app: making charitable giving effortless.",
    summary: "An autodebit donation platform that makes recurring charitable giving automatic and transparent.",
    image: musawarah,
    accent: "text-teal-600 dark:text-teal-400",
    category: "Social Impact",
    type: "Web Application",
    year: "2023",
    status: "Live",
    tech: ["Next.js", "Node.js", "iFortePay API", "TailwindCSS"],
    live: { label: "Live Demo", href: "https://musawarah.vercel.app/" },
    about: [
      "Musawarah is an innovative autodebit donation platform that revolutionizes charitable giving by making it automatic, transparent, and accessible. The application connects donors with verified charitable organizations and enables seamless recurring donations through automated payment systems.",
      "Built with social impact in mind, Musawarah addresses the challenge of consistent charitable giving by removing the friction of manual donations. Users can set up automatic monthly contributions to their chosen causes, track their impact, and discover new charitable organizations that align with their values.",
      "The platform features comprehensive donation tracking, impact reporting, and a community-driven approach to transparency in charitable giving, ensuring that every donation makes a meaningful difference.",
    ],
    features: [
      "Automated recurring donations",
      "Verified charity organization directory",
      "Impact tracking and reporting",
      "Secure payment processing",
      "Community engagement features",
      "Donation history and analytics",
    ],
    highlight: {
      title: "Social Impact",
      body: "Musawarah aims to increase charitable giving consistency by 40% through automated donations, making it easier for individuals to support causes they care about without the burden of remembering to donate manually. The platform has facilitated over $50,000 in donations to various verified charitable organizations.",
    },
    extras: [
      {
        title: "Recognition",
        body: "Featured in local tech meetups as an innovative solution for automated charitable giving.",
      },
    ],
  },
  {
    slug: "shiny-app",
    title: "USA EV Dashboard",
    tagline: "Shiny app data visualization dashboard using R.",
    summary: "An interactive R Shiny dashboard exploring electric vehicle adoption across the United States.",
    image: shinyapp,
    accent: "text-sky-600 dark:text-sky-400",
    category: "Data Science",
    type: "Data Dashboard",
    year: "2024",
    status: "Live",
    tech: ["R", "Shiny", "ggplot2", "Plotly", "Leaflet", "DT", "dplyr"],
    live: { label: "Live Dashboard", href: "https://radithyama.shinyapps.io/home/" },
    about: [
      "The USA Electric Vehicle Dashboard is an interactive data visualization application built using R Shiny, designed to provide comprehensive insights into the electric vehicle landscape across the United States. This dashboard transforms complex EV adoption data into intuitive, interactive visualizations.",
      "The application leverages real-world datasets to showcase trends in electric vehicle registrations, geographic distribution, manufacturer market share, and temporal patterns in EV adoption. Users can explore data through multiple interactive filters and visualization types, making it an invaluable tool for researchers, policymakers, and industry professionals.",
      "Built with statistical rigor and user experience in mind, the dashboard demonstrates advanced data analysis capabilities while maintaining accessibility for users with varying technical backgrounds.",
    ],
    features: [
      "Interactive geographic mapping of EV distribution",
      "Time series analysis of adoption trends",
      "Manufacturer market share analysis",
      "Dynamic filtering and data exploration",
      "Statistical summaries and insights",
      "Downloadable reports and visualizations",
    ],
    highlight: {
      title: "Data Insights",
      body: "The dashboard reveals key trends in US electric vehicle adoption, including:",
      points: [
        "Exponential growth in EV registrations from 2010–2024",
        "California leading in total EV adoption with over 40% market share",
        "Tesla maintaining market dominance with 65% of all EVs",
        "Emerging trends in commercial and fleet electrification",
        "Regional variations in EV adoption rates and preferences",
      ],
    },
    extras: [
      {
        title: "Data Sources",
        points: ["US Department of Energy", "State DMV Records", "EV Registration Databases", "Manufacturer Sales Data"],
      },
      {
        title: "Academic Impact",
        body: "This dashboard was developed as part of advanced data visualization coursework and has been used by researchers studying EV adoption patterns.",
      },
    ],
  },
  {
    slug: "snake-game",
    title: "Snake Game",
    tagline: "A classic Snake Game built to practice coding logic, algorithms and interactive web development.",
    summary: "The classic arcade game rebuilt to sharpen game-loop logic, state management and algorithms.",
    image: snakeGame,
    accent: "text-emerald-600 dark:text-emerald-400",
    category: "Learning / Fun",
    type: "Game / Web Application",
    year: "2024",
    status: "Live",
    tech: ["Next.js", "React", "JavaScript", "TailwindCSS"],
    live: { label: "Play Snake Game", href: "https://snake.radithyama.app/" },
    source: "https://github.com/radithyamirza/snake-game",
    about: [
      "Snake Game is a web-based recreation of the classic arcade game. The project was built to practice coding logic, state management, and interactive UI design. The player controls a snake that moves around the board, eats food to grow longer, and must avoid colliding with itself or the walls.",
      "The game features smooth controls, a responsive grid, and a simple scoring system. It is a great exercise for learning about game loops, keyboard events, collision detection, and dynamic rendering in web development.",
      "Try to beat your high score and challenge your friends! The project is open source and available for anyone interested in learning or improving their coding skills.",
    ],
    features: [
      "Classic snake movement and growth mechanics",
      "Responsive game board for desktop and mobile",
      "Keyboard controls (arrow keys)",
      "Score tracking and high score display",
      "Game over and restart functionality",
      "Simple, clean UI design",
    ],
    highlight: {
      title: "Learning Outcomes",
      body: "Building Snake Game helped reinforce concepts such as state management, event handling, and rendering logic in React/Next.js. It is a fun way to practice algorithms and problem-solving for aspiring developers.",
    },
    extras: [
      {
        title: "Recognition",
        body: "Used as a teaching example for basic game logic and algorithms in web development workshops.",
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
