# Private MCP Platform - MVP Demo Website

A stunning MVP demo website for "Private MCP Platform" - a product that auto-generates MCP servers for companies by discovering their APIs and creating secure AI integrations in one click.

## 🚀 Live Demo

The application is running at: [http://localhost:3000](http://localhost:3000)

## ✨ Features

### Landing Page
- **Modern Header & Navigation** - Clean, responsive navigation with animated logo
- **Hero Section** - Compelling value proposition with animated visual flow diagram
- **Features Section** - Three main value propositions with hover animations
- **How It Works** - 4-step process with beautiful alternating layout
- **Integrations Showcase** - Categorized grid of 16+ popular business tools
- **Social Proof** - Testimonials, statistics, and company logos
- **Pricing Preview** - 3-tier pricing with highlighted popular plan
- **Professional Footer** - Complete with social links and security certifications

### Interactive Demo Flow
- **Step 1: Business Type Selection** - Choose from 4 business types with recommended integrations
- **Step 2: Integration Selection** - Browse and select from categorized integrations with search
- **Step 3: MCP Generation Animation** - Beautiful progress animation with realistic steps
- **Step 4: Completion & Results** - Success screen with next steps and documentation links

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Components**: Shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd private-mcp-platform
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npx tsc --noEmit     # Type checking
```

## 🎯 Key Features Implemented

### Landing Page Features
✅ **Responsive Header** with sticky navigation and animated logo
✅ **Hero Section** with animated diagram and dual CTAs
✅ **Features Grid** with 3 value propositions and hover effects
✅ **How It Works** with 4-step alternating layout and animations
✅ **Integrations Showcase** with 16+ tools in categorized grid
✅ **Social Proof** with testimonials, stats, and company logos
✅ **Pricing Cards** with 3 tiers and highlighted popular option
✅ **Professional Footer** with links, certifications, and social icons

### Interactive Demo Features
✅ **Business Type Selection** with 4 options and recommended integrations
✅ **Integration Selection** with search, filtering, and category tabs
✅ **MCP Generation Animation** with 10-step progress and realistic timing
✅ **Completion Screen** with server details, security features, and next steps
✅ **Progress Indicator** showing current step with animations
✅ **State Management** using React Context for demo flow

### Technical Features
✅ **TypeScript** for type safety throughout
✅ **Responsive Design** mobile-first approach
✅ **Performance Optimized** with Next.js Image and lazy loading
✅ **Accessibility** ARIA labels and keyboard navigation
✅ **SEO Ready** with proper meta tags and semantic HTML
✅ **Animation Performance** 60fps smooth transitions

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px (stacked layouts, touch-friendly)
- **Tablet**: 768px - 1024px (2-column grids)
- **Desktop**: 1024px+ (full 3-column layouts)

## 🚢 Deployment

### Vercel (Recommended)
1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Import Project**: Import at https://vercel.com/new
3. **Auto Deploy**: Vercel detects Next.js and deploys automatically

### Custom Domain Setup (mcpily.com)
1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add `mcpily.com` and `www.mcpily.com`

2. **DNS Configuration:**
   - Add CNAME: `www` → `your-project.vercel.app`
   - Add A record: `@` → `76.76.19.61`

### Troubleshooting 404 Issues
If you get 404 errors:

1. **Check Build Status**: Verify deployment succeeded in Vercel dashboard
2. **Force Redeploy**: Go to Deployments → "..." → Redeploy
3. **Test Vercel URL**: Try `your-project.vercel.app` before custom domain
4. **DNS Propagation**: Wait up to 24 hours for DNS changes

### Manual Build
```bash
npm run build
npm run start
```

---

**Built with ❤️ using Next.js, TypeScript, and Framer Motion**
