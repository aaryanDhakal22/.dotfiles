import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatspage/hats.component';
import { Routes, Route } from 'react-router-dom';

// TODO make a shop CLASS component page
// TODO externalize the data for the collection
// TODO import the collection into the state
// TODO route the shop
// TODO make a preview collection component with collection-preview>title,preview 
// TODO have items in preview mapped

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
 