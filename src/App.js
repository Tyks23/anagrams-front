
import './App.css';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import React, {useState} from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);


  const checkLogin = () => { 
   let token = window.sessionStorage.getItem("token");   
   return token;
  }

  if(loggedIn){
    return (
      <div className="App">
        <p>{checkLogin()}</p>
        <button onClick={() => setLoggedIn(false)}>Log out</button>
      </div>  
    );
  }
  else{
    return (
      <div className="App">
        <RegistrationForm />
        <LoginForm />
        <button onClick={() => setLoggedIn(true)}>Log in</button>
      </div>
    );
  }
  
}

export default App;
