'use client';

import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Zap } from 'lucide-react';
import { testimonials } from '@/lib/data';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl font-bold text-primary mb-2"
      >
        {value}{suffix}
      </motion.div>
    </motion.div>
  );
}

export function SocialProof() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted by Growing Companies
          </h2>
          <p className="text-xl text-muted-foreground">
            Join 150+ companies already using Private MCP
          </p>
        </motion.div>

        {/* Usage statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-flex p-3 rounded-full bg-blue-500/10 mb-4"
            >
              <TrendingUp className="w-6 h-6 text-blue-500" />
            </motion.div>
            <AnimatedCounter value={98} suffix="%" />
            <p className="text-muted-foreground mt-2">Setup Success Rate</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-flex p-3 rounded-full bg-green-500/10 mb-4"
            >
              <Users className="w-6 h-6 text-green-500" />
            </motion.div>
            <AnimatedCounter value={150} suffix="+" />
            <p className="text-muted-foreground mt-2">Active Companies</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-flex p-3 rounded-full bg-purple-500/10 mb-4"
            >
              <Zap className="w-6 h-6 text-purple-500" />
            </motion.div>
            <AnimatedCounter value={10} suffix=" min" />
            <p className="text-muted-foreground mt-2">Average Setup Time</p>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <p className="text-muted-foreground italic pl-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-foreground">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company logos placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by companies of all sizes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {['TechFlow Inc', 'Growth Dynamics', 'FinanceFirst', 'ScaleUp Co'].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 1 }}
                className="flex items-center justify-center p-4 rounded-lg border bg-card"
              >
                <span className="font-semibold text-sm">{company}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}