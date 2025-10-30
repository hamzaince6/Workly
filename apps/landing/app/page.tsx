import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <div className="inline-flex w-20 h-20 bg-white rounded-2xl items-center justify-center mb-6">
          <span className="text-4xl font-bold text-purple-600">W</span>
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-6">
          Workly Platform
        </h1>
        
        <p className="text-2xl text-white/90 mb-12">
          Enterprise Management System
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link
            href="http://localhost:3003/employees"
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all text-white text-left"
          >
            <h3 className="text-2xl font-bold mb-2">👥 HR Management</h3>
            <p className="text-white/80">Manage employees and leaves</p>
          </Link>

          <Link
            href="http://localhost:3002"
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all text-white text-left"
          >
            <h3 className="text-2xl font-bold mb-2">✅ Task Manager</h3>
            <p className="text-white/80">Kanban board and projects</p>
          </Link>

          <Link
            href="http://localhost:3004"
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all text-white text-left"
          >
            <h3 className="text-2xl font-bold mb-2">📢 Announcements</h3>
            <p className="text-white/80">Company news and updates</p>
          </Link>

          <Link
            href="http://localhost:3005"
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all text-white text-left"
          >
            <h3 className="text-2xl font-bold mb-2">📊 Dashboard</h3>
            <p className="text-white/80">Overview and statistics</p>
          </Link>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white/80">
          <p className="text-sm">
            <strong>Note:</strong> This is a microfrontend platform. Each module runs independently.
          </p>
        </div>
      </div>
    </div>
  );
}
