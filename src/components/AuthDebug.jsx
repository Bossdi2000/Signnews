import React, { useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthDebug = () => {
  const [authStatus, setAuthStatus] = useState('Checking...');
  const [tokenInfo, setTokenInfo] = useState(null);
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    const debugAuth = async () => {
      const results = [];
      
      try {
        // Check if authenticated
        const isAuth = authService.isAuthenticated();
        results.push(`🔐 Is Authenticated: ${isAuth}`);
        
        // Get stored token
        const token = localStorage.getItem('token');
        results.push(`🎫 Token exists: ${!!token}`);
        results.push(`🎫 Token length: ${token ? token.length : 0}`);
        
        // Get admin user
        const adminUser = authService.getStoredAdmin();
        results.push(`👤 Admin user stored: ${!!adminUser}`);
        if (adminUser) {
          results.push(`👤 Admin username: ${adminUser.username || 'N/A'}`);
        }
        
        // Test API call with authentication
        results.push('📡 Testing authenticated API call...');
        
        const response = await fetch('http://localhost:5000/api/auth/admin/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : 'No token'
          }
        });
        
        results.push(`📡 API Response status: ${response.status}`);
        
        if (response.ok) {
          const data = await response.json();
          results.push(`✅ API call successful: ${data.success}`);
          setAuthStatus('✅ Authentication Working');
        } else {
          const errorText = await response.text();
          results.push(`❌ API call failed: ${errorText}`);
          setAuthStatus('❌ Authentication Failed');
        }
        
      } catch (error) {
        results.push(`❌ Error: ${error.message}`);
        setAuthStatus('❌ Authentication Error');
      }
      
      setTestResults(results);
    };

    debugAuth();
  }, []);

  const handleTestLogin = async () => {
    try {
      setTestResults(prev => [...prev, '🔄 Testing admin login...']);
      
      const result = await authService.adminLogin({
        username: 'superadmin',
        password: 'superadmin123'
      });
      
      setTestResults(prev => [...prev, `✅ Login successful: ${result.success}`]);
      setTestResults(prev => [...prev, `🎫 New token received: ${!!result.token}`]);
      
      // Refresh the debug info
      window.location.reload();
      
    } catch (error) {
      setTestResults(prev => [...prev, `❌ Login failed: ${error.message}`]);
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '10px', 
      right: '10px', 
      background: 'white', 
      border: '2px solid #ccc', 
      padding: '15px', 
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 9999,
      maxWidth: '400px',
      maxHeight: '400px',
      overflow: 'auto'
    }}>
      <h4>Authentication Debug</h4>
      <p><strong>Status:</strong> {authStatus}</p>
      
      <button 
        onClick={handleTestLogin}
        style={{
          background: '#007bff',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '10px'
        }}
      >
        Test Admin Login
      </button>
      
      <div style={{ marginTop: '10px' }}>
        <h5>Debug Results:</h5>
        <div style={{ fontSize: '12px', maxHeight: '250px', overflow: 'auto' }}>
          {testResults.map((result, index) => (
            <div key={index} style={{ margin: '2px 0', fontFamily: 'monospace' }}>
              {result}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthDebug;
