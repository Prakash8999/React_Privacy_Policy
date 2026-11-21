import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>The Substring</h1>
        <p className="subtitle">App Privacy & Data Policies</p>
      </header>

      <main className="dashboard-main">
        <div className="card">
          <h2>204Eight</h2>
          <p>
            204Eight is an offline game experience. You can view our policies regarding data usage and privacy.
          </p>
          <Link to="/204eight/privacy-policy" className="btn-primary">
            View Privacy Policy
          </Link>
        </div>
        
        <div className="card">
          <h2>Slicent</h2>
          <p>
            Slicent is an offline expense tracking and group splitting app. You can view our policies regarding data usage and privacy.
          </p>
          <Link to="/slicent/privacy-policy" className="btn-primary">
            View Privacy Policy
          </Link>
        </div>

        <div className="card">
          <h2>Signal Decay</h2>
          <p>
            Signal Decay is an offline-first read-later vault where saved links and notes slowly fade unless revisited. You can view our policies regarding data usage and privacy.
          </p>
          <Link to="/signal-decay/privacy-policy" className="btn-primary">
            View Privacy Policy
          </Link>
        </div>

        <div className="card">
          <h2>Scanrow</h2>
          <p>
            Scanrow is an offline desktop document extraction application for invoices, receipts, and bills. You can view our policies regarding data usage and privacy.
          </p>
          <Link to="/scanrow/privacy-policy" className="btn-primary">
            View Privacy Policy
          </Link>
        </div>

        <div className="card">
          <h2>DialQ Desk</h2>
          <p>
            DialQ Desk is an enterprise desktop dashboard for lead queue distribution, team management, local OCR document extraction, and call analytics. You can view our policies regarding data usage and privacy.
          </p>
          <Link to="/dialq-desk/privacy-policy" className="btn-primary">
            View Privacy Policy
          </Link>
        </div>

        <div className="card">
          <h2>Torque</h2>
          <p>
            Torque is an offline all-in-one tools utility suite for Android featuring on-device video and audio engines, local ML vision, document scanning, and an AES-256 encrypted vault.
          </p>
          <Link to="/torque/privacy-policy" className="btn-primary">
            View Privacy Policy
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
