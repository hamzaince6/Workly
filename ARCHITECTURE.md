# 🏗️ Workly - Microfrontend Architecture

## 📊 System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    WORKLY PLATFORM                          │
│                   localhost:3000                            │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │          LANDING PAGE (Next.js 15)                   │  │
│  │  • Homepage                                          │  │
│  │  • Module Cards                                      │  │
│  │  │  • Features & Pricing                             │  │
│  └──────────────┬───────────────────────────────────────┘  │
│                 │                                           │
│    ┌────────────┼──────────┬───────────┬────────────┐      │
│    │            │           │           │            │      │
│    ▼            ▼           ▼           ▼            ▼      │
│ ┌──────┐   ┌────────┐  ┌───────┐  ┌────────┐  ┌──────┐    │
│ │ Auth │   │ Shell  │  │  HR   │  │ Tasks  │  │ News │    │
│ │ Vue3 │   │ Next15 │  │Angular│  │ Next   │  │ Next │    │
│ │:3004 │   │ :3000  │  │ :3003 │  │ :3001  │  │:3002 │    │
│ └──────┘   └────────┘  └───────┘  └────────┘  └──────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Applications

### 1. Landing Page (Next.js 15)
**Port:** 3000  
**Path:** `/`  
**Purpose:** Ana giriş sayfası, modül tanıtımı

**Features:**
- 🎨 Modern gradient design
- 📱 Responsive layout
- 🔗 Module cards with links
- 🚀 Call-to-action sections
- 📊 Feature highlights

**Routes:**
- `/` - Homepage
- `/auth/login` → Redirects to Auth app
- `/auth/register` → Redirects to Auth app
- `/dashboard/*` → Redirects to Shell app

---

### 2. Auth Module (Vue 3 + Vite)
**Port:** 3004  
**Path:** `/auth/*`  
**Purpose:** Authentication & Authorization

**Features:**
- ✅ Login (email/password)
- ✅ Register (full name, email, password)
- ✅ JWT token management
- ✅ Pinia state management
- ✅ LocalStorage persistence
- ✅ Protected routes
- ✅ Mock authentication

**Tech Stack:**
- Vue 3 (Composition API)
- Vite
- Pinia (state)
- Vue Router
- TypeScript
- Tailwind CSS (CDN)

**Routes:**
- `/auth/login`
- `/auth/register`

**Mock Users:**
```
Admin: admin@workly.com / admin123
User: user@workly.com / user123
```

**After Login:** Redirects to `/dashboard`

---

### 3. Shell / Dashboard (Next.js 15)
**Port:** 3000 (shared with landing)  
**Path:** `/dashboard`  
**Purpose:** Main dashboard & navigation hub

**Features:**
- 📊 Overview stats
- 📈 Recent activity
- ⚡ Quick actions
- 🧭 Module navigation
- 👤 User profile
- 🔔 Notifications

**Routes:**
- `/dashboard` - Main dashboard
- `/dashboard/hr` - HR Management
- `/dashboard/tasks` - Task Manager
- `/dashboard/performance` - Performance
- `/dashboard/announcements` - Announcements

---

### 4. HR Management (Angular 17)
**Port:** 3003  
**Purpose:** Employee & Leave management

**Features:**
- 👥 Employee CRUD
- 📅 Leave requests
- ⏰ Attendance tracking
- 📊 Department management
- ⭐ Performance scores

**Mock Data:** 8 employees, 6 leave requests

---

### 5. Task Manager (Next.js)
**Port:** 3001  
**Purpose:** Task & project management

**Features:**
- 📋 Kanban board (4 columns)
- 🎯 Priority management
- 🏷️ Tags & filtering
- 👥 Team assignments
- 📊 Project grouping

**Mock Data:** 8 tasks, 3 projects

---

### 6. Announcements (Next.js + SSG)
**Port:** 3002  
**Purpose:** Company news & updates

**Features:**
- 📰 SEO-optimized pages
- 📌 Pinned announcements
- 🏷️ Categories & tags
- 📊 View tracking
- 🔗 Dynamic routes (SSG)

**Mock Data:** 6 announcements

---

## 🔐 Authentication Flow

```
┌──────────┐     Login      ┌──────────┐    Success    ┌──────────┐
│ Landing  │ ───────────>   │   Auth   │  ──────────>  │Dashboard │
│   Page   │                │  (Vue3)  │               │  (Shell) │
└──────────┘                └──────────┘               └──────────┘
                                  │
                                  │ JWT Token
                                  ▼
                            ┌──────────────┐
                            │ localStorage │
                            │ • token      │
                            │ • user       │
                            └──────────────┘
```

