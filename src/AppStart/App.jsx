import React from 'react';
import Layout from '../Components/layout/Layout';
import Dashboard from '../Components/pages/Dashboard';
import '../Styles/All.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
