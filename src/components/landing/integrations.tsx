'use client';

import { motion } from 'framer-motion';
import {
  Github,
  GitPullRequest,
  BarChart3,
  AlertTriangle,
  Users,
  Building,
  MessageCircle,
  Headphones,
  MessageSquare,
  FileText,
  Mail,
  CreditCard,
  TrendingUp,
  Database,
  Store,
  Activity,
  Shield
} from 'lucide-react';

const integrationCategories = [
  {
    name: 'Development',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    integrations: [
      { name: 'GitHub', icon: Github },
      { name: 'Linear', icon: GitPullRequest },
      { name: 'Datadog', icon: BarChart3 },
      { name: 'Sentry', icon: AlertTriangle }
    ]
  },
  {
    name: 'Business',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    integrations: [
      { name: 'HubSpot', icon: Users },
      { name: 'Salesforce', icon: Building },
      { name: 'Intercom', icon: MessageCircle },
      { name: 'Zendesk', icon: Headphones }
    ]
  },
  {
    name: 'Productivity',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    integrations: [
      { name: 'Slack', icon: MessageSquare },
      { name: 'Notion', icon: FileText },
      { name: 'Google Workspace', icon: Mail },
      { name: 'Shopify', icon: Store }
    ]
  },
  {
    name: 'Data',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    integrations: [
      { name: 'Stripe', icon: CreditCard },
      { name: 'Mixpanel', icon: TrendingUp },
      { name: 'Snowflake', icon: Database },
      { name: 'Google Analytics', icon: Activity }
    ]
  }
];

export function Integrations() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Connect Everything
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate with the tools your team already uses. From development to data analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrationCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className={`inline-flex items-center px-3 py-1 rounded-full ${category.bgColor} ${category.color} text-sm font-medium`}>
                {category.name}
              </div>

              <div className="space-y-3">
                {category.integrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + index * 0.05
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-center space-x-3 p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-200 cursor-pointer group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-2 rounded-md ${category.bgColor} group-hover:scale-110 transition-transform`}
                    >
                      <integration.icon className={`w-4 h-4 ${category.color}`} />
                    </motion.div>
                    <span className="font-medium text-sm">
                      {integration.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add more integrations note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center bg-muted rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-muted-foreground mr-2" />
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground">500+</strong> integrations available with custom API support
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}