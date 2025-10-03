"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import snakeGame from "../../../public/snake-game.png";

export default function SnakeGameDetail() {
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
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent mb-4">
            Snake Game
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            A classic Snake Game built to practice coding logic, algorithms, and interactive web development. Control the snake, eat the food, and try to beat your high score!
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://snake.radithyama.app/" target="_blank">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-green-600 via-indigo-500 to-sky-500 text-white">
                <ExternalLink className="w-4 h-4" />
                Play Snake Game
              </Button>
            </Link>
            <Link href="https://github.com/radithyamirza/snake-game" target="_blank">
              <Button variant="outline" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                View Source
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
                src={snakeGame} 
                alt="Snake Game" 
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
                Snake Game is a web-based recreation of the classic arcade game. The project was built to practice coding logic, state management, and interactive UI design. The player controls a snake that moves around the board, eats food to grow longer, and must avoid colliding with itself or the walls.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The game features smooth controls, a responsive grid, and a simple scoring system. It is a great exercise for learning about game loops, keyboard events, collision detection, and dynamic rendering in web development.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Try to beat your high score and challenge your friends! The project is open source and available for anyone interested in learning or improving their coding skills.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-600 to-sky-500 rounded-full"></span>
                  Classic snake movement and growth mechanics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-600 to-sky-500 rounded-full"></span>
                  Responsive game board for desktop and mobile
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-600 to-sky-500 rounded-full"></span>
                  Keyboard controls (arrow keys)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-600 to-sky-500 rounded-full"></span>
                  Score tracking and high score display
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-600 to-sky-500 rounded-full"></span>
                  Game over and restart functionality
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-600 to-sky-500 rounded-full"></span>
                  Simple, clean UI design
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Learning Outcomes</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Building Snake Game helped reinforce concepts such as state management, event handling, and rendering logic in React/Next.js. It is a fun way to practice algorithms and problem-solving for aspiring developers.
              </p>
            </div>
          </div>

          {/* Technical Details */}
          <div className="space-y-6">
            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-sm">JavaScript</span>
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
                    <span className="font-medium">Game / Web Application</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Year:</span>
                    <span className="font-medium">2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Category:</span>
                    <span className="font-medium">Learning / Fun</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-600/10 via-indigo-500/10 to-sky-500/10 border-gray-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Recognition</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Used as a teaching example for basic game logic and algorithms in web development workshops.
                </p>
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
