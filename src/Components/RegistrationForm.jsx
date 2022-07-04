import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {authenticate} from '../utils'

//merge with registration/login maybe?


export default function RegistrationForm({getLoginStatus}) {
 
    const{ register, handleSubmit, formState:{ errors } } = useForm();

    return(
      <div className='form'>  
        <form onSubmit={handleSubmit((data)=> authenticate('http://localhost:8000/api/register',data,getLoginStatus))}>
            <input type='text' {...register('name', {required:true, minLength: 4})}  placeholder='name'></input>
            {errors.name?.type==='required' && "Name required"}
            {errors.name?.type==='minLength' && "Name must be atleast 4 characters long"}
            <input type='text' {...register('email')}  placeholder='email'></input>
            <input type='password' {...register('password')} placeholder='password'></input>
            <button>Register</button>

        </form>
      </div>      
    )       
}
