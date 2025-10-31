import { MicroFrontendLoader } from '@/components/MicroFrontendLoader';

export default function TasksPage() {
  return (
    <div className="h-full">
      <MicroFrontendLoader 
        url="http://localhost:3002" 
        name="Task Manager" 
      />
    </div>
  );
}

