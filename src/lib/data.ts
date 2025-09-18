export interface Integration {
  name: string;
  description: string;
  category: 'development' | 'business' | 'productivity' | 'data';
  recommended?: boolean;
  icon: string; // Will use Lucide icon names
}

export interface BusinessType {
  id: string;
  name: string;
  description: string;
  icon: string;
  recommendedIntegrations: string[];
}

export const businessTypes: BusinessType[] = [
  {
    id: 'saas-startup',
    name: 'SaaS/Tech Startup',
    description: 'Fast-growing technology company',
    icon: 'Rocket',
    recommendedIntegrations: ['GitHub', 'Linear', 'Slack', 'HubSpot', 'Datadog']
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Consulting, legal, accounting firms',
    icon: 'Briefcase',
    recommendedIntegrations: ['Google Workspace', 'Notion', 'Salesforce', 'Zendesk']
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Online retail and marketplace',
    icon: 'ShoppingCart',
    recommendedIntegrations: ['Stripe', 'Shopify', 'Intercom', 'Mixpanel', 'Google Analytics']
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    description: 'Fintech, banking, insurance',
    icon: 'Building2',
    recommendedIntegrations: ['Salesforce', 'Zendesk', 'Compliance Tools', 'Data Warehouses']
  }
];

export const integrations: Record<string, Integration> = {
  'GitHub': {
    name: 'GitHub',
    description: 'Code repositories and version control',
    category: 'development',
    icon: 'Github'
  },
  'Linear': {
    name: 'Linear',
    description: 'Issue tracking and project management',
    category: 'development',
    icon: 'GitPullRequest'
  },
  'Datadog': {
    name: 'Datadog',
    description: 'Application monitoring and analytics',
    category: 'development',
    icon: 'BarChart3'
  },
  'Sentry': {
    name: 'Sentry',
    description: 'Error tracking and performance monitoring',
    category: 'development',
    icon: 'AlertTriangle'
  },
  'HubSpot': {
    name: 'HubSpot',
    description: 'CRM and marketing automation',
    category: 'business',
    icon: 'Users'
  },
  'Salesforce': {
    name: 'Salesforce',
    description: 'Customer relationship management',
    category: 'business',
    icon: 'Building'
  },
  'Intercom': {
    name: 'Intercom',
    description: 'Customer support and messaging',
    category: 'business',
    icon: 'MessageCircle'
  },
  'Zendesk': {
    name: 'Zendesk',
    description: 'Customer support tickets',
    category: 'business',
    icon: 'Headphones'
  },
  'Slack': {
    name: 'Slack',
    description: 'Team communication and collaboration',
    category: 'productivity',
    icon: 'MessageSquare'
  },
  'Notion': {
    name: 'Notion',
    description: 'Note-taking and knowledge management',
    category: 'productivity',
    icon: 'FileText'
  },
  'Google Workspace': {
    name: 'Google Workspace',
    description: 'Email, docs, and productivity suite',
    category: 'productivity',
    icon: 'Mail'
  },
  'Stripe': {
    name: 'Stripe',
    description: 'Payment processing and billing',
    category: 'data',
    icon: 'CreditCard'
  },
  'Mixpanel': {
    name: 'Mixpanel',
    description: 'Product analytics and user tracking',
    category: 'data',
    icon: 'TrendingUp'
  },
  'Snowflake': {
    name: 'Snowflake',
    description: 'Cloud data warehouse',
    category: 'data',
    icon: 'Database'
  },
  'Shopify': {
    name: 'Shopify',
    description: 'E-commerce platform',
    category: 'business',
    icon: 'Store'
  },
  'Google Analytics': {
    name: 'Google Analytics',
    description: 'Web analytics and insights',
    category: 'data',
    icon: 'Activity'
  },
  'Compliance Tools': {
    name: 'Compliance Tools',
    description: 'Regulatory compliance management',
    category: 'business',
    icon: 'Shield'
  },
  'Data Warehouses': {
    name: 'Data Warehouses',
    description: 'Enterprise data storage and analytics',
    category: 'data',
    icon: 'Server'
  }
};

export const testimonials = [
  {
    quote: "Reduced our AI integration time from 6 months to 2 days. The auto-discovery feature found APIs we didn't even know we had.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc"
  },
  {
    quote: "Private MCP transformed how our team accesses business data. Now our AI assistant can pull from Salesforce, HubSpot, and our internal tools seamlessly.",
    author: "Marcus Rodriguez",
    role: "Head of Operations",
    company: "Growth Dynamics"
  },
  {
    quote: "The security controls gave us confidence to connect sensitive financial data. RBAC and audit trails are enterprise-grade.",
    author: "Jennifer Walsh",
    role: "VP Engineering",
    company: "FinanceFirst"
  }
];

export const mcpGenerationSteps = [
  "Scanning company systems...",
  "Discovering API endpoints...",
  "Generating MCP tool schemas...",
  "Configuring security policies...",
  "Setting up authentication flows...",
  "Building request routing...",
  "Implementing RBAC controls...",
  "Adding PII redaction...",
  "Creating audit logging...",
  "Deploying to secure cloud..."
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "$2,000",
    period: "per month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 integrations",
      "Basic RBAC",
      "Standard support",
      "Usage analytics",
      "SOC2 compliance"
    ],
    highlighted: false
  },
  {
    name: "Growth",
    price: "$6,000",
    period: "per month",
    description: "Ideal for growing businesses",
    features: [
      "Up to 25 integrations",
      "Advanced RBAC",
      "Priority support",
      "Advanced analytics",
      "Custom workflows",
      "API rate limiting"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$18,000",
    period: "per month",
    description: "For large organizations",
    features: [
      "Unlimited integrations",
      "Enterprise RBAC",
      "Dedicated support",
      "Custom analytics",
      "White-label option",
      "SLA guarantees",
      "On-premise deployment"
    ],
    highlighted: false
  }
];