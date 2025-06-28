"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import shinyapp from "../../../public/shiny-app.png";

export default function ShinyAppDetail() {
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
            USA Electric Vehicle Dashboard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Shiny App Data Visualization Dashboard Using R
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://radithyama.shinyapps.io/home/" target="_blank">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 text-white">
                <ExternalLink className="w-4 h-4" />
                Live Dashboard
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
                src={shinyapp} 
                alt="USA Electric Vehicle Dashboard" 
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The USA Electric Vehicle Dashboard is an interactive data visualization application built using R Shiny, 
                designed to provide comprehensive insights into the electric vehicle landscape across the United States. 
                This dashboard transforms complex EV adoption data into intuitive, interactive visualizations.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The application leverages real-world datasets to showcase trends in electric vehicle registrations, 
                geographic distribution, manufacturer market share, and temporal patterns in EV adoption. Users can 
                explore data through multiple interactive filters and visualization types, making it an invaluable tool 
                for researchers, policymakers, and industry professionals.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Built with statistical rigor and user experience in mind, the dashboard demonstrates advanced data 
                analysis capabilities while maintaining accessibility for users with varying technical backgrounds.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-rose-600 to-sky-500 rounded-full"></span>
                  Interactive geographic mapping of EV distribution
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-rose-600 to-sky-500 rounded-full"></span>
                  Time series analysis of adoption trends
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-rose-600 to-sky-500 rounded-full"></span>
                  Manufacturer market share analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-rose-600 to-sky-500 rounded-full"></span>
                  Dynamic filtering and data exploration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-rose-600 to-sky-500 rounded-full"></span>
                  Statistical summaries and insights
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-rose-600 to-sky-500 rounded-full"></span>
                  Downloadable reports and visualizations
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Data Insights</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The dashboard reveals key trends in US electric vehicle adoption, including:
              </p>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                <li>• Exponential growth in EV registrations from 2010-2024</li>
                <li>• California leading in total EV adoption with over 40% market share</li>
                <li>• Tesla maintaining market dominance with 65% of all EVs</li>
                <li>• Emerging trends in commercial and fleet electrification</li>
                <li>• Regional variations in EV adoption rates and preferences</li>
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
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">R</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Shiny</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">ggplot2</span>
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Plotly</span>
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Leaflet</span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">DT</span>
                    <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm">dplyr</span>
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
                    <span className="font-medium">Data Dashboard</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Year:</span>
                    <span className="font-medium">2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Category:</span>
                    <span className="font-medium">Data Science</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Data Sources</h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>• US Department of Energy</p>
                  <p>• State DMV Records</p>
                  <p>• EV Registration Databases</p>
                  <p>• Manufacturer Sales Data</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-rose-600/10 via-indigo-500/10 to-sky-500/10 border-gray-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Academic Impact</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This dashboard was developed as part of advanced data visualization coursework and has been used by 
                  researchers studying EV adoption patterns.
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
