"use client"

import Image from "@/node_modules/next/image";
import pp from "../public/portfolio-profile-pic.jpeg";
import planit from "../public/planit-webpage.png"
import snakeGame from "../public/snake-game.png"
import musawarah from "../public/musawarah-webpage.png"
import shinyapp from "../public/shiny-app.png"
import ThemeToggle from "@/components/ui/theme-toggle";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium, FaReact, FaMobileAlt, FaAws, FaGoogle, FaDocker, FaShieldAlt } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

// Removed unused imports: Swiper, SwiperSlide, Navigation, Pagination, Autoplay, Sparkles, ChevronLeft, ChevronRight



export default function Home() {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSkill, setModalSkill] = useState<null | string>(null);

  // Skill details
  const skillDetails: Record<string, { title: string; description: string }> = {
    "Web Development": {
      title: "Web Development",
      description:
        "Built and maintained scalable web applications using React.js, Next.js, Node.js, and Spring Boot. Experience includes designing REST APIs, responsive UIs, authentication, and integrating with cloud services.",
    },
    "Mobile Development": {
      title: "Mobile Development",
      description:
        "Developed mobile apps using React Native and Flutter. Delivered features such as push notifications, secure authentication, and seamless API integration for fintech and productivity apps.",
    },
    AWS: {
      title: "AWS",
      description:
        "Deployed and managed applications on AWS using EC2, S3, RDS, Lambda, and IAM. Automated CI/CD pipelines with Jenkins and GitHub Actions for robust cloud deployments.",
    },
    "Google Cloud": {
      title: "Google Cloud",
      description:
        "Utilized Google Cloud Platform (GCP) services including Compute Engine, Cloud Functions, Pub/Sub, and Firestore for scalable backend and data processing solutions.",
    },
    "DevOps / Docker": {
      title: "DevOps / Docker",
      description:
        "Containerized applications with Docker, orchestrated deployments using Kubernetes, and implemented CI/CD pipelines for automated testing and deployment.",
    },
    Cybersecurity: {
      title: "Cybersecurity",
      description:
        "Applied secure coding practices, performed vulnerability assessments, and researched secure software development as part of a Master’s in Cybersecurity.",
    },
  };

  // Portfolio slider state
  const portfolioItems = [
    {
      image: planit,
      alt: "Planit",
      title: "Planit",
      titleColor: "text-rose-600 dark:text-rose-400",
      description: "A responsive webpage for Planit, showcasing modern web development techniques.",
      link: "/projects/planit",
    },
    {
      image: musawarah,
      alt: "Musawarah",
      title: "Musawarah",
      titleColor: "text-indigo-600 dark:text-indigo-400",
      description: "A dynamic donation webpage for Musawarah, built with a focus on user experience and performance.",
      link: "/projects/musawarah",
    },
    {
      image: shinyapp,
      alt: "USA EV Dashboard",
      title: "USA EV Dashboard",
      titleColor: "text-sky-600 dark:text-sky-400",
      description: "An interactive web application built with Shiny, demonstrating data visualization and analysis capabilities.",
      link: "/projects/shiny-app",
    },
    {
      image: snakeGame, // Reuse planit image for Snake Game, or replace with a snake image if available
      alt: "Snake Game",
      title: "Snake Game",
      titleColor: "text-green-600 dark:text-green-400",
      description: "A simple Snake Game project created to train code logic and algorithm skills.",
      link: "/projects/snake-game",
    },
  ];

  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const handlePrev = () => {
    setDirection(-1);
    setPortfolioIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setDirection(1);
    setPortfolioIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-2 py-16">
        <div className="flex items-center justify-between mb-12">

          {/* PROFILE PICTURE */}
          <motion.header 
          initial={{opacity: 0, x: -100}}
          animate={{opacity:1, x: 0}}
          transition={{duration: 0.5}}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image src={pp} alt ="profile picture" className="cursor-pointer
              transition-all duration-300 hover:scale-110"></Image>
              
            </div>
          </motion.header>

          {/* THEME BUTTON */}
          <motion.header
          initial={{opacity: 0, x: -100}}
          animate={{opacity:1, x: 0}}
          transition={{duration: 0.5}}
          >
            <ThemeToggle />
          </motion.header>
        </div>
        
        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
            initial={{opacity: 0, x: 100}}
            animate={{opacity:1, x: 0}}
            transition={{duration: 0.5}}
            className= "space-y-1">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Radithya Mirza</h1>
              <p className="text-gray-600 dark:text-gray-400">Jakarta, Indonesia</p>
            </motion.div>

            <motion.div
            initial={{opacity: 0, x: -100}}
            animate={{opacity:1, x: 0}}
            transition={{duration: 0.5}}
            className="space-y-3">
              <h2 className="text-lg font-semibold">
                Bridging Software Development and Cybersecurity Excellence
              </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Experienced in <span className="text-black dark:text-white">full-stack development</span>, I&apos;m providing professional expertise in building robust, scalable applications that prioritize both functionality and security.
                Currently contributing as a Backend Developer, I specialize in crafting end-to-end solutions using technologies such as <span className="text-black dark:text-white">Java, Spring Boot, Apache Kafka Node.js, React.js, and Docker</span>.
                My work involves designing backend architectures, developing responsive frontend interfaces, and deploying containerized applications with Kubernetes.
                Additionally, I leverage tools like Cloud Services like <span className="text-black dark:text-white">Google Cloud Platform, AWS and Jenkins</span> to ensure seamless integration and deployment, maintaining a balance between rapid development and high-quality delivery.
              </p>
              
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              Alongside my professional experience, I am pursuing a Master’s in Cybersecurity at Monash University, which reflects my growing interest in cybersecurity research. 
              My academic focus is on enhancing secure software development processes, particularly addressing vulnerabilities like zero-day attacks and improving dependency management practices. 
              By integrating my professional expertise with cutting-edge cybersecurity research, I aim to drive innovations that empower organizations to build more secure and resilient digital products.
              </p>
            </motion.div>

            {/* SOCIAL MEDIA & RESUME */}

            <motion.div
            initial={{opacity: 0, x: 50}}
            animate={{opacity:1, x: 0}}
            transition={{duration: 0.5}}
            className= "flex items-center gap-3">
              <Button className="rounded-full bg-gradient-to-r from-rose-600
              via-indigo-500 to-sky-500 text-white transition-transform hover:scale-105">
                Resume
              </Button>
              <Link href="https://github.com/radithyamirza" className="text-gray-600 dark:text-gray-400 hover:text-black
              dark:hover:text-white transition-colors">
                <FaGithub className="w-6 h-6"></FaGithub>
              </Link>
              <Link href="https://medium.com/@radithyamirza" className="text-gray-600 dark:text-gray-400 hover:text-black
              dark:hover:text-white transition-colors">
                <FaMedium className="w-6 h-6"></FaMedium>
              </Link>
              <Link href="https://www.linkedin.com/in/radithya-mirza-aribowo/" className="text-gray-600 dark:text-gray-400 hover:text-black
              dark:hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6"></FaLinkedin>
              </Link>
            </motion.div>

            {/* WORK EXPERIENCE */}

            <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity:1, y: 0}}
            transition={{duration: 0.5}}
            className= "space-y-8">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
              via-indigo-500 to-sky-500 bg-clip-text text-transparent
              inline-block">Experience</h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">July, 2024 - Present</p>
                  <p className="font-medium">Backend Engineer</p>
                  <p className="text-blue-600 dark:text-blue-400">Bank Negara Indonesia</p>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Developing Wondr by BNI backend system, including QRIS Domestic & International Transaction,
                  NFC Transaction, Bill Payment, Wealth Management System and Personal Financial Insight
                  for the customer.
                  </p>

                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">February, 2022 - July, 2024</p>
                  <p className="font-medium">Product Engineer</p>
                  <p className="text-blue-600 dark:text-blue-400">AstraPay</p>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Developing AstraPay, including main features such as account balance transfer,
                  QRIS Domestic Transaction, Disbursement, Bank Top-Ups using virtual account, 
                  Open API for third-parties integration, and backoffice dashboard for reports &
                  transaction monitoring.
                  </p>

                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">August, 2021, - December, 2021</p>
                  <p className="font-medium">Product Engineering Intern</p>
                  <p className="text-blue-600 dark:text-blue-400">AstraPay</p>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Developing AstraPay&apos;s merchant transaction dashboard, contributed to the administration
                  process during acquiring public license from national regulatory organization.
                  </p>

                </div>
              </div>
            </div>
            </motion.section>

            {/* EDUCATION */}

            <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity:1, y: 0}}
            transition={{duration: 0.5}}
            className= "space-y-8">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
              via-indigo-500 to-sky-500 bg-clip-text text-transparent
              inline-block">Education</h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">2024-2026</p>
                  <p className="font-medium">Masters of Cybersecurity</p>
                  <p className="text-blue-600 dark:text-blue-400">Monash University</p>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  GPA : 3.50 / 4.00
                  </p>

                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">2020 - 2024</p>
                  <p className="font-medium">Bachelor&apos;s of Science, Computer Science</p>
                  <p className="text-blue-600 dark:text-blue-400">BINUS University</p>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  GPA : 3.64 / 4.00
                  </p>

                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">2017 - 2020</p>
                  <p className="font-medium">High School Degree</p>
                  <p className="text-blue-600 dark:text-blue-400">SMA Negeri 6 Jakarta</p>

                </div>
              </div>
            </div>
            </motion.section>

            {/* EXPERIENCES */}
            <motion.section
              initial={{opacity: 0, y: 100}}
              animate={{opacity:1, y: 0}}
              transition={{duration: 0.5}}
              className="space-y-8"
            >
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
                via-indigo-500 to-sky-500 bg-clip-text text-transparent
                inline-block">Experiences</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {/* Web Development */}
                <div className="relative group">
                  <Card
                    className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 flex flex-col items-center justify-center p-6 h-48 min-h-[12rem] cursor-pointer"
                    onClick={() => { setModalSkill("Web Development"); setModalOpen(true); }}
                  >
                    <CardContent className="flex flex-col items-center justify-center h-full w-full text-center gap-2 p-0">
                      <FaReact className="text-4xl mb-2 text-indigo-500" />
                      <h3 className="font-medium text-center">Web Development</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">4+ years</p>
                    </CardContent>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </Card>
                </div>
                {/* Mobile Development */}
                <div className="relative group">
                  <Card
                    className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 flex flex-col items-center justify-center p-6 h-48 min-h-[12rem] cursor-pointer"
                    onClick={() => { setModalSkill("Mobile Development"); setModalOpen(true); }}
                  >
                    <CardContent className="flex flex-col items-center justify-center h-full w-full text-center gap-2 p-0">
                      <FaMobileAlt className="text-4xl mb-2 text-rose-500" />
                      <h3 className="font-medium text-center">Mobile Development</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">2+ years</p>
                    </CardContent>
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </Card>
                </div>
                {/* AWS */}
                <div className="relative group">
                  <Card
                    className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 flex flex-col items-center justify-center p-6 h-48 min-h-[12rem] cursor-pointer"
                    onClick={() => { setModalSkill("AWS"); setModalOpen(true); }}
                  >
                    <CardContent className="flex flex-col items-center justify-center h-full w-full text-center gap-2 p-0">
                      <FaAws className="text-4xl mb-2 text-yellow-500" />
                      <h3 className="font-medium text-center">AWS</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">2+ years</p>
                    </CardContent>
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </Card>
                </div>
                {/* GCP */}
                <div className="relative group">
                  <Card
                    className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 flex flex-col items-center justify-center p-6 h-48 min-h-[12rem] cursor-pointer"
                    onClick={() => { setModalSkill("Google Cloud"); setModalOpen(true); }}
                  >
                    <CardContent className="flex flex-col items-center justify-center h-full w-full text-center gap-2 p-0">
                      <FaGoogle className="text-4xl mb-2 text-sky-500" />
                      <h3 className="font-medium text-center">Google Cloud</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">2+ years</p>
                    </CardContent>
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </Card>
                </div>
                {/* DevOps / Docker */}
                <div className="relative group">
                  <Card
                    className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 flex flex-col items-center justify-center p-6 h-48 min-h-[12rem] cursor-pointer"
                    onClick={() => { setModalSkill("DevOps / Docker"); setModalOpen(true); }}
                  >
                    <CardContent className="flex flex-col items-center justify-center h-full w-full text-center gap-2 p-0">
                      <FaDocker className="text-4xl mb-2 text-blue-500" />
                      <h3 className="font-medium text-center">DevOps / Docker</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">2+ years</p>
                    </CardContent>
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </Card>
                </div>
                {/* Cybersecurity */}
                <div className="relative group">
                  <Card
                    className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 flex flex-col items-center justify-center p-6 h-48 min-h-[12rem] cursor-pointer"
                    onClick={() => { setModalSkill("Cybersecurity"); setModalOpen(true); }}
                  >
                    <CardContent className="flex flex-col items-center justify-center h-full w-full text-center gap-2 p-0">
                      <FaShieldAlt className="text-4xl mb-2 text-green-500" />
                      <h3 className="font-medium text-center">Cybersecurity</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">1+ years</p>
                    </CardContent>
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </Card>
                </div>
              </div>
              {/* Modal */}
              {modalOpen && modalSkill && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                  <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg max-w-md w-full p-6 relative">
                    <button
                      className="absolute top-3 right-3 text-gray-500 hover:text-black dark:hover:text-white text-xl"
                      onClick={() => setModalOpen(false)}
                      aria-label="Close"
                    >
                      ×
                    </button>
                    <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
                      {skillDetails[modalSkill].title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">{skillDetails[modalSkill].description}</p>
                  </div>
                </div>
              )}
            </motion.section>
          </section>

          {/* PORTFOLIO */}
          <section className="space-y-10">
            <motion.div
              initial={{opacity: 0, y: 100}}
              animate={{opacity:1, y: 0}}
              transition={{duration: 0.5}}
              className="space-y-3"
            >
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Portfolio</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Explore my projects that showcase my skills in software development and cybersecurity.
              </p>
            </motion.div>

            {/* PORTFOLIO SLIDER */}
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.5}}
              className="flex flex-col items-center gap-6"
            >
                    <div className="flex items-center w-full justify-center gap-4 aspect-video">
                {/* Prev Arrow Outside */}
                <button
                  onClick={handlePrev}
                  className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-full p-3 shadow hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors flex-shrink-0"
                  aria-label="Previous"
                  style={{zIndex: 2}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-gray-700 dark:text-gray-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                {/* Slider Item with Animation */}
                <motion.div
                  key={portfolioIndex}
                  initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full"
                >
                  <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer w-full max-w-2xl mx-auto">
                    {/* Show image at natural aspect ratio, responsive */}
                    <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                      <Image src={portfolioItems[portfolioIndex].image} alt={portfolioItems[portfolioIndex].alt} fill className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105" style={{objectPosition: 'center'}} />
                    </div>
                    {/* Overlay with title/desc on hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                      <div className="text-center px-6">
                        <h3 className={`text-2xl font-semibold mb-2 ${portfolioItems[portfolioIndex].titleColor}`}>{portfolioItems[portfolioIndex].title}</h3>
                        <p className="text-gray-200 dark:text-gray-300 mb-4 text-base">
                          {portfolioItems[portfolioIndex].description}
                        </p>
                        <Link href={portfolioItems[portfolioIndex].link} className="text-white font-medium underline">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* Next Arrow Outside */}
                <button
                  onClick={handleNext}
                  className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-full p-3 shadow hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors flex-shrink-0"
                  aria-label="Next"
                  style={{zIndex: 2}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-gray-700 dark:text-gray-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Slider indicators */}
              <div className="flex gap-2 mt-2">
                {portfolioItems.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${portfolioIndex === idx ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-zinc-700'} transition-colors`}
                    onClick={() => { setDirection(idx > portfolioIndex ? 1 : -1); setPortfolioIndex(idx); }}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </section>
        </main>
        {/* CONTACT SECTION */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-rose-600/10 via-indigo-500/10 to-sky-500/10 rounded-xl p-6 sm:p-8 text-center border border-gray-200 dark:border-zinc-800 flex flex-col items-center justify-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Want to collaborate?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base sm:text-lg">I'm always open to new opportunities, projects, and collaborations. Feel free to reach out!</p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="mailto:radithyamirza00@gmail.com"
                className="group inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <svg
                  className="w-5 h-5 mr-2 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}