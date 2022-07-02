import React, {useState} from 'react';

function WordbaseSubmissionForm() {

    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
	};

    const findAnagrams = () => {
        //tee midagi
    }
   
    return(
      <div className='form'>  
        <input type="file" name="file" onChange={changeHandler} />
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
      </div>      
    )       
}
export default WordbaseSubmissionForm;