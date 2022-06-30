import React from 'react';

function AnagramForm() {

    const findAnagrams = () => {
        //tee midagi
    }
   
    return(
      <div className='form'>  
        <form>
            <input type='text' placeholder='word'></input>
            <button onClick={findAnagrams}>Find Anagrams</button>
        </form>
        <p></p>
      </div>      
    )       
}
export default AnagramForm;