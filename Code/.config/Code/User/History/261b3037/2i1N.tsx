import React from 'react';
import './App.css';

function App() {
  const [log,setLog ] = React.useState<boolean>(false)
  const login= ()=>{
    setLog(true)
  }
  if (!log){
    return (
      <>
      
    <h1>You are not logged in </h1>
    <form action="/">
      <input type="text" name="username" id="username" />
      <input type="password" name="password" id="password" />
      <input type="submit" id="submit" onClick={login} >Submit</input>
      </form>
      </>
    )
  }
  return (
    <div >
      {log}
    </div>
  );
}

export default App;
