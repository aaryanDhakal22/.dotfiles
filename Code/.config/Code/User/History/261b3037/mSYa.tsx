import React from 'react';
import './App.css';

function App() {
  const [login,setLogin ] = React.useState<boolean>(false)
  const dologin = ()=>{
    setLogin(true)
  }
  if (login != true){
    return (
      <>
      
    <h1>You are not logged in </h1>
    <form action="/">
      <input type="text" name="username" id="username" />
      <input type="password" name="password" id="password" />
      <input type="submit" id="submit" onClick={dologin} >Submit</input>
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
