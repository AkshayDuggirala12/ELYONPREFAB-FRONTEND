import React from 'react';
import QuoteForm from './components/QuoteForm';
import './Careers.css'; // <-- CSS imported here!

const Careers = () => {
  return (
    <div className="careers-wrapper">
      
      {/* HERO SECTION */}
      <div className="careers-container careers-hero">
        <h1>Build With Us</h1>
        <p>
          Elyon Prefab is always looking for top-tier engineers, project managers, and reliable vendor partners 
          who understand the importance of speed, precision, and site discipline.
        </p>
      </div>

      {/* CULTURE SECTION */}
      <div className="careers-container culture-grid">
        <div className="culture-image"></div>
        <div className="culture-content">
          <h4>Why Elyon</h4>
          <h2>A Culture of Execution.</h2>
          <p>
            We don't just build structures; we build highly efficient teams. Whether you are on the factory floor 
            fabricating heavy steel or on the ground managing a massive multi-block installation, Elyon provides 
            an environment where hard work and precision are rewarded.
          </p>
          <ul className="culture-list">
            <li>Aggressive growth and pan-India project exposure.</li>
            <li>Commitment to on-site safety and rigorous quality control.</li>
            <li>Direct mentorship from seasoned infrastructure professionals.</li>
          </ul>
        </div>
      </div>

      {/* OPEN OPPORTUNITIES */}
      <div className="opportunities-section">
        <div className="careers-container">
          <div className="opportunities-header">
             <h2>Current Opportunities</h2>
          </div>
          
          <div className="opportunities-grid">
            <div className="opportunity-card">
              <h3>Office executive</h3>
              <p>We are looking for an Office Executive with good communication skills to manage day-to-day office activities and coordinate with clients and internal teams. Freshers are welcome, and candidates with a Civil Engineering background are preferred. Basic knowledge of MS Excel and AutoCAD is required.</p>
              <a href="mailto:elyonprefab@gmail.com" className="opportunity-link">Apply via Email &rarr;</a>
            </div>
            
            <div className="opportunity-card">
              <h3>Sales executive</h3>
              <p>We are looking for a motivated Sales Executive to meet clients, understand project requirements, prepare quotations, and drive sales. The role involves achieving monthly targets, maintaining strong client relationships, and coordinating closely with clients and project teams to ensure smooth project execution..</p>
              <a href="mailto:elyonprefab@gmail.com" className="opportunity-link">Apply via Email &rarr;</a>
            </div>

            <div className="opportunity-card">
              <h3>Site Engineer</h3>
              <p>We are looking for a Site Engineer to supervise and coordinate day-to-day site activities, ensure work is carried out as per drawings and specifications, coordinate with workers and project teams, and monitor quality, progress, and safety at the site. Civil Engineering graduates with good communication and site management skills are preferred..</p>
              <a href="mailto:elyonprefab@gmail.com" className="opportunity-link">Apply via Email &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM AT BOTTOM FOR VENDORS */}
      <div id="contact" className="careers-container">
        <div className="partner-section">
            
        </div>
        <QuoteForm />
      </div>

    </div>
  );
};

export default Careers;