'use client';

import { motion } from 'framer-motion';
import { Brain, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Settings,
    title: 'We Build Your MCP Server',
    description: 'We create your dedicated MCP server and connect it to all your business systems. Secure, encrypted, permission-controlled.',
    number: '01'
  },
  {
    icon: Brain,
    title: 'DeepSeek AI Ready to Go',
    description: 'Your MCP server comes with DeepSeek running on our cloud. Want ChatGPT or Claude? Connect them with specific permissions.',
    number: '02'
  },
  {
    icon: Rocket,
    title: 'Start Getting Business Insights',
    description: 'Ask questions across all your systems. Your AI now understands your business inside out.',
    number: '03'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 lg:py-40 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From setup to insights in 24 hours. No technical knowledge required.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Number */}
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto bg-card border border-border/50 rounded-3xl flex items-center justify-center relative">
                    <step.icon className="w-12 h-12 text-primary" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-primary/50 to-primary/20"></div>

            {/* Timeline end point */}
            <div className="relative flex flex-col items-center">
              <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"></div>
              <div className="mt-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl px-8 py-6 max-w-md">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold text-foreground">Complete in 24 Hours</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  From setup to your first business insights
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}