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
              <h3>Site Engineers</h3>
              <p>Manage on-site assembly, coordinate with factory logistics, and ensure strict adherence to client timelines and safety codes.</p>
              <a href="mailto:elyonprefab@gmail.com" className="opportunity-link">Apply via Email &rarr;</a>
            </div>
            
            <div className="opportunity-card">
              <h3>Design & Drafting</h3>
              <p>Convert client requirements into precision manufacturing blueprints for modular structures and heavy steel mezzanines.</p>
              <a href="mailto:elyonprefab@gmail.com" className="opportunity-link">Apply via Email &rarr;</a>
            </div>

            <div className="opportunity-card">
              <h3>Vendor Registration</h3>
              <p>We are actively seeking reliable material suppliers and specialized subcontractors for upcoming Pan-India projects.</p>
              <a href="#contact" className="opportunity-link">Submit Credentials &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM AT BOTTOM FOR VENDORS */}
      <div id="contact" className="careers-container">
        <div className="partner-section">
            <h2>Partner With Us</h2>
            <p>Vendors and subcontractors, please use the form below to submit your capabilities.</p>
        </div>
        <QuoteForm />
      </div>

    </div>
  );
};

export default Careers;