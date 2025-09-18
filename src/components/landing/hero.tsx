'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Zap, BarChart3 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-4xl text-center">

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Your AI Finally Meets{' '}
            <br />
            <span className="text-primary">Your Business Data</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            We give you a private LLM that knows your company inside out. Ask questions across Salesforce, GitHub, Zendesk, and every system that matters - all through your secure AI assistant.
          </motion.p>

          {/* Value proposition bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 text-sm font-medium"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Complete AI solution included</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Your data, our AI</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Enterprise-grade security</span>
            </div>
          </motion.div>

          {/* MCP Server Feature Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.27 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Secure MCP Server + Flexible AI Connections
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We create your secure MCP server with DeepSeek running on our cloud by default. Want to use ChatGPT or Claude? Connect with specific permissions as needed.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center space-x-8 py-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-secondary-foreground" />
                </div>
                <span className="text-sm font-medium">Company Systems</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6 text-primary" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">AI Agent</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <ArrowRight className="w-6 h-6 text-primary" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center relative">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm font-medium">AI Models</span>
                <span className="text-xs text-green-600 font-medium">DeepSeek • ChatGPT • Claude</span>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                <Link href="/demo">
                  Get Your Complete AI Solution
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="#pricing">
                  <Play className="mr-2 h-4 w-4" />
                  See How It Works
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}