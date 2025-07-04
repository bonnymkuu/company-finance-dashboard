import React from 'react';
import './LegalPage.css';

const LegalPage = () => {
  return (
    <div className="legal-page-container">
      <h1>Legal and Compliance</h1>

      <section>
        <h2>Terms of Service</h2>
        <p>
          The Terms of Service (ToS) govern your use of our platform and services. By using this website, you agree to comply
          with all applicable laws and regulations and accept full responsibility for your actions. Our ToS outlines your rights,
          restrictions, and obligations as a user, including account security, prohibited activities, and dispute resolution procedures.
          Please review these terms carefully before using our services.
        </p>
      </section>

      <section>
        <h2>Privacy Policy</h2>
        <p>
          Protecting your personal data is our priority. Our Privacy Policy explains how we collect, store, process,
          and share your information. This includes data collected through website usage, forms, cookies, and third-party services.
          We comply with international data protection laws such as GDPR and CCPA, ensuring transparency and control over your data.
          You have the right to access, modify, or request deletion of your personal information.
        </p>
      </section>

      <section>
        <h2>Regulatory Compliance</h2>
        <p>
          Our platform operates in strict adherence to all relevant financial and business regulations. This includes:
          <ul>
            <li><strong>Anti-Money Laundering (AML):</strong> Procedures to detect and prevent money laundering activities.</li>
            <li><strong>Know Your Customer (KYC):</strong> Verification processes to confirm the identity of our clients.</li>
            <li><strong>Payment Card Industry Data Security Standard (PCI DSS):</strong> Ensuring secure payment processing.</li>
            <li><strong>Financial Reporting Standards:</strong> Compliance with accounting and audit requirements.</li>
          </ul>
          We regularly audit and update our systems to meet evolving regulatory requirements.
        </p>
      </section>

      <section>
        <h2>User Responsibilities and Account Security</h2>
        <p>
          Users are responsible for maintaining the confidentiality of their login credentials and for all activity under their accounts.
          Unauthorized access, fraudulent activities, or misuse of the platform may lead to suspension or termination of services.
          We encourage users to enable two-factor authentication (2FA) and to immediately report any suspicious behavior.
        </p>
      </section>

      <section>
        <h2>Intellectual Property Rights</h2>
        <p>
          All intellectual property rights related to the content, branding, software, and technology of this platform are owned
          by our company or our licensors. Users may not copy, modify, distribute, or use any content without explicit permission.
          Unauthorized use may result in legal action.
        </p>
      </section>

      <section>
        <h2>Disclaimers and Limitation of Liability</h2>
        <p>
          Our platform and services are provided "as is" without warranties of any kind. While we strive for accuracy and reliability,
          we do not guarantee the completeness or suitability of any information or services offered.
          We disclaim liability for any damages resulting from the use or inability to use the platform, including financial losses.
        </p>
      </section>

      <section>
        <h2>Data Retention and Security</h2>
        <p>
          We retain your data only as long as necessary to provide services and comply with legal obligations.
          Our security measures include encryption, regular audits, and secure data centers to protect your information
          from unauthorized access or breaches.
        </p>
      </section>

      <section>
        <h2>Cookie Policy</h2>
        <p>
          Our website uses cookies and similar technologies to enhance user experience, analyze site traffic,
          and support marketing efforts. You can control cookie preferences via your browser settings.
          By continuing to use the site, you consent to our use of cookies as described in this policy.
        </p>
      </section>

      <section>
        <h2>Jurisdiction and Governing Law</h2>
        <p>
          These legal terms are governed by the laws of [Your Jurisdiction]. Any disputes arising from or related to these terms
          shall be resolved exclusively in the courts located within this jurisdiction.
        </p>
      </section>

      <section>
        <h2>Updates to Legal Documents</h2>
        <p>
          We may update these legal policies from time to time to reflect changes in laws or business practices.
          Users will be notified of significant changes through email or platform notifications.
          Continued use of our services after updates constitutes acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          For any legal questions, concerns, or requests, please contact our Legal Department at legal@yourcompany.com or call (123) 456-7890.
          We are committed to promptly addressing all inquiries.
        </p>
      </section>
    </div>
  );
};

export default LegalPage;
