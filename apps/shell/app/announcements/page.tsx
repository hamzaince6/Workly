import { MicroFrontendLoader } from '@/components/MicroFrontendLoader';

export default function AnnouncementsPage() {
  return (
    <div className="h-full">
      <MicroFrontendLoader 
        url="http://localhost:3004" 
        name="Announcements" 
      />
    </div>
  );
}

