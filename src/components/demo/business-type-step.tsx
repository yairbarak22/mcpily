'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useDemoState } from '@/lib/demo-state';
import { businessTypes } from '@/lib/data';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export function BusinessTypeStep() {
  const { state, dispatch } = useDemoState();

  const handleSelectBusinessType = (businessTypeId: string) => {
    dispatch({ type: 'SET_BUSINESS_TYPE', payload: businessTypeId });
  };

  const handleNext = () => {
    if (state.businessType) {
      dispatch({ type: 'NEXT_STEP' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          What type of business are you?
        </h1>
        <p className="text-xl text-muted-foreground">
          Help us recommend the best integrations for your company
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {businessTypes.map((businessType, index) => {
          const IconComponent = Icons[businessType.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
          const isSelected = state.businessType === businessType.id;

          return (
            <motion.div
              key={businessType.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className={`h-full p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'border-primary bg-primary/5 shadow-lg ring-1 ring-primary/20'
                    : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                }`}
                onClick={() => handleSelectBusinessType(businessType.id)}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-lg ${
                      isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {businessType.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {businessType.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">
                        Recommended integrations:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {businessType.recommendedIntegrations.slice(0, 3).map((integration) => (
                          <span
                            key={integration}
                            className={`px-2 py-1 rounded-md text-xs font-medium ${
                              isSelected
                                ? 'bg-primary/20 text-primary'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {integration}
                          </span>
                        ))}
                        {businessType.recommendedIntegrations.length > 3 && (
                          <span
                            className={`px-2 py-1 rounded-md text-xs font-medium ${
                              isSelected
                                ? 'bg-primary/20 text-primary'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            +{businessType.recommendedIntegrations.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-center"
      >
        <Button
          onClick={handleNext}
          disabled={!state.businessType}
          size="lg"
          className="bg-primary hover:bg-primary/90"
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  );
}