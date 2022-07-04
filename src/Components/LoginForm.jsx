import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {authenticate} from '../utils'



export default function LoginForm({getLoginStatus}) {
 
    const{ register, handleSubmit, formState:{ errors } } = useForm();

    return(
      <div className='login-form'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit((data)=> authenticate('http://localhost:8000/api/login',data,getLoginStatus))}>
          <input type='text' {...register('email', {required:true, minLength: 4})}  placeholder='email'></input>
          <input type='password' {...register('password', {required:true, minLength: 4})} placeholder='password'></input>
          <button>Login</button>
        </form>    
      </div>
    )       
}