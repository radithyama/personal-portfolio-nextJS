"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import planit from "../../../public/planit-webpage.png";

export default function PlanitDetail() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 py-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent mb-4">
            Planit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Ready to plan your trip? A comprehensive travel planning application
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://planit-planner.vercel.app/" target="_blank">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 text-white">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            </Link>
            <Link href="#" target="_blank">
              <Button variant="outline" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                Source Code
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image 
                src={planit} 
                alt="Planit Travel Planner" 
                className="w-full h-auto rounded-lg"
                priority
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12"
        >
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Planit is a comprehensive travel planning application designed to help users organize and plan their trips efficiently. 
                The application provides an intuitive interface for creating detailed itineraries, managing travel expenses, and discovering new destinations.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Built with modern web technologies, Planit offers a seamless user experience with responsive design that works across all devices. 
                Users can easily add destinations, plan activities, set budgets, and share their itineraries with travel companions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-rose-600 to-sky-500 rounded-full"></span>
                  Interactive trip planning interface
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-rose-600 to-sky-500 rounded-full"></span>
                  Budget tracking and expense management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-rose-600 to-sky-500 rounded-full"></span>
                  Collaborative trip sharing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-rose-600 to-sky-500 rounded-full"></span>
                  Destination recommendations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-rose-600 to-sky-500 rounded-full"></span>
                  Mobile-responsive design
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Details */}
          <div className="space-y-6">
            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React.js</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Express.js</span>
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">MongoDB</span>
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">TailwindCSS</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Project Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Status:</span>
                    <span className="font-medium">Live</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Type:</span>
                    <span className="font-medium">Web Application</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Year:</span>
                    <span className="font-medium">2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-8 border-t border-gray-200 dark:border-zinc-800"
        >
          <p className="text-gray-500">Want to see more projects?</p>
          <Link href="/">
            <Button variant="ghost" className="mt-2">
              Back to Portfolio
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
