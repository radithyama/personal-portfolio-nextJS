"use client"

import Image from "@/node_modules/next/image";
import pp from "../public/portfolio-profile-pic.jpeg";
import ThemeToggle from "@/components/ui/theme-toggle";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";



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
          </section>
        </main>
      </div>
    </div>
  );
}
