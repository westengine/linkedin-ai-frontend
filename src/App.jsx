// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [profileUrl, setProfileUrl] = useState('');
  const [analysis, setAnalysis] = useState('');

  const handleAnalyze = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/analyze-profile', {
        profile_url: profileUrl
      });
      setAnalysis(response.data.analysis);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>LinkedIn AI Optimizer</h1>
      <input
        type="text"
        placeholder="Enter LinkedIn Profile URL"
        value={profileUrl}
        onChange={(e) => setProfileUrl(e.target.value)}
        style={{ width: '300px', marginRight: '10px' }}
      />
      <button onClick={handleAnalyze}>Analyze</button>
      {analysis && (
        <div style={{ marginTop: '20px' }}>
          <h2>Analysis:</h2>
          <p>{analysis}</p>
        </div>
      )}
    </div>
  );
}

export default App;