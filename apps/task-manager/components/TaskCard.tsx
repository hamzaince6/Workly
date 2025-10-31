'use client';

import { Task } from '@workly/shared-types';
import { Badge } from '@workly/shared-ui';
import { Calendar, User, Clock, Tag } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onClick?: () => void;
}

export function TaskCard({ task, onClick }: TaskCardProps) {
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

  const getDueDateColor = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffDays = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'text-red-600';
    if (diffDays <= 2) return 'text-orange-600';
    return 'text-gray-600';
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-gray-200 p-4 cursor-grab active:cursor-grabbing hover:shadow-md transition-all group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-gray-900 text-sm flex-1 pr-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
          {task.title}
        </h4>
        <Badge variant={getPriorityColor(task.priority)} size="sm">
          {task.priority}
        </Badge>
      </div>

      {/* Description */}
      {task.description && (
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* Tags */}
      {task.tags && task.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {task.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal-50 text-teal-700 rounded text-xs font-medium"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
          {task.tags.length > 3 && (
            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
              +{task.tags.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-100">
        {/* Assignee */}
        {task.assigneeName && (
          <div className="flex items-center gap-2">
            {task.assigneeAvatar ? (
              <img
                src={task.assigneeAvatar}
                alt={task.assigneeName}
                className="w-6 h-6 rounded-full border border-gray-200"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-white font-medium text-xs">
                {task.assigneeName.charAt(0)}
              </div>
            )}
            <span className="text-gray-700 font-medium truncate max-w-[80px]">
              {task.assigneeName.split(' ')[0]}
            </span>
          </div>
        )}

        {/* Due Date */}
        {task.dueDate && (
          <div className={`flex items-center gap-1 ${getDueDateColor(task.dueDate)}`}>
            <Calendar className="w-3.5 h-3.5" />
            <span className="font-medium">
              {new Date(task.dueDate).toLocaleDateString('tr-TR', { month: 'short', day: 'numeric' })}
            </span>
          </div>
        )}
      </div>

      {/* Progress indicator (if has estimated hours) */}
      {task.estimatedHours && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Progress
            </span>
            <span className="font-medium">
              {task.actualHours || 0}h / {task.estimatedHours}h
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-gradient-to-r from-teal-500 to-green-500 h-1.5 rounded-full transition-all"
              style={{
                width: `${Math.min(((task.actualHours || 0) / task.estimatedHours) * 100, 100)}%`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

