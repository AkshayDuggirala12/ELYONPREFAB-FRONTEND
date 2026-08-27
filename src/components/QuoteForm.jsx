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
        <h3>Get a Quote</h3>
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
    <option value="Prefabricated Labour Accommodation">Prefabricated Labour Accommodation</option>
    <option value="Prefabricated Site Offices">Prefabricated Site Offices</option>
    <option value="Prefabricated Officers’ Quarters">Prefabricated Officers’ Quarters</option>
    <option value="Prefabricated Mess Blocks">Prefabricated Mess Blocks</option>
    <option value="Prefabricated Security Blocks">Prefabricated Security Blocks</option>
    <option value="Prefabricated Toilet Blocks">Prefabricated Toilet Blocks</option>
    <option value="Prefabricated Storage & Warehouse Blocks">Prefabricated Storage & Warehouse Blocks</option>
    <option value="PPGI Sheds">PPGI Sheds</option>
    <option value="GI Sheet Site Barricading">GI Sheet Site Barricading</option>
    <option value="Prefabricated School Buildings">Prefabricated School Buildings</option>
    <option value="Fire Exit Ramps & Access Structures">Fire Exit Ramps & Access Structures</option>
    <option value="Mezzanine Flooring Systems">Mezzanine Flooring Systems</option>
    <option value="Prefabricated Resort Blocks">Prefabricated Resort Blocks</option>
    <option value="Prefabricated Farmhouses">Prefabricated Farmhouses</option>
    <option value="Kerala Manduva-Style Prefabricated Pent Houses">Kerala Manduva-Style Prefabricated Pent Houses</option>
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