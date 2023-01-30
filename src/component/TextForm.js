import React, {useState} from 'react'

import './TextForm.css';




function TextForm(props) {
  const handleUpClick =() =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    
    setText (newText)
    
    
  }
  const handleDownClick =()=>{
    console.log("lower + text")
    let newText3 = text.toLowerCase();
    setText (newText3)

  }
  const handleOnChange = (Event)=>{
    console.log("On change")
    setText(Event.target.value)
  }
  const  [text, setText] = useState('Enter Text Here');
  return (
    <>
    <div className='count'>
 
 <h1> {text.split (" ").length} Words and {text.length} Characters</h1>
</div>
    <div className='count'>
  <h1 className='heading'>{props.heading}</h1> {/*props main.js*/}

<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className='btn btn-primary mx-2' onClick={handleUpClick} > Upercase</button>
 
    <button className='btn btn-secondary' onClick={handleDownClick}>Lowercase</button>
</div>
</div>

</>
  )
}

export default TextForm