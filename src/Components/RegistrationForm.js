import React, {useState} from 'react';
import axios from 'axios';



function RegistrationForm() {

    const [email, setEmail]=useState('');
    const [name, setName]=useState('');
    const [password, setPassword]=useState('');


    function Register() {
        console.log('register function');
        console.log(JSON.stringify(newUser));

        axios.post('https://localhost:8000/api/register', {
            email: newUser.email,
            name: newUser.name,
            password: newUser.password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return(
      <div className='form'>  
            <input type='text' name='name' value={newUser.name} placeholder='name'></input>
            <input type='text' name='email' value={newUser.email} placeholder='email'></input>
            <input type='password' name='password' value={newUser.password} placeholder='password'></input>
            <button onClick={Register}>Register</button>  
      </div>      
    )       
}
export default RegistrationForm;