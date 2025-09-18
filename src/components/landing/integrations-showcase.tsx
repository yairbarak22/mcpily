'use client';

import { motion } from 'framer-motion';

const integrations = [
  // CRM & Sales
  { name: 'Salesforce', category: 'CRM & Sales', logo: '🏢' },
  { name: 'HubSpot', category: 'CRM & Sales', logo: '🎯' },
  { name: 'Pipedrive', category: 'CRM & Sales', logo: '📊' },
  { name: 'Zoho CRM', category: 'CRM & Sales', logo: '🔗' },

  // Communication
  { name: 'Slack', category: 'Communication', logo: '💬' },
  { name: 'Microsoft Teams', category: 'Communication', logo: '👥' },
  { name: 'Discord', category: 'Communication', logo: '🎮' },
  { name: 'Zoom', category: 'Communication', logo: '📹' },

  // Project Management
  { name: 'Jira', category: 'Project Management', logo: '🎫' },
  { name: 'Asana', category: 'Project Management', logo: '✅' },
  { name: 'Trello', category: 'Project Management', logo: '📋' },
  { name: 'Monday.com', category: 'Project Management', logo: '📅' },

  // Development
  { name: 'GitHub', category: 'Development', logo: '🐙' },
  { name: 'GitLab', category: 'Development', logo: '🦊' },
  { name: 'Bitbucket', category: 'Development', logo: '🪣' },
  { name: 'Azure DevOps', category: 'Development', logo: '⚙️' },

  // Support & Helpdesk
  { name: 'Zendesk', category: 'Support', logo: '🎧' },
  { name: 'Intercom', category: 'Support', logo: '💡' },
  { name: 'Freshdesk', category: 'Support', logo: '🆘' },
  { name: 'ServiceNow', category: 'Support', logo: '🔧' },

  // Analytics & Data
  { name: 'Google Analytics', category: 'Analytics', logo: '📈' },
  { name: 'Mixpanel', category: 'Analytics', logo: '🔍' },
  { name: 'Tableau', category: 'Analytics', logo: '📊' },
  { name: 'Power BI', category: 'Analytics', logo: '⚡' },

  // Finance & Accounting
  { name: 'QuickBooks', category: 'Finance', logo: '💰' },
  { name: 'Stripe', category: 'Finance', logo: '💳' },
  { name: 'PayPal', category: 'Finance', logo: '🏦' },
  { name: 'Xero', category: 'Finance', logo: '📒' },

  // Marketing
  { name: 'Mailchimp', category: 'Marketing', logo: '📧' },
  { name: 'Klaviyo', category: 'Marketing', logo: '📬' },
  { name: 'Google Ads', category: 'Marketing', logo: '🎯' },
  { name: 'Facebook Ads', category: 'Marketing', logo: '📱' },
];

const categories = [
  'CRM & Sales',
  'Communication',
  'Project Management',
  'Development',
  'Support',
  'Analytics',
  'Finance',
  'Marketing'
];

export function IntegrationsShowcase() {
  return (
    <section className="py-32 lg:py-40 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Connect Everything
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your AI connects to all the tools your business already uses. No switching between apps, no manual data gathering.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => {
            const categoryIntegrations = integrations.filter(int => int.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold mb-4 text-center">{category}</h3>
                <div className="space-y-3">
                  {categoryIntegrations.map((integration, idx) => (
                    <motion.div
                      key={integration.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-xl">{integration.logo}</span>
                      <span className="text-sm font-medium">{integration.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              32+ Integrations and Growing
            </h3>
            <p className="text-muted-foreground mb-6">
              Don't see your tool? We can build custom integrations for any system with an API.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="/demo"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Request Custom Integration
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}