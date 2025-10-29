'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge } from '@workly/shared-ui';
import { TaskStatus, Task } from '@workly/shared-types';
import { mockTasks, getTasksByStatus } from '@/data/mock-tasks';
import { Plus, Filter, Search } from 'lucide-react';

export default function TaskManagerPage() {
  const [tasks] = useState<Task[]>(mockTasks);

  const columns = [
    { id: TaskStatus.TODO, title: 'To Do', color: 'bg-gray-100' },
    { id: TaskStatus.IN_PROGRESS, title: 'In Progress', color: 'bg-blue-100' },
    { id: TaskStatus.IN_REVIEW, title: 'In Review', color: 'bg-yellow-100' },
    { id: TaskStatus.DONE, title: 'Done', color: 'bg-green-100' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent':
        return 'danger';
      case 'High':
        return 'warning';
      case 'Medium':
        return 'info';
      case 'Low':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
            <p className="text-gray-600 mt-1">Manage and track your team's tasks</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-5 w-5" />
            New Task
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-5 w-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {columns.map((column) => {
          const count = getTasksByStatus(column.id).length;
          return (
            <Card key={column.id} variant="elevated">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{column.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{count}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${column.color} flex items-center justify-center`}>
                    <span className="text-xl font-bold">{count}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((column) => (
          <div key={column.id} className="flex flex-col">
            <div className={`p-3 rounded-t-lg ${column.color}`}>
              <h3 className="font-semibold text-gray-900">{column.title}</h3>
              <p className="text-sm text-gray-600">{getTasksByStatus(column.id).length} tasks</p>
            </div>
            <div className="space-y-3 p-3 bg-gray-50 rounded-b-lg min-h-[500px]">
              {getTasksByStatus(column.id).map((task) => (
                <Card key={task.id} variant="elevated" className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">{task.title}</h4>
                      <Badge variant={getPriorityColor(task.priority)} size="sm">
                        {task.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{task.description}</p>
                    
                    {/* Tags */}
                    {task.tags && task.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {task.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Assignee & Due Date */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      {task.assigneeName && (
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                            {task.assigneeName.charAt(0)}
                          </div>
                          <span className="truncate max-w-[100px]">{task.assigneeName}</span>
                        </div>
                      )}
                      {task.dueDate && (
                        <span className="text-xs text-gray-500">
                          {new Date(task.dueDate).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

