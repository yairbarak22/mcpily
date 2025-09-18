'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDemoState } from '@/lib/demo-state';
import { businessTypes, integrations } from '@/lib/data';
import * as Icons from 'lucide-react';
import { ArrowRight, ArrowLeft, Search } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'all', name: 'All', color: 'text-foreground' },
  { id: 'development', name: 'Development', color: 'text-blue-500' },
  { id: 'business', name: 'Business', color: 'text-green-500' },
  { id: 'productivity', name: 'Productivity', color: 'text-purple-500' },
  { id: 'data', name: 'Data', color: 'text-orange-500' }
];

export function IntegrationSelectionStep() {
  const { state, dispatch } = useDemoState();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const currentBusinessType = businessTypes.find(bt => bt.id === state.businessType);
  const recommendedIntegrations = currentBusinessType?.recommendedIntegrations || [];

  const handleToggleIntegration = (integrationName: string) => {
    const isSelected = state.selectedIntegrations.includes(integrationName);
    const newSelection = isSelected
      ? state.selectedIntegrations.filter(name => name !== integrationName)
      : [...state.selectedIntegrations, integrationName];

    dispatch({ type: 'SET_INTEGRATIONS', payload: newSelection });
  };

  const handleNext = () => {
    if (state.selectedIntegrations.length > 0) {
      dispatch({ type: 'NEXT_STEP' });
    }
  };

  const handlePrev = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  const filteredIntegrations = Object.entries(integrations).filter(([name, integration]) => {
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    const matchesSearch = name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Which systems does your company use?
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Select the tools and platforms you want to connect to AI
        </p>
        {currentBusinessType && (
          <Badge variant="secondary" className="px-4 py-2">
            Based on your {currentBusinessType.name} selection
          </Badge>
        )}
      </motion.div>

      {/* Search and filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {state.selectedIntegrations.length} integration{state.selectedIntegrations.length !== 1 ? 's' : ''} selected
          </span>
          {recommendedIntegrations.length > 0 && (
            <span>
              {recommendedIntegrations.filter(name => state.selectedIntegrations.includes(name)).length}/{recommendedIntegrations.length} recommended selected
            </span>
          )}
        </div>
      </div>

      {/* Integrations grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
      >
        {filteredIntegrations.map(([name, integration], index) => {
          const IconComponent = Icons[integration.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
          const isSelected = state.selectedIntegrations.includes(name);
          const isRecommended = recommendedIntegrations.includes(name);

          return (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-border bg-card hover:border-primary/50 hover:shadow-sm'
                }`}
                onClick={() => handleToggleIntegration(name)}
              >
                {isRecommended && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-primary text-primary-foreground text-xs px-2 py-1">
                      Recommended
                    </Badge>
                  </div>
                )}

                <div className="flex items-center space-x-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-2 rounded-md ${
                      isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1">
                      {name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {integration.description}
                    </p>
                  </div>

                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Navigation buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-between"
      >
        <Button
          onClick={handlePrev}
          variant="outline"
          size="lg"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Button
          onClick={handleNext}
          disabled={state.selectedIntegrations.length === 0}
          size="lg"
          className="bg-primary hover:bg-primary/90"
        >
          Configure Permissions ({state.selectedIntegrations.length} integration{state.selectedIntegrations.length !== 1 ? 's' : ''})
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  );
}