'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Brain, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="mx-auto max-w-5xl text-center">

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            Your AI Finally Knows
            <br />
            <span className="text-primary">Your Business</span>
          </motion.h1>

          {/* Clean subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            We build your secure MCP server with DeepSeek AI that understands every corner of your business.
            <br />
            <span className="text-lg mt-2 block">Connect all your systems. Ask intelligent questions. Get real insights.</span>
          </motion.p>

          {/* What you get - simplified */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure MCP Server</h3>
              <p className="text-muted-foreground text-center">We build and manage your dedicated server</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">DeepSeek AI Included</h3>
              <p className="text-muted-foreground text-center">Private LLM running on our cloud for you</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24 Hour Setup</h3>
              <p className="text-muted-foreground text-center">Complete solution deployed in one day</p>
            </div>
          </motion.div>

          {/* CTA buttons - cleaner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-xl px-12 py-6 rounded-xl">
                <Link href="/demo">
                  Start Building My AI Solution
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" size="lg" className="text-xl px-12 py-6 rounded-xl" asChild>
                <Link href="#how-it-works">
                  See How It Works
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Simple proof point */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Trusted by 150+ companies • 98% success rate • 24-hour setup
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}