import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [log,setLog ] = React.useState()
  const login= ()=>{
    isloggedin = true
  }

  return (
    <div >
      <form action="/">
      <input type="text" name="username" id="username" />
      <input type="password" name="password" id="password" />
      <input type="submit" id="submit" >Submit</input>

      </form>

    </div>
  );
}

export default App;
