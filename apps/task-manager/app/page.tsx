'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TaskStatus, Task } from '@workly/shared-types';
import { mockTasks } from '@/data/mock-tasks';
import { Plus, Search, Filter, ListTodo, Clock, CheckCircle2, Clipboard } from 'lucide-react';
import { TaskCard } from '@/components/TaskCard';

export default function TaskManagerPage() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const columns = [
    { 
      id: TaskStatus.TODO, 
      title: 'Yapılacak', 
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      icon: ListTodo,
      iconColor: 'text-gray-600'
    },
    { 
      id: TaskStatus.IN_PROGRESS, 
      title: 'Devam Ediyor', 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      icon: Clock,
      iconColor: 'text-blue-600'
    },
    { 
      id: TaskStatus.IN_REVIEW, 
      title: 'İncelemede', 
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      icon: Clipboard,
      iconColor: 'text-yellow-600'
    },
    { 
      id: TaskStatus.DONE, 
      title: 'Tamamlandı', 
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      icon: CheckCircle2,
      iconColor: 'text-green-600'
    },
  ];

  const getTasksByStatus = (status: TaskStatus) => {
    return tasks.filter(task => {
      const matchesStatus = task.status === status;
      const matchesSearch = searchQuery
        ? task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description?.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchesStatus && matchesSearch;
    });
  };

  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (status: TaskStatus) => {
    if (draggedTask && draggedTask.status !== status) {
      setTasks(tasks.map(task =>
        task.id === draggedTask.id
          ? { ...task, status, updatedAt: new Date().toISOString() }
          : task
      ));
    }
    setDraggedTask(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center shadow-lg">
              <ListTodo className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Görev Yönetimi</h1>
              <p className="text-gray-600 mt-1">Ekibinizin görevlerini yönetin ve takip edin</p>
            </div>
          </div>
          <button
            onClick={() => router.push('/new')}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg hover:from-teal-700 hover:to-green-700 transition-all shadow-md hover:shadow-lg font-medium"
          >
            <Plus className="h-5 w-5" />
            Yeni Görev
          </button>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Görevlerde ara..."
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {columns.map((column) => {
          const count = getTasksByStatus(column.id).length;
          const Icon = column.icon;
          return (
            <div
              key={column.id}
              className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">{column.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{count}</p>
                </div>
                <div className={`w-14 h-14 rounded-xl ${column.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-7 h-7 ${column.iconColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((column) => {
          const columnTasks = getTasksByStatus(column.id);
          const Icon = column.icon;
          
          return (
            <div
              key={column.id}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(column.id)}
              className="flex flex-col"
            >
              {/* Column Header */}
              <div className={`bg-gradient-to-r ${column.color} rounded-t-xl p-4 shadow-sm`}>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    <h3 className="font-bold text-lg">{column.title}</h3>
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    {columnTasks.length}
                  </span>
                </div>
              </div>

              {/* Column Body */}
              <div
                className={`${column.bgColor} rounded-b-xl p-4 min-h-[600px] space-y-3 border-l border-r border-b border-gray-200`}
              >
                {columnTasks.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                    <Icon className="w-12 h-12 mb-3 opacity-30" />
                    <p className="text-sm font-medium">Henüz görev yok</p>
                    <p className="text-xs mt-1">Görev ekleyin veya sürükleyin</p>
                  </div>
                ) : (
                  columnTasks.map((task) => (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={() => handleDragStart(task)}
                      className="transform transition-transform hover:scale-[1.02]"
                    >
                      <TaskCard task={task} />
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
