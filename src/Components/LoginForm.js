import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';



function LoginForm() {
 
    const{ register, handleSubmit, formState:{ errors } } = useForm();

    const registration = data => {
        console.log('login function');
        console.log(data);

        axios.post('http://localhost:8000/api/login', {
            email: data.email,
            password: data.password,
            username: data.name
          })
          .then(function (response) {
            window.sessionStorage.setItem("token", "Bearer "+ response.data.token);
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return(
      <div className='form'>  
        <form onSubmit={handleSubmit(registration)}>
            <input type='text' {...register('email')}  placeholder='email'></input>
            <input type='password' {...register('password')} placeholder='password'></input>
            <input type='text' {...register('name', {required:true, minLength: 4})}  placeholder='name'></input>
            <button>Login</button>

        </form>
      </div>      
    )       
}
export default LoginForm;