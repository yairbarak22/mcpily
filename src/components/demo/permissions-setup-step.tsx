'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDemoState } from '@/lib/demo-state';
import { integrations } from '@/lib/data';
import * as Icons from 'lucide-react';
import { ArrowRight, ArrowLeft, Shield, Users, Eye, Lock, Database } from 'lucide-react';
import { useState } from 'react';

const roles = [
  {
    id: 'admin',
    name: 'Admin',
    description: 'Full access to all systems and data',
    icon: Shield,
    color: 'text-red-600',
    bgColor: 'bg-red-50 border-red-200',
    count: 2
  },
  {
    id: 'manager',
    name: 'Manager',
    description: 'Read/write access to team-related data',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 border-blue-200',
    count: 8
  },
  {
    id: 'employee',
    name: 'Employee',
    description: 'Read access to relevant work data',
    icon: Eye,
    color: 'text-green-600',
    bgColor: 'bg-green-50 border-green-200',
    count: 45
  },
  {
    id: 'contractor',
    name: 'Contractor',
    description: 'Limited access to specific projects',
    icon: Lock,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50 border-gray-200',
    count: 12
  }
];

const permissionLevels = [
  {
    id: 'none',
    name: 'No Access',
    color: 'text-gray-500',
    bg: 'bg-gray-100',
    description: 'Cannot access this integration',
    icon: '🚫'
  },
  {
    id: 'read',
    name: 'Read Only',
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    description: 'Can view data but not modify',
    icon: '👀'
  },
  {
    id: 'write',
    name: 'Read & Write',
    color: 'text-green-600',
    bg: 'bg-green-100',
    description: 'Can view and modify data',
    icon: '✏️'
  },
  {
    id: 'admin',
    name: 'Full Admin',
    color: 'text-red-600',
    bg: 'bg-red-100',
    description: 'Complete control over this integration',
    icon: '🔑'
  }
];

