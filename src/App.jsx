import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SlicentPrivacyPolicy from './pages/SlicentPrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/204eight/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/slicent/privacy-policy" element={<SlicentPrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
