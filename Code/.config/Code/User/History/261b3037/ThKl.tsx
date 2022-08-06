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
      
    <h1>You are not logged in </h1>
    <form action="/">
      <input type="text" name="username" id="username" />
      <input type="password" name="password" id="password" />
      <input type="submit" id="submit" onClick={dologin} value="Submit"/>
      </form>
      </>
    )
  }
  else{

    return (
      <div >
        You are logged in. NOW GTFO<br> </br>
        <input type="submit" id="submit" onClick={dologin} value="Submit"/>
      </div>
    );
  }
}

export default App;
