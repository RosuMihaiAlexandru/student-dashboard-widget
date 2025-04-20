
import dynamic from 'next/dynamic';

const StudentDashboard = dynamic(() => import("../components/StudentDashboard"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard Widget</h1>
      <StudentDashboard />
    </div>
  );
}
