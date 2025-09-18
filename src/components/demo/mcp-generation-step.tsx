'use client';

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { useDemoState } from '@/lib/demo-state';
import { mcpGenerationSteps } from '@/lib/data';
import { Check, Loader2, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export function McpGenerationStep() {
  const { state, dispatch } = useDemoState();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    dispatch({ type: 'START_GENERATION' });

    const timer = setInterval(() => {
      setCurrentStepIndex((prev) => {
        const next = prev + 1;

        // Mark current step as completed
        setCompletedSteps((completed) => [...completed, prev]);

        // Update progress
        const progress = Math.min(((next) / mcpGenerationSteps.length) * 100, 100);
        dispatch({ type: 'UPDATE_PROGRESS', payload: progress });

        // If we've completed all steps, move to completion
        if (next >= mcpGenerationSteps.length) {
          setTimeout(() => {
            dispatch({ type: 'COMPLETE_GENERATION' });
            dispatch({ type: 'NEXT_STEP' });
          }, 1000);
          clearInterval(timer);
          return prev;
        }

        return next;
      });
    }, 1500); // Each step takes 1.5 seconds

    return () => clearInterval(timer);
  }, [dispatch]);

  const estimatedTimeRemaining = Math.max(0, (mcpGenerationSteps.length - currentStepIndex) * 1.5);

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-flex p-4 rounded-full bg-primary/10 mb-6"
        >
          <Zap className="w-8 h-8 text-primary" />
        </motion.div>

        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Generating Your MCP Server
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Sit back and relax while we build your AI-operable platform
        </p>

        {/* Progress bar */}
        <div className="max-w-md mx-auto mb-6">
          <Progress
            value={state.generationProgress}
            className="h-3"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>{Math.round(state.generationProgress)}% complete</span>
            <span>
              {estimatedTimeRemaining > 0
                ? `${Math.ceil(estimatedTimeRemaining)} seconds remaining`
                : 'Almost done...'
              }
            </span>
          </div>
        </div>
      </motion.div>

      {/* Generation steps */}
      <div className="space-y-4 mb-12">
        {mcpGenerationSteps.map((step, index) => {
          const isCompleted = completedSteps.includes(index);
          const isCurrent = currentStepIndex === index;

          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center p-4 rounded-lg border transition-all duration-500 ${
                isCompleted
                  ? 'bg-green-50 border-green-200 text-green-800'
                  : isCurrent
                  ? 'bg-primary/5 border-primary/20 text-primary'
                  : 'bg-muted/30 border-muted text-muted-foreground'
              }`}
            >
              <div className="flex-shrink-0 mr-4">
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                ) : isCurrent ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 text-primary"
                  >
                    <Loader2 className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-muted-foreground">
                      {index + 1}
                    </span>
                  </div>
                )}
              </div>

              <motion.div
                className="flex-1"
                animate={isCurrent ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 1.5, repeat: isCurrent ? Infinity : 0 }}
              >
                <p className={`font-medium ${
                  isCompleted ? 'text-green-800' :
                  isCurrent ? 'text-primary' :
                  'text-muted-foreground'
                }`}>
                  {step}
                </p>
              </motion.div>

              {isCurrent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex-shrink-0"
                >
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((dot) => (
                      <motion.div
                        key={dot}
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: dot * 0.2
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* System information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="grid md:grid-cols-3 gap-6 text-center"
      >
        <div className="p-4 rounded-lg bg-card border">
          <div className="text-2xl font-bold text-primary mb-2">
            {state.selectedIntegrations.length}
          </div>
          <p className="text-sm text-muted-foreground">
            Integrations Configured
          </p>
        </div>

        <div className="p-4 rounded-lg bg-card border">
          <div className="text-2xl font-bold text-primary mb-2">
            Enterprise
          </div>
          <p className="text-sm text-muted-foreground">
            Security Level
          </p>
        </div>

        <div className="p-4 rounded-lg bg-card border">
          <div className="text-2xl font-bold text-primary mb-2">
            Cloud
          </div>
          <p className="text-sm text-muted-foreground">
            Deployment Target
          </p>
        </div>
      </motion.div>
    </div>
  );
}