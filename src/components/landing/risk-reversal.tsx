'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Clock, ArrowRight } from 'lucide-react';

const guarantees = [
  {
    icon: CheckCircle,
    title: 'Free 30-day trial in your private cloud',
    description: 'Full access to your complete AI solution'
  },
  {
    icon: Shield,
    title: 'Your data never leaves your infrastructure',
    description: 'Complete privacy and control always'
  },
  {
    icon: CheckCircle,
    title: 'Cancel anytime, keep all your insights',
    description: 'No penalties, no lock-ins'
  },
  {
    icon: Clock,
    title: 'White-glove setup included',
    description: '24/7 enterprise support from day one'
  }
];

export function RiskReversal() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Try It Risk-Free for 30 Days
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your competitors are already moving. Every day without business-aware AI is another day they pull ahead.
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-6 bg-card border rounded-xl"
            >
              <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
                <guarantee.icon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-muted-foreground">
                  {guarantee.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Build When You Can Buy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8 mb-16 border"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Stop Building MCP Servers, Start Using Them
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* DIY Challenges */}
            <div>
              <h4 className="text-lg font-semibold text-red-700 mb-4">
                Building Your Own MCP Server:
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-red-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Weeks to understand MCP protocol and implementation</span>
                </div>
                <div className="flex items-center space-x-2 text-red-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">$50K+ in engineering costs for system integrations</span>
                </div>
                <div className="flex items-center space-x-2 text-red-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Complex security and permission management</span>
                </div>
                <div className="flex items-center space-x-2 text-red-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Ongoing maintenance for every AI model connection</span>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-4">
                Our Ready MCP Server:
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">24-hour MCP server deployment with all integrations</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">DeepSeek on our cloud included + easy ChatGPT/Claude connections</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Enterprise security and permission management built-in</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">We handle all MCP server updates and AI model management</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Ready for Your MCP Server + AI Flexibility?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Stop building MCP servers from scratch. Get yours deployed in 24 hours with DeepSeek on our cloud + option to connect ChatGPT/Claude.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                  Deploy My AI Solution
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Schedule Setup Call
                </Button>
              </motion.div>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              <strong>Your competitors are still building MCP servers from scratch.</strong><br />
              You&apos;re about to have yours deployed with AI flexibility in 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}