# 🚀 Workly - Enterprise HR & Task Management Platform

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-8.12-orange)](https://pnpm.io/)

Workly is a modern **microfrontend-based SaaS platform** designed for enterprise HR management, task tracking, performance analytics, and company announcements. Built with a microfrontend architecture using **Next.js 15**, **Angular**, and **pnpm workspaces**.

---

## 📋 Table of Contents

- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)
- [Microfrontends](#-microfrontends)
- [Shared Packages](#-shared-packages)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🏢 Enterprise-Ready
- **Microfrontend Architecture** - Independent deployment and development of modules
- **TypeScript** - Type-safe codebase across all applications
- **Monorepo** - Managed with pnpm workspaces and Turbo for optimal performance
- **Shared Components** - Reusable UI components and utilities

### 📊 Core Modules

#### 1. **Shell (Dashboard)**
- Centralized entry point and navigation
- Overview statistics and analytics
- Recent activity tracking
- Quick actions for all modules

#### 2. **HR Management**
- Employee management (CRUD operations)
- Leave request system with approval workflow
- Attendance tracking
- Department management

#### 3. **Task Manager**
- Kanban-style task board
- Drag-and-drop functionality
- Real-time task updates
- Project management
- Task prioritization and filtering

#### 4. **Performance Reports**
- Employee performance tracking
- KPI dashboards
- Goal setting and monitoring
- Review cycles management
- Advanced analytics and charts

#### 5. **Announcements**
- SEO-optimized announcements
- Static Site Generation (SSG) support
- Rich content editor
- Category and tag management
- Engagement tracking (views, reactions)

---

## 🏗️ Architecture

Workly uses a **microfrontend architecture** where each module is developed and deployed independently but integrated seamlessly through the shell application.

```
┌─────────────────────────────────────────┐
│          Shell (Host App)               │
│         Next.js 15 - Port 3000          │
│  ┌───────────────────────────────────┐  │
│  │   Navigation & Authentication     │  │
│  └───────────────────────────────────┘  │
└─────────────┬───────────────────────────┘
              │
    ┌─────────┼─────────┬─────────┐
    │         │         │         │
┌───▼───┐ ┌──▼───┐ ┌───▼───┐ ┌───▼────┐
│  HR   │ │Tasks │ │Perf.  │ │Announce│
│Angular│ │Next  │ │Angular│ │Next    │
│ 3001  │ │ 3001 │ │ TBD   │ │ 3002   │
└───────┘ └──────┘ └───────┘ └────────┘
```

### Communication Layer
- **Event Bus** - Cross-application event communication
- **Shared State** - Common data and user context
- **Type Safety** - Shared TypeScript types across all apps

---

## 🛠️ Tech Stack

### Frontend Frameworks
- **Next.js 15** - Shell, Task Manager, Announcements (App Router)
- **Angular** - HR Management (planned)
- **React 18** - UI components

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Shared UI Components** - Custom component library
- **Lucide React** - Beautiful icon set

### Development Tools
- **TypeScript** - Static typing
- **pnpm** - Fast, disk-efficient package manager
- **Turbo** - Incremental build system
- **ESLint** - Code linting
- **Prettier** - Code formatting

### State & Data
- **Mock Data** - Built-in mock data for development
- **Event Bus** - Inter-app communication
- **Local Storage** - Client-side persistence

---

## 📁 Project Structure

```
workly/
├── apps/
│   ├── shell/                    # Host application (Next.js 15)
│   │   ├── app/                  # App router pages
│   │   ├── components/           # Shell-specific components
│   │   ├── lib/                  # Utilities
│   │   └── package.json
│   │
│   ├── task-manager/             # Task management module (Next.js)
│   │   ├── app/                  # Task pages
│   │   ├── components/           # Task components
│   │   ├── data/                 # Mock data
│   │   └── package.json
│   │
│   ├── announcements/            # Announcements module (Next.js)
│   │   ├── app/                  # Announcement pages
│   │   ├── data/                 # Mock announcements
│   │   └── package.json
│   │
│   └── hr-management/            # HR module (Angular - planned)
│       └── package.json
│
├── packages/
│   ├── shared-ui/                # Shared UI components
│   │   ├── src/
│   │   │   ├── components/       # Button, Card, Input, etc.
│   │   │   └── utils/            # UI utilities
│   │   └── package.json
│   │
│   ├── shared-utils/             # Utility functions
│   │   ├── src/
│   │   │   ├── date.utils.ts     # Date formatting
│   │   │   ├── validation.utils.ts
│   │   │   ├── format.utils.ts
│   │   │   └── array.utils.ts
│   │   └── package.json
│   │
│   ├── shared-types/             # TypeScript types
│   │   ├── src/
│   │   │   ├── employee.types.ts
│   │   │   ├── task.types.ts
│   │   │   ├── announcement.types.ts
│   │   │   └── user.types.ts
│   │   └── package.json
│   │
│   └── event-bus/                # Inter-app communication
│       ├── src/
│       │   ├── event-bus.ts      # Event emitter
│       │   └── events.ts         # Event definitions
│       └── package.json
│
├── pnpm-workspace.yaml           # Workspace configuration
├── package.json                  # Root package.json
├── turbo.json                    # Turbo configuration
├── tsconfig.json                 # Base TypeScript config
└── README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0

```bash
# Install pnpm globally if you haven't
npm install -g pnpm@8.12.0
```

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd workly
```

2. **Install dependencies**
```bash
pnpm install
```

This will install all dependencies for the root, apps, and packages.

---

## 💻 Development

### Run All Applications

```bash
# Start all microfrontends in parallel
pnpm dev
```

This will start:
- **Shell**: http://localhost:3000
- **Task Manager**: http://localhost:3001
- **Announcements**: http://localhost:3002

### Run Individual Applications

```bash
# Shell (Dashboard)
pnpm dev:shell

# Task Manager
pnpm dev:task

# Announcements
pnpm dev:announce

# HR Management (when available)
pnpm dev:hr
```

### Build Applications

```bash
# Build all apps
pnpm build

# Build individual app
pnpm build:shell
pnpm build:task
pnpm build:announce
```

### Linting & Formatting

```bash
# Lint all projects
pnpm lint

# Format all files
pnpm format

# Type check all projects
pnpm type-check
```

### Clean Build Artifacts

```bash
pnpm clean
```

---

## 📦 Microfrontends

### 1. Shell (Host Application)

**Port:** 3000  
**Framework:** Next.js 15  
**Purpose:** Main entry point, navigation, and dashboard

**Features:**
- Centralized navigation
- User authentication (mock)
- Dashboard with statistics
- Module integration

**Key Pages:**
- `/` - Dashboard
- `/hr` - HR Management (placeholder)
- `/tasks` - Task Manager (placeholder)
- `/performance` - Performance Reports (placeholder)
- `/announcements` - Announcements (placeholder)

### 2. Task Manager

**Port:** 3001  
**Framework:** Next.js  
**Purpose:** Task and project management

**Features:**
- Kanban board (To Do, In Progress, In Review, Done)
- Task filtering and search
- Priority management
- Project grouping
- Real-time updates (mock)

**Tech:**
- `@dnd-kit` - Drag and drop (planned)
- Mock task data with 8+ sample tasks

### 3. Announcements

**Port:** 3002  
**Framework:** Next.js (with SSG)  
**Purpose:** Company announcements and news

**Features:**
- SEO-optimized pages
- Static Site Generation
- Pinned announcements
- Category filtering
- Rich content display
- View tracking

**Routes:**
- `/` - All announcements
- `/announcement/[slug]` - Individual announcement (SSG)

### 4. HR Management

**Status:** Planned (Angular)  
**Purpose:** Employee management and HR operations

**Planned Features:**
- Employee CRUD
- Leave management
- Attendance tracking
- Department management

---

## 📚 Shared Packages

### @workly/shared-ui

Reusable React UI components with Tailwind CSS.

**Components:**
- `Button` - Primary, secondary, outline, ghost, danger variants
- `Card` - Versatile card component with header, content, footer
- `Input` - Form input with validation states
- `Badge` - Status badges with color variants
- `Avatar` - User avatars with status indicators

**Usage:**
```tsx
import { Button, Card } from '@workly/shared-ui';

<Button variant="primary" size="md">
  Click Me
</Button>
```

### @workly/shared-utils

Common utility functions.

**Modules:**
- `date.utils` - Date formatting and manipulation
- `validation.utils` - Form validation
- `format.utils` - String formatting, currency, file size
- `array.utils` - Array operations (groupBy, sortBy, unique)
- `object.utils` - Object operations (deepClone, merge)
- `storage.utils` - LocalStorage, SessionStorage wrappers

**Usage:**
```ts
import { formatDate, isEmail } from '@workly/shared-utils';

const formatted = formatDate(new Date(), 'DD/MM/YYYY');
const valid = isEmail('user@example.com');
```

### @workly/shared-types

TypeScript type definitions shared across all apps.

**Type Categories:**
- Employee types (Employee, LeaveRequest, Attendance)
- Task types (Task, Project, TaskActivity)
- Announcement types (Announcement, AnnouncementCategory)
- Performance types (PerformanceReview, KPI, Goal)
- User types (User, UserRole, Permission)
- Common types (ApiResponse, Pagination)

**Usage:**
```ts
import { Employee, Task, Announcement } from '@workly/shared-types';
```

### @workly/event-bus

Cross-application event communication system.

**Features:**
- Type-safe event system
- Subscribe/unsubscribe
- One-time listeners
- Predefined event names

**Usage:**
```ts
import { eventBus, WorklyEvents } from '@workly/event-bus';

// Subscribe
eventBus.on(WorklyEvents.TASK_CREATED, (data) => {
  console.log('Task created:', data);
});

// Emit
eventBus.emit(WorklyEvents.TASK_CREATED, { taskId: '123' });
```

---

## 🌐 Deployment

### Vercel Deployment (Recommended)

Each microfrontend can be deployed as a separate Vercel project:

**1. Shell Application**
```bash
cd apps/shell
vercel --prod
```

**2. Task Manager**
```bash
cd apps/task-manager
vercel --prod
```

**3. Announcements**
```bash
cd apps/announcements
vercel --prod
```

### Environment Variables

Create `.env.local` files in each app:

```env
# apps/shell/.env.local
NEXT_PUBLIC_TASK_MANAGER_URL=https://workly-task.vercel.app
NEXT_PUBLIC_ANNOUNCEMENTS_URL=https://workly-announce.vercel.app
NEXT_PUBLIC_HR_URL=https://workly-hr.vercel.app

# apps/task-manager/.env.local
NEXT_PUBLIC_SHELL_URL=https://workly-shell.vercel.app

# apps/announcements/.env.local
NEXT_PUBLIC_SHELL_URL=https://workly-shell.vercel.app
```

### Expected URLs

- **Shell**: `https://workly-shell.vercel.app`
- **Task Manager**: `https://workly-task.vercel.app`
- **Announcements**: `https://workly-announce.vercel.app`
- **HR Management**: `https://workly-hr.vercel.app`

---

## 🎯 Roadmap

### Phase 1 ✅ (Current)
- [x] Project setup with pnpm monorepo
- [x] Shared packages (UI, Utils, Types, Event Bus)
- [x] Shell application with dashboard
- [x] Task Manager with Kanban board
- [x] Announcements with SSG

### Phase 2 🚧 (In Progress)
- [ ] Angular HR Management module
- [ ] Module Federation implementation
- [ ] Real drag-and-drop in Task Manager
- [ ] User authentication system

### Phase 3 📋 (Planned)
- [ ] Performance Reports module (Angular)
- [ ] Real-time WebSocket integration
- [ ] Advanced analytics dashboard
- [ ] Mobile responsive improvements
- [ ] Dark mode support

### Phase 4 🔮 (Future)
- [ ] Backend API integration
- [ ] Database persistence
- [ ] User roles and permissions
- [ ] Email notifications
- [ ] PDF export functionality
- [ ] Multi-language support (i18n)

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all linters pass before submitting PR

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

**Hamza** - Initial work and architecture

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting platform
- Tailwind CSS for the utility-first CSS framework
- All contributors to the open-source packages used

---

## 📞 Support

For support, email hamza@workly.com or join our Slack channel.

---

<div align="center">
  <strong>Built with ❤️ using Microfrontend Architecture</strong>
</div>

