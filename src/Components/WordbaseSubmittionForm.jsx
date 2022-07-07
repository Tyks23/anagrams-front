import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function WordbaseSubmissionForm() {

  const { register, handleSubmit } = useForm();
  const [ statusText, setStatusText ] = useState('');

  const handleSubmission = async (data) => {

    console.log(data);
    let formData = new FormData();
    if (data.file[0].type.match('text.*')) {
      setStatusText('Uploading Wordbase');
      formData.append("file", data.file[0]);
      formData.append("user_id", window.sessionStorage.getItem("user_id"));


      axios.post('http://localhost:8000/api/uploadWordbase', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": window.sessionStorage.getItem("token")
        }
      })
        .then(function (response) {
          //console.log(response);
          setStatusText('Upload Successful');
        })
        .catch(function (error) {
          console.log(error);
          setStatusText('Upload failed: ' + error.message)
        });
    }
    else {
      setStatusText('This is not a valid file');
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
      {statusText}
    </div>
  )
}
