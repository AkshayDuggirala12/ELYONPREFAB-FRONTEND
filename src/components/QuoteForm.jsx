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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Sending the lead to your FastAPI backend!
      const response = await axios.post('http://127.0.0.1:8000/api/leads/', formData);
      
      if (response.data.status === 'success') {
        setStatus('success');
        // Clear the form after a successful submission
        setFormData({ name: '', phone: '', site_dimensions: '', intended_use: '', timeline: '', message: '' });
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      setStatus('error');
    }
  };

  return (
    <div className="lead-form">
      <div className="lead-form-header">
        <h3>Request a Custom Quote</h3>
      </div>
      
      <form className="form-grid" onSubmit={handleSubmit}>
        
        <label>
          <span>Full Name *</span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" />
        </label>
        
        <label>
          <span>Phone Number *</span>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter your phone number" />
        </label>
        
        <label>
          <span>Site Dimensions</span>
          <input type="text" name="site_dimensions" value={formData.site_dimensions} onChange={handleChange} placeholder="e.g. 50x100 ft" />
        </label>
        
        <label>
          <span>Intended Use</span>
          <select name="intended_use" value={formData.intended_use} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="Labour Accommodation">Labour Accommodation</option>
            <option value="Site Office">Site Office</option>
            <option value="Warehouse / Industrial">Warehouse / Industrial</option>
            <option value="Other">Other</option>
          </select>
        </label>
        
        <label className="full-span">
          <span>Project Timeline</span>
          <input type="text" name="timeline" value={formData.timeline} onChange={handleChange} placeholder="e.g. Immediate, 2 Months, etc." />
        </label>
        
        <label className="full-span">
          <span>Additional Details</span>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your specific requirements..."></textarea>
        </label>
        
        <div className="full-span" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}>
          <button type="submit" className="primary-link submit-link" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Submit Request'}
          </button>
          
          {status === 'success' && <span className="form-status-success">Quote request sent successfully!</span>}
          {status === 'error' && <span className="form-status-error">Failed to send request. Check your connection.</span>}
        </div>

      </form>
    </div>
  );
};

export default QuoteForm;