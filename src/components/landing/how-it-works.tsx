'use client';

import { motion } from 'framer-motion';
import { Brain, Plug, Zap } from 'lucide-react';

const steps = [
  {
    icon: Plug,
    title: 'We Build Your MCP Server',
    description: 'We create your dedicated MCP server and connect it to all your business systems (Salesforce, GitHub, Zendesk...). Secure, encrypted, permission-controlled.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: Brain,
    title: 'DeepSeek on Our Cloud + Optional Connections',
    description: 'Your MCP server comes with DeepSeek running on our cloud ready to use. Want ChatGPT or Claude? We can connect them with specific permissions for different use cases.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: Zap,
    title: 'Start Getting Business Insights',
    description: '"Show me enterprise customers with recent support tickets and their related code commits." Your AI (whichever you choose) now knows your business.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Your MCP Server + AI Flexibility in 24 Hours
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We build your secure MCP server with DeepSeek running on our cloud. Want to use ChatGPT or Claude? Connect them with granular permissions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Step number and icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-full ${step.bgColor} flex items-center justify-center`}>
                      <step.icon className={`w-10 h-10 ${step.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <motion.h3
                    whileHover={{ scale: 1.02 }}
                    className="text-2xl font-semibold mb-3"
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-muted-foreground text-lg">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-primary to-primary/50 origin-top"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Timeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium">
              Complete AI solution, deployed in 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}