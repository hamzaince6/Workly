import { MicroFrontendLoader } from '@/components/MicroFrontendLoader';

export default function HRPage() {
  return (
    <div className="h-full">
      <MicroFrontendLoader 
        url="http://localhost:3003" 
        name="HR Management" 
      />
    </div>
  );
}

