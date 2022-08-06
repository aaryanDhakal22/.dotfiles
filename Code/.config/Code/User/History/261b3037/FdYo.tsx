import React from 'react';
import './App.css';

function App() {
  const [login,setLogin ] = React.useState<boolean>(false)
  const dologin = ()=>{
    setLogin(!login)
  }
    return (
      <>
      
    <h1 id="logStatus" >{login?<h1>IN</h1>:<h1>OUT</h1>}</h1>
      <input type="text" name="username" placeholder = "username" id="username" />
      <input type="password" name="password" id="password" />
      <input type="submit" id="submit" name = "loginButton"onClick={dologin} value="Submit"/>
    
      </>
    )
  } 

test


export default App;
