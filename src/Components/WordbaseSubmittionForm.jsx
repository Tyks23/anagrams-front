import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function WordbaseSubmissionForm() {

  const { register, handleSubmit } = useForm();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const checkFileValidity = (file) => {
    if (true) {
      return true;
    }
    else return false;
  }


  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = async (data) => {
    console.log('submission handled');
    let formData = new FormData();
    formData.append("file", selectedFile);
    axios.post('http://localhost:8000/api/handleSubmission', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": " Bearer tN2x7UWul3UxTMQDgEHWU2Qpm2GTFMAaTrI73hQkzl80nno0b599G8NC86mY"
      }
    });
  };


  return (
    <div className='form'>
      <form onSubmit={handleSubmit(handleSubmission)}>
        <input type='file' {...register('file')} />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default WordbaseSubmissionForm;