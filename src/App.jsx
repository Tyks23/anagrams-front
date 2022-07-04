
import './App.css';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import React, { useState, useEffect } from 'react';
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

  return (
  <div className='App'>
    {loggedIn ? <>
      <AnagramForm />
      <WordbaseSubmissionForm />
      <p>{checkLogin()}</p>
    </> : <>
      <RegistrationForm getLoginStatus={getLoginStatus} />
      <LoginForm getLoginStatus={getLoginStatus} />
      </>
    }
    <button onClick={() => { setLoggedIn(!loggedIn) }}>Log {loggedIn ? 'out' : 'in'}</button>
  </div>)

}

export default App;
