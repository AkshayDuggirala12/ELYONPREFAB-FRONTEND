import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // New Project Form State
  const [projectData, setProjectData] = useState({ title: '', location: '', duration: '', image_url: '', video_url: '', description: '' });
  const [projectStatus, setProjectStatus] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('elyon_admin_token');
    if (token) {
      setIsAuthenticated(true);
      fetchLeads(token);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/admin/login', { phone, password });
      if (response.data.status === 'success') {
        const token = response.data.token;
        localStorage.setItem('elyon_admin_token', token);
        setIsAuthenticated(true);
        fetchLeads(token);
      }
    } catch (error) {
      setLoginError('Invalid phone number or password.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('elyon_admin_token');
    setIsAuthenticated(false);
    setLeads([]);
  };

  const fetchLeads = async (token) => {
    setLoading(true);
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/leads/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeads(response.data);
      setLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 401) handleLogout();
      setLoading(false);
    }
  };

  // Handle saving a new project
  const handleAddProject = async (e) => {
    e.preventDefault();
    setProjectStatus('Saving project...');
    const token = localStorage.getItem('elyon_admin_token');
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/projects/', projectData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.status === 'success') {
        setProjectStatus('Project added successfully! It is now live on the site.');
        setProjectData({ title: '', location: '', duration: '', image_url: '', video_url: '', description: '' }); // Clear form
        setTimeout(() => setProjectStatus(''), 5000); // Hide success message after 5s
      }
    } catch (error) {
      setProjectStatus('Failed to add project. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ backgroundColor: '#0a1017', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
        <div style={{ backgroundColor: '#1c2b3a', padding: '40px', borderRadius: '8px', border: '1px solid #2e4259', width: '100%', maxWidth: '400px' }}>
          <h2 style={{ color: '#f2b84b', marginTop: 0, textAlign: 'center' }}>Admin Access</h2>
          <p style={{ color: '#8f9bb3', textAlign: 'center', marginBottom: '30px' }}>Enter your credentials to view leads.</p>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required style={{ padding: '12px', borderRadius: '4px', border: '1px solid #2e4259', backgroundColor: '#0f171f', color: '#fff' }} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: '12px', borderRadius: '4px', border: '1px solid #2e4259', backgroundColor: '#0f171f', color: '#fff' }} />
            {loginError && <p style={{ color: '#f2b0b0', margin: 0, fontSize: '14px', textAlign: 'center' }}>{loginError}</p>}
            <button type="submit" style={{ padding: '12px', backgroundColor: '#d4891a', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>SECURE LOGIN</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#0a1017', minHeight: '100vh', padding: '40px', color: '#fff', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ color: '#f2b84b', margin: '0 0 10px 0' }}>Elyon Prefab Admin</h1>
            <p style={{ color: '#8f9bb3', margin: 0 }}>Manage leads and portfolio projects.</p>
          </div>
          <div>
            <a href="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>View Live Site</a>
            <button onClick={handleLogout} style={{ backgroundColor: '#1c2b3a', color: '#f2b0b0', border: '1px solid #2e4259', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer' }}>Logout</button>
          </div>
        </div>

        {/* ADD PROJECT SECTION */}
        <div style={{ backgroundColor: '#1c2b3a', borderRadius: '8px', padding: '30px', border: '1px solid #2e4259', marginBottom: '40px' }}>
          <h3 style={{ marginTop: 0, color: '#fff' }}>Add New Portfolio Project</h3>
          <p style={{ color: '#8f9bb3', fontSize: '14px', marginBottom: '20px' }}>This will immediately appear on the public website.</p>
          
          <form onSubmit={handleAddProject} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <input type="text" placeholder="Project Title (e.g. Warehouse Setup)" value={projectData.title} onChange={(e) => setProjectData({...projectData, title: e.target.value})} required style={{ padding: '12px', borderRadius: '4px', border: '1px solid #2e4259', backgroundColor: '#0f171f', color: '#fff' }} />
            <input type="text" placeholder="Location (e.g. Hyderabad)" value={projectData.location} onChange={(e) => setProjectData({...projectData, location: e.target.value})} required style={{ padding: '12px', borderRadius: '4px', border: '1px solid #2e4259', backgroundColor: '#0f171f', color: '#fff' }} />
            <input type="text" placeholder="Duration Badge (e.g. 12 WKS)" value={projectData.duration} onChange={(e) => setProjectData({...projectData, duration: e.target.value})} required style={{ padding: '12px', borderRadius: '4px', border: '1px solid #2e4259', backgroundColor: '#0f171f', color: '#fff' }} />
            <input type="url" placeholder="Image URL (Direct link to photo)" value={projectData.image_url} onChange={(e) => setProjectData({...projectData, image_url: e.target.value})} required style={{ padding: '12px', borderRadius: '4px', border: '1px solid #2e4259', backgroundColor: '#0f171f', color: '#fff' }} />

            <input
              type="text"
              placeholder="Video URL (Optional - e.g. .mp4 link)"
              value={projectData.video_url}
              onChange={(e) => setProjectData({...projectData, video_url: e.target.value})}
              className="admin-form-input"
            />

            <textarea
              placeholder="Custom Project Description (Optional)"
              value={projectData.description}
              onChange={(e) => setProjectData({...projectData, description: e.target.value})}
              rows="3"
              className="admin-form-textarea"
            />

            <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '15px', marginTop: '10px' }}>
              <button type="submit" style={{ padding: '12px 24px', backgroundColor: '#1d6b6b', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Publish Project</button>
              {projectStatus && <span style={{ color: projectStatus.includes('success') ? '#b1d9bd' : '#f2b0b0' }}>{projectStatus}</span>}
            </div>
          </form>
        </div>

        {/* LEADS TABLE */}
        <h3 style={{ color: '#fff', marginBottom: '15px' }}>Recent Quote Requests</h3>
        <div style={{ backgroundColor: '#1c2b3a', borderRadius: '8px', overflow: 'hidden', border: '1px solid #2e4259' }}>
          {loading ? (
            <p style={{ padding: '20px', textAlign: 'center' }}>Loading leads...</p>
          ) : leads.length === 0 ? (
            <p style={{ padding: '20px', textAlign: 'center' }}>No leads yet.</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: '#0f171f', color: '#8f9bb3', fontSize: '14px' }}>
                  <th style={{ padding: '16px' }}>ID</th>
                  <th style={{ padding: '16px' }}>Client Info</th>
                  <th style={{ padding: '16px' }}>Project Details</th>
                  <th style={{ padding: '16px' }}>Message</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} style={{ borderTop: '1px solid #2e4259' }}>
                    <td style={{ padding: '16px', color: '#f2b84b', fontWeight: 'bold' }}>#{lead.id}</td>
                    <td style={{ padding: '16px' }}><strong style={{ display: 'block', fontSize: '16px' }}>{lead.name}</strong><span style={{ color: '#8f9bb3', fontSize: '14px' }}>{lead.phone}</span></td>
                    <td style={{ padding: '16px', fontSize: '14px' }}><span style={{ display: 'block', color: '#b1d9bd' }}>{lead.intended_use || "N/A"}</span><span style={{ display: 'block', color: '#8f9bb3' }}>Dim: {lead.site_dimensions || "N/A"}</span><span style={{ display: 'block', color: '#8f9bb3' }}>Time: {lead.timeline || "N/A"}</span></td>
                    <td style={{ padding: '16px', fontSize: '14px', maxWidth: '300px', lineHeight: '1.5' }}>{lead.message || "No additional details provided."}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;