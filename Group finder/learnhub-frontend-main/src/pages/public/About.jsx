export default function About() {
  return (
    <main className="page-shell">
      <div className="content-panel">
        <h1 className="h3">About Study Buddy</h1>
        <p>
          Study Buddy is a smart platform designed to help students connect with peers, form study groups, and collaborate effectively on academic tasks. The system makes it easier to find classmates with similar courses, schedules, and learning goals.
        </p>
        <div className="row g-3 mt-2">
          <div className="col-md-4">
            <div className="stat-card">
              <h2 className="h5">Student Leaders</h2>
              <p className="mb-0 text-muted">Create study groups, organize learning sessions, share study materials, and mentor peers.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-card">
              <h2 className="h5">Students</h2>
              <p className="mb-0 text-muted">Enroll in courses, learn from lessons, submit work, and view feedback.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-card">
              <h2 className="h5">Admins</h2>
              <p className="mb-0 text-muted">Manage users, categories, study groups, and platform status from one dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
