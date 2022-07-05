import React from 'react';

function AnagramForm() {

    const findAnagrams = () => {
        //tee midagi
    }
   
    return(
      <div className='anagram-form'>  
        <form>
            <h1>Find Anagrams</h1>
            <input type='text' placeholder='word'></input>
            <button onClick={findAnagrams}>Find Anagrams</button>
        </form>
        <p></p>
      </div>      
    )       
}
export default AnagramForm;