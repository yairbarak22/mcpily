'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface DemoState {
  step: 'business-type' | 'integration-selection' | 'permissions-setup' | 'mcp-generation' | 'completion';
  businessType: string;
  selectedIntegrations: string[];
  permissions: Record<string, string[]>;
  generationProgress: number;
  isGenerating: boolean;
}

export type DemoAction =
  | { type: 'SET_BUSINESS_TYPE'; payload: string }
  | { type: 'SET_INTEGRATIONS'; payload: string[] }
  | { type: 'SET_PERMISSIONS'; payload: Record<string, string[]> }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'START_GENERATION' }
  | { type: 'UPDATE_PROGRESS'; payload: number }
  | { type: 'COMPLETE_GENERATION' }
  | { type: 'RESET' };

const initialState: DemoState = {
  step: 'business-type',
  businessType: '',
  selectedIntegrations: [],
  permissions: {},
  generationProgress: 0,
  isGenerating: false,
};

function demoReducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case 'SET_BUSINESS_TYPE':
      return { ...state, businessType: action.payload };

    case 'SET_INTEGRATIONS':
      return { ...state, selectedIntegrations: action.payload };

    case 'SET_PERMISSIONS':
      return { ...state, permissions: action.payload };

    case 'NEXT_STEP':
      const steps: DemoState['step'][] = ['business-type', 'integration-selection', 'permissions-setup', 'mcp-generation', 'completion'];
      const currentIndex = steps.indexOf(state.step);
      const nextIndex = Math.min(currentIndex + 1, steps.length - 1);
      return { ...state, step: steps[nextIndex] };

    case 'PREV_STEP':
      const prevSteps: DemoState['step'][] = ['business-type', 'integration-selection', 'permissions-setup', 'mcp-generation', 'completion'];
      const currentPrevIndex = prevSteps.indexOf(state.step);
      const prevIndex = Math.max(currentPrevIndex - 1, 0);
      return { ...state, step: prevSteps[prevIndex] };

    case 'START_GENERATION':
      return { ...state, isGenerating: true, generationProgress: 0 };

    case 'UPDATE_PROGRESS':
      return { ...state, generationProgress: action.payload };

    case 'COMPLETE_GENERATION':
      return { ...state, isGenerating: false, generationProgress: 100 };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

const DemoContext = createContext<{
  state: DemoState;
  dispatch: React.Dispatch<DemoAction>;
} | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(demoReducer, initialState);

  return (
    <DemoContext.Provider value={{ state, dispatch }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemoState() {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemoState must be used within a DemoProvider');
  }
  return context;
}