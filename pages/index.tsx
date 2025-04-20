
import StudentDashboard from '../components/StudentDashboard';

export default function Home() {
  return (
    <div className="min-h-screen w-full p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard Widget</h1>
      <StudentDashboard />
    </div>
  );
}
