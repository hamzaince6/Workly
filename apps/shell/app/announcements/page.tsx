import { MicroFrontendLoader } from '@/components/MicroFrontendLoader';

export default function AnnouncementsPage() {
  const announcementsUrl = process.env.NEXT_PUBLIC_ANNOUNCEMENTS_URL || 'http://localhost:3004';
  
  return (
    <div className="h-full">
      <MicroFrontendLoader 
        url={announcementsUrl} 
        name="Announcements" 
      />
    </div>
  );
}

