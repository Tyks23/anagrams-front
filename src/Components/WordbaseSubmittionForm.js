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

   
    return(
      <div className='form'>  
        <input type="file" name="file" onChange={changeHandler} />		
		<button onClick={handleSubmission}>Submit</button>
			
      </div>      
    )       
}
export default WordbaseSubmissionForm;