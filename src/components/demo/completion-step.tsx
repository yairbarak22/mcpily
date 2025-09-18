'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDemoState } from '@/lib/demo-state';
import { businessTypes } from '@/lib/data';
import {
  CheckCircle,
  Shield,
  Copy,
  Download,
  Calendar,
  ArrowRight,
  Zap,
  ExternalLink
} from 'lucide-react';
import { useState, useEffect } from 'react';

export function CompletionStep() {
  const { state } = useDemoState();
  const [copiedUrl, setCopiedUrl] = useState(false);

  const currentBusinessType = businessTypes.find(bt => bt.id === state.businessType);
  const mcpServerUrl = 'https://mcp.yourcompany.com';

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(mcpServerUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const securityFeatures = [
    { name: 'RBAC', status: 'enabled' },
    { name: 'PII Redaction', status: 'enabled' },
    { name: 'Audit Trail', status: 'enabled' },
    { name: 'SOC2 Compliance', status: 'enabled' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Success header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex p-4 rounded-full bg-green-100 mb-6"
        >
          <CheckCircle className="w-12 h-12 text-green-600" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl lg:text-4xl font-bold mb-4"
        >
          🎉 Your MCP Server is Ready!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-muted-foreground"
        >
          Your AI-operable platform has been successfully deployed and secured
        </motion.p>
      </motion.div>

      {/* Server details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-card border rounded-xl p-6 mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">MCP Server Details</h2>
          <Badge variant="default" className="bg-green-100 text-green-800">
            <Zap className="w-3 h-3 mr-1" />
            Live
          </Badge>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Server URL</label>
            <div className="flex items-center space-x-2 mt-1">
              <code className="flex-1 px-3 py-2 bg-muted rounded-md text-sm font-mono">
                {mcpServerUrl}
              </code>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyUrl}
                className="shrink-0"
              >
                {copiedUrl ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Business Type</label>
              <p className="mt-1 font-medium">{currentBusinessType?.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Connected Systems</label>
              <p className="mt-1 font-medium">{state.selectedIntegrations.length} integrations</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Connected integrations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-lg font-semibold mb-4">Connected Systems</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {state.selectedIntegrations.map((integrationName, index) => {
            return (
              <motion.div
                key={integrationName}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="flex items-center space-x-3 p-3 bg-card border rounded-lg"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="font-medium text-sm">{integrationName}</span>
                <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Security features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-8"
      >
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-primary" />
          Security & Permissions Configured
        </h3>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
              className="flex items-center justify-between p-3 bg-card border rounded-lg"
            >
              <span className="font-medium text-sm">{feature.name}</span>
              <CheckCircle className="w-4 h-4 text-green-600" />
            </motion.div>
          ))}
        </div>
        <div className="bg-muted/30 rounded-lg p-4">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            Role-based access configured:
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
              Admin: 2 users
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              Manager: 8 users
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
              Employee: 45 users
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
              Contractor: 12 users
            </span>
          </div>
        </div>
      </motion.div>

      {/* Next steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-muted/30 rounded-xl p-6 mb-8"
      >
        <h3 className="text-lg font-semibold mb-4">Next Steps</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
              1
            </div>
            <span className="text-sm">Connect to your AI assistant (Claude, ChatGPT, etc.)</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
              ✓
            </div>
            <span className="text-sm">User permissions and access controls are configured</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
              2
            </div>
            <span className="text-sm">Train your team on the new AI-powered workflows</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
              3
            </div>
            <span className="text-sm">Start using AI across all your business systems</span>
          </div>
        </div>
      </motion.div>

      {/* Try Your AI Assistant CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mb-8"
      >
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mb-6"
          >
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              Ready to Try Your AI Assistant?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your MCP server is live! See how your AI can now access all your business data in one conversation.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
              onClick={() => {
                const conversationSection = document.getElementById('ai-conversation');
                conversationSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Try Your AI Assistant Now
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="flex flex-col md:flex-row gap-4 justify-center"
      >
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Implementation Call
        </Button>

        <Button variant="outline" size="lg">
          <Download className="mr-2 h-4 w-4" />
          Download Integration Guide
        </Button>

        <Button variant="outline" size="lg" asChild>
          <Link href="/#pricing">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>

      {/* AI Conversation Demo */}
      <motion.div
        id="ai-conversation"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="mt-16"
      >
        <AIConversationDemo selectedIntegrations={state.selectedIntegrations} />
      </motion.div>

      {/* Additional info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="text-center mt-12 text-sm text-muted-foreground"
      >
        <p className="mb-2">
          Questions? Our team is here to help you get started.
        </p>
        <Button variant="ghost" size="sm" asChild>
          <Link href="mailto:support@privatemcp.com">
            Contact Support
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}

// AI Conversation Demo Component
function AIConversationDemo({ selectedIntegrations }: { selectedIntegrations: string[] }) {
  const [showConversation, setShowConversation] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const conversationMessages = [
    {
      type: 'user',
      message: 'Show me our top 5 customers this month with their recent support tickets',
      timestamp: '2:34 PM'
    },
    {
      type: 'ai',
      message: 'I&apos;ll pull that data from Salesforce and Zendesk for you...',
      timestamp: '2:34 PM',
      loading: true
    },
    {
      type: 'ai',
      message: `Based on your ${selectedIntegrations.includes('Salesforce') ? 'Salesforce' : 'CRM'} and ${selectedIntegrations.includes('Zendesk') ? 'Zendesk' : 'support'} data:\n\n**Top 5 Customers (December 2024)**\n1. **TechCorp Inc.** - $45,2K revenue\n   • 2 support tickets (both resolved)\n   • Last contact: Dec 15\n\n2. **InnovateLabs** - $38,7K revenue\n   • 1 support ticket (in progress)\n   • Priority: High - API integration issue\n\n3. **DataFlow Systems** - $32,1K revenue\n   • 0 support tickets this month\n   • Last contact: Dec 10\n\n4. **CloudFirst Ltd.** - $29,8K revenue\n   • 3 support tickets (all resolved)\n   • Last contact: Dec 18\n\n5. **ScaleUp Co.** - $27,5K revenue\n   • 1 support ticket (resolved)\n   • Last contact: Dec 12\n\n💡 **Insight**: InnovateLabs needs immediate attention for their API issue.`,
      timestamp: '2:35 PM',
      integrations: ['Salesforce', 'Zendesk']
    },
    {
      type: 'user',
      message: 'What&apos;s the status of our current sprint in Linear?',
      timestamp: '2:36 PM'
    },
    {
      type: 'ai',
      message: `Checking your ${selectedIntegrations.includes('Linear') ? 'Linear' : 'project management'} data...\n\n**Current Sprint Status**\n📊 **Sprint 24.12** (Dec 16-29, 2024)\n\n**Progress**: 7/12 tasks completed (58%)\n**Status**: On track\n\n**Completed** ✅\n• User authentication improvements\n• Database migration scripts  \n• API rate limiting implementation\n• Mobile responsive fixes\n• Unit test coverage increase\n• Documentation updates\n• Security audit fixes\n\n**In Progress** 🔄\n• Payment gateway integration (85% done)\n• Dashboard performance optimization (60% done)\n• Email notification system (40% done)\n\n**Backlog** 📋\n• Advanced search functionality\n• User role management\n\n⚠️ **Note**: Payment gateway integration is critical for next week's release.`,
      timestamp: '2:36 PM',
      integrations: ['Linear']
    },
    {
      type: 'user',
      message: 'Create a summary report combining revenue data and development progress for our board meeting',
      timestamp: '2:37 PM'
    },
    {
      type: 'ai',
      message: `Creating a comprehensive board report using data from ${selectedIntegrations.slice(0, 3).join(', ')}...\n\n**📈 BOARD MEETING SUMMARY**\n*December 2024*\n\n**REVENUE PERFORMANCE**\n• Total MRR: $173,300 (+12% vs Nov)\n• Top customer segment: Enterprise (65% of revenue)\n• Churn rate: 2.1% (target: <3%)\n• New customers: 8 (target: 10)\n\n**PRODUCT DEVELOPMENT**\n• Sprint completion: 58% (on track)\n• Critical features: Payment gateway 85% complete\n• Technical debt: Reduced by 15%\n• Code coverage: 87% (target: 85%)\n\n**CUSTOMER HEALTH**\n• Support tickets: 24 total (21 resolved)\n• Average resolution time: 4.2 hours\n• CSAT score: 4.6/5\n• 1 high-priority issue needs attention\n\n**KEY RISKS**\n⚠️ InnovateLabs API integration blocking $38.7K account\n⚠️ Payment gateway must complete by Dec 29\n\n**RECOMMENDATIONS**\n1. Prioritize InnovateLabs support issue\n2. Add developer resource to payment gateway\n3. Schedule customer success call with top 3 accounts\n\n*Report generated in 2.3 seconds using your integrated business data*`,
      timestamp: '2:38 PM',
      integrations: selectedIntegrations.slice(0, 4)
    }
  ];

  useEffect(() => {
    if (showConversation && messageIndex < conversationMessages.length) {
      const timer = setTimeout(() => {
        setMessageIndex(prev => prev + 1);
      }, messageIndex === 1 ? 2000 : 3000); // Faster for loading message

      return () => clearTimeout(timer);
    }
  }, [showConversation, messageIndex, conversationMessages.length]);

  return (
    <div className="bg-card border rounded-2xl p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-3">
          🤖 Your Private AI Assistant in Action
        </h3>
        <p className="text-muted-foreground mb-6">
          See how your AI can access and analyze data from all your connected systems in real-time
        </p>

        {!showConversation ? (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setShowConversation(true)}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              ▶️ Start Conversation Demo
            </Button>
          </motion.div>
        ) : (
          <div className="flex items-center justify-center space-x-2 text-sm text-green-600 font-medium">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
            <span>AI Assistant Connected</span>
          </div>
        )}
      </div>

      {showConversation && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 ml-4">Your Company&apos;s Private AI Assistant</span>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {conversationMessages.slice(0, messageIndex).map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    msg.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-white border shadow-sm'
                  }`}>
                    {msg.loading ? (
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-sm text-gray-600">{msg.message}</span>
                      </div>
                    ) : (
                      <>
                        <div className="whitespace-pre-line text-sm">{msg.message}</div>
                        {msg.integrations && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {msg.integrations.map((integration) => (
                              <span
                                key={integration}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                              >
                                📊 {integration}
                              </span>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                    <div className="text-xs opacity-70 mt-1">{msg.timestamp}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {messageIndex >= conversationMessages.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center p-4 bg-green-50 rounded-lg border border-green-200"
            >
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-green-800 font-medium">
                🎉 Amazing! Your AI assistant accessed {selectedIntegrations.length} integrations seamlessly
              </p>
              <p className="text-green-600 text-sm mt-1">
                This is exactly how your team will work with data - no more switching between tools!
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}

