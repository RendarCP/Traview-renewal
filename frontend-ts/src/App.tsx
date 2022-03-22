import React from 'react';
import MainRoute from './routes/MainRoute';
import { Reset } from 'styled-reset'

function App() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', margin:0 }}>
      <Reset />
      <MainRoute />
    </div>
  );
}

export default App;
