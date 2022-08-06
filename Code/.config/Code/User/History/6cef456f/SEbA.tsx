import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';

const Texttry = (props:any)=>{
    console.log(props )
    return <div>Hello</div>
  
}

function App() {
  return (
    <div>
      <Routes>

      <Route path="/" element={<Homepage />}>
        <Route path="/texttry" element={<Texttry />}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
 