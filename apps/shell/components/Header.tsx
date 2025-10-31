'use client';

import { Header as SharedHeader } from '@workly/shared-ui';

export function Header() {
  return (
    <SharedHeader
      userName="Admin Kullanıcı"
      userRole="Sistem Yöneticisi"
      showSearch={true}
      searchPlaceholder="Çalışanları, görevleri, duyuruları ara..."
      notificationCount={3}
    />
  );
}

