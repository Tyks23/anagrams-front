import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { authenticate } from '../utils'

//merge with registration/login maybe?


export default function RegistrationForm({ getLoginStatus }) {

  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className='login-form'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit((data) => authenticate('http://localhost:8000/api/register', data, getLoginStatus))}>
        <input type='text' {...register('name', { required: true, minLength: 4, maxLength: 20, pattern: /^[A-Za-z]+$/i })} placeholder='name'></input>
        {errors.name && errors.name.type === "required" && (
          <span>Name is required</span>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <span>Must contain 4+ letters</span>
        )}
         {errors.name && errors.name.type === "maxLength" && (
          <span>Must contain less than 20 letters</span>
        )}
        {errors.name && errors.name.type === "pattern" && (
          <span>Cant contain foreign symbols</span>
        )}

       
        <input type='text' {...register('email')} placeholder='email'></input>
        <input type='password' {...register('password')} placeholder='password'></input>
        <button>Register</button>
      </form>
    </div>

  )
}