export function PermissionsSetupStep() {
  const { state, dispatch } = useDemoState();
  const [permissions, setPermissions] = useState<Record<string, string[]>>({
    admin: state.selectedIntegrations.map(() => 'admin'),
    manager: state.selectedIntegrations.map(() => 'write'),
    employee: state.selectedIntegrations.map(() => 'read'),
    contractor: state.selectedIntegrations.map(() => 'none')
  });

  const handlePermissionChange = (roleId: string, integrationIndex: number, permission: string) => {
    setPermissions(prev => ({
      ...prev,
      [roleId]: prev[roleId]?.map((p, i) => i === integrationIndex ? permission : p) || []
    }));
  };

  const handleNext = () => {
    dispatch({ type: 'SET_PERMISSIONS', payload: permissions });
    dispatch({ type: 'NEXT_STEP' });
  };

  const handlePrev = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex p-3 rounded-full bg-primary/10 mb-6">
          <Shield className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Set Employee Permissions
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Control which team members can access what data through your AI assistant. You can always modify these settings later.
        </p>
      </motion.div>

      {/* Role Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid md:grid-cols-4 gap-4 mb-8"
      >
        {roles.map((role, index) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`p-4 rounded-lg border-2 ${role.bgColor}`}
          >
            <div className="flex items-center space-x-3 mb-2">
              <role.icon className={`w-5 h-5 ${role.color}`} />
              <span className="font-semibold">{role.name}</span>
              <Badge variant="secondary" className="text-xs">
                {role.count}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {role.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Permission Levels Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mb-6"
      >
        <h3 className="text-lg font-semibold mb-4">Permission Levels</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {permissionLevels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
              className={`p-4 rounded-lg border-2 ${
                level.id === 'none' ? 'border-gray-200 bg-gray-50' :
                level.id === 'read' ? 'border-blue-200 bg-blue-50' :
                level.id === 'write' ? 'border-green-200 bg-green-50' :
                'border-red-200 bg-red-50'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${
                  level.id === 'none' ? 'bg-gray-400' :
                  level.id === 'read' ? 'bg-blue-500' :
                  level.id === 'write' ? 'bg-green-500' :
                  'bg-red-500'
                }`}></div>
                <span className={`font-semibold text-sm ${level.color}`}>
                  {level.name}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                {level.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Permissions Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-card border rounded-xl overflow-hidden mb-8"
      >
        <div className="p-6 border-b bg-muted/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Access Control Matrix</h3>
              <p className="text-sm text-muted-foreground">
                Configure permissions for each role across your selected integrations
              </p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                onClick={() => {
                  const newPermissions = { ...permissions };
                  roles.forEach(role => {
                    newPermissions[role.id] = state.selectedIntegrations.map(() =>
                      role.id === 'admin' ? 'admin' :
                      role.id === 'manager' ? 'write' :
                      role.id === 'employee' ? 'read' : 'none'
                    );
                  });
                  setPermissions(newPermissions);
                }}
                className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Reset to Defaults
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-semibold min-w-[200px]">
                  <div className="flex items-center space-x-2">
                    <Database className="w-4 h-4 text-muted-foreground" />
                    <span>Integration</span>
                  </div>
                </th>
                {roles.map((role) => (
                  <th key={role.id} className="text-center p-3 font-semibold min-w-[130px]">
                    <div className="flex flex-col items-center">
                      <div className={`p-2 rounded-lg ${role.bgColor} mb-2`}>
                        <role.icon className={`w-4 h-4 ${role.color}`} />
                      </div>
                      <span className="text-sm font-medium">{role.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {role.count} users
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {state.selectedIntegrations.map((integrationName, integrationIndex) => {
                const integration = integrations[integrationName];
                const IconComponent = Icons[integration.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

                return (
                  <motion.tr
                    key={integrationName}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: integrationIndex * 0.05 }}
                    className="border-b hover:bg-muted/30"
                  >
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-muted rounded-md">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-medium">{integrationName}</div>
                          <div className="text-sm text-muted-foreground">
                            {integration.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    {roles.map((role) => (
                      <td key={role.id} className="p-3 text-center">
                        <div className="relative">
                          <select
                            value={permissions[role.id]?.[integrationIndex] || 'none'}
                            onChange={(e) => handlePermissionChange(role.id, integrationIndex, e.target.value)}
                            className={`
                              w-full px-3 py-2 pr-8 border rounded-md text-xs font-medium cursor-pointer
                              focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary
                              transition-all duration-200 appearance-none min-w-[120px]
                              ${permissions[role.id]?.[integrationIndex] === 'none'
                                ? 'bg-gray-50 border-gray-300 text-gray-600'
                                : permissions[role.id]?.[integrationIndex] === 'read'
                                ? 'bg-blue-50 border-blue-300 text-blue-700'
                                : permissions[role.id]?.[integrationIndex] === 'write'
                                ? 'bg-green-50 border-green-300 text-green-700'
                                : 'bg-red-50 border-red-300 text-red-700'
                              }
                              hover:shadow-sm hover:border-primary/40
                            `}
                          >
                            {permissionLevels.map((level) => (
                              <option key={level.id} value={level.id}>
                                {level.name}
                              </option>
                            ))}
                          </select>
                          {/* Custom dropdown arrow */}
                          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          {/* Permission level indicator */}
                          <div className="absolute top-1 right-6 flex items-center">
                            <div className={`
                              w-1.5 h-1.5 rounded-full
                              ${permissions[role.id]?.[integrationIndex] === 'none'
                                ? 'bg-gray-400'
                                : permissions[role.id]?.[integrationIndex] === 'read'
                                ? 'bg-blue-500'
                                : permissions[role.id]?.[integrationIndex] === 'write'
                                ? 'bg-green-500'
                                : 'bg-red-500'
                              }
                            `} />
                          </div>
                        </div>
                      </td>
                    ))}
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Permission Summary */}
        <div className="p-4 bg-muted/20 border-t">
          <div className="grid grid-cols-4 gap-4 text-center">
            {roles.map((role) => {
              const rolePermissions = permissions[role.id] || [];
              const adminCount = rolePermissions.filter(p => p === 'admin').length;
              const writeCount = rolePermissions.filter(p => p === 'write').length;
              const readCount = rolePermissions.filter(p => p === 'read').length;
              const noneCount = rolePermissions.filter(p => p === 'none').length;

              return (
                <div key={role.id} className="text-xs">
                  <div className={`font-medium ${role.color} mb-1`}>
                    {role.name}
                  </div>
                  <div className="flex justify-center gap-1">
                    {adminCount > 0 && <span className="px-1 bg-red-200 text-red-700 rounded text-xs">{adminCount}A</span>}
                    {writeCount > 0 && <span className="px-1 bg-green-200 text-green-700 rounded text-xs">{writeCount}W</span>}
                    {readCount > 0 && <span className="px-1 bg-blue-200 text-blue-700 rounded text-xs">{readCount}R</span>}
                    {noneCount > 0 && <span className="px-1 bg-gray-200 text-gray-700 rounded text-xs">{noneCount}N</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Security Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-muted/30 rounded-xl p-6 mb-8"
      >
        <h4 className="font-semibold mb-4 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-primary" />
          Enterprise Security Features
        </h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm">Real-time audit logging</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm">PII data redaction</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm">SOC2 compliant access controls</span>
          </div>
        </div>
      </motion.div>

      {/* Navigation buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
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
          size="lg"
          className="bg-primary hover:bg-primary/90"
        >
          Generate Secure MCP Server
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  );
}