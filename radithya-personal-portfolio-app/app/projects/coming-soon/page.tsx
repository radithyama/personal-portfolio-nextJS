"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { ArrowLeft, Code, Sparkles, Zap, Shield } from 'lucide-react';

export default function ComingSoonDetail() {
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
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-gradient bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent mb-4">
            Something Amazing is Coming...
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Currently developing an innovative cybersecurity tool that will revolutionize secure software development
          </p>
        </motion.div>

        {/* Coming Soon Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Project Teaser */}
          <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code className="w-16 h-16 text-gray-600 dark:text-gray-400" />
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold">Project: SecureFlow</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  An advanced cybersecurity platform that automatically detects and mitigates zero-day vulnerabilities 
                  in software dependencies, combining machine learning with real-time threat intelligence.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 h-full">
                <CardContent className="p-6 text-center space-y-4">
                  <Shield className="w-12 h-12 mx-auto text-blue-600" />
                  <h3 className="text-lg font-semibold">AI-Powered Security</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Machine learning algorithms that predict and prevent security vulnerabilities before they occur
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 h-full">
                <CardContent className="p-6 text-center space-y-4">
                  <Zap className="w-12 h-12 mx-auto text-yellow-600" />
                  <h3 className="text-lg font-semibold">Real-time Monitoring</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Continuous monitoring of dependencies and immediate alerts for new security threats
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 h-full">
                <CardContent className="p-6 text-center space-y-4">
                  <Code className="w-12 h-12 mx-auto text-green-600" />
                  <h3 className="text-lg font-semibold">Auto-Remediation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Automated patching and code suggestions to fix vulnerabilities without breaking functionality
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Technical Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">Technologies & Research Areas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto flex items-center justify-center">
                      <span className="text-blue-600 font-bold">ML</span>
                    </div>
                    <p className="text-sm font-medium">Machine Learning</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mx-auto flex items-center justify-center">
                      <span className="text-green-600 font-bold">NLP</span>
                    </div>
                    <p className="text-sm font-medium">Natural Language Processing</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto flex items-center justify-center">
                      <span className="text-purple-600 font-bold">CVE</span>
                    </div>
                    <p className="text-sm font-medium">Vulnerability Analysis</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg mx-auto flex items-center justify-center">
                      <span className="text-red-600 font-bold">API</span>
                    </div>
                    <p className="text-sm font-medium">Threat Intelligence</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center space-y-4"
          >
            <h3 className="text-xl font-semibold">Expected Launch</h3>
            <p className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
              Q3 2025
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Currently in research and development phase as part of my Master&apos;s thesis at Monash University
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
