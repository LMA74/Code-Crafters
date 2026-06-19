import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

const links = {
  teacher: [
    ['Overview', '/group-leader'],
    ['My Study Groups', '/group-leader/study-groups'],
    ['Create Study Group', '/group-leader/study-groups/create'],
    ['Create Assignment', '/group-leader/assignments/create'],
    ['Submissions', '/group-leader/submissions']
  ],
  student: [
    ['Overview', '/student'],
    ['My Study Groups', '/student/study-groups'],
    ['Assignments', '/student/assignments'],
    ['Grades', '/student/grades']
  ],
  admin: [
    ['Overview', '/admin'],
    ['Users', '/admin/users'],
    ['Study Groups', '/admin/study-groups'],
    ['Categories', '/admin/categories']
  ]
};

export default function DashboardLayout() {
  const { user } = useAuth();
  const roleLabel = user?.role === 'teacher' ? 'group leader' : user?.role;

  return (
    <>
      <Navbar />
      <div className="dashboard-shell">
        <aside className="sidebar">
          <h6 className="text-uppercase text-muted mb-3">{user?.role} menu</h6>
          {(links[user?.role] || []).map(([label, to]) => (
            <NavLink key={to} to={to} end={to.split('/').length === 2}>{label}</NavLink>
          ))}
        </aside>
        <main className="page-shell w-100">
          <Outlet />
        </main>
      </div>
    </>
  );
}
