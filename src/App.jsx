
import './App.css';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import React, { useState, useEffect } from 'react';
import AnagramForm from './Components/AnagramForm';
import WordbaseSubmissionForm from './Components/WordbaseSubmittionForm';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const getLoginStatus = (loginStatus) => {
    setLoggedIn(loginStatus);
  }
  console.log(process.env.BACK_URL);

  return (
  <div className='App'>
    {loggedIn ? <div className='anagram-page'>
      <AnagramForm />
      <WordbaseSubmissionForm />
      <button onClick={() => { setLoggedIn(!loggedIn) }}>Log out</button>

    </div> : <div className='login-page'>
      <RegistrationForm getLoginStatus={getLoginStatus} />
      <LoginForm getLoginStatus={getLoginStatus} />
      </div>
    }
    
  </div>)

}

export default App;
