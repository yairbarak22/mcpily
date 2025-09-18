'use client';

import { motion } from 'framer-motion';
import { Brain, Shield, Zap, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Secure MCP Server Built For You',
    description: 'We create your dedicated MCP server that connects all your business systems. Comes with DeepSeek running on our cloud by default, but you can connect any AI model you prefer.',
    example: '"Which customers are at risk based on support tickets and usage data?"',
    metric: 'Dedicated MCP server per customer'
  },
  {
    icon: Brain,
    title: 'Flexible AI Model Connections',
    description: 'Start with DeepSeek running securely on our cloud, then connect ChatGPT, Claude, or any other AI with granular permissions. Choose the right model for each use case.',
    example: '"Compare our development velocity to customer satisfaction trends"',
    metric: 'Multiple AI models with permission control'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Your MCP server runs in our SOC2-compliant infrastructure. Data stays encrypted and isolated. Control exactly what each AI model can access.',
    example: '"Alert me about high-value customers with unresolved issues"',
    metric: 'Bank-level security with granular permissions'
  },
  {
    icon: TrendingUp,
    title: 'Fully Managed Infrastructure',
    description: 'We handle your MCP server updates, security patches, and scaling. You get enterprise-grade reliability without the IT overhead.',
    example: '"Show me our complete business health across all systems"',
    metric: 'Zero maintenance, maximum uptime'
  }
];

export function CustomerBenefits() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            More Than AI - Your Complete Business Intelligence Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop building. Stop integrating. Stop compromising. Get your complete AI solution deployed in 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card border rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                {/* Icon and title */}
                <div className="flex items-start space-x-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"
                  >
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      ✓ {benefit.metric}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Example */}
                <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    Real example:
                  </p>
                  <p className="italic text-foreground font-medium">
                    {benefit.example}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready for Your Complete AI Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join 500+ companies that stopped asking ChatGPT generic questions and started getting business breakthroughs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/demo"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Deploy My AI Solution
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#pricing"
                  className="inline-block px-8 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition-colors"
                >
                  Schedule Setup Call
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}