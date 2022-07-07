import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';


export default function AnagramForm() {

  const { register, handleSubmit } = useForm();
  const [anagramArr, setAnagramArr] = useState([]);
  const anagramArr2 = [];

  const findAnagrams = async (data) => {


    axios.post('http://localhost:8000/api/findAnagrams', {
      word: data.word,
      user_id: sessionStorage.getItem('user_id')
    }, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": window.sessionStorage.getItem("token")
      }
    })
      .then(function ({data}) {
        setAnagramArr(data.map(({word})=>word))
      })
      .catch(function (error) {
        console.log(error);
      });
  
    }
  return (
    <div className='anagram-form'>
      <form onSubmit={handleSubmit(findAnagrams)}>
        <h1>Find Anagrams</h1>
        <input type='text' {...register('word')} placeholder='word'></input>
        <button>Find Anagrams</button>
      </form> 
      {anagramArr.map((word, key) => <p key={key}>{word}</p>)}
    </div>
  )
}