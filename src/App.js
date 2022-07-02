
import './App.css';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import React, {useState} from 'react';
import AnagramForm from './Components/AnagramForm';
import WordbaseSubmissionForm from './Components/WordbaseSubmittionForm';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const getLoginStatus = (loginStatus) => {
    setLoggedIn(true);
  }

  const checkLogin = () => { 
   let token = window.sessionStorage.getItem("token");   
   return token;
  }

  if(loggedIn){
    return (
      <div className="App">
        <AnagramForm />
        <p>{checkLogin()}</p>
        <button onClick={setLoggedIn(false)}>Log out</button>
      </div>  
    );
  }
  else{
    return (
      <div className="App">
        <RegistrationForm getLoginStatus={getLoginStatus}/>
        <LoginForm  getLoginStatus={getLoginStatus}/>
        <button onClick={() => setLoggedIn(true)}>Log in</button>
      </div>
    );
  }
  
}

export default App;
