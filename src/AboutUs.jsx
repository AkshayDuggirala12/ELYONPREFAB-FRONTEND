import React from 'react';
import './AboutUs.css'; // <-- Importing your new CSS file!

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      
      {/* HERO SECTION */}
      <div className="about-container about-hero">
        <h1>Elyon Prefab Private Limited</h1>
        <p>
          We are a dedicated service provider specializing in <strong>Fabrication, Installation, Structural Erection, and Partition Services</strong>. 
          With a growing workforce of 51 to 100 skilled professionals, we are committed to delivering high-quality solutions 
          that meet the diverse needs of our clients. From assembly to the erection of complex prefabricated constructions on-site, 
          our expertise spans multiple sectors with a focus on precision, safety, and efficiency.
        </p>
      </div>

      {/* STATUTORY PROFILE */}
      <div className="about-container">
        <div className="statutory-profile">
          <span className="section-eyebrow">Statutory Profile</span>
          <div className="statutory-grid">
            <div>
              <p className="stat-label">Corporate Identification Number (CIN)</p>
              <p className="stat-value">U41003TS2025PTC201544</p>
            </div>
            <div>
              <p className="stat-label">Incorporation Date</p>
              <p className="stat-value">26th July, 2025</p>
            </div>
            <div>
              <p className="stat-label">Legal Status</p>
              <p className="stat-value">Private Limited Company</p>
            </div>
            <div>
              <p className="stat-label">Team Size</p>
              <p className="stat-value">51 to 100 Employees</p>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <p className="stat-label">Registered Office</p>
              <p className="stat-value" style={{ lineHeight: '1.5' }}>
                MIG 192, Krishna Apartment, Flat No 402, 4th Floor,<br/>
                Kukatpally, Tirumalagiri, Hyderabad, Telangana, India - 500072
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LEADERSHIP SECTION */}
      <div className="leadership-section">
        <div className="about-container leadership-grid">
          <div>
            <span className="section-eyebrow">Leadership</span>
            <h2>Driven by Execution.</h2>
            <p>
              Led by Directors <strong>Prakasam Kondapalli</strong> and <strong>Kondapalli Aaron Abisheik</strong>, Elyon Prefab Pvt Ltd was built on a singular philosophy: 
              discipline in fabrication equals speed on site. 
            </p>
            <p>
              With deep experience navigating the complexities of government construction and major infrastructure deployment, 
              our leadership team ensures that every project is meticulously planned. We mitigate risk by bringing the 
              heavy construction process indoors, delivering high-quality, customized modular solutions directly to your site.
            </p>
          </div>
          <div className="leadership-image"></div>
        </div>
      </div>

      {/* WHY US SECTION */}
      <div className="about-container why-us-section">
        <div className="why-us-header">
             <span className="section-eyebrow">Our Differentiators</span>
             <h2>Why Choose Us?</h2>
        </div>
        
        <div className="why-us-grid">
          {[
            { 
              title: 'Professional Expertise', 
              desc: 'Our team of trained and experienced professionals ensures top-notch service execution with strict attention to detail and uncompromising safety compliance.' 
            },
            { 
              title: 'Customer-Centric Approach', 
              desc: 'We understand every project is unique. We offer highly tailored solutions that perfectly align with client expectations, specifications, and tight delivery timelines.' 
            },
            { 
              title: 'Quality & Reliability', 
              desc: 'We utilize premium materials and industry-best practices, ensuring durable, cost-effective, and maintenance-friendly solutions for long-term operational satisfaction.' 
            }
          ].map((step, index) => (
            <div key={index} className="why-us-card">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutUs;