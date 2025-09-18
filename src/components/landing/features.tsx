'use client';

import { motion } from 'framer-motion';
import { Wand2, Shield, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'One-Click Integration',
    description: 'Auto-discover APIs, generate MCP tools, deploy in minutes',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'RBAC, PII redaction, audit trails, zero-trust architecture',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: BarChart3,
    title: 'Workforce Analytics',
    description: 'Understand how your team uses AI across all business systems',
    gradient: 'from-purple-500 to-pink-500'
  }
];

export function Features() {
  return (
    <section id="product" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Choose Private MCP?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your company&apos;s data into AI-accessible tools with enterprise-grade security and insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-6`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground">
                  {feature.description}
                </p>

                {/* Hover effect gradient border */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}