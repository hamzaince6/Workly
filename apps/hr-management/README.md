# 👥 HR Management Module

**Status:** ✅ **COMPLETED & READY TO USE!**

Angular 17 standalone components ile oluşturulmuş tam fonksiyonel HR yönetim modülü.

---

## ✨ Özellikler

### 👤 Employee Management (Çalışan Yönetimi)
- ✅ Çalışan listesi (filtreleme, arama)
- ✅ Çalışan detay sayfası
- ✅ Çalışan ekleme formu (Reactive Forms)
- ✅ Çalışan düzenleme
- ✅ Çalışan silme
- ✅ Departman bazlı filtreleme
- ✅ Status bazlı filtreleme
- ✅ Performans skorları
- ✅ Skills/yetenekler gösterimi

### 📅 Leave Management (İzin Yönetimi)
- ✅ İzin talep listesi
- ✅ İzin talep oluşturma formu
- ✅ İzin onaylama/reddetme
- ✅ İzin türleri (Annual, Sick, Maternity, etc.)
- ✅ İzin durumları (Pending, Approved, Rejected)
- ✅ Tarih aralığı seçimi
- ✅ Otomatik süre hesaplama

### 🎨 UI/UX
- ✅ Modern Tailwind CSS tasarım
- ✅ Responsive layout
- ✅ Form validation
- ✅ Loading states
- ✅ Empty states
- ✅ Status badges
- ✅ Search & filtering

---

## 📦 Kurulum

### 1. Bağımlılıkları Yükle

```bash
# Root klasöründe
cd C:\Users\hamza\OneDrive\Desktop\Projects\workly
pnpm install
```

### 2. Uygulamayı Çalıştır

```bash
# Sadece HR Management
pnpm dev:hr

# Veya direkt olarak
cd apps/hr-management
pnpm dev
```

**URL:** http://localhost:3003

---

## 🚀 Kullanılan Teknolojiler

- **Angular 17** - Standalone Components
- **TypeScript 5.2**
- **Reactive Forms** - Form validation
- **Signals** - Modern state management
- **Tailwind CSS** - Styling (CDN)
- **RxJS** - Reactive programming
- **@workly/shared-types** - Shared type definitions
- **@workly/shared-utils** - Utility functions

---

## 📂 Proje Yapısı

```
hr-management/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── employee-list/          ✅ Liste + Filtreleme
│   │   │   ├── employee-form/          ✅ Reactive Form
│   │   │   ├── employee-detail/        ✅ Detay Sayfası
│   │   │   ├── leave-list/             ✅ İzin Listesi
│   │   │   └── leave-form/             ✅ İzin Talep Formu
│   │   ├── services/
│   │   │   ├── employee.service.ts     ✅ CRUD + Mock Data
│   │   │   └── leave.service.ts        ✅ Leave Operations
│   │   ├── app.component.ts            ✅ Root Component
│   │   └── app.routes.ts               ✅ Lazy Loading Routes
│   ├── index.html
│   ├── main.ts
│   └── styles.css                      ✅ Global Styles
├── angular.json                        ✅ Angular Config
├── package.json                        ✅ Dependencies
└── tsconfig.json                       ✅ TypeScript Config
```

---

## 🎯 Özellikler Detayları

### Employee List Component
- **8 mock çalışan** verisi
- Search (ad, soyad, email, pozisyon)
- Department filter
- Status filter
- Performance score gösterimi
- Avatar gösterimi
- Quick actions (View, Edit, Delete)

### Employee Form Component
- **Reactive Forms** validation
- Required field validation
- Email validation
- Minimum salary validation
- Department dropdown
- Status dropdown
- Skills (comma separated)
- Avatar URL input
- Edit mode support

### Employee Detail Component
- Tam profil bilgileri
- Contact information
- Employment details
- Skills badges
- Performance progress bar
- Edit/Delete actions

### Leave List Component
- **6 mock izin talebi**
- Status filtering (Pending, Approved, Rejected)
- Type filtering (Annual, Sick, Maternity, etc.)
- Duration calculation
- Approve/Reject actions
- Stats cards

### Leave Form Component
- Employee selection dropdown
- Leave type selection
- Date range picker
- Auto duration calculation
- Reason textarea (min 10 chars)
- Form validation
- Info box with guidelines

---

## 🎨 Mock Data

### Employees (8 adet)
- John Doe (Engineering)
- Jane Smith (HR Manager)
- Michael Johnson (Marketing)
- Sarah Williams (Sales Director)
- David Brown (Finance)
- Emily Davis (Operations) - On Leave
- Robert Miller (IT Support)
- Lisa Anderson (Customer Service)

### Leave Requests (6 adet)
- Pending: 2
- Approved: 3
- Rejected: 1

---

## 🔧 API (Mock)

Tüm işlemler in-memory signals ile yapılıyor:

```typescript
// Employee Service
getEmployees(): Employee[]
getEmployeeById(id: string): Employee | undefined
addEmployee(employee: Omit<Employee, 'id'>): Employee
updateEmployee(id: string, updates: Partial<Employee>): void
deleteEmployee(id: string): void

// Leave Service
getLeaves(): LeaveRequest[]
getLeaveById(id: string): LeaveRequest | undefined
addLeave(leave: Omit<LeaveRequest, 'id' | 'createdAt'>): LeaveRequest
updateLeaveStatus(id: string, status: LeaveStatus, approvedBy?: string): void
```

---

## 📱 Sayfalar & Rotalar

| Route | Component | Açıklama |
|-------|-----------|----------|
| `/` | Redirect to `/employees` | Ana sayfa |
| `/employees` | EmployeeListComponent | Çalışan listesi |
| `/employees/new` | EmployeeFormComponent | Yeni çalışan ekle |
| `/employees/:id` | EmployeeDetailComponent | Çalışan detayı |
| `/employees/:id/edit` | EmployeeFormComponent | Çalışan düzenle |
| `/leaves` | LeaveListComponent | İzin talepleri |
| `/leaves/new` | LeaveFormComponent | Yeni izin talebi |

---

## 🎯 Form Validations

### Employee Form
- ✅ First Name (required)
- ✅ Last Name (required)
- ✅ Email (required + email format)
- ✅ Phone (required)
- ✅ Position (required)
- ✅ Department (required)
- ✅ Start Date (required)
- ✅ Salary (required + min 0)
- ✅ Status (required)

### Leave Form
- ✅ Employee (required)
- ✅ Leave Type (required)
- ✅ Start Date (required)
- ✅ End Date (required, >= start date)
- ✅ Reason (required + min 10 chars)

---

## 🚀 Build & Deploy

### Development
```bash
pnpm dev:hr
# veya
ng serve --port 3003
```

### Production Build
```bash
pnpm build:hr
# veya
ng build --configuration production
```

Build output: `dist/hr-management/`

### Vercel Deployment
```bash
# Root Directory: apps/hr-management
# Build Command: ng build --configuration production
# Output Directory: dist/hr-management
# Framework: Angular
```

---

## 💡 Önemli Notlar

1. **Standalone Components** kullanıldı (Angular 17 modern yaklaşım)
2. **Signals** ile state management (reactive ve performanslı)
3. **Lazy Loading** routes (hızlı ilk yükleme)
4. **Reactive Forms** (güçlü validation)
5. **Tailwind CSS** CDN kullanıldı (hızlı setup için)

---

## 🔄 Gelecek Geliştirmeler

- [ ] Attendance tracking modülü
- [ ] Document management
- [ ] Performance review formu
- [ ] Email notifications
- [ ] Export to PDF/Excel
- [ ] Calendar view for leaves
- [ ] Dashboard with charts
- [ ] User authentication
- [ ] Backend API integration

---

## 📞 Test Etme

1. **Çalışan Listesi**
   - http://localhost:3003/employees
   - Search yapın
   - Filtreleyin
   - Çalışan detayına gidin

2. **Yeni Çalışan Ekle**
   - http://localhost:3003/employees/new
   - Formu doldurun
   - Validation'ları test edin

3. **İzin Yönetimi**
   - http://localhost:3003/leaves
   - Approve/Reject butonlarını test edin
   - Yeni izin talebi oluşturun

---

## ✅ Tamamlanan TODO'lar

- [x] Angular 17 setup
- [x] Standalone components
- [x] Employee list with filtering
- [x] Employee form with validation
- [x] Employee detail page
- [x] Leave request list
- [x] Leave request form
- [x] Mock data services
- [x] Routing configuration
- [x] Responsive design
- [x] Tailwind CSS styling

---

**🎉 Angular HR Management modülü tam fonksiyonel ve kullanıma hazır!**
