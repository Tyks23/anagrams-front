import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';


export default function AnagramForm() {

  const { register, handleSubmit } = useForm();
  const [anagramArr, setAnagramArr] = useState([]);
  const [statusText, setStatusText] = useState('');

  const findAnagrams = async (data) => {


    axios.post(process.env.REACT_APP_BACK_URL+'/findAnagrams', {
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
        if(anagramArr.length === 0){
          setStatusText('No anagram matches found in wordbase');
        }
      })
      .catch(function (error) {
        setStatusText('Something went wrong: ' + error.message);
      });
  
    }
  return (
    <div className='anagram-form'>
      <form onSubmit={handleSubmit(findAnagrams)}>
        <h1>Find Anagrams</h1>
        <input type='text' {...register('word')} placeholder='word'></input>
        <button>Find Anagrams</button>
      </form> 
      {anagramArr.length === 0 ? <p>{statusText}</p> : anagramArr.map((word, key) => <p key={key}>{word}</p>)}
    </div>
  )
}