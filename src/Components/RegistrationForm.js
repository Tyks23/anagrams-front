import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';



function RegistrationForm() {
 
    const{ register, handleSubmit, formState:{ errors } } = useForm();

    const registration = data => {
        console.log('register function');
        console.log(data);

        axios.post('http://localhost:8000/api/register', {
            email: data.email,
            name: data.name,
            password: data.password,
            password_confirmation: data.password
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
        <form onSubmit={handleSubmit(registration)}>
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
export default RegistrationForm;