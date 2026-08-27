import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Make sure this path is correct!

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        <div className="footer-grid">
          {/* Column 1: Corporate Identity & Address */}
          <div className="footer-column">
            <h4>Elyon Prefab Pvt Ltd</h4>
            <p>
              Flat no 402, 4th Floor, Krishna Apartment, MIG 192,<br />
              Number 1, K P H B Phase 1, Kukatpally,
              Telangana, India - 500072<br />
              
            </p>
            <p style={{ marginTop: '15px' }}>
              <strong>Email:</strong> elyonprefab@gmail.com
            </p>

            <div className="footer-social">
              <a
                href="https://facebook.com/p/Elyon-Prefab-Private-Limited-61570587370347/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elyon Prefab on Facebook"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.35C16.3 4.24 15.3 4.15 14.15 4.15c-2.4 0-4.05 1.46-4.05 4.15v2.4H7.7v3h2.4V21h3.4z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/elyonprefab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elyon Prefab on Instagram"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.22.4.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.35 1.05.4 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.4 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.35-2.22.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.22-.4a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.35-1.05-.4-2.22C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.8.4-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.35 2.22-.4C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.73.07-.96.04-1.48.2-1.83.34-.46.18-.78.39-1.13.73-.34.35-.55.67-.73 1.13-.14.35-.3.87-.34 1.83C3.21 8.5 3.2 8.85 3.2 12s.01 3.5.07 4.73c.04.96.2 1.48.34 1.83.18.46.39.78.73 1.13.35.34.67.55 1.13.73.35.14.87.3 1.83.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.83-.34.46-.18.78-.39 1.13-.73.34-.35.55-.67.73-1.13.14-.35.3-.87.34-1.83.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.83a3 3 0 0 0-.73-1.13 3 3 0 0 0-1.13-.73c-.35-.14-.87-.3-1.83-.34C15.5 4.01 15.15 4 12 4zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3zm5.15-1.99a1.16 1.16 0 1 1-2.31 0 1.16 1.16 0 0 1 2.31 0z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/akshay-duggirala-051502248/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elyon Prefab on LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20.4h3.38V8.5zM5.25 3.6a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92zM20.44 20.4h-3.37v-6.24c0-1.49-.03-3.4-2.07-3.4-2.08 0-2.4 1.62-2.4 3.3v6.34H9.24V8.5h3.24v1.63h.05c.45-.86 1.56-1.77 3.21-1.77 3.43 0 4.7 2.26 4.7 5.53v6.51z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4>Corporate</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers & Vendor Portal</Link></li>
              <li><a href="/#projects">Project Portfolio</a></li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="footer-column">
            <h4>Core Solutions</h4>
            <ul className="footer-links">
              <li><Link to="/products/labour-accommodation">Labour Accommodation</Link></li>
              <li><Link to="/products/site-office">Site Offices</Link></li>
              <li><Link to="/products/mezzanine-flooring">Engineers’ Quarters</Link></li>
              <li><Link to="/products/prefab-partition">Prefab Wall Partitions</Link></li>
            </ul>
          </div>

          {/* Column 4: Find Us */}
          <div className="footer-column">
            <h4>Location</h4>
            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.349224904105!2d78.4009476!3d17.4908351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9109d3a21a9d%3A0xee54fbf2ea9b9fb3!2sELYON%20PREFAB%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1787802728772!5m2!1sen!2sin"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Elyon Prefab Private Limited location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & CIN */}
        <div className="footer-bottom">
          <span>&copy; 2026 Elyon Prefab Private Limited. All Rights Reserved.</span>
          <span>CIN: U41003TS2025PTC201544</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;