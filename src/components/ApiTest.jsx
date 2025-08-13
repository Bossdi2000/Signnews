import React, { useState, useEffect } from 'react';

const ApiTest = () => {
  const [apiStatus, setApiStatus] = useState('Testing...');
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const [testDetails, setTestDetails] = useState([]);

  useEffect(() => {
    const testApiConnection = async () => {
      const details = [];
      
      try {
        details.push('🔍 Starting API connection test...');
        setTestDetails([...details]);
        
        // Test 1: Direct fetch with full URL
        details.push('📡 Testing direct fetch to backend...');
        setTestDetails([...details]);
        
        const response = await fetch('http://localhost:5000/api/health', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors'
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        details.push('✅ Direct fetch successful!');
        details.push(`📊 Response: ${JSON.stringify(data)}`);
        setTestDetails([...details]);
        
        setApiStatus('✅ Connected');
        setApiData(data);
        setError(null);
        
      } catch (err) {
        details.push(`❌ Connection failed: ${err.message}`);
        setTestDetails([...details]);
        
        console.error('API Connection Error:', err);
        setApiStatus('❌ Failed');
        setError(err.message);
        setApiData(null);
      }
    };

    testApiConnection();
  }, []);

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'white', 
      border: '2px solid #ccc', 
      padding: '15px', 
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 9999,
      maxWidth: '400px',
      maxHeight: '500px',
      overflow: 'auto'
    }}>
      <h4>API Connection Test</h4>
      <p><strong>Status:</strong> {apiStatus}</p>
      
      {apiData && (
        <div style={{ marginBottom: '10px', padding: '10px', background: '#e8f5e8', borderRadius: '4px' }}>
          <p><strong>✅ Backend Connected!</strong></p>
          <p><strong>Message:</strong> {apiData.message}</p>
          <p><strong>Environment:</strong> {apiData.environment}</p>
          <p><strong>Status:</strong> {apiData.status}</p>
        </div>
      )}
      
      {error && (
        <div style={{ marginBottom: '10px', padding: '10px', background: '#ffe8e8', borderRadius: '4px' }}>
          <p><strong>❌ Connection Failed</strong></p>
          <p><strong>Error:</strong> {error}</p>
        </div>
      )}
      
      <div style={{ marginTop: '10px' }}>
        <h5>Test Details:</h5>
        <div style={{ fontSize: '12px', maxHeight: '200px', overflow: 'auto' }}>
          {testDetails.map((detail, index) => (
            <div key={index} style={{ margin: '2px 0' }}>{detail}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiTest;
