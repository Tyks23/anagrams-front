import React from 'react';
import { useForm } from 'react-hook-form';
import { authenticate } from '../utils'

//merge with registration/login maybe?


export default function RegistrationForm({ getLoginStatus }) {

  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className='login-form'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit((data) => authenticate(process.env.BACK_URL + '/register', data, getLoginStatus))}>
        <input type='text' {...register('name', { required: true, minLength: 2, pattern: /^[A-Za-z]+$/i })} placeholder='name'></input>
        {errors.name && errors.name.type === "required" && (
          <span>Name is required</span>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <span>Must contain 2+ letters</span>
        )}
        {errors.name && errors.name.type === "pattern" && (
          <span>Cant contain foreign symbols</span>
        )}

       
        <input type='text' {...register('email', {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} placeholder='email'></input>
        {errors.email && errors.email.type === "pattern" && (
          <span>Invalid Email</span>
        )}

        <input type='password' {...register('password', {required: true, minLength: 4})} placeholder='password'></input>
        {errors.password && errors.password.type === "required" && (
          <span>Password is required</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span>Must contain 4+ letters</span>
        )}
        <button>Register</button>
      </form>
    </div>

  )
}