1. User visits `/` (Landing)
2. Clicks "Sign In" → `/auth/login` (Vue 3 app)
3. Enters credentials
4. Auth store validates & generates JWT
5. Saves to localStorage
6. Redirects to `/dashboard`
7. Shell checks auth & loads user data

---

## 📦 Shared Packages

All apps share common packages via pnpm workspace:

### @workly/shared-types
- Employee, Task, Announcement types
- User, Auth types
- Common interfaces

### @workly/shared-utils
- Date formatting
- Validation
- Array/Object helpers
- Storage utilities

### @workly/shared-ui (React)
- Button, Card, Input
- Badge, Avatar
- Reusable components

### @workly/event-bus
- Cross-app communication
- Event emitter
- Type-safe events

---

## 🌐 URL Structure

```
Landing:
├── /                          → Homepage
├── /auth/login                → Vue 3 Auth (Login)
├── /auth/register             → Vue 3 Auth (Register)
│
Dashboard:
├── /dashboard                 → Shell (Overview)
├── /dashboard/hr              → HR Management
│   ├── /employees             → Employee list
│   ├── /employees/new         → Add employee
│   ├── /employees/:id         → Employee detail
│   ├── /leaves                → Leave requests
│   └── /leaves/new            → Request leave
│
├── /dashboard/tasks           → Task Manager
│   └── (Kanban board)
│
├── /dashboard/performance     → Performance Reports
│   └── (Analytics & KPIs)
│
└── /dashboard/announcements   → Announcements
    ├── /                      → List
    └── /announcement/:slug    → Detail (SSG)
```

---

## 🚀 Development Workflow

### Start All Apps
```bash
pnpm dev
```

Starts:
- Landing (3000)
- Auth (3004)
- Shell (3000)
- HR (3003)
- Tasks (3001)
- Announcements (3002)

### Start Individual Apps
```bash
pnpm dev:landing       # Landing page
pnpm dev:auth          # Vue 3 Auth
pnpm dev:shell         # Dashboard
pnpm dev:hr            # HR Management
pnpm dev:task          # Task Manager
pnpm dev:announce      # Announcements
```

---

## 🔄 Data Flow

```
┌─────────────┐
│   Landing   │
└──────┬──────┘
       │ User clicks "Sign In"
       ▼
┌─────────────┐
│  Auth (Vue) │  ← Pinia Store
└──────┬──────┘  ← JWT Token
       │ Login success
       ▼
┌─────────────┐
│   Shell     │  ← Check auth
└──────┬──────┘  ← Load user
       │
       ├────► /dashboard/hr       (Angular)
       ├────► /dashboard/tasks    (Next.js)
       └────► /dashboard/announce (Next.js)
```

---

## 🎨 Tech Stack Summary

| App | Framework | Port | Purpose |
|-----|-----------|------|---------|
| Landing | Next.js 15 | 3000 | Homepage |
| Auth | Vue 3 + Vite | 3004 | Authentication |
| Shell | Next.js 15 | 3000 | Dashboard |
| HR | Angular 17 | 3003 | HR Management |
| Tasks | Next.js | 3001 | Task Manager |
| Announcements | Next.js | 3002 | News |

---

## 📝 Future Enhancements

### Phase 1 (Current) ✅
- [x] Landing page
- [x] Vue 3 Auth
- [x] JWT mock system
- [x] Shell dashboard
- [x] HR Management
- [x] Task Manager
- [x] Announcements

### Phase 2 🚧
- [ ] Module Federation (runtime integration)
- [ ] Real API backend
- [ ] WebSocket real-time updates
- [ ] OAuth (Google, GitHub)
- [ ] 2FA authentication
- [ ] Password reset flow

### Phase 3 🔮
- [ ] Analytics module
- [ ] Reports module
- [ ] Settings module
- [ ] Chat/messaging
- [ ] Notifications system
- [ ] Dark mode

---

## 🔒 Security

- ✅ JWT token-based auth
- ✅ LocalStorage for persistence
- ✅ Protected routes
- ✅ Role-based access (planned)
- ✅ XSS protection
- ✅ CSRF tokens (planned)

---

## 📚 Documentation

- [README.md](./README.md) - Main documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Vercel deployment guide
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
- [ARCHITECTURE.md](./ARCHITECTURE.md) - This file

---

**Built with ❤️ using Modern Microfrontend Architecture**

