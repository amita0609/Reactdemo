import React, { useState }  from 'react'


export default function Textform(props) {

    const handleUpClick=()=>{
        // console.log("uppercase was clicked"+" "+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleClearClick=()=>{ 
        let newText=" ";
        setText(newText);
    }

    const handleOnChange=(event)=>{
        // console.log("uppercase was changed");
        setText(event.target.value);
    }

    const handleCopy=()=>{
      
        let newText=document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const [text, setText] = useState('Enter text here....');

  return (
    <>
    <div>
      <h2>{props.Heading}</h2>
       <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="6"></textarea>
       </div>
       <button type="button" className="btn btn-success mx-1" onClick={handleUpClick} >Convert into UpperCase</button>
       <button type="button" className="btn btn-danger mx-1" onClick={handleLowerClick} >Convert into LowerCase</button>
       <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
       <button type="button" className="btn btn-success mx-1" onClick={handleCopy}>copy Text</button>
    </div>

    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and{text.length} characters </p>
        <p>{0.008 + text.split(" ").length} minutes read </p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>

    </>
  )
}
