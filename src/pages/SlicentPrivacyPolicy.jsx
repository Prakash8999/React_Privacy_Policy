import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SlicentPrivacyPolicy = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(new Date().toLocaleDateString('en-US', options));
  }, []);

  return (
    <div className="privacy-container">
      
      <div className="privacy-content">
        <h1 className="title-bordered">Privacy Policy for Slicent</h1>
        <p><strong>Effective Date:</strong> <span className="date-text">{currentDate}</span></p>

        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>Welcome to Slicent ("we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal data remains strictly under your control. This Privacy Policy explains how Slicent operates, what data is processed, and your rights regarding your data.</p>
        </section>

        <section className="policy-section">
          <h2>2. Data Collection and Storage (Offline Architecture)</h2>
          <p>Slicent is designed with privacy by default. <span className="highlight">We do not collect, transmit, store, or share any personal data, financial information, or user usage data on our servers.</span></p>
          <p>Slicent operates entirely offline. All data you enter into the app, including individual expenses, group splits, financial numbers, and names, is stored exclusively in a local SQLite database directly on your device. We have no access to this data.</p>
        </section>

        <section className="policy-section">
          <h2>3. Android Device Permissions</h2>
          <p>To ensure the app functions properly, the underlying framework (React Native/Expo) includes declarations for certain default Android permissions in the app's manifest. <strong>Slicent does not actively use these permissions to access your personal data or device hardware for data collection.</strong></p>
          <ul>
            <li><strong>Internet / Network Access:</strong> Used strictly by the framework to serve local bundle files during development or to check for internal framework updates. It is not used to transmit your personal or financial data.</li>
            <li><strong>Storage (Read/Write External Storage):</strong> If used, it is strictly to save your local database or export your personal expense reports to your own device.</li>
            <li><strong>Vibrate:</strong> Used solely to provide haptic feedback during in-app interactions (e.g., tapping buttons).</li>
            <li><strong>Audio / System Alert Window:</strong> These are default framework permissions included by React Native/Expo. Slicent does not record audio or draw over other apps.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Third-Party Services</h2>
          <p>Slicent does not integrate any third-party analytics (e.g., Google Analytics, Mixpanel), crash reporting tools, or advertising networks (e.g., AdMob). Your usage of the app remains completely anonymous and un-tracked.</p>
        </section>

        <section className="policy-section">
          <h2>5. Data Deletion and Retention</h2>
          <p>Because all data is stored locally on your device, you are in full control of your data retention. To delete all your data, you simply need to:</p>
          <ol>
            <li>Clear the app's data in your device's Settings, OR</li>
            <li>Uninstall the Slicent application.</li>
          </ol>
          <p>Once the app is uninstalled or its data is cleared, your expense history is permanently deleted. We cannot recover it for you as we never had access to it.</p>
        </section>

        <section className="policy-section">
          <h2>6. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. If we make material changes to how the app operates (e.g., transitioning to a cloud-sync model), we will update this page and, if required, notify you within the app.</p>
        </section>

        <div className="contact-info glass-panel">
            <h2>7. Contact Us</h2>
            <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:</p>
            <p><strong>Email: </strong><a href="mailto:prakash.jha9797@gmail.com" className="email-link">prakash.jha9797@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default SlicentPrivacyPolicy;
