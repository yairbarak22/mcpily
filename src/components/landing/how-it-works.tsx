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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready in 24 Hours
            </h3>
            <p className="text-muted-foreground mb-6">
              Complete AI solution deployed and ready to use
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="/demo"
                className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                Start My Setup
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}