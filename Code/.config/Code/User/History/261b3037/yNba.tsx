import React from 'react';
import './App.css';

function App() {
  const [login,setLogin ] = React.useState<boolean>(false)
  const dologin = ()=>{
    setLogin(!login)
  }
  if (login != true){
    return (
      <>
      
    <h1 id="logStatus" >{login?}</h1>
    <form action="">
      <input type="text" name="username" placeholder = "username" id="username" />
      <input type="password" name="password" id="password" />
      <input type="submit" id="submit" name = "loginButton"onClick={dologin} value="Submit"/>
      </form>
      </>
    )
  }
  else{

    return (
      <div id="logStatus" >
        LOGGED IN 
        <input type="submit" id="submit" onClick={dologin} value="Submit"/>
      </div>
    );
  }
}

export default App;
