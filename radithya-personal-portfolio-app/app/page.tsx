"use client"

import Image from "@/node_modules/next/image";
import pp from "../public/portfolio-profile-pic.jpeg";
import planit from "../public/planit-webpage.png"
import musawarah from "../public/musawarah-webpage.png"
import shinyapp from "../public/shiny-app.png"
import ThemeToggle from "@/components/ui/theme-toggle";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default function Home() {
  return (
    <div className="min-h-screen bg-white 
    dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
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
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600
              via-indigo-500 to-sky-500 bg-clip-text text-transparent
              inline-block">Radithya Mirza</h1>
              <p className="text-gray-600 dark:text-gray-400">Software Engineer & Cybersecurity Enthusiast</p>
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
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 flex flex-col items-center p-4">
                  <CardContent className="flex flex-col items-center">
                    <span className="text-4xl mb-2 text-indigo-500">
                      {/* FaReact for web dev */}
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#6366F1"/><text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="18" fontFamily="Arial" dy=".3em">{"</>"}</text></svg>
                    </span>
                    <h3 className="font-medium">Web Development</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">4+ years</p>
                  </CardContent>
                </Card>
                {/* Mobile Development */}
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 flex flex-col items-center p-4">
                  <CardContent className="flex flex-col items-center">
                    <span className="text-4xl mb-2 text-rose-500">
                      {/* Mobile icon */}
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="6" width="24" height="28" rx="4" fill="#F43F5E"/><rect x="16" y="30" width="8" height="2" rx="1" fill="white"/></svg>
                    </span>
                    <h3 className="font-medium">Mobile Development</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2+ years</p>
                  </CardContent>
                </Card>
                {/* AWS */}
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 flex flex-col items-center p-4">
                  <CardContent className="flex flex-col items-center">
                    <span className="text-4xl mb-2 text-yellow-500">
                      {/* AWS icon */}
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FBBF24"/><text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="16" fontFamily="Arial" dy=".3em">AWS</text></svg>
                    </span>
                    <h3 className="font-medium">AWS</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2+ years</p>
                  </CardContent>
                </Card>
                {/* GCP */}
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 flex flex-col items-center p-4">
                  <CardContent className="flex flex-col items-center">
                    <span className="text-4xl mb-2 text-sky-500">
                      {/* GCP icon */}
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#0EA5E9"/><text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="16" fontFamily="Arial" dy=".3em">GCP</text></svg>
                    </span>
                    <h3 className="font-medium">Google Cloud</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2+ years</p>
                  </CardContent>
                </Card>
                {/* DevOps / Docker */}
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 flex flex-col items-center p-4">
                  <CardContent className="flex flex-col items-center">
                    <span className="text-4xl mb-2 text-blue-500">
                      {/* Docker icon */}
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#3B82F6"/><text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial" dy=".3em">🐳</text></svg>
                    </span>
                    <h3 className="font-medium">DevOps / Docker</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2+ years</p>
                  </CardContent>
                </Card>
                {/* Cybersecurity */}
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 flex flex-col items-center p-4">
                  <CardContent className="flex flex-col items-center">
                    <span className="text-4xl mb-2 text-green-500">
                      {/* Shield icon */}
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 6L32 10V18C32 27 20 34 20 34C20 34 8 27 8 18V10L20 6Z" fill="#22C55E"/><text x="50%" y="60%" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial" dy=".3em">🔒</text></svg>
                    </span>
                    <h3 className="font-medium">Cybersecurity</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">1+ years</p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* PROJECTS */}

            <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity:1, y: 0}}
            transition={{duration: 0.5}}
            className= "space-y-5">

              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
              via-indigo-500 to-sky-500 bg-clip-text text-transparent
              inline-block">Projects</h2>

              {/* Projects Slider */}
              <div className="relative">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                  }}
                  pagination={{ 
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet !bg-gray-400 !opacity-50',
                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-gradient-to-r !from-rose-600 !via-indigo-500 !to-sky-500 !opacity-100'
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  className="!pb-12"
                >
                  <SwiperSlide>
                    <Link href="/projects/planit">
                      <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 
                      dark:border-zinc-800 transition-transform duration-300 hover:scale-105
                      cursor-pointer h-full">
                        <CardContent className="p-4 h-[280px] flex flex-col">
                          <div className="h-40 mb-4 overflow-hidden rounded-lg">
                            <Image src={planit} alt="Planit" className="w-full h-full object-cover"/>
                          </div>
                          <div className="flex items-center justify-between flex-1">
                            <div className="flex-1 min-w-0 pr-2">
                              <h3 className="font-medium truncate">Planit</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">Ready to plan your trip?</p>
                            </div>
                            <Button variant="ghost" size="icon" className="flex-shrink-0">➜</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                    <Link href="/projects/musawarah">
                      <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 
                      dark:border-zinc-800 transition-transform duration-300 hover:scale-105
                      cursor-pointer h-full">
                        <CardContent className="p-4 h-[280px] flex flex-col">
                          <div className="h-40 mb-4 overflow-hidden rounded-lg">
                            <Image src={musawarah} alt="Musawarah" className="w-full h-full object-cover"/>
                          </div>
                          <div className="flex items-center justify-between flex-1">
                            <div className="flex-1 min-w-0 pr-2">
                              <h3 className="font-medium truncate">Musawarah</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">Autodebit donation app</p>
                            </div>
                            <Button variant="ghost" size="icon" className="flex-shrink-0">➜</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                    <Link href="/projects/shiny-app">
                      <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 
                      dark:border-zinc-800 transition-transform duration-300 hover:scale-105
                      cursor-pointer h-full">
                        <CardContent className="p-4 h-[280px] flex flex-col">
                          <div className="h-40 mb-4 overflow-hidden rounded-lg">
                            <Image src={shinyapp} alt="Radithyama shiny app" className="w-full h-full object-cover"/>
                          </div>
                          <div className="flex items-center justify-between flex-1">
                            <div className="flex-1 min-w-0 pr-2">
                              <h3 className="font-medium truncate">USA Electric Vehicle Dashboard</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">Shiny App Data Visualisation Dashboard Using R</p>
                            </div>
                            <Button variant="ghost" size="icon" className="flex-shrink-0">➜</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                    <Link href="/projects/coming-soon">
                      <Card className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 border-gray-200 
                      dark:border-zinc-700 transition-transform duration-300 hover:scale-105
                      cursor-pointer h-full relative overflow-hidden">
                        <CardContent className="p-4 h-[280px] flex flex-col relative z-10">
                          <div className="h-40 mb-4 bg-gradient-to-br from-rose-100 via-indigo-100 to-sky-100 dark:from-rose-900/20 dark:via-indigo-900/20 dark:to-sky-900/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                            <Sparkles className="w-16 h-16 text-gray-400 dark:text-gray-600" />
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-600/10 via-indigo-500/10 to-sky-500/10 rounded-lg animate-pulse"></div>
                          </div>
                          <div className="flex items-center justify-between flex-1">
                            <div className="flex-1 min-w-0 pr-2">
                              <h3 className="font-medium bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent truncate">Coming Soon...</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">Something amazing is in development</p>
                            </div>
                            <Button variant="ghost" size="icon" className="flex-shrink-0">➜</Button>
                          </div>
                        </CardContent>
                        <div className="absolute top-2 right-2 z-20">
                          <div className="w-3 h-3 bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 rounded-full animate-pulse"></div>
                        </div>
                      </Card>
                    </Link>
                  </SwiperSlide>
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-zinc-800 rounded-full shadow-lg flex items-center justify-center border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors -translate-x-1/2">
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-zinc-800 rounded-full shadow-lg flex items-center justify-center border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors translate-x-1/2">
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <p className="text-gray-500">©️ 2025 Radithya Mirza Aribowo</p>
            </motion.section>
          </section>
        </main>
      </div>
    </div>
  );
}