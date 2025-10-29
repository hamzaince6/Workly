# 🌐 Workly - Port Mapping

## 📊 Application Ports

| App | Framework | Port | URL |
|-----|-----------|------|-----|
| **Landing** | Next.js 15 | **3000** | http://localhost:3000 |
| **Auth** | Vue 3 + Vite | **3001** | http://localhost:3001/auth/login |
| **Task Manager** | Next.js | **3002** | http://localhost:3002 |
| **HR Management** | Angular 17 | **3003** | http://localhost:3003 |
| **Announcements** | Next.js | **3004** | http://localhost:3004 |
| **Shell (Dashboard)** | Next.js 15 | **3005** | http://localhost:3005 |

---

## 🎯 Quick Access

### Landing Page (Main Entry)
```
http://localhost:3000
```
**Purpose:** Homepage with module cards

---

### Auth Module (Vue 3)
```
Login:    http://localhost:3001/auth/login
Register: http://localhost:3001/auth/register
```

**Demo Credentials:**
- Admin: `admin@workly.com` / `admin123`
- User: `user@workly.com` / `user123`

---

### HR Management (Angular)
```
http://localhost:3003/employees
```

**Features:**
- Employee list (8 mock employees)
- Add/Edit/Delete employees
- Leave requests
- Attendance tracking

---

### Task Manager (Next.js)
```
http://localhost:3002
```

**Features:**
- Kanban board (To Do, In Progress, In Review, Done)
- 8 mock tasks
- Priority management
- Project grouping

---

### Announcements (Next.js)
```
http://localhost:3004
```

**Features:**
- 6 mock announcements
- SEO-optimized pages
- Category filtering
- Pinned announcements

---

### Dashboard / Shell (Next.js)
```
http://localhost:3005
```

**Features:**
- Overview statistics
- Recent activity
- Quick actions
- Module navigation

---

## 🚀 Start Commands

### All Apps
```bash
pnpm dev
```

### Individual Apps
```bash
pnpm dev:landing    # Port 3000
pnpm dev:auth       # Port 3001
pnpm dev:task       # Port 3002
pnpm dev:hr         # Port 3003
pnpm dev:announce   # Port 3004
pnpm dev:shell      # Port 3005
```

---

## 🔗 Navigation Flow

```
Landing (3000)
    │
    ├─► Auth (3001) ─► Login/Register
    │
    ├─► HR (3003) ─► Employee Management
    │
    ├─► Tasks (3002) ─► Kanban Board
    │
    ├─► Announcements (3004) ─► News
    │
    └─► Dashboard (3005) ─► Overview
```

---

## 📝 Notes

1. **Landing** (3000) is the main entry point
2. **Auth** (3001) is independent - handles login/register
3. **Shell** (3005) is the dashboard after login
4. All other modules (HR, Tasks, Announcements) run independently

---

## 🔥 Quick Test

1. Open: http://localhost:3000 (Landing)
2. Click module cards to navigate
3. Each module opens in its own port

---

**Last Updated:** 2024-10-29

