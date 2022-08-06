import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
HatsPage
import { Routes, Route } from 'react-router-dom';
import HatsPage from './pages/hats/hats.component';


function App() {
  return (
    <div>
      <Routes>

      <Route path="/" element={<Homepage />}/>
      <Route path="/hats" element={<Homepage />}/>
        
      </Routes>
    </div>
  );
}

export default App;
 