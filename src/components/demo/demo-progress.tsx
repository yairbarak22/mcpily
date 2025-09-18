'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useDemoState } from '@/lib/demo-state';

const steps = [
  { id: 'business-type', title: 'Business Type', description: 'Tell us about your company' },
  { id: 'integration-selection', title: 'Integrations', description: 'Choose your tools' },
  { id: 'permissions-setup', title: 'Permissions', description: 'Set user access' },
  { id: 'mcp-generation', title: 'Generation', description: 'Building your MCP' },
  { id: 'completion', title: 'Complete', description: 'Your MCP is ready' }
];

export function DemoProgress() {
  const { state } = useDemoState();

  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === state.step);
  };

  const currentStepIndex = getCurrentStepIndex();

  return (
    <div className="mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;

            return (
              <motion.div
                key={step.id}
                className="flex flex-col items-center flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step number/icon */}
                <div className="flex items-center mb-4">
                  <motion.div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                      isCompleted
                        ? 'bg-primary border-primary text-primary-foreground'
                        : isCurrent
                        ? 'border-primary bg-background text-primary'
                        : 'border-muted-foreground/30 bg-background text-muted-foreground'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: isCurrent ? Infinity : 0 }}
                  >
                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <span className="text-sm font-semibold">{index + 1}</span>
                    )}
                  </motion.div>

                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className={`ml-4 h-0.5 w-full ${
                        isCompleted ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isCompleted ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      style={{ originX: 0 }}
                    />
                  )}
                </div>

                {/* Step title and description */}
                <div className="text-center">
                  <motion.h3
                    className={`text-sm font-medium ${
                      isCurrent || isCompleted ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                    animate={isCurrent ? { color: ['hsl(var(--primary))', 'hsl(var(--foreground))', 'hsl(var(--primary))'] } : {}}
                    transition={{ duration: 2, repeat: isCurrent ? Infinity : 0 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-xs text-muted-foreground hidden md:block">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="relative">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStepIndex) / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}