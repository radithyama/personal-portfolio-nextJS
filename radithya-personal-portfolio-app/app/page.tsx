"use client"

import Image from "@/node_modules/next/image";
import pp from "../public/portfolio-profile-pic.jpeg";
import loading from"../public/loading.png"
import ThemeToggle from "@/components/ui/theme-toggle";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium, FaTruckLoading } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";



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
                Experienced in <span className="text-black dark:text-white">full-stack development</span>, I'm providing professional expertise in building robust, scalable applications that prioritize both functionality and security.
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
                  Developing AstraPay's merchant transaction dashboard, contributed to the administration
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
                  <p className="font-medium">Bachelor's of Science, Computer Science</p>
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

            {/* PROJECTS */}

            <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity:1, y: 0}}
            transition={{duration: 0.5}}
            className= "space-y-5">

              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
              via-indigo-500 to-sky-500 bg-clip-text text-transparent
              inline-block">Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 
                dark:border-zinc-800 transition-transform duration-300 hover:scale-105
                cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={loading} alt="still loading" className="rounded-lg mb-4"/>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Coming Soon</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Cool Application incoming! </p>
                      </div>
                      <Button variant="ghost" size="icon">➜</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-gray-500">©️ 2025 Radithya Mirza Aribowo</p>
            </motion.section>
          </section>
        </main>
      </div>
    </div>
  );
}
