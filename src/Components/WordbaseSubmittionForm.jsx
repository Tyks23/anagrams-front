import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function WordbaseSubmissionForm() {

  const { register, handleSubmit } = useForm();

  const handleSubmission = async (data) => {

    console.log(data);
    let formData = new FormData();
    if (data.file[0] === 'text/plain') {
      formData.append("file", data.file[0]);
      formData.append("user_id", window.sessionStorage.getItem("user_id"));
      console.log(window.sessionStorage.getItem("token"));
      axios.post('http://localhost:8000/api/handleSubmission', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": window.sessionStorage.getItem("token")
        }
      });
    }
  };

  return (
    <div className='wordbase-form'>
      <h1>Submit a Wordbase</h1>
      <p>Submit a .txt file</p>
      <form onSubmit={handleSubmit(handleSubmission)}>
        <input type='file' {...register('file', { required: true })} />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default WordbaseSubmissionForm;