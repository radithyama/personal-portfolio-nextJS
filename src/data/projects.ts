import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Boxes, Cloud, Cpu, Database, FileSearch, KeyRound, LayoutDashboard, ListTree, Radio, ScanLine, Send, Server, Upload,
} from "lucide-react";
import uldpulseOps from "@/assets/images/projects/uldpulse-operations.png";
import uldpulseNetwork from "@/assets/images/projects/uldpulse-network.png";
import uldpulseSoc from "@/assets/images/projects/uldpulse-soc.png";
import forensicsResults from "@/assets/images/projects/forensics-results.png";
import forensicsSimulation from "@/assets/images/projects/forensics-simulation.png";
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
  featured?: boolean;
  /** Plain-language framing of the problem, for non-technical readers */
  problem?: string;
  metrics?: { value: string; label: string }[];
  /** Step-by-step data flow, rendered as a diagram */
  flow?: { title: string; intro?: string; steps: { icon: LucideIcon; title: string; tech: string; body: string }[] };
  safeguards?: { title: string; body: string }[];
  gallery?: { image: StaticImageData; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "uldpulse",
    featured: true,
    title: "ULDPulse",
    tagline:
      "Real-time air-cargo tracking: event-driven Go microservices with chaos-tested delivery and SOC-ready security telemetry.",
    summary:
      "Tracks every air-cargo container live, from warehouse scan to aircraft hold, and loses zero data through a Kafka outage.",
    image: uldpulseOps,
    accent: "text-cyan-700 dark:text-cyan-400",
    category: "Real-time Systems · Security",
    type: "Distributed System / Web App",
    year: "2026",
    status: "Live",
    tech: ["Go", "Apache Kafka", "PostgreSQL", "Redis", "WebSockets", "Next.js", "Auth.js", "Docker", "Google Cloud", "GitHub Actions"],
    live: { label: "Try the live demo", href: "https://uldpulse.radithyama.site" },
    source: "https://github.com/radithyama/uld-tracking-engine",
    problem:
      "At an airport cargo terminal, freight travels in Unit Load Devices (ULDs): the pallets and containers that slot into an aircraft's hold. Ground teams need to know where every ULD is, whether it is too heavy for its spot on the aircraft, and whether the aircraft will balance. They need that live, not in a spreadsheet updated after the fact, because a lost scan can mean a missed flight or an unsafe load.",
    about: [
      "ULDPulse is an event-driven platform for air-cargo ground operations. Warehouse RFID and barcode scanners stream telemetry into a Go ingestion API. Kafka buffers the stream, a stream processor records every scan in PostgreSQL and projects live state into Redis, and a WebSocket server pushes each change to the operations dashboard within milliseconds.",
      "On the dashboard, ground handlers see ULD positions on a warehouse map, loadmasters plan each aircraft's load with a centre-of-gravity optimizer, and security auditors triage live SOC alerts. A simulated multi-airport network flies ULDs between hubs, so the whole system can be explored in a browser.",
      "It is designed for failure: a Kafka outage loses no telemetry, and every service emits SIEM-ready security events.",
    ],
    metrics: [
      { value: "5,551", label: "Scans acknowledged during a Kafka crash test" },
      { value: "0", label: "Lost or duplicated, verified scan-by-scan" },
      { value: "3,017", label: "Scans safely buffered to disk while Kafka was down" },
      { value: "6", label: "Airports in the simulated cargo network" },
    ],
    flow: {
      title: "How a scan travels through the system",
      intro: "Every container scan follows the same path, from a handheld scanner on the warehouse floor to the dashboard, in milliseconds.",
      steps: [
        { icon: ScanLine, title: "Scanners", tech: "RFID / barcode", body: "Warehouse scanners send each scan (container id, weight, location, flight) over HTTPS with an API key." },
        { icon: Server, title: "Ingest API", tech: "Go", body: "Authenticates the scanner, validates the batch and publishes it to Kafka. A 202 response means the scan is durable." },
        { icon: Boxes, title: "Event stream", tech: "Apache Kafka", body: "Six partitions keyed by container id: every container's scans stay in order while different containers process in parallel." },
        { icon: Cpu, title: "Stream processor", tech: "Go consumer group", body: "Applies each scan in one database transaction, ignores duplicates by event id, and runs the weight and security detections." },
        { icon: Database, title: "Storage", tech: "PostgreSQL + Redis", body: "PostgreSQL is the permanent record. Redis holds live state, updated and broadcast in one atomic step so stale data never wins." },
        { icon: Radio, title: "Realtime hub", tech: "Go WebSockets", body: "Pushes every change to connected dashboards. Slow clients are dropped and resync from a snapshot instead of slowing others." },
        { icon: LayoutDashboard, title: "Dashboard", tech: "Next.js + Auth.js", body: "Warehouse map, flight loads, CG optimizer and SOC console, each gated by the signed-in user's role." },
      ],
    },
    safeguards: [
      { title: "No data loss when Kafka fails", body: "If the broker is unreachable, ingest fsyncs every batch to a disk spool before acknowledging it, then replays it in order once Kafka returns. A chaos test freezes and kills Kafka under load, then reconciles every acknowledged scan against the database." },
      { title: "Effectively-once processing", body: "Delivery is at-least-once, but every scan carries an event id that the database treats as unique, so retries and redeliveries never double-count a container." },
      { title: "Security telemetry for a SOC", body: "Every service logs structured JSON in Elastic Common Schema with stable rule IDs: impossible travel (a container 'seen' at two airports too quickly), weight tampering, invalid or revoked API keys and brute force." },
      { title: "Role-based access, enforced twice", body: "Ground Handler, Loadmaster and Security Auditor roles are checked in the Next.js backend-for-frontend and again in Go with a short-lived signed token. API keys are stored only as SHA-256 hashes." },
    ],
    features: [
      "Live warehouse map and container manifest",
      "Overweight alerts against each aircraft position's limit",
      "Centre-of-gravity load optimizer for B737, A330 and B777F",
      "Multi-airport network with live ETAs",
      "SOC console with acknowledge, resolve and audit log",
      "Sandbox that fires real detections through the pipeline",
    ],
    gallery: [
      { image: uldpulseOps, caption: "Operations floor: every container's position in the warehouse, updated live over WebSockets." },
      { image: uldpulseNetwork, caption: "Flight network: containers in the air between hubs, with live ETAs." },
      { image: uldpulseSoc, caption: "SOC console: security alerts by rule family, with triage actions and an audit trail." },
    ],
    extras: [
      {
        title: "Try it yourself",
        body: "Open the live demo and pick a role on the sign-in page: Ground Handler, Loadmaster or Security Auditor. Each sees a different slice of the operation.",
      },
    ],
  },
  {
    slug: "memory-forensics-triage",
    featured: true,
    title: "Memory Forensics Triage API",
    tagline:
      "Upload a memory image, analyse it with Volatility 3 in an isolated serverless worker, and get an interactive process tree with automated anomaly triage.",
    summary:
      "A serverless forensics pipeline on Google Cloud that analyses a RAM dump and automatically flags suspicious processes.",
    image: forensicsResults,
    accent: "text-emerald-600 dark:text-emerald-400",
    category: "Digital Forensics · Cloud Security",
    type: "Serverless API / Web App",
    year: "2026",
    status: "Live",
    tech: ["Java 21", "Spring Boot WebFlux", "Python", "Volatility 3", "Next.js", "Cloud Run", "Cloud Storage", "Pub/Sub", "Secret Manager"],
    live: { label: "Try Simulation Mode", href: "https://frontend-tdmtihd6yq-et.a.run.app" },
    source: "https://github.com/radithyama/forensics-triage-api",
    problem:
      "When a computer is compromised, investigators capture its memory (RAM): a multi-gigabyte snapshot of everything that was running. Spotting the one malicious process among hundreds is slow, manual work, and the evidence has to be handled carefully so it stays trustworthy. This project automates the first pass: upload the image and it highlights what looks wrong.",
    about: [
      "The Memory Forensics Triage API takes a memory image, runs a Volatility 3 plugin against it in an isolated worker, and returns an interactive process tree with automated anomaly triage.",
      "It is fully serverless on Google Cloud: three Cloud Run services, one Cloud Storage bucket and Pub/Sub. Every component scales to zero, so an idle deployment costs close to nothing, and the browser uploads gigabyte-sized evidence straight to storage so it never passes through an application server.",
    ],
    metrics: [
      { value: "6 GB", label: "Largest memory image, uploaded straight to Cloud Storage" },
      { value: "5", label: "Automated triage rules for suspicious processes" },
      { value: "0", label: "Idle instances: every service scales to zero" },
      { value: "1 day", label: "Maximum evidence lifetime, enforced by the bucket" },
    ],
    flow: {
      title: "How an analysis works",
      intro: "Evidence goes straight to storage, the analysis runs privately, and the results come back as a process tree with findings.",
      steps: [
        { icon: KeyRound, title: "Register the job", tech: "Browser", body: "The investigator picks a memory image and a Volatility plugin. The browser registers the job with an access code." },
        { icon: Server, title: "API gateway", tech: "Spring Boot WebFlux · Cloud Run", body: "Validates the request, rate-limits it and returns a signed upload URL that expires in 5 minutes." },
        { icon: Upload, title: "Direct upload", tech: "Cloud Storage", body: "The browser uploads the multi-gigabyte image straight to the bucket. Size and content type are enforced by the signature itself." },
        { icon: Send, title: "Queue", tech: "Pub/Sub", body: "Starting the job pins the exact file version and checksum, then pushes a message to the private worker with a signed identity token." },
        { icon: FileSearch, title: "Analysis", tech: "Python · Volatility 3", body: "The worker re-verifies the checksum, then runs Volatility in a sandboxed child process with a hard time limit." },
        { icon: ListTree, title: "Automated triage", tech: "Rule engine", body: "Flags look-alike names, unexpected parents, a second lsass.exe, Office spawning system tools, and orphaned processes. Then it deletes the evidence." },
        { icon: Cloud, title: "Results", tech: "Next.js", body: "The browser polls for status and shows the process tree beside the findings, each with a plain-language explanation." },
      ],
    },
    safeguards: [
      { title: "Chain of custody", body: "Starting a job pins the exact Cloud Storage object version and its MD5. The worker re-computes MD5 and SHA-256 and refuses to analyse a file that doesn't match." },
      { title: "Evidence hygiene", body: "Evidence is deleted from storage and the worker's disk as soon as a job finishes. The bucket also deletes anything older than a day, with soft-delete off, so deleted dumps are really gone." },
      { title: "Isolation and least privilege", body: "Volatility runs as a non-root child process with a stripped environment and no core dumps. Each service has its own identity with permissions scoped to single resources, and the worker isn't publicly reachable." },
      { title: "Abuse and cost controls", body: "A constant-time access-code check, 10 jobs per hour per IP (wrong codes count too), strict CORS, signed 10 MB–6 GB upload limits and capped instances keep the public demo safe and cheap." },
    ],
    features: [
      "Interactive, filterable process tree",
      "Findings ranked by severity with explanations",
      "Six Volatility plugins (Windows and Linux)",
      "Simulation Mode: try it with no upload",
      "Live Trial with real uploads behind an access code",
      "SHA-256 of the verified evidence in every report",
    ],
    gallery: [
      { image: forensicsResults, caption: "Triage results: the process tree next to automated findings, with a second lsass.exe flagged as high severity." },
      { image: forensicsSimulation, caption: "Simulation Mode replays a recorded analysis of a 4 GB Windows 10 image, so anyone can try it without uploading evidence." },
    ],
    extras: [
      {
        title: "Try it yourself",
        body: "Open the app and choose 'Use Simulation Mode', then 'Run simulated analysis'. Live uploads need an access code.",
      },
    ],
  },
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
