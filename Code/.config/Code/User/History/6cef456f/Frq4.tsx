import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Routes>

      <Route path="/" element={<Homepage />}/>
      <Route path="/shop" element={<Shop />}/>
        
      </Routes>
    </div>
  );
}

export default App;
 