import React, { useState } from 'react';
import axios from 'axios';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    site_dimensions: '',
    intended_use: '',
    timeline: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setStatusType('loading');
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/leads/', formData);
      if (response.data.status === 'success') {
        setStatus('Quote request sent successfully! We will contact you soon.');
        setStatusType('success');
        setFormData({ name: '', phone: '', site_dimensions: '', intended_use: '', timeline: '', message: '' }); 
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus('Failed to send request. Please try again.');
      setStatusType('error');
    }
  };

  return (
    <div className="lead-form">
      <div className="lead-form-header">
        <h3>Need a custom solution?</h3>
        <p className="lead-note">Tell us your site dimensions, intended use, and timeline. We'll engineer it.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="form-grid">
        <label>
          <span>Your Name *</span>
          <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
        </label>
        
        <label>
          <span>Phone Number *</span>
          <input type="tel" name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} required />
        </label>
        
        <label>
          <span>Site Dimensions</span>
          <input type="text" name="site_dimensions" placeholder="e.g., 50x100 sqft" value={formData.site_dimensions} onChange={handleChange} />
        </label>
        
        <label>
          <span>Intended Use</span>
          <input type="text" name="intended_use" placeholder="e.g., Warehouse" value={formData.intended_use} onChange={handleChange} />
        </label>
        
        <label className="full-span">
          <span>Timeline</span>
          <input type="text" name="timeline" placeholder="e.g., 1 Month" value={formData.timeline} onChange={handleChange} />
        </label>
        
        <label className="full-span">
          <span>Additional Details</span>
          <textarea name="message" placeholder="Tell us more about your project..." value={formData.message} onChange={handleChange} rows="4"></textarea>
        </label>
        
        <div className="full-span">
          <button type="submit" className="primary-link submit-link" disabled={statusType === 'loading'}>
            TALK TO OUR TEAM
          </button>
        </div>
      </form>
      
      {status && (
        <p className={`form-status form-status-${statusType} lead-note`} style={{ marginTop: '15px', fontWeight: 'bold' }}>
          {status}
        </p>
      )}
    </div>
  );
};

export default QuoteForm;