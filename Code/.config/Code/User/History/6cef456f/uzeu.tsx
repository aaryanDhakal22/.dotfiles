import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatspage/hats.component';
import { Routes, Route } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
// TODO make a preview collection component with collection-preview>title,preview 
// TODO have items in preview mapped
// TODO map the shop collection items to collection component
// TODO filter to 4

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
 