import { MicroFrontendLoader } from '@/components/MicroFrontendLoader';

export default function TasksPage() {
  const taskManagerUrl = process.env.NEXT_PUBLIC_TASK_MANAGER_URL || 'http://localhost:3002';
  
  return (
    <div className="h-full">
      <MicroFrontendLoader 
        url={taskManagerUrl} 
        name="Task Manager" 
      />
    </div>
  );
}

