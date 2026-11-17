import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Users,
  Server,
  Laptop,
  Cpu,
  Eye,
  Mail,
  Copy,
  Check,
  Database,
  ExternalLink,
} from 'lucide-react';

export default function DialQDeskPrivacyPolicy() {
  const [copied, setCopied] = useState(false);
  const policyPath = window.location.href || 'https://thesubstring.com/dialq-desk/privacy-policy';

  const copyUrl = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(policyPath);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="privacy-container dialq-container">
      <div className="privacy-header">
        <Link to="/" className="back-link">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="privacy-content">
        {/* Compliance Badge */}
        <div className="policy-badge-wrapper">
          <span className="policy-badge">
            <Monitor className="badge-icon" />
            <span>Microsoft Store & Windows Desktop Compliance Disclosure</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="title-bordered">Privacy Policy — DialQ Desk</h1>
        <p className="policy-subtitle">
          Comprehensive disclosure of data practices, Windows system capabilities, local on-device OCR extraction, and organizational controls for the DialQ Desk desktop application.
        </p>

        {/* Metadata Grid */}
        {/* <div className="meta-grid">
          <div className="meta-item">
            <span className="meta-label">Application Name:</span>
            <strong className="meta-value">DialQ Desk (Desktop CRM)</strong>
          </div>
          <div className="meta-item">
            <span className="meta-label">Target Platform:</span>
            <strong className="meta-value">Windows 10 / 11 (Microsoft Store)</strong>
          </div>
          <div className="meta-item">
            <span className="meta-label">Effective Date:</span>
            <strong className="meta-value">October 20, 2026</strong>
          </div>
          <div className="meta-item">
            <span className="meta-label">Developer / Publisher:</span>
            <strong className="meta-value">The Substring</strong>
          </div>
          <div className="meta-item">
            <span className="meta-label">Contact Email:</span>
            <a href="mailto:prakashjha123yt@gmail.com" className="meta-link">
              prakashjha123yt@gmail.com
            </a>
          </div>
          <div className="meta-item">
            <span className="meta-label">Hosted Policy URL:</span>
            <button
              onClick={copyUrl}
              className="copy-link-btn"
              title="Click to copy link"
              type="button"
            >
              <span>{copied ? 'Link Copied!' : 'Copy Policy Link'}</span>
              {copied ? <Check className="btn-icon text-green" /> : <Copy className="btn-icon" />}
            </button>
          </div>
        </div> */}

        {/* Table of Contents */}
        <div className="toc-box">
          <p className="toc-title">Table of Contents</p>
          <ol className="toc-grid">
            {[
              ['#s1', '1. Introduction'],
              ['#s2', '2. Who Uses DialQ Desk'],
              ['#s3', '3. Information We Collect'],
              ['#s4', '4. Windows Capabilities & System Permissions'],
              ['#s5', '5. System Permissions Summary Table'],
              ['#s6', '6. Local On-Device OCR Processing'],
              ['#s7', '7. How We Use Organization Data'],
              ['#s8', '8. Data Storage & Enterprise Security'],
              ['#s9', '9. Data Retention & Workspace Lifecycle'],
              ['#s10', '10. Third-Party Infrastructure Services'],
              ['#s11', '11. Data Sharing & Non-Disclosure'],
              ['#s12', '12. Children\'s Privacy'],
              ['#s13', '13. Admin Control & Data Subject Rights'],
              ['#s14', '14. Changes to This Privacy Policy'],
              ['#s15', '15. Contact Us & Developer Information'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="toc-link">
                  <span className="toc-bullet">›</span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="s1" className="policy-section">
          <SectionTitle icon="📜" title="1. Introduction" />
          <p>
            Welcome to <strong>DialQ Desk</strong> (&quot;the Desktop Application&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), published by <strong>The Substring</strong>. DialQ Desk is an enterprise desktop dashboard designed for Windows and distributed through the Microsoft Store. It provides Direct Selling Agent (DSA) businesses, BPO telecalling operations, and sales organizations with centralized team administration, lead batch ingestion, local OCR document parsing, call analytics, and queue distribution.
          </p>
          <p>
            This Privacy Policy explains our practices regarding data privacy, Windows runtime capabilities, file processing boundaries, and security safeguards in strict compliance with <strong>Microsoft Store Developer Policies (including Policy 10.5 — Personal Information)</strong> and global data privacy standards:
          </p>
          <ul>
            <li><strong>What information is processed</strong> by the desktop dashboard and how it is obtained.</li>
            <li><strong>Which Windows system capabilities</strong> are utilized, including network communication, local file picking, and desktop notifications.</li>
            <li><strong>How local on-device OCR</strong> operates entirely on your Windows PC to protect sensitive spreadsheet images from external data leaks.</li>
            <li><strong>How organizational data is isolated, secured, and retained</strong> across the platform.</li>
          </ul>
          <Highlight>
            By installing, launching, or using DialQ Desk from the Microsoft Store, you and your organization agree to the terms set forth in this Privacy Policy.
          </Highlight>
        </section>

        {/* Section 2 */}
        <section id="s2" className="policy-section">
          <SectionTitle icon="👥" title="2. Who Uses DialQ Desk" />
          <p>
            DialQ Desk is an enterprise B2B administrative software suite engineered specifically for business managers and supervisory personnel. It is <strong>not designed for the general consumer public or minors under 18</strong>.
          </p>
          <div className="cards-grid-3">
            <div className="info-card">
              <div className="card-header-line">
                <Users className="card-icon" />
                <span className="card-title">Organization Admin</span>
              </div>
              <p className="card-body">
                DSA owners and call center operations managers who use DialQ Desk to onboard employees, upload lead batches, allocate calling queues, and inspect real-time performance analytics.
              </p>
            </div>
            <div className="info-card">
              <div className="card-header-line">
                <Server className="card-icon" />
                <span className="card-title">Super Admin</span>
              </div>
              <p className="card-body">
                Platform operators who onboard client organizations, manage organizational workspaces, and oversee system health and OCR job telemetry.
              </p>
            </div>
            <div className="info-card">
              <div className="card-header-line">
                <Laptop className="card-icon" />
                <span className="card-title">Telecaller (Managed User)</span>
              </div>
              <p className="card-body">
                Agents whose accounts and queues are provisioned via DialQ Desk, but who conduct calling activities via the companion DialQ Android mobile dialer.
              </p>
            </div>
          </div>
          <p className="note-text">
            <em>This document governs administrative workflows, file parsing, and system telemetry conducted within the <strong>DialQ Desk Windows application</strong>.</em>
          </p>
        </section>

        {/* Section 3 */}
        <section id="s3" className="policy-section">
          <SectionTitle icon="📋" title="3. Information We Collect" />

          <h3>3.1 Data Provided Directly by Administrators</h3>
          <div className="table-responsive">
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Specific Data Collected</th>
                  <th>Operational Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Admin Credentials</strong></td>
                  <td>Work email address, salted &amp; hashed password.</td>
                  <td>To authenticate administrators and safeguard organization dashboard access.</td>
                </tr>
                <tr>
                  <td><strong>Organization Profile</strong></td>
                  <td>Business entity name, owner name, business contact phone, registered address, GST number (optional).</td>
                  <td>To establish multi-tenant workspace isolation and account governance.</td>
                </tr>
                <tr>
                  <td><strong>Employee Accounts</strong></td>
                  <td>Full name, corporate email, mobile number, assigned teams, daily call targets.</td>
                  <td>Enables administrators to create and maintain telecaller profiles and dispatch calling queues.</td>
                </tr>
                <tr>
                  <td><strong>Lead Batch Files</strong></td>
                  <td>Contact numbers, prospect names, cities, loan amounts, and custom tabular fields from uploaded spreadsheets.</td>
                  <td>Structured lead records ingested into the private database to create calling queues for assigned employees.</td>
                </tr>
                <tr>
                  <td><strong>Call Scripts &amp; Notes</strong></td>
                  <td>Talking points, product pitch scripts, and administrative announcements.</td>
                  <td>Provided to telecallers in real-time during calling sessions to ensure sales compliance.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>3.2 Technical &amp; Operational Data Generated During App Operation</h3>
          <div className="table-responsive">
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Specific Data Collected</th>
                  <th>Operational Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Aggregated Call Analytics</strong></td>
                  <td>Call durations, completion timestamps, call outcome dispositions (Interested, Call Back, Busy, Closed).</td>
                  <td>Displayed on dashboard charts, team funnels, and performance leaderboards.</td>
                </tr>
                <tr>
                  <td><strong>Administrative Audit Logs</strong></td>
                  <td>Timestamped logs of user onboarding, lead redistributions, batch creations, and status overrides.</td>
                  <td>Ensures organizational accountability and regulatory audit compliance.</td>
                </tr>
                <tr>
                  <td><strong>Desktop Environment Telemetry</strong></td>
                  <td>Windows OS version build, desktop client application version, network connectivity status.</td>
                  <td>Ensures client compatibility, crash diagnostics, and secure WebSocket reconnection.</td>
                </tr>
                <tr>
                  <td><strong>Session Tokens &amp; Preferences</strong></td>
                  <td>Encrypted JSON Web Tokens (JWT), UI layout state (sidebar collapse, theme selection).</td>
                  <td>Maintains authenticated sessions and personalizes dashboard experience without re-login.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>3.3 What We Strictly Do NOT Collect</h3>
          <div className="exclusion-box">
            <p className="exclusion-title">Strict Desktop Boundaries &amp; Exclusions:</p>
            <ul>
              <li>We do <strong>not</strong> access, scan, or index files, folders, or directories on your Windows PC outside of the explicit files you select via the file dialog.</li>
              <li>We do <strong>not</strong> capture keystrokes outside the DialQ Desk application window or monitor background PC activity.</li>
              <li>We do <strong>not</strong> access your microphone, camera, or personal hardware sensors.</li>
              <li>We do <strong>not</strong> track GPS or physical device geolocation.</li>
              <li>We do <strong>not</strong> bundle third-party behavioral advertising networks, commercial tracking cookies, or monetization analytics.</li>
              <li>We do <strong>not</strong> sell, resell, or monetize contact numbers or lead data uploaded by your organization.</li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section id="s4" className="policy-section">
          <SectionTitle icon="🔒" title="4. Windows Capabilities & System Permissions Explained" />
          <p>
            DialQ Desk requires a minimal set of Windows capabilities to function as an enterprise desktop client. Below is a complete disclosure of each capability utilized in accordance with Microsoft Store submission guidelines.
          </p>

          <div className="permission-cards-stack">
            {/* 4.1 Internet Client */}
            <PermissionDetailCard
              title="4.1 internetClient — Secure Network & API Access"
              permission="Windows Capability: internetClient"
              category="Standard Windows App Capability"
              what="Allows DialQ Desk to initiate outbound network connections over HTTPS/TLS and secure real-time channels to the DialQ cloud backend."
              why="DialQ Desk is a networked management dashboard. It must communicate with your organization's backend server to authenticate administrators, synchronize team call logs in real-time, upload processed lead batches, and trigger alerts."
              how={[
                'Transmits encrypted API requests to the DialQ application server over TLS 1.2/1.3.',
                'Subscribes to secure real-time notification channels for live team activity updates.',
                'Does not open unencrypted local listening ports or act as an open network server on your local network.',
              ]}
              denied="The application cannot log in, load lead pools, or communicate with the CRM server, rendering the dashboard inoperable."
            />

            {/* 4.2 File System & File Picker */}
            <PermissionDetailCard
              title="4.2 File System Interaction via Native Windows File Pickers"
              permission="Windows Native File Dialog (Open / Save)"
              category="User-Initiated File Access"
              what="Allows the application to read files explicitly selected by the user for importing (Excel spreadsheets, scanned document PDFs, and images), and to save exported analytical reports to user-specified directories."
              why="Administrators frequently import bulk contact lists (e.g., .xlsx, .xls, .csv, .pdf, .jpg, .png) and export team performance reports or call histories for offline audit. DialQ Desk uses native Windows file pickers so that only files you consciously open are ever accessed."
              how={[
                'When the admin clicks \'Browse Files\' or drags a document into the upload drop-zone, the file path is accessed through standard Windows file handling APIs.',
                'The file is read into memory for parsing; no arbitrary background scanning of other directories occurs.',
                'Exported reports (Excel / PDF) are written exclusively to the destination folder chosen by the user.',
              ]}
              denied="The user will not be able to import lead spreadsheets or save exported performance reports to disk."
            />

            {/* 4.3 Local Subprocess Execution */}
            <PermissionDetailCard
              title="4.3 Local Subprocess Execution — Local OCR Engine"
              permission="Bundled Local OCR Processing Engine"
              category="Sandboxed Local Computation"
              what="Allows DialQ Desk to execute a bundled local optical character recognition (OCR) worker process to parse tabular contact information from scanned images and PDFs locally on the user's computer."
              why="Many DSA organizations receive lead sheets as camera captures or scanned PDFs. Running OCR locally on the administrator's PC keeps data strictly confidential, eliminates server GPU transmission risks, and prevents raw customer sheets from being uploaded to third-party recognition APIs."
              how={[
                'The desktop application launches an internal, isolated worker process bundled inside the application directory.',
                'The worker reads the selected image page by page, identifies tabular rows and phone digits, and streams structured preview text back to the dashboard UI.',
                'The extracted table is presented to the administrator to verify and correct errors before any structured leads are saved to the organization database.',
              ]}
              denied="Image and PDF OCR imports will be unavailable. Only clean Excel (.xlsx/.csv) files parsed via in-memory spreadsheet parsers can be ingested."
              specialNote="Enterprise Privacy Advantage: Local OCR processing guarantees that scanned document images are never transmitted to external third-party cloud AI vendors. Recognition computations occur entirely within your Windows PC's CPU/memory."
            />

            {/* 4.4 Desktop Notifications */}
            <PermissionDetailCard
              title="4.4 Windows Action Center & Toast Notifications"
              permission="Windows User Notification System"
              category="Desktop Alerts"
              what="Allows DialQ Desk to surface toast notifications in the Windows Action Center for critical operations."
              why="Alerts administrators when a large OCR batch completes extraction, when urgent callback spikes occur, or when important system maintenance alerts are issued."
              how={[
                'Dispatches standard Windows notification payloads via the native operating system notification system.',
                'Contains only brief operational summaries (e.g., \'OCR Batch Ready: 450 contacts processed\').',
                'Does not include promotional advertisements or third-party marketing messages.',
              ]}
              denied="Toast notifications will not pop up in Windows. Alerts will only be visible within the dashboard notification bell panel while the app is active."
            />

            {/* 4.5 Local Application Storage */}
            <PermissionDetailCard
              title="4.5 Local Application Data Storage (%APPDATA%)"
              permission="Standard AppData Directory Access"
              category="Local Sandboxed Storage"
              what="Allows the application to store session state, user interface preferences, and temporary preview caches in your user profile's local application data folder."
              why="Necessary to preserve login sessions across restarts, remember interface preferences (such as dark/light theme and table column widths), and temporarily cache unconfirmed OCR previews before database sync."
              how={[
                'Writes configuration and state exclusively to the application\'s dedicated AppData subdirectory.',
                'Does not write to system directories, registry entries outside the standard app container, or shared user folders.',
                'All temporary preview files are purged upon confirmation or cancellation of the upload batch.',
              ]}
              denied="Preferences will reset upon application restart and administrators will be required to re-authenticate on every launch."
            />
          </div>
        </section>

        {/* Section 5 */}
        <section id="s5" className="policy-section">
          <SectionTitle icon="📊" title="5. System Permissions Summary Table" />
          <div className="table-responsive">
            <table className="policy-table">
              <thead>
                <tr>
                  <th>System Capability</th>
                  <th>Execution Scope</th>
                  <th>Primary Purpose</th>
                  <th>External Transmission</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>internetClient</strong></td>
                  <td><code>Network Outbound</code></td>
                  <td>Secure communication with CRM backend server APIs &amp; real-time WebSockets</td>
                  <td><span className="pill-secure">TLS 1.2/1.3 Encrypted</span></td>
                </tr>
                <tr>
                  <td><strong>File Open / Save Dialog</strong></td>
                  <td><code>User-Selected Files</code></td>
                  <td>Selecting Excel/PDF files to import and saving exported reports</td>
                  <td><span className="pill-user">Only user-confirmed leads</span></td>
                </tr>
                <tr>
                  <td><strong>Local OCR Engine</strong></td>
                  <td><code>Local CPU / Subprocess</code></td>
                  <td>Extracting contact rows from scanned spreadsheet images on-device</td>
                  <td><span className="pill-secure">Zero (100% on-device processing)</span></td>
                </tr>
                <tr>
                  <td><strong>Desktop Notifications</strong></td>
                  <td><code>Windows Action Center</code></td>
                  <td>Notifying admins of batch readiness and team operational milestones</td>
                  <td><span className="pill-secure">Zero external transmission</span></td>
                </tr>
                <tr>
                  <td><strong>AppData Storage</strong></td>
                  <td><code>%APPDATA% Container</code></td>
                  <td>Storing session tokens, theme preferences, and temporary UI cache</td>
                  <td><span className="pill-secure">Local machine only</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 */}
        <section id="s6" className="policy-section">
          <SectionTitle icon="🔍" title="6. Local On-Device OCR Processing Architecture" />
          <p>
            One of the core capabilities of DialQ Desk is its specialized <strong>local OCR processing pipeline</strong> designed for tabular financial contact sheets. We take pride in a privacy-first architectural approach:
          </p>
          <div className="cards-grid-2">
            <div className="info-card">
              <div className="card-header-line">
                <Cpu className="card-icon" />
                <span className="card-title">100% On-Device Extraction</span>
              </div>
              <p className="card-body">
                When scanned camera photos or PDFs of Excel sheets are loaded into DialQ Desk, OCR is executed locally on your Windows machine using bundled high-efficiency character recognition libraries. Your physical documents are not piped into public cloud vision APIs.
              </p>
            </div>
            <div className="info-card">
              <div className="card-header-line">
                <Eye className="card-icon" />
                <span className="card-title">Pre-Upload Verification &amp; Correction</span>
              </div>
              <p className="card-body">
                Extraction results are presented in a structured preview table directly within the desktop UI. Administrators can review, edit misrecognized digits, map spreadsheet headers, or delete invalid rows before any data is committed to the CRM.
              </p>
            </div>
          </div>
          <Highlight>
            <strong>Zero Third-Party Image Telemetry:</strong> At no stage are document images shared with advertising networks, third-party analytics firms, or machine-learning model scrapers.
          </Highlight>
        </section>

        {/* Section 7 */}
        <section id="s7" className="policy-section">
          <SectionTitle icon="⚙️" title="7. How We Use Organization Data" />
          <div className="table-responsive">
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Functional Workflow</th>
                  <th>Operational Purpose &amp; Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Admin Session Authentication</strong></td>
                  <td>To verify administrator identity, enforce role-based access control, and protect workspace boundaries.</td>
                </tr>
                <tr>
                  <td><strong>Team &amp; Telecaller Provisioning</strong></td>
                  <td>To allow organization managers to configure telecaller accounts, credentials, and daily calling targets.</td>
                </tr>
                <tr>
                  <td><strong>Lead Pool Management &amp; Queue Dispatch</strong></td>
                  <td>To structure contact numbers into batches, set priority rankings, and distribute leads across employee calling queues.</td>
                </tr>
                <tr>
                  <td><strong>Aggregated Team Analytics &amp; Funnel Tracking</strong></td>
                  <td>To compute team performance funnels (Calls Made, Answered, Leads Interested, Follow-ups, Closed) for supervisory oversight.</td>
                </tr>
                <tr>
                  <td><strong>Follow-up Monitoring &amp; Callback Management</strong></td>
                  <td>To provide visibility into pending, overdue, and completed callbacks across all assigned employees.</td>
                </tr>
                <tr>
                  <td><strong>Call Script Publishing</strong></td>
                  <td>To broadcast standardized sales talk tracks and objection handling scripts to telecallers&apos; mobile screens.</td>
                </tr>
                <tr>
                  <td><strong>Enterprise Audit &amp; Fraud Prevention</strong></td>
                  <td>To maintain immutable audit logs of lead reassignments, user creation, and supervisory overrides for compliance accountability.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 8 */}
        <section id="s8" className="policy-section">
          <SectionTitle icon="🛡️" title="8. Data Storage & Enterprise Security" />

          <h3>8.1 Server-Side Enterprise Safeguards</h3>
          <p>
            Data synced from the desktop application is hosted within secured, enterprise-grade cloud server environments equipped with stringent technical controls:
          </p>
          <ul>
            <li><strong>Encryption in Transit:</strong> All communication between DialQ Desk and server endpoints is enforced through TLS 1.2 / TLS 1.3 encryption protocols.</li>
            <li><strong>Strict Multi-Tenant Isolation:</strong> Every organization workspace is completely logically segregated. No organization administrator can view, access, or query leads, logs, or employee records belonging to another organization.</li>
            <li><strong>Cryptographic Password Protection:</strong> Administrator and employee credentials undergo salted one-way cryptographic hashing; plaintext passwords are never stored in databases or log streams.</li>
            <li><strong>Session Governance:</strong> Authentication relies on short-lived, digitally signed JSON Web Tokens (JWT) coupled with refresh tokens that can be invalidated immediately upon deactivation.</li>
            <li><strong>Rate Limiting &amp; Brute-Force Safeguards:</strong> Login endpoints employ aggressive rate limiting to prevent automated credential attacks.</li>
          </ul>

          <h3>8.2 Desktop Client Safeguards</h3>
          <ul>
            <li>Session tokens on the desktop are stored within protected, user-sandboxed local application directories.</li>
            <li>Temporary file buffers used during OCR extraction are stored in transient application folders and cleared when jobs conclude.</li>
            <li>The application enforces strict desktop application sandboxing, memory isolation, and secure local process boundaries.</li>
          </ul>

          <h3>8.3 Security Incident Protocol</h3>
          <p>
            In the event of a verified security incident affecting your organization&apos;s data, we will notify the designated Organization Administrator without unreasonable delay and provide transparent status reporting and remedial measures.
          </p>
        </section>

        {/* Section 9 */}
        <section id="s9" className="policy-section">
          <SectionTitle icon="🗄️" title="9. Data Retention & Workspace Lifecycle" />
          <div className="table-responsive">
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Data Record</th>
                  <th>Retention Period &amp; Disposition Policy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Lead Pools &amp; Call Records</strong></td>
                  <td>Retained during the organization&apos;s active operational tenure. Deleted within 90 days following formal workspace termination.</td>
                </tr>
                <tr>
                  <td><strong>Employee Attendance &amp; Punch Logs</strong></td>
                  <td>Retained for 12 months for organizational productivity auditing and workforce compliance.</td>
                </tr>
                <tr>
                  <td><strong>Administrative Audit Logs</strong></td>
                  <td>Retained for 24 months to satisfy commercial accountability and fraud investigation mandates.</td>
                </tr>
                <tr>
                  <td><strong>Local Temporary File Cache</strong></td>
                  <td>OCR image slices and temporary table caches are purged automatically from local disk upon batch completion.</td>
                </tr>
                <tr>
                  <td><strong>Desktop Session Authentication</strong></td>
                  <td>Active access tokens expire within 15 minutes; refresh tokens persist up to 7 days unless explicitly logged out.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 10 */}
        <section id="s10" className="policy-section">
          <SectionTitle icon="🌐" title="10. Third-Party Infrastructure Services" />
          <p>
            DialQ Desk relies solely on trusted, enterprise cloud infrastructure vendors to maintain uptime, data storage, and network synchronization. None of these providers are permitted to use your organizational data for independent marketing or commercial profiling:
          </p>
          <div className="table-responsive">
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Functional Purpose</th>
                  <th>Data In Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Amazon Web Services (AWS)</strong>
                    <div className="table-subtext">Cloud Storage &amp; Compute</div>
                  </td>
                  <td>Secure cloud storage for uploaded batch archives and server hosting</td>
                  <td>
                    Encrypted files and database backups.{' '}
                    <a href="https://aws.amazon.com/privacy/" target="_blank" rel="noopener noreferrer" className="external-link-inline">
                      AWS Privacy Policy <ExternalLink className="tiny-icon" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Firebase Cloud Messaging (FCM)</strong>
                    <div className="table-subtext">Google Cloud Infrastructure</div>
                  </td>
                  <td>Dispatching team push alerts to companion mobile telecaller devices</td>
                  <td>
                    Encrypted device tokens and notification text.{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="external-link-inline">
                      Google Privacy Policy <ExternalLink className="tiny-icon" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Highlight>
            <strong>Zero Commercial Trackers:</strong> DialQ Desk contains no Google Analytics, no Facebook SDK, no advertising cookies, and no tracking scripts. We do not monetize user attention.
          </Highlight>
        </section>

        {/* Section 11 */}
        <section id="s11" className="policy-section">
          <SectionTitle icon="🤝" title="11. Data Sharing & Non-Disclosure" />
          <p>
            <strong>We hold customer leads and organizational data in the strictest confidence.</strong> We do not sell, rent, license, or trade your contacts or telecaller metrics to any third party.
          </p>
          <p>Data is shared only under the following clearly defined business circumstances:</p>
          <ul>
            <li>
              <strong>Within Your Organization Hierarchy:</strong> Data uploaded by administrators is dispatched to authorized telecallers within the same organization to facilitate legitimate business calls.
            </li>
            <li>
              <strong>Legal &amp; Regulatory Mandates:</strong> Where compelled by valid legal process, judicial subpoena, or binding court order, we will disclose only the specific data strictly required by law.
            </li>
            <li>
              <strong>Corporate Transitions:</strong> In the event of a merger, acquisition, or restructuring, organizational data may transfer to the successor entity, subject to continued adherence to this Privacy Policy.
            </li>
          </ul>
        </section>

        {/* Section 12 */}
        <section id="s12" className="policy-section">
          <SectionTitle icon="🧒" title="12. Children's Privacy" />
          <p>
            DialQ Desk is an <strong>enterprise B2B commercial software application</strong> intended solely for business owners, corporate managers, and adult telecalling professionals (aged 18 and older). We do not market to or knowingly solicit data from minors.
          </p>
          <p>
            If we become aware that an account or data pertaining to a minor has been accidentally collected, we will take immediate steps to delete such records permanently.
          </p>
        </section>

        {/* Section 13 */}
        <section id="s13" className="policy-section">
          <SectionTitle icon="⚖️" title="13. Admin Control & Data Subject Rights" />
          <p>
            DialQ Desk puts comprehensive data governance directly into the hands of the Organization Administrator:
          </p>
          <ul>
            <li><strong>Employee Account Lifecycle:</strong> Administrators can create, update, deactivate, and permanently remove employee telecaller accounts directly from the Employees module.</li>
            <li><strong>Lead Pool Management:</strong> Administrators can delete uncalled batches, reassign active queues, and mark specific leads as &quot;Do Not Call&quot;.</li>
            <li><strong>Data Portability &amp; Export:</strong> Administrators can export historical call logs, team performance summaries, and lead lists into structured Excel (.xlsx) and CSV spreadsheets at any time.</li>
            <li><strong>Workspace Termination:</strong> To request full decommissioning of your organization&apos;s workspace and permanent destruction of all associated cloud database records, the authorized business owner can submit a request via email.</li>
          </ul>
          <Highlight>
            To exercise organization rights or request comprehensive workspace data deletion, contact our privacy officer at{' '}
            <a href="mailto:prakashjha123yt@gmail.com" className="email-link">
              prakashjha123yt@gmail.com
            </a>. Requests are acknowledged and processed within <strong>30 days</strong>.
          </Highlight>
        </section>

        {/* Section 14 */}
        <section id="s14" className="policy-section">
          <SectionTitle icon="📝" title="14. Changes to This Privacy Policy" />
          <p>
            We may update this Privacy Policy periodically to reflect desktop application updates, new Windows operating system features, or regulatory standards. When updates occur:
          </p>
          <ul>
            <li>The <strong>&quot;Last Updated&quot;</strong> revision date at the top of this document will be amended.</li>
            <li>For material modifications affecting data rights, we will notify administrators via an in-app notice or system announcement banner within DialQ Desk.</li>
            <li>Continued use of DialQ Desk following published revisions confirms acceptance of the updated terms.</li>
          </ul>
          <p>We recommend that administrators review this policy periodically.</p>
        </section>

        {/* Section 15: Contact Us */}
        <div id="s15" className="contact-info glass-panel">
          <h2>15. Contact Us &amp; Developer Information</h2>
          <p>
            If you have questions, regulatory inquiries, or feedback regarding this Privacy Policy or DialQ Desk desktop operations, please reach out:
          </p>

          <div className="cards-grid-2 contact-grid">
            <div className="info-card text-left">
              <div className="card-header-line">
                <Database className="card-icon" />
                <span className="card-title">Publisher &amp; Developer</span>
              </div>
              <p className="card-body"><strong>The Substring</strong></p>
              <p className="card-subtext">Application: DialQ Desk (Windows Desktop Application)</p>
              <p className="card-subtext">Distribution: Microsoft Store</p>
            </div>
            <div className="info-card text-left">
              <div className="card-header-line">
                <Mail className="card-icon" />
                <span className="card-title">Support &amp; Privacy Operations</span>
              </div>
              <a href="mailto:prakashjha123yt@gmail.com" className="meta-link card-body block">
                prakashjha123yt@gmail.com
              </a>
              <p className="card-subtext">Response SLA: Within 48 business hours</p>
            </div>
          </div>

          <p className="company-promise">
            The Substring is dedicated to enterprise confidentiality, transparency, and data privacy across all platforms.
          </p>

          <Highlight>
            <em>This Privacy Policy was published on October 20, 2026 and governs DialQ Desk desktop application releases distributed via the Microsoft Store.</em>
          </Highlight>
        </div>

        {/* Footer Note */}
        <p className="policy-footer-note">
          © 2026 The Substring. All rights reserved. · DialQ Desk Desktop Privacy Policy · Microsoft Store Compliance Document.
        </p>
      </div>
    </div>
  );
}

/* ── Helper Components ── */

function SectionTitle({ icon, title }) {
  return (
    <h2 className="section-title-custom">
      <span className="section-icon-box">{icon}</span>
      <span>{title}</span>
    </h2>
  );
}

function Highlight({ children }) {
  return (
    <div className="policy-highlight-box">
      {children}
    </div>
  );
}

function PermissionDetailCard({
  title,
  permission,
  category,
  what,
  why,
  how,
  denied,
  specialNote,
}) {
  return (
    <div className="permission-card">
      <div className="permission-header">
        <div>
          <h3 className="permission-title">{title}</h3>
          <code className="permission-code">{permission}</code>
        </div>
        <span className="permission-badge">{category}</span>
      </div>

      <div className="permission-content">
        <div className="permission-block">
          <strong className="block-label">What This Capability Does:</strong>
          <p>{what}</p>
        </div>

        <div className="permission-block">
          <strong className="block-label">Why DialQ Desk Requires It:</strong>
          <p>{why}</p>
        </div>

        <div className="permission-block">
          <strong className="block-label">Execution Mechanism &amp; Boundary:</strong>
          <ul>
            {how.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="impact-box">
          <strong className="impact-label">Impact If Restricted:</strong>
          <p>{denied}</p>
        </div>

        {specialNote && (
          <div className="compliance-note-box">
            <strong className="note-label">Privacy &amp; Store Compliance Note:</strong>
            <p>{specialNote}</p>
          </div>
        )}
      </div>
    </div>
  );
}

