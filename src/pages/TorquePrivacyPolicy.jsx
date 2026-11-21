import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Cpu,
  HardDrive,
  Camera,
  Mic,
  Check,
  Copy,
  ServerOff,
  Activity,
  Sliders,
  // Fingerprint,
} from 'lucide-react';

const TorquePrivacyPolicy = () => {
  const [currentDate] = useState(() => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  });
  const [copied, setCopied] = useState(false);

  const copyUrl = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="privacy-container torque-container">
      <div className="privacy-header">
        <Link to="/" className="back-link">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="privacy-content">
        {/* Compliance Badge */}
        <div className="policy-badge-wrapper">
          <span className="policy-badge torque-badge">
            <ShieldCheck className="badge-icon torque-badge-icon" />
            <span>Android Privacy &amp; 100% Offline On-Device Architecture Disclosure</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="title-bordered torque-title">Privacy Policy for Torque (All-in-One Tools)</h1>
        <p className="policy-subtitle">
          Comprehensive disclosure of data architecture, local on-device machine learning, zero-knowledge AES-256 encrypted vault storage, and Android permission governance for Torque.
        </p>

        {/* Metadata Grid */}
        <div className="meta-grid torque-meta-grid">
          <div className="meta-item">
            <span className="meta-label">Application Name:</span>
            <strong className="meta-value">Torque (All-in-One Tools)</strong>
          </div>
          <div className="meta-item">
            <span className="meta-label">Target Platform:</span>
            <strong className="meta-value">Android (Kotlin / Jetpack Compose)</strong>
          </div>
          <div className="meta-item">
            <span className="meta-label">Effective Date:</span>
            <strong className="meta-value"><span className="date-text">{currentDate}</span></strong>
          </div>
          <div className="meta-item">
            <span className="meta-label">Architecture:</span>
            <strong className="meta-value">100% Offline &amp; Zero-Cloud Transmission</strong>
          </div>
          <div className="meta-item">
            <span className="meta-label">Security &amp; Vault:</span>
            {/* <strong className="meta-value">AES-256 Local Encryption + Biometrics</strong> */}
            <strong className="meta-value">AES-256 Local Encryption + PIN Lock</strong>
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
            <span className="meta-label">Policy URL:</span>
            <button
              onClick={copyUrl}
              className="copy-link-btn torque-copy-btn"
              title="Click to copy link"
              type="button"
            >
              <span>{copied ? 'Link Copied!' : 'Copy Policy Link'}</span>
              {copied ? <Check className="btn-icon text-green" /> : <Copy className="btn-icon" />}
            </button>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="toc-box torque-toc-box">
          <p className="toc-title">Table of Contents</p>
          <ol className="toc-grid">
            {[
              ['#s1', '1. Introduction & Core Philosophy'],
              ['#s2', '2. On-Device Processing & Offline Architecture'],
              ['#s3', '3. Heavy Tool Suites & Native Engine Safeguards'],
              ['#s4', '4. Android Permissions & Purpose Limitation'],
              ['#s5', '5. Permission Transparency & Audit Matrix'],
              ['#s6', '6. On-Device AI Models & Machine Learning'],
              ['#s7', '7. Encrypted Vault & Cryptographic Security'],
              ['#s8', '8. Zero Third-Party Services & Analytics'],
              ['#s9', '9. Data Retention, User Control & Deletion'],
              ['#s10', '10. Children’s Privacy (COPPA & GDPR-K)'],
              ['#s11', '11. Changes to This Privacy Policy'],
              ['#s12', '12. Contact Information'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="toc-link">
                  <span className="toc-bullet">•</span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="s1" className="policy-section">
          <h2>1. Introduction &amp; Core Philosophy</h2>
          <p>
            Welcome to <strong>Torque (All-in-One Tools)</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring that your data remains strictly under your sovereign control.
          </p>
          <p>
            Torque is engineered as a comprehensive utility application featuring over 100+ high-performance tools across video manipulation, audio waveform processing, on-device artificial intelligence, optical character recognition (OCR), document scanning, PDF compilation, file encryption, diagnostics, and daily utilities.
          </p>
          <p>
            Unlike conventional utility apps that offload processing to remote cloud servers or monetize user behaviors through invasive analytics and ad trackers, Torque operates under an uncompromising principle: <span className="highlight">100% of your data, media, documents, and tool operations stay on your device at all times.</span>
          </p>
        </section>

        {/* Section 2 */}
        <section id="s2" className="policy-section">
          <h2>2. On-Device Processing &amp; Offline Architecture</h2>
          <p>
            Torque is built with a strict <strong>privacy-first, offline architecture</strong>. <span className="highlight">We do not collect, transmit, store, monetize, or share any of your files, personal data, camera feeds, audio recordings, or usage metrics on any external servers.</span>
          </p>
          <p>
            The technical execution engine of Torque is built natively using <strong>Kotlin Coroutines (Dispatchers.IO)</strong> and optimized native C/C++ bindings, Android MediaCodec, Google ML Kit on-device inference, and local PDF rendering engines. All computations happen in local device volatile memory (RAM) and local app storage sandboxes.
          </p>

          <div className="cards-grid-3">
            <div className="info-card">
              <div className="card-header-line">
                <ServerOff className="card-icon torque-emerald-text" />
                <strong>Zero External Servers</strong>
              </div>
              <div className="card-body">
                Torque does not possess, operate, or communicate with any cloud backend. No telemetry endpoints, no synchronization servers, and no remote databases exist.
              </div>
            </div>

            <div className="info-card">
              <div className="card-header-line">
                <Cpu className="card-icon torque-emerald-text" />
                <strong>Local NPU &amp; CPU Processing</strong>
              </div>
              <div className="card-body">
                All intensive algorithms—from background segmentation to audio FFT spectrograms—execute directly on your device&apos;s processor, GPU, and Neural Processing Unit.
              </div>
            </div>

            <div className="info-card">
              <div className="card-header-line">
                <HardDrive className="card-icon torque-emerald-text" />
                <strong>Android Scoped Storage</strong>
              </div>
              <div className="card-body">
                The application conforms to Android&apos;s Storage Access Framework (SAF). We only access the exact files you explicitly select via the system document picker.
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="s3" className="policy-section">
          <h2>3. Heavy Tool Suites &amp; Native Engine Safeguards</h2>
          <p>
            Torque follows a <em>&quot;Hard-First&quot;</em> architecture roadmap, dedicating its heaviest engineering to complex local media manipulation and on-device AI suites. Below is how each category guarantees strict data boundaries:
          </p>

          <div className="permission-cards-stack">
            {/* Suite 1: Video */}
            <div className="permission-card">
              <div className="permission-header">
                <div>
                  <h3 className="permission-title">Phase 1: Video Processing Suite</h3>
                  <span className="permission-code">MediaCodec • Media3 • Native FFmpeg</span>
                </div>
                <span className="permission-badge">100% Local Pipeline</span>
              </div>
              <div className="permission-content">
                <div className="permission-block">
                  <span className="block-label">Features Included:</span>
                  <p>Video Trimmer &amp; Cutter, Video Compressor (bitrate &amp; resolution scaler), Format Converter (MP4, MOV, MKV, AVI, WebM), Video to GIF Generator, Keyframe Extractor, Mute &amp; Audio Replacer, Rotate &amp; Spatial Cropper, Speed Controller (0.25x – 4.0x), and Video Merger.</p>
                </div>
                <div className="permission-block">
                  <span className="block-label">Privacy Safeguards:</span>
                  <p>Video decoding, frame transformation, and re-encoding are executed directly on hardware-accelerated MediaCodec pipelines. Video frames never leave volatile memory, and temporary cache segments are purged immediately upon completion or cancellation.</p>
                </div>
              </div>
            </div>

            {/* Suite 2: Image AI */}
            <div className="permission-card">
              <div className="permission-header">
                <div>
                  <h3 className="permission-title">Phase 2: Heavy Image &amp; On-Device AI Suite</h3>
                  <span className="permission-code">ML Selfie Segmentation • Segment Anything • Canvas Matrix</span>
                </div>
                <span className="permission-badge">Zero Cloud Inference</span>
              </div>
              <div className="permission-content">
                <div className="permission-block">
                  <span className="block-label">Features Included:</span>
                  <p>On-Device Background Remover, Passport Photo Maker with biometric size grids (US, India, EU), Signature Extractor with transparency alpha masking, Image to Sticker Converter with contour outlines, and Split-Screen Before/After Comparison Slider.</p>
                </div>
                <div className="permission-block">
                  <span className="block-label">Privacy Safeguards:</span>
                  <p>Neural network weights are bundled inside the app APK or downloaded once locally by the Android operating system. Facial landmarks and biometric contours extracted during passport photo alignment are discarded immediately after rendering the printable canvas.</p>
                </div>
              </div>
            </div>

            {/* Suite 3: Audio */}
            <div className="permission-card">
              <div className="permission-header">
                <div>
                  <h3 className="permission-title">Phase 3: Audio Processing &amp; Waveform Engine</h3>
                  <span className="permission-code">Decoded PCM Buffers • FFT Visualizer • AudioRecord</span>
                </div>
                <span className="permission-badge">Local Memory Only</span>
              </div>
              <div className="permission-content">
                <div className="permission-block">
                  <span className="block-label">Features Included:</span>
                  <p>PCM Audio Waveform Viewer, Audio Trimmer &amp; Precision Cutter, Audio Merger &amp; Crossfade Joiner, Audio Format Converter (MP3, WAV, AAC, OGG, FLAC), Volume Booster &amp; Peak Normalizer, Speed &amp; Pitch Changer, Voice Recorder with live decibel meter, Video-to-MP3 Extractor, and ID3 Tag Editor.</p>
                </div>
                <div className="permission-block">
                  <span className="block-label">Privacy Safeguards:</span>
                  <p>Raw pulse-code modulation (PCM) buffers reside strictly in device RAM during editing. Audio recordings captured via the microphone are written directly to your private local storage or SAF chosen directory, with zero external transmission.</p>
                </div>
              </div>
            </div>

            {/* Suite 4: OCR & Document Scanner */}
            <div className="permission-card">
              <div className="permission-header">
                <div>
                  <h3 className="permission-title">Phase 4: OCR, Live Scanning &amp; Document Scanner</h3>
                  <span className="permission-code">Google ML Kit Text Recognition • Perspective Warp • OpenCV Filters</span>
                </div>
                <span className="permission-badge">On-Device Optical Vision</span>
              </div>
              <div className="permission-content">
                <div className="permission-block">
                  <span className="block-label">Features Included:</span>
                  <p>Image to Text (Latin &amp; Devanagari/Hindi scripts), Camera Live Text Capture with real-time bounding boxes, Document Scanner Engine (automatic edge detection, perspective distortion correction, contrast thresholding), Table to CSV/Text converter, and ID &amp; Receipt scanner presets.</p>
                </div>
                <div className="permission-block">
                  <span className="block-label">Privacy Safeguards:</span>
                  <p>Live camera preview frames are analyzed frame-by-frame on-device using ML Kit&apos;s local vision pipeline. Camera frames are never saved to permanent storage unless you press the shutter button, and recognized text remains strictly in local UI state.</p>
                </div>
              </div>
            </div>

            {/* Suite 5: PDF & Vault */}
            <div className="permission-card">
              <div className="permission-header">
                <div>
                  <h3 className="permission-title">Phase 5: PDF Suite, Zip &amp; Advanced Files Engine</h3>
                  {/* <span className="permission-code">PdfRenderer • AES-256 GCM • BiometricPrompt • SAF</span> */}
                  <span className="permission-code">PdfRenderer • AES-256 GCM • PIN Protection • SAF</span>
                </div>
                <span className="permission-badge">Cryptographically Sealed</span>
              </div>
              <div className="permission-content">
                <div className="permission-block">
                  <span className="block-label">Features Included:</span>
                  <p>PDF Page Engine (Merge, Split, Reorder, Rotate, Delete pages), Images to PDF, PDF to Images, PDF Compressor, PDF Lock &amp; Unlock (256-bit AES), PDF Viewer &amp; Digital Signature Canvas, ZIP Archive Generator with password encryption, Encrypted File Vault with PIN authentication{/* (Biometrics commented out until implemented) */}, and Duplicate &amp; Large File Finder with MD5 file hash scanner.</p>
                </div>
                <div className="permission-block">
                  <span className="block-label">Privacy Safeguards:</span>
                  <p>Files imported into the Encrypted Vault are encrypted using AES-256 in Galois/Counter Mode (GCM). Encryption keys are stored inside the hardware-backed Android KeyStore. No master password or recovery key exists on any server; if you forget your PIN, the data cannot be decrypted by anyone, including us.</p>
                </div>
              </div>
            </div>

            {/* Suite 6: Utilities */}
            <div className="permission-card">
              <div className="permission-header">
                <div>
                  <h3 className="permission-title">Phases 6–9: Core Image, QR, Diagnostics &amp; Everyday Utilities</h3>
                  <span className="permission-code">Android SensorManager • BatteryManager • CameraX</span>
                </div>
                <span className="permission-badge">Zero Footprint Logging</span>
              </div>
              <div className="permission-content">
                <div className="permission-block">
                  <span className="block-label">Features Included:</span>
                  <p>Image Resizer, Compressor, Crop, Watermark, EXIF Viewer &amp; Stripper, Blur &amp; Pixelate Censor Tool, Camera QR &amp; Barcode Scanner, Barcode Generator, Password Generator with entropy check, File Hash (MD5, SHA-1, SHA-256), Hardware Diagnostics (Battery details, Wi-Fi signal meter, Sensor graph viewer, Screen dead-pixel test, Mic &amp; speaker frequency test), Color Suite, Calculators, Text Diff, Clipboard History with auto-clear timer, and Sensor Utilities (Compass, Spirit Level).</p>
                </div>
                <div className="permission-block">
                  <span className="block-label">Privacy Safeguards:</span>
                  <p>Diagnostic tools read instantaneous hardware registers in real-time to display technical readouts. No historical hardware footprints, Wi-Fi SSIDs, or sensor logs are recorded or persisted. The Clipboard tool features an auto-clear timer to wipe transient copied secrets from memory.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="s4" className="policy-section">
          <h2>4. Android Permissions &amp; Purpose Limitation</h2>
          <p>
            To provide our extensive suite of 100+ native tools, Torque requires access to specific Android operating system capabilities. In strict accordance with the Android Developer Best Practices and Google Play Developer Policies:
          </p>
          <ul>
            <li><strong>Runtime Granularity:</strong> We only request sensitive permissions at the exact moment you initiate a feature requiring them (e.g., requesting Camera only when you tap QR Scanner or OCR).</li>
            <li><strong>Purpose Limitation:</strong> Permissions are restricted entirely to executing the immediate user-requested action.</li>
            <li><strong>No Background Monitoring:</strong> Torque does not run background tracking services, continuous location observers, or covert audio monitors.</li>
          </ul>

          <div className="cards-grid-2">
            <div className="info-card">
              <div className="card-header-line">
                <HardDrive className="card-icon torque-emerald-text" />
                <strong>Media &amp; Storage Access</strong>
              </div>
              <div className="card-body">
                Required to read images, videos, audio clips, and documents you pick for editing, and to save converted files or exported PDFs back to your device. Handled via Scoped Storage and the Android Storage Access Framework (SAF).
              </div>
            </div>

            <div className="info-card">
              <div className="card-header-line">
                <Camera className="card-icon torque-emerald-text" />
                <strong>Camera Access</strong>
              </div>
              <div className="card-body">
                Required for real-time QR/barcode scanning, live optical character recognition (OCR), document perspective scanning, and dead-pixel screen/flashlight testing. Live camera streams are never recorded or transmitted remotely.
              </div>
            </div>

            <div className="info-card">
              <div className="card-header-line">
                <Mic className="card-icon torque-emerald-text" />
                <strong>Microphone Access</strong>
              </div>
              <div className="card-body">
                Required strictly when you activate the Voice Recorder, Audio Waveform Live Visualizer, or Mic Frequency Diagnostic test. Microphone data is processed in real time locally and never uploaded.
              </div>
            </div>

            <div className="info-card">
              <div className="card-header-line">
                <Activity className="card-icon torque-emerald-text" />
                <strong>Sensors &amp; Diagnostics</strong>
              </div>
              <div className="card-body">
                Required to display real-time sensor graphs (accelerometer, gyroscope, magnetic field for compass, ambient light) and battery diagnostics. State is visualized in real-time and never logged to disk or network.
              </div>
            </div>

            {/* Biometric Authentication - Commented out as not yet implemented
            <div className="info-card">
              <div className="card-header-line">
                <Fingerprint className="card-icon torque-emerald-text" />
                <strong>Biometric Authentication</strong>
              </div>
              <div className="card-body">
                Uses the official Android <code>BiometricPrompt</code> API to authenticate access to your private Encrypted Vault. Biometric templates remain locked in your device&apos;s Secure Element (TEE) and are never exposed to our app code.
              </div>
            </div>
            */}

            <div className="info-card">
              <div className="card-header-line">
                <Sliders className="card-icon torque-emerald-text" />
                <strong>Haptic Vibration</strong>
              </div>
              <div className="card-body">
                Controls the device vibration actuator to provide physical tactile feedback when trimming media handles, scanning valid barcodes, or flipping tools in the utility suite.
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="s5" className="policy-section">
          <h2>5. Permission Transparency &amp; Audit Matrix</h2>
          <p>
            The table below provides a complete audit of every Android manifest permission requested by Torque, its exact technical role, and its privacy guarantee:
          </p>

          <div className="table-responsive">
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Android Permission</th>
                  <th>Feature Category</th>
                  <th>Operational Purpose</th>
                  <th>Privacy Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>READ_MEDIA_IMAGES</code><br /><code>READ_MEDIA_VIDEO</code><br /><code>READ_MEDIA_AUDIO</code></td>
                  <td>Video, Audio &amp; Image Suites</td>
                  <td>Allows you to select videos, photos, and music files from your media library for local conversion, trimming, compression, and analysis.</td>
                  <td><span className="pill-secure">100% On-Device</span></td>
                </tr>
                <tr>
                  <td><code>READ_EXTERNAL_STORAGE</code><br /><code>WRITE_EXTERNAL_STORAGE</code></td>
                  <td>Legacy File Support (Android &lt; 13)</td>
                  <td>Enables opening documents (PDFs, ZIPs) and saving rendered outputs on legacy Android operating system versions.</td>
                  <td><span className="pill-secure">User-Initiated Only</span></td>
                </tr>
                <tr>
                  <td><code>CAMERA</code></td>
                  <td>OCR, Scanner, QR &amp; Flashlight</td>
                  <td>Provides camera viewfinder frames to local ML Kit models for OCR, barcode parsing, document edge detection, and torch strobe control.</td>
                  <td><span className="pill-secure">Zero Video Upload</span></td>
                </tr>
                <tr>
                  <td><code>RECORD_AUDIO</code></td>
                  <td>Voice Recorder, Audio Tools</td>
                  <td>Captures audio input for local voice recording, real-time waveform decibel measurement, and microphone diagnostic testing.</td>
                  <td><span className="pill-secure">Zero Audio Upload</span></td>
                </tr>
                {/* Biometric permissions - Commented out until implemented
                <tr>
                  <td><code>USE_BIOMETRIC</code><br /><code>USE_FINGERPRINT</code></td>
                  <td>Encrypted Vault</td>
                  <td>Prompts the system BiometricPrompt dialog to unlock AES-256 encrypted files and protected notes.</td>
                  <td><span className="pill-secure">Hardware TEE Handled</span></td>
                </tr>
                */}
                <tr>
                  <td><code>BODY_SENSORS</code> / Sensors</td>
                  <td>Hardware Diagnostics &amp; Tools</td>
                  <td>Reads accelerometer, magnetometer, and gyroscope data to render the Compass, Spirit Level, and real-time sensor graphs.</td>
                  <td><span className="pill-secure">Transient Display Only</span></td>
                </tr>
                <tr>
                  <td><code>VIBRATE</code></td>
                  <td>System Utilities</td>
                  <td>Provides subtle haptic vibration ticks on tool adjustment sliders, frame seeking, and barcode scan confirmations.</td>
                  <td><span className="pill-secure">Harmless UI Feedback</span></td>
                </tr>
                <tr>
                  <td><code>ACCESS_NETWORK_STATE</code></td>
                  <td>Network Diagnostic Tool</td>
                  <td>Reads Wi-Fi link speed, signal strength (RSSI), and gateway status in real-time to display on the local network diagnostic screen.</td>
                  <td><span className="pill-secure">No Internet Transmission</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 */}
        <section id="s6" className="policy-section">
          <h2>6. On-Device AI Models &amp; Machine Learning</h2>
          <p>
            Torque integrates state-of-the-art machine learning capabilities—including Selfie Segmentation, Document Edge Detection, and Optical Character Recognition (OCR for Latin and Devanagari/Hindi scripts).
          </p>
          <div className="compliance-note-box torque-box">
            <span className="note-label">On-Device Machine Learning Guarantee:</span>
            <p>
              All ML inference runs strictly through Google ML Kit on-device APIs and embedded TensorFlow Lite models. <span className="highlight">Your photos, documents, IDs, receipts, and signatures are never sent to Google, cloud inference clusters, or any third party.</span> Model inference occurs in local device memory, and the results are provided directly to the active Jetpack Compose UI state.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section id="s7" className="policy-section">
          <h2>7. Encrypted Vault &amp; Cryptographic Security</h2>
          <p>
            The Encrypted File Vault in Torque provides an impenetrable local safe for sensitive photos, documents, and notes. The cryptographic safeguards are implemented as follows:
          </p>
          <ul>
            <li><strong>AES-256 GCM Encryption:</strong> Files placed in the vault are encrypted using Advanced Encryption Standard (AES) with 256-bit keys in Galois/Counter Mode (GCM) for authenticated encryption.</li>
            <li><strong>Android KeyStore Integration:</strong> Cryptographic keys are generated and held within the device&apos;s hardware-backed Android KeyStore (Trusted Execution Environment / StrongBox Keymaster), ensuring that even on rooted devices, key extraction is prevented.</li>
            <li><strong>Encrypted DataStore &amp; Room:</strong> Metadata, tags, and encrypted note contents are persisted in local SQL databases using SQLCipher and Android Jetpack Encrypted DataStore.</li>
            <li><strong>Zero-Knowledge Architecture:</strong> We possess no backdoor, no administrative escrow key, and no cloud reset mechanism. Your PIN{/* and biometric credentials */} is known solely to your local device.</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section id="s8" className="policy-section">
          <h2>8. Zero Third-Party Services &amp; Analytics</h2>
          <p>
            Torque is completely standalone and sovereign. In sharp contrast to common mobile software practices:
          </p>
          <div className="exclusion-box">
            <div className="exclusion-title">Strict Zero-Tracking Policy:</div>
            <ul>
              <li><strong>NO Analytics SDKs:</strong> We do NOT include Google Analytics for Firebase, Mixpanel, Adjust, AppsFlyer, Segment, or Flurry.</li>
              <li><strong>NO Crash Telemetry:</strong> We do NOT include Firebase Crashlytics, Sentry, or Bugsnag. If an unexpected crash occurs, crash logs stay in Android logcat and are never transmitted to us.</li>
              <li><strong>NO Advertising Networks:</strong> We do NOT integrate Google AdMob, Unity Ads, AppLovin, Meta Audience Network, or any programmatic ad bidding networks.</li>
              <li><strong>NO Behavioral Tracking:</strong> We never log which tools you open, how long you use them, or what filenames you process.</li>
            </ul>
          </div>
        </section>

        {/* Section 9 */}
        <section id="s9" className="policy-section">
          <h2>9. Data Retention, User Control &amp; Deletion</h2>
          <p>
            Because all processing and storage occur exclusively on your local Android device, you retain 100% sovereign authority over your data lifecycle and retention periods:
          </p>
          <ol>
            <li><strong>Instant In-App Deletion:</strong> You can delete any processed output, recorded audio clip, or file stored in the Encrypted Vault directly within the application at any time.</li>
            <li><strong>Clear App Data:</strong> You can purge all application databases, preferences, and encrypted vault storage in one click via your device settings (<code>Settings &gt; Apps &gt; Torque &gt; Storage &gt; Clear Data</code>).</li>
            <li><strong>Application Uninstall:</strong> Uninstalling Torque triggers Android&apos;s automatic sandbox deletion, permanently wiping the app&apos;s internal databases, cache files, and private keys.</li>
          </ol>
          <p>
            Because we have zero external copies of your files or databases, once data is deleted from your device, it is permanently and irreversibly eradicated.
          </p>
        </section>

        {/* Section 10 */}
        <section id="s10" className="policy-section">
          <h2>10. Children’s Privacy (COPPA &amp; GDPR-K)</h2>
          <p>
            Torque is designed for general audiences and utility productivity. Because Torque does not collect, transmit, store, or solicit personal identification information of any kind, it is fully compliant with the Children&apos;s Online Privacy Protection Act (COPPA), the General Data Protection Regulation (GDPR-K), and Google Play&apos;s Families Policy. Torque is safe for users of all ages.
          </p>
        </section>

        {/* Section 11 */}
        <section id="s11" className="policy-section">
          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may periodically update this Privacy Policy to reflect additions to our tool registry or updates to Android operating system security standards. If changes are made, the revised policy will be posted on this page with an updated &quot;Effective Date.&quot;
          </p>
          <p>
            If any future update introduces optional cloud backup features, such features will be strictly opt-in, disabled by default, and accompanied by explicit prominent in-app disclosures.
          </p>
        </section>

        {/* Section 12: Contact */}
        <div id="s12" className="contact-info glass-panel torque-contact-panel">
          <h2>12. Contact Us</h2>
          <p>If you have any questions, inquiries, or suggestions regarding this Privacy Policy or the security architecture of Torque, please contact us directly at:</p>
          <p>
            <strong>Email: </strong>
            <a href="mailto:prakashjha123yt@gmail.com" className="email-link torque-email-link">
              prakashjha123yt@gmail.com
            </a>
          </p>
          <p className="company-promise">
            <strong>Publisher:</strong> The Substring • Commitment to Offline, User-Owned Software
          </p>
        </div>

        <p className="policy-footer-note">
          Torque (All-in-One Tools) • Developed with Jetpack Compose &amp; Native On-Device Execution Engines.
        </p>
      </div>
    </div>
  );
};

export default TorquePrivacyPolicy;
