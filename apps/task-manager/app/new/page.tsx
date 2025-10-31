'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TaskPriority, TaskStatus } from '@workly/shared-types';
import { ArrowLeft, Calendar, User, Flag, Tag as TagIcon, FileText, Clock, Clipboard } from 'lucide-react';

export default function NewTaskPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: TaskPriority.MEDIUM,
    status: TaskStatus.TODO,
    assigneeName: '',
    dueDate: '',
    estimatedHours: '',
    tags: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save to backend
    const newTask = {
      id: `task-${Date.now()}`,
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      status: formData.status,
      assigneeName: formData.assigneeName || undefined,
      dueDate: formData.dueDate || undefined,
      estimatedHours: formData.estimatedHours ? parseInt(formData.estimatedHours) : undefined,
      tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    console.log('New task:', newTask);
    router.push('/');
  };

  return (
    <div className="space-y-6 bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Yeni Görev Oluştur</h1>
        </div>
      </div>

      {/* Form Card */}
      <div className="card border border-gray-200">
        <form onSubmit={handleSubmit} className="card-body space-y-6">
          {/* Basic Info Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-teal-600" />
              Temel Bilgiler
            </h3>
            <div className="space-y-4">
              {/* Title */}
              <div className="form-group">
                <label className="form-label inline-flex items-center gap-2">
                  <Clipboard className="w-4 h-4 text-gray-500" />
                  <span>Görev Başlığı *</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="form-control"
                  placeholder="Görev başlığını girin..."
                />
              </div>

              {/* Description */}
              <div className="form-group">
                <label className="form-label inline-flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-500" />
                  <span>Açıklama</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="form-control"
                  placeholder="Görev detaylarını yazın..."
                />
              </div>
            </div>
          </div>

          {/* Task Details Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Clipboard className="w-5 h-5 text-teal-600" />
              Görev Detayları
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Priority */}
              <div className="form-group">
                <label className="form-label inline-flex items-center gap-2">
                  <Flag className="w-4 h-4 text-gray-500" />
                  <span>Öncelik *</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value as TaskPriority })}
                    className="form-control appearance-none pr-10"
                  >
                    <option value={TaskPriority.LOW}>Düşük</option>
                    <option value={TaskPriority.MEDIUM}>Orta</option>
                    <option value={TaskPriority.HIGH}>Yüksek</option>
                    <option value={TaskPriority.URGENT}>Acil</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>

              {/* Status */}
              <div className="form-group">
                <label className="form-label inline-flex items-center gap-2">
                  <Clipboard className="w-4 h-4 text-gray-500" />
                  <span>Durum *</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as TaskStatus })}
                    className="form-control appearance-none pr-10"
                  >
                    <option value={TaskStatus.TODO}>Yapılacak</option>
                    <option value={TaskStatus.IN_PROGRESS}>Devam Ediyor</option>
                    <option value={TaskStatus.IN_REVIEW}>İncelemede</option>
                    <option value={TaskStatus.DONE}>Tamamlandı</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>

              {/* Assignee */}
              <div className="form-group">
                <label className="form-label inline-flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <span>Atanan Kişi</span>
                </label>
                <input
                  type="text"
                  value={formData.assigneeName}
                  onChange={(e) => setFormData({ ...formData, assigneeName: e.target.value })}
                  className="form-control"
                  placeholder="İsim girin..."
                />
              </div>

              {/* Due Date */}
              <div className="form-group">
                <label className="form-label inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>Bitiş Tarihi</span>
                </label>
                <input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  className="form-control"
                />
              </div>

              {/* Estimated Hours */}
              <div className="form-group">
                <label className="form-label inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>Tahmini Süre (saat)</span>
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.estimatedHours}
                  onChange={(e) => setFormData({ ...formData, estimatedHours: e.target.value })}
                  className="form-control"
                  placeholder="0"
                />
              </div>

              {/* Tags */}
              <div className="form-group">
                <label className="form-label inline-flex items-center gap-2">
                  <TagIcon className="w-4 h-4 text-gray-500" />
                  <span>Etiketler</span>
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="form-control"
                  placeholder="frontend, react, ui"
                />
                <p className="text-xs text-gray-500 mt-1">Virgülle ayırın</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => router.push('/')}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-lg transition-all font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Geri Dön
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 bg-teal-600 text-white hover:bg-teal-700 rounded-lg transition-all font-medium"
            >
              <FileText className="w-5 h-5" />
              Görevi Oluştur
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

