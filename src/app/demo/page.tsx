'use client';

import { DemoProvider, useDemoState } from '@/lib/demo-state';
import { BusinessTypeStep } from '@/components/demo/business-type-step';
import { IntegrationSelectionStep } from '@/components/demo/integration-selection-step';
import { PermissionsSetupStep } from '@/components/demo/permissions-setup-step';
import { McpGenerationStep } from '@/components/demo/mcp-generation-step';
import { CompletionStep } from '@/components/demo/completion-step';
import { DemoHeader } from '@/components/demo/demo-header';
import { DemoProgress } from '@/components/demo/demo-progress';
import { motion, AnimatePresence } from 'framer-motion';

function DemoContent() {
  const { state } = useDemoState();

  const renderStep = () => {
    switch (state.step) {
      case 'business-type':
        return <BusinessTypeStep />;
      case 'integration-selection':
        return <IntegrationSelectionStep />;
      case 'permissions-setup':
        return <PermissionsSetupStep />;
      case 'mcp-generation':
        return <McpGenerationStep />;
      case 'completion':
        return <CompletionStep />;
      default:
        return <BusinessTypeStep />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DemoHeader />
      <main className="container mx-auto px-4 py-8">
        <DemoProgress />
        <AnimatePresence mode="wait">
          <motion.div
            key={state.step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function DemoPage() {
  return (
    <DemoProvider>
      <DemoContent />
    </DemoProvider>
  );
}