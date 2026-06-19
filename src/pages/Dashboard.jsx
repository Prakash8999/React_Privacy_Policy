
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>The Substring</h1>
        <p className="subtitle">Welcome to your central hub</p>
      </header>

      <main className="dashboard-main">
        <div className="card">
          <h2>About App</h2>
          <p>
            204Eight is an offline game experience. You can view our policies regarding data usage and privacy.
          </p>
          <Link to="/204eight/privacy-policy" className="btn-primary">
            View Privacy Policy
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
