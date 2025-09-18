'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight } from 'lucide-react';
import { pricingTiers } from '@/lib/data';

export function Pricing() {
  return (
    <section id="pricing" className="py-32 lg:py-40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Simple Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Everything included - MCP server, DeepSeek AI, and managed infrastructure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`relative rounded-3xl border p-10 ${
                tier.highlighted
                  ? 'border-primary bg-primary/5 shadow-xl ring-1 ring-primary/20'
                  : 'bg-card border-border/50 hover:shadow-lg'
              } transition-all duration-300`}
            >
              {tier.highlighted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <Badge className="bg-primary text-primary-foreground px-6 py-2 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </motion.div>
              )}

              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-4">{tier.name}</h3>
                <p className="text-muted-foreground mb-6 text-lg">{tier.description}</p>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground ml-2 text-lg">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-5 mb-10">
                {tier.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + featureIndex * 0.1
                    }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-base leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  asChild
                  className={`w-full text-lg py-6 rounded-xl ${
                    tier.highlighted
                      ? 'bg-primary hover:bg-primary/90'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  <Link href="/demo">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 space-y-6"
        >
          <p className="text-lg text-muted-foreground">
            All plans include 99.9% uptime SLA • 24/7 support • Enterprise security
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-base text-muted-foreground">
            <span className="flex items-center justify-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              30-day free trial
            </span>
            <span className="flex items-center justify-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              No setup fees
            </span>
            <span className="flex items-center justify-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Cancel anytime
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="pt-4"
          >
            <Button variant="outline" asChild className="text-lg px-8 py-4 rounded-xl">
              <Link href="#contact">
                Need custom pricing? Contact sales
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}