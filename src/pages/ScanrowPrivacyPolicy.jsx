import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ScanrowPrivacyPolicy = () => {
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
        <h1 className="title-bordered">Privacy Policy for Scanrow</h1>
        <p><strong>Effective Date:</strong> <span className="date-text">{currentDate}</span></p>

        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Scanrow</strong> ("we," "our," or "us"). We are committed to
            protecting your privacy and ensuring that every document you process stays entirely on
            your computer. Scanrow is an offline desktop application that reads invoices, receipts,
            bills, and other financial documents and extracts their data into structured formats such
            as Excel, CSV, and PDF. This Privacy Policy explains what data Scanrow handles, how it
            is handled, and your rights as a user.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Data Collection and Storage (Offline-First Architecture)</h2>
          <p>
            Scanrow is built on a strict "private by design" foundation.{' '}
            <span className="highlight">
              We do not collect, transmit, track, or store any personal data, documents, extracted
              results, or usage information on our servers.
            </span>
          </p>
          <p>
            Scanrow runs entirely on your local machine. Every document you open, every piece of
            text extracted from it, every template you create, and every exported file you produce
            is processed and stored exclusively on your device. We have no user accounts, no cloud
            backend, and no access whatsoever to your documents or the data inside them.
          </p>
          <p>
            All application data including document records, extraction results, templates, and
            settings is stored in a local SQLite database placed in your operating system's standard
            application data folder for your user account only. No other user on the same computer
            can access it, and neither can we.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. How Document Processing Works</h2>
          <p>
            When you open a document in Scanrow, the file is read directly from your local disk.
            All text recognition and data extraction is performed entirely on your computer using
            models that are bundled inside the application itself. No document content, image data,
            or extracted text is ever sent to any external server or third-party service.
          </p>
          <p>
            To ensure this guarantee at the technical level, Scanrow uses a three-layer offline
            enforcement system:
          </p>
          <ul>
            <li>
              <strong>Application-level isolation:</strong> The document processing engine runs as
              a fully sandboxed process. Its network access is blocked at the software level before
              any document processing begins. Any attempt by the processing engine to open a network
              connection is immediately rejected with an error.
            </li>
            <li>
              <strong>Environment-level isolation:</strong> The document processing environment is
              launched with strict offline flags that prevent all third-party libraries from
              attempting to contact external servers, download updates, or report usage.
            </li>
            <li>
              <strong>Operating system-level isolation:</strong> During installation, Scanrow adds
              a Windows Firewall outbound block rule specifically for its processing engine. This
              means that even if the application code were somehow modified, the Windows kernel
              itself would block any outbound network packet from that component before it could
              reach your network adapter.
            </li>
          </ul>
          <p>
            All text recognition models are bundled directly inside the application installation
            folder. They are never downloaded from the internet during use and require no internet
            connection to function.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. Files and Permissions</h2>
          <p>
            Scanrow requests access only to files and folders you explicitly open or select.
            Scanrow does not scan your file system, index your files, or monitor your computer in
            any way outside of folders you specifically configure for automatic watching.
          </p>
          <ul>
            <li>
              <strong>Document files:</strong> When you drag and drop a file or open one through
              the file picker, Scanrow reads that file locally to perform extraction. The file is
              never copied to any external location.
            </li>
            <li>
              <strong>Clipboard access:</strong> If you paste a screenshot using Ctrl and V,
              Scanrow reads the image from your clipboard locally. The clipboard content is
              processed only on your device and is not stored beyond your current session.
            </li>
            <li>
              <strong>Folder watching:</strong> If you configure a folder for automatic monitoring,
              Scanrow watches that folder locally using your operating system's file system events.
              No folder paths or file names are transmitted anywhere.
            </li>
            <li>
              <strong>Export files:</strong> When you export results to Excel, CSV, PDF, or XML,
              Scanrow writes those files to a location you choose on your local disk. No copies
              are stored or transmitted externally.
            </li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>5. Third-Party Services and Analytics</h2>
          <p>
            Scanrow does not include any analytics SDKs, crash reporting services, advertising
            networks, or usage tracking tools. We do not use Google Analytics, Mixpanel, Sentry,
            or any similar service. Your interactions with the application are completely private.
          </p>
          <p>
            If you purchase Scanrow through the Microsoft Store, the transaction is handled
            entirely by Microsoft through their standard purchase flow. We do not receive, store,
            or process your payment details, billing address, or any financial information.
          </p>
          <p>
            Scanrow does not connect to the internet during normal use. It has no update server,
            no license validation server, and no telemetry endpoint. Once installed, Scanrow works
            fully offline indefinitely.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Data Deletion and Retention</h2>
          <p>
            Because all data is stored only on your device, you have complete control over it at
            all times.
          </p>
          <ul>
            <li>
              <strong>Deleting individual records:</strong> You can delete any document record,
              extracted result, or template from within the application at any time.
            </li>
            <li>
              <strong>Full data wipe:</strong> You can remove all application data by going to
              your Windows Settings, opening Apps, finding Scanrow, and selecting Reset or by
              uninstalling the application. This permanently deletes the local database and all
              stored extraction records.
            </li>
            <li>
              <strong>No server-side data:</strong> Because we do not store your data on any
              server, there is nothing for us to delete on our end. Removing the application from
              your device removes everything.
            </li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>7. Children's Privacy</h2>
          <p>
            Scanrow does not collect, request, or store any personal information from anyone,
            including children under the age of 13. The application processes only documents you
            explicitly provide and stores results only on your device.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on
            this page with an updated effective date. We encourage you to review this page
            periodically to stay informed. Continued use of the application after any changes
            constitutes your acceptance of the updated policy.
          </p>
        </section>

        <div className="contact-info glass-panel">
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or how Scanrow handles
            your data, please contact us at:
          </p>
          <p>
            <strong>Email: </strong>
            <a href="mailto:prakashjha123yt@gmail.com" className="email-link">
              prakashjha123yt@gmail.com
            </a>
          </p>
          <p>
            <strong>Developer:</strong> The Substring
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScanrowPrivacyPolicy;

