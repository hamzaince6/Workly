# 📦 Ortak Paketler Dokümantasyonu

Workly monorepo'sunda, tüm mikro frontend'ler arasında paylaşılan paketler bulunmaktadır.

## @workly/shared-ui

Tailwind CSS ile yeniden kullanılabilir React UI bileşenleri.

### Bileşenler

#### Button

```tsx
import { Button } from '@workly/shared-ui';

<Button variant="primary" size="md">
  Tıkla
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'`
- `size`: `'sm' | 'md' | 'lg'`
- `disabled`: `boolean`
- `onClick`: `() => void`

#### Card

```tsx
import { Card } from '@workly/shared-ui';

<Card>
  <Card.Header>Başlık</Card.Header>
  <Card.Content>İçerik</Card.Content>
  <Card.Footer>Footer</Card.Footer>
</Card>
```

#### Input

```tsx
import { Input } from '@workly/shared-ui';

<Input
  type="text"
  placeholder="Adınız"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

#### Badge

```tsx
import { Badge } from '@workly/shared-ui';

<Badge variant="success">Aktif</Badge>
```

**Varyantlar:** `'success' | 'warning' | 'error' | 'info' | 'default'`

#### Avatar

```tsx
import { Avatar } from '@workly/shared-ui';

<Avatar
  src="/avatar.jpg"
  alt="Kullanıcı Adı"
  status="online"
/>
```

### Kullanım

```tsx
import { Button, Card, Input, Badge, Avatar } from '@workly/shared-ui';
```

## @workly/shared-utils

Ortak yardımcı fonksiyonlar.

### Modüller

#### date.utils

```ts
import { formatDate, formatDateTime, getRelativeTime } from '@workly/shared-utils';

formatDate(new Date(), 'DD/MM/YYYY'); // "27/11/2024"
formatDateTime(new Date()); // "27/11/2024 21:00"
getRelativeTime(new Date()); // "2 saat önce"
```

#### validation.utils

```ts
import { isEmail, isStrongPassword, validatePassword } from '@workly/shared-utils';

isEmail('test@example.com'); // true
isStrongPassword('MyP@ssw0rd'); // true
validatePassword('weak'); // "Password must contain..."
```

#### format.utils

```ts
import { formatCurrency, formatFileSize, truncate } from '@workly/shared-utils';

formatCurrency(1000, 'TRY'); // "1.000,00 ₺"
formatFileSize(1024); // "1 KB"
truncate('Uzun metin...', 10); // "Uzun metin..."
```

#### array.utils

```ts
import { groupBy, sortBy, unique } from '@workly/shared-utils';

groupBy([{ type: 'a' }, { type: 'b' }], 'type');
sortBy([{ age: 30 }, { age: 20 }], 'age');
unique([1, 2, 2, 3]); // [1, 2, 3]
```

#### object.utils

```ts
import { deepClone, merge } from '@workly/shared-utils';

deepClone({ a: 1, b: { c: 2 } });
merge({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
```

#### storage.utils

```ts
import { storage, sessionStorage } from '@workly/shared-utils';

storage.set('key', 'value');
storage.get('key'); // 'value'
storage.remove('key');
storage.clear();
```

### Kullanım

```ts
import { formatDate, isEmail, formatCurrency } from '@workly/shared-utils';
```

## @workly/shared-types

Tüm uygulamalarda paylaşılan TypeScript tip tanımları.

### Tip Kategorileri

#### Employee Types

```ts
import { Employee, LeaveRequest, Attendance } from '@workly/shared-types';

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  // ...
}
```

#### Task Types

```ts
import { Task, Project, TaskActivity } from '@workly/shared-types';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  // ...
}
```

#### Announcement Types

```ts
import { Announcement, AnnouncementCategory } from '@workly/shared-types';

interface Announcement {
  id: string;
  title: string;
  content: string;
  category: AnnouncementCategory;
  isPinned: boolean;
  // ...
}
```

#### Performance Types

```ts
import { PerformanceReview, KPI, Goal } from '@workly/shared-types';
```

#### User Types

```ts
import { User, UserRole, Permission } from '@workly/shared-types';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  // ...
}
```

#### Common Types

```ts
import { ApiResponse, Pagination } from '@workly/shared-types';

interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
}
```

### Kullanım

```ts
import { Employee, Task, Announcement, ApiResponse } from '@workly/shared-types';
```

## @workly/event-bus

Uygulamalar arası event iletişim sistemi.

### Özellikler

- Tip güvenli event sistemi
- Subscribe/unsubscribe
- Tek seferlik dinleyiciler
- Önceden tanımlı event isimleri

### Kullanım

```ts
import { eventBus, WorklyEvents } from '@workly/event-bus';

// Event dinle
eventBus.on(WorklyEvents.TASK_CREATED, (data) => {
  console.log('Görev oluşturuldu:', data);
});

// Event yayınla
eventBus.emit(WorklyEvents.TASK_CREATED, { taskId: '123', title: 'Yeni Görev' });

// Tek seferlik dinle
eventBus.once(WorklyEvents.USER_LOGGED_IN, (data) => {
  console.log('Kullanıcı giriş yaptı:', data);
});

// Event dinlemeyi bırak
const handler = (data) => console.log(data);
eventBus.on(WorklyEvents.TASK_UPDATED, handler);
eventBus.off(WorklyEvents.TASK_UPDATED, handler);
```

### Mevcut Event'ler

```ts
enum WorklyEvents {
  TASK_CREATED = 'task:created',
  TASK_UPDATED = 'task:updated',
  TASK_DELETED = 'task:deleted',
  USER_LOGGED_IN = 'user:logged-in',
  USER_LOGGED_OUT = 'user:logged-out',
  // ...
}
```

## Paket Geliştirme

Yeni bir ortak paket eklemek için:

1. `packages/` klasörü altında yeni klasör oluşturun
2. `package.json` dosyası ekleyin
3. `tsconfig.json` ekleyin
4. Root `package.json`'a workspace ekleyin
5. Paketi diğer uygulamalarda kullanın

