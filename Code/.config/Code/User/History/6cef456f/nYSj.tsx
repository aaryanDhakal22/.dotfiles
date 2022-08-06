import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatspage/hats.component';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>

      <Route path="/" element={<Homepage />}/>
      <Route path="/shop/hats" element={<HatsPage />}/>
        
      </Routes>
    </div>
  );
}

export default App;
 