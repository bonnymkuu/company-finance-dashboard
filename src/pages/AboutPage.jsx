import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './AboutPage.css';

const AboutPage = () => {
  const { theme } = useTheme();

  return (
    <div className={`about-container ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="container my-5 p-4 rounded shadow-sm">
        <h1 className={`text-center mb-4 ${theme === 'dark' ? 'text-info' : 'text-primary'}`}>
          About <span className="text-warning">Bonnymkuu</span> Business Solutions
        </h1>

        <div className="credit-badge mb-4">
          <i className="bi bi-code-square me-2"></i>
          Created by: <strong>bonnymkuu</strong>
        </div>

        <section className="mb-4">
          <h2 className={`h4 border-bottom pb-2 ${theme === 'dark' ? 'text-warning border-info' : 'text-primary border-primary'}`}>
            <i className="bi bi-stars me-2"></i>
            Our Mission
          </h2>
          <p>
            At Bonnymkuu, our mission is to empower businesses with intuitive financial tools that simplify complex processes, 
            enhance decision-making, and drive sustainable growth. We deliver innovative solutions that are accessible, secure, 
            and tailored to our clients' evolving needs.
          </p>
        </section>

        <section className="mb-4">
          <h2 className={`h4 border-bottom pb-2 ${theme === 'dark' ? 'text-warning border-info' : 'text-primary border-primary'}`}>
            <i className="bi bi-eye me-2"></i>
            Our Vision
          </h2>
          <p>
            We envision a world where every business can manage finances with clarity and efficiency. By harnessing technology 
            and data, we strive to be the global leader in financial insights and business success.
          </p>
        </section>

        <section className="mb-4">
          <h2 className={`h4 border-bottom pb-2 ${theme === 'dark' ? 'text-warning border-info' : 'text-primary border-primary'}`}>
            <i className="bi bi-people-fill me-2"></i>
            Who We Are
          </h2>
          <p>
            Founded by <strong>bonnymkuu</strong> in 2023, we bring together experts from finance, technology, and business 
            development to create seamless software solutions that bridge complex financial concepts with user-friendly tools.
          </p>
        </section>

        <section className="mb-4">
          <h2 className={`h4 border-bottom pb-2 ${theme === 'dark' ? 'text-warning border-info' : 'text-primary border-primary'}`}>
            <i className="bi bi-heart-fill me-2"></i>
            Our Core Values
          </h2>
          <ul className={`list-group list-group-flush ${theme === 'dark' ? 'dark-list' : 'light-list'}`}>
            <li className="list-group-item">
              <i className="bi bi-shield-shaded me-2 text-info"></i>
              <strong>Integrity:</strong> Transparent and ethical operations
            </li>
            <li className="list-group-item">
              <i className="bi bi-lightbulb me-2 text-info"></i>
              <strong>Innovation:</strong> Continuous improvement and adaptation
            </li>
            <li className="list-group-item">
              <i className="bi bi-person-check me-2 text-info"></i>
              <strong>Customer Focus:</strong> User needs drive our development
            </li>
            <li className="list-group-item">
              <i className="bi bi-lock me-2 text-info"></i>
              <strong>Security:</strong> Robust data protection measures
            </li>
            <li className="list-group-item">
              <i className="bi bi-handshake me-2 text-info"></i>
              <strong>Collaboration:</strong> Partnering for mutual growth
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className={`h4 border-bottom pb-2 ${theme === 'dark' ? 'text-warning border-info' : 'text-primary border-primary'}`}>
            <i className="bi bi-map me-2"></i>
            Our Journey
          </h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-badge">
                <i className="bi bi-rocket"></i>
              </div>
              <div className="timeline-content">
                <h5>2023</h5>
                <p>Founded by bonnymkuu with a vision to revolutionize business management</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-badge">
                <i className="bi bi-flag"></i>
              </div>
              <div className="timeline-content">
                <h5>Early 2024</h5>
                <p>Launched our MVP with core financial features</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-badge">
                <i className="bi bi-award"></i>
              </div>
              <div className="timeline-content">
                <h5>Mid 2024</h5>
                <p>Onboarded over 1,000 businesses across multiple industries</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <h2 className={`h4 border-bottom pb-2 ${theme === 'dark' ? 'text-warning border-info' : 'text-primary border-primary'}`}>
            <i className="bi bi-patch-check me-2"></i>
            Why Choose Bonnymkuu?
          </h2>
          <p>
            We offer a comprehensive suite of financial tools designed with your business in mind. Our platform combines 
            advanced analytics with intuitive interfaces to help you save time, reduce errors, and make smarter decisions.
          </p>
        </section>

        <section className="mb-4">
          <h2 className={`h4 border-bottom pb-2 ${theme === 'dark' ? 'text-warning border-info' : 'text-primary border-primary'}`}>
            <i className="bi bi-people me-2"></i>
            Meet the Team
          </h2>
          <p>
            The Bonnymkuu team includes talented software engineers, financial analysts, UX designers, and customer success 
            specialists working tirelessly to maintain the highest standards of quality and reliability.
          </p>
        </section>

        <section>
          <h2 className={`h4 border-bottom pb-2 ${theme === 'dark' ? 'text-warning border-info' : 'text-primary border-primary'}`}>
            <i className="bi bi-envelope me-2"></i>
            Get in Touch
          </h2>
          <p>
            Have questions? Reach out at{' '}
            <a href="mailto:support@bonnymkuu.com" className={theme === 'dark' ? 'text-info' : 'text-primary'}>
              support@bonnymkuu.com
            </a> or call{' '}
            <a href="tel:+1234567890" className={theme === 'dark' ? 'text-info' : 'text-primary'}>
              (123) 456-7890
            </a>.
          </p>
          <div className="social-links mt-3">
            <a href="#" className="btn btn-outline-primary me-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="btn btn-outline-primary me-2">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="btn btn-outline-primary">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;