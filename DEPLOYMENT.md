# 🚀 Deployment Guide - Workly

This guide covers deploying Workly's microfrontend applications to Vercel.

---

## 📋 Prerequisites

- Vercel account (sign up at [vercel.com](https://vercel.com))
- Git repository (GitHub, GitLab, or Bitbucket)
- pnpm installed locally

---

## 🌐 Deployment Strategy

Workly uses a **multi-app deployment strategy** where each microfrontend is deployed as an independent Vercel project:

```
┌─────────────────────┐
│  workly-shell       │ ← Main entry point
│  vercel.app         │
└─────────────────────┘
          │
    ┌─────┴─────┬─────────┐
    │           │         │
┌───▼───┐  ┌────▼───┐ ┌──▼─────┐
│ task  │  │announce│ │   hr   │
│manager│  │ ments  │ │ mgmt   │
└───────┘  └────────┘ └────────┘
```

---

## 📦 Step 1: Prepare Your Repository

1. **Push code to Git**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Ensure monorepo structure**
```
workly/
├── apps/
│   ├── shell/
│   ├── task-manager/
│   ├── announcements/
│   └── hr-management/
└── packages/
```

---

## 🔧 Step 2: Deploy Shell Application

### 2.1 Import Project to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. **Root Directory**: `apps/shell`
4. **Framework Preset**: Next.js
5. **Build Command**: `cd ../.. && pnpm install && pnpm build:shell`
6. **Output Directory**: `apps/shell/.next`
7. **Install Command**: `pnpm install`

### 2.2 Environment Variables

Add these in Vercel dashboard:

```env
NEXT_PUBLIC_TASK_MANAGER_URL=https://workly-task.vercel.app
NEXT_PUBLIC_ANNOUNCEMENTS_URL=https://workly-announce.vercel.app
NEXT_PUBLIC_HR_URL=https://workly-hr.vercel.app
```

### 2.3 Deploy

Click **Deploy** and wait for completion.

**Expected URL**: `https://workly-shell.vercel.app`

---

## 📋 Step 3: Deploy Task Manager

### 3.1 Create New Project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the **same repository**
3. **Root Directory**: `apps/task-manager`
4. **Framework Preset**: Next.js
5. **Build Command**: `cd ../.. && pnpm install && pnpm build:task`
6. **Output Directory**: `apps/task-manager/.next`

### 3.2 Environment Variables

```env
NEXT_PUBLIC_SHELL_URL=https://workly-shell.vercel.app
```

### 3.3 Deploy

**Expected URL**: `https://workly-task.vercel.app`

---

## 📰 Step 4: Deploy Announcements

### 4.1 Create New Project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the **same repository**
3. **Root Directory**: `apps/announcements`
4. **Framework Preset**: Next.js
5. **Build Command**: `cd ../.. && pnpm install && pnpm build:announce`
6. **Output Directory**: `apps/announcements/.next`

### 4.2 Environment Variables

```env
NEXT_PUBLIC_SHELL_URL=https://workly-shell.vercel.app
```

### 4.3 Deploy

**Expected URL**: `https://workly-announce.vercel.app`

---

## 🏢 Step 5: Deploy HR Management (When Ready)

Similar process:

1. **Root Directory**: `apps/hr-management`
2. **Framework Preset**: Angular (or custom)
3. **Build Command**: `cd ../.. && pnpm install && pnpm build:hr`
4. **Output Directory**: `apps/hr-management/dist`

---

## ⚙️ Advanced Configuration

### Custom Build Commands

If using Turbo for builds:

```json
{
  "buildCommand": "cd ../.. && pnpm install && turbo run build --filter=shell"
}
```

### Monorepo Setup

Vercel automatically detects pnpm workspaces. Ensure:

1. `pnpm-workspace.yaml` is at root
2. Root `package.json` has workspace scripts
3. Each app has its own `package.json`

### Caching

Vercel caches:
- `node_modules/`
- `.next/cache/`
- Turbo cache

To clear cache:
```bash
vercel --force
```

---

## 🔄 Continuous Deployment

### Automatic Deployments

Vercel automatically deploys:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests

### Branch Deployments

Configure in `vercel.json`:

```json
{
  "git": {
    "deploymentEnabled": {
      "main": true,
      "develop": true
    }
  }
}
```

---

## 🌍 Custom Domains

### Add Custom Domain

1. Go to Project Settings → Domains
2. Add domain: `workly.yourdomain.com`
3. Configure DNS:

```
Type: CNAME
Name: workly
Value: cname.vercel-dns.com
```

### Subdomain Strategy

```
shell.workly.com          → Shell app
tasks.workly.com          → Task Manager
announcements.workly.com  → Announcements
hr.workly.com             → HR Management
```

---

## 🔐 Environment Management

### Production Variables

Set in Vercel dashboard for each project:

**Shell**:
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.workly.com
NEXT_PUBLIC_TASK_MANAGER_URL=https://tasks.workly.com
NEXT_PUBLIC_ANNOUNCEMENTS_URL=https://announcements.workly.com
```

**Task Manager**:
```env
NODE_ENV=production
NEXT_PUBLIC_SHELL_URL=https://shell.workly.com
NEXT_PUBLIC_API_URL=https://api.workly.com
```

### Preview Variables

Different values for preview deployments:

```env
NEXT_PUBLIC_API_URL=https://api-staging.workly.com
```

---

## 📊 Monitoring

### Vercel Analytics

Enable in Project Settings:
- **Analytics**: Track page views, performance
- **Speed Insights**: Core Web Vitals
- **Logs**: Runtime logs

### Custom Monitoring

Integrate with:
- Sentry for error tracking
- LogRocket for session replay
- Datadog for APM

---

## 🚨 Troubleshooting

### Build Failures

**Issue**: Package not found
```
Error: Cannot find package '@workly/shared-ui'
```

**Solution**: Ensure build command includes `pnpm install` at root:
```bash
cd ../.. && pnpm install && pnpm build:shell
```

---

**Issue**: Out of memory
```
FATAL ERROR: Reached heap limit
```

**Solution**: Increase Node memory in build command:
```bash
NODE_OPTIONS="--max_old_space_size=4096" pnpm build:shell
```

---

### Runtime Errors

**Issue**: Module not transpiled
```
Module parse failed: Unexpected token
```

**Solution**: Add to `next.config.js`:
```js
transpilePackages: [
  '@workly/shared-ui',
  '@workly/shared-utils',
  // ... other packages
]
```

---

### Deployment URL Issues

**Issue**: Apps can't communicate

**Solution**: Update environment variables with actual Vercel URLs

---

## 🔄 Rollback

### Instant Rollback

1. Go to Deployments tab
2. Find previous successful deployment
3. Click **⋯** → **Promote to Production**

### Git-based Rollback

```bash
git revert <commit-hash>
git push origin main
```

---

## 📝 Deployment Checklist

Before deploying to production:

- [ ] All environment variables set
- [ ] Build succeeds locally (`pnpm build`)
- [ ] Type checking passes (`pnpm type-check`)
- [ ] Linting passes (`pnpm lint`)
- [ ] Test all routes manually
- [ ] Check responsive design
- [ ] Verify cross-app navigation
- [ ] Test on multiple browsers
- [ ] Monitor initial deployment
- [ ] Set up error tracking
- [ ] Configure custom domain (if needed)

---

## 🎯 Performance Optimization

### Image Optimization

Use Next.js Image component:
```tsx
import Image from 'next/image';

<Image 
  src="/logo.png" 
  width={200} 
  height={100} 
  alt="Workly"
/>
```

### Bundle Analysis

Add to `package.json`:
```json
{
  "scripts": {
    "analyze": "ANALYZE=true next build"
  }
}
```

Install analyzer:
```bash
pnpm add -D @next/bundle-analyzer
```

Configure in `next.config.js`:
```js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
```

---

## 🌐 Multi-Region Deployment

Vercel automatically deploys to edge locations globally.

To ensure low latency:
1. Enable **Edge Functions** (preview)
2. Use **ISR** (Incremental Static Regeneration)
3. Enable **CDN caching**

---

## 📧 Support

For deployment issues:
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Workly Team: support@workly.com

---

<div align="center">
  <strong>Happy Deploying! 🚀</strong>
</div>

