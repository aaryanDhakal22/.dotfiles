import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>

      <Route path="/" element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
 