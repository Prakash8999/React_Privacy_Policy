import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SignalDecayPrivacyPolicy = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(new Date().toLocaleDateString('en-US', options));
  }, []);

  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <Link to="/" className="back-link">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="privacy-content">
        <h1 className="title-bordered">Privacy Policy for Signal Decay</h1>
        <p><strong>Effective Date:</strong> <span className="date-text">{currentDate}</span></p>

        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>Welcome to <strong>Signal Decay</strong> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal data remains strictly under your control. Signal Decay is an offline-first read-later vault application where saved URLs and text notes fade over time based on an intentional decay algorithm unless revisited or extended. This Privacy Policy explains how Signal Decay operates, what data is processed, and your rights regarding your data.</p>
        </section>

        <section className="policy-section">
          <h2>2. Data Collection and Storage (Offline-First Architecture)</h2>
          <p>Signal Decay is designed with a strict "private by design" approach. <span className="highlight">We do not collect, transmit, track, or store any personal data, saved links, notes, or usage habits on our servers.</span></p>
          <p>Signal Decay operates entirely offline. All data you input or save—including URLs, text notes, tags, signal scores, decay timestamps, half-life settings, and vault categories—is stored exclusively in a local SQLite database directly on your device. We have no user accounts, no cloud backend (no Firebase, Supabase, or remote database), and no access to the items you store.</p>
        </section>

        <section className="policy-section">
          <h2>3. Android Device Permissions & Features</h2>
          <p>To deliver its core features smoothly, Signal Decay utilizes certain Android device capabilities and permissions. <strong>Signal Decay does not use any of these permissions to collect personal information or track your device.</strong></p>
          <ul>
            <li><strong>Receive Shared Content (Share Target / Intent Filter):</strong> Signal Decay allows you to share links or text directly from other apps (such as Google Chrome, WhatsApp, or YouTube) into your vault. This data is received and handled strictly locally on your device to populate the save sheet. Nothing is transmitted externally.</li>
            <li><strong>Vibration / Haptic Feedback:</strong> Used solely to provide tactile haptic feedback during interactive gestures, such as extending an item's life, swiping cards, or moving items to the Graveyard.</li>
            <li><strong>Local Notifications (Optional):</strong> The app may schedule local alarms to notify you when items in your vault are nearing decay or expiration. These notifications are scheduled and triggered 100% locally by your device's operating system without sending push notification tokens or device identifiers to any remote server.</li>
            <li><strong>Storage & File Access (Optional):</strong> If you choose to export your vault as a local JSON backup or restore from a previous backup file, the app accesses local storage solely to read or write your personal backup file on your device.</li>
            <li><strong>Internet / Network Access:</strong> If internet access is declared by the underlying framework (React Native/Expo), it is used solely for client-side fetching of public webpage metadata (e.g., retrieving page titles or preview metadata for URLs you choose to save) or internal framework bundling during development. It is never used to transmit personal data, analytics, or browsing history to us.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Third-Party Services & Analytics</h2>
          <p>Signal Decay does not include third-party analytics SDKs (such as Google Analytics or Mixpanel) or crash-reporting services that monitor your usage. Your interactions with the app remain completely private and anonymous.</p>
          <p>If you choose to purchase in-app upgrades (such as Signal Decay Pro), transactions are processed securely and directly by the Google Play Store via Google Play In-App Billing. We do not collect or store your payment details, credit card numbers, or billing address. If non-intrusive advertising (such as Google AdMob) is displayed in free tiers, it complies with standard Google Play policies, and Pro users receive a completely ad-free experience.</p>
        </section>

        <section className="policy-section">
          <h2>5. Data Deletion, Retention, and Expiration</h2>
          <p>Because all data resides exclusively in your device's local storage, you have full and total control over data retention:</p>
          <ul>
            <li><strong>Automatic Decay:</strong> Items naturally decay over time according to your chosen half-life settings and move to the Graveyard once their signal falls below the threshold.</li>
            <li><strong>Manual Removal:</strong> You can permanently delete any item from your vault or graveyard at any time within the app.</li>
            <li><strong>Full Data Wipe:</strong> You can instantly delete all saved items and reset the app by clearing the app's data in your Android device's Settings (Settings &gt; Apps &gt; Signal Decay &gt; Storage &gt; Clear Data) or by uninstalling the app.</li>
          </ul>
          <p>Once uninstalled or cleared, your local database is permanently deleted. Because we do not store your data on external servers, we cannot recover or access it.</p>
        </section>

        <section className="policy-section">
          <h2>6. Children’s Privacy</h2>
          <p>Our app does not collect, request, or store any personally identifiable information from anyone, including children under the age of 13. The application is completely safe for all users.</p>
        </section>

        <section className="policy-section">
          <h2>7. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. You are advised to review this page periodically for any updates.</p>
        </section>

        <div className="contact-info glass-panel">
          <h2>8. Contact Us</h2>
          <p>If you have any questions or suggestions about our Privacy Policy or Signal Decay, do not hesitate to contact us at:</p>
          <p><strong>Email: </strong><a href="mailto:prakashjha123yt@gmail.com" className="email-link">prakashjha123yt@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignalDecayPrivacyPolicy;
