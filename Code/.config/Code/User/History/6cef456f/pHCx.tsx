import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';

const Texttry = ()=>(
    <div>Hello</div>
  )

function App() {
  return (
    <div>
      <Routes>

      <Route path="/" element={<Homepage />}/>
      <Route path="/testtry" element={<Texttry />}/>

      </Routes>
    </div>
  );
}

export default App;
 