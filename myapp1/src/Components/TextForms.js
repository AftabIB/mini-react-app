import React, { useState } from "react";


export default function TextForms(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = () => {
    let newText = "";
    setText(newText)
  }

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Text Copied to Clipboard!!")
  }

  const handleExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#676767' }}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            id="mybox"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{ background: props.mode === 'dark' ? '#676767' : 'white', color: props.mode === 'dark' ? 'white' : '#676767' }}
          ></textarea>
        </div >
        <button className="btn btn-danger mx-2 my-2" onClick={handleUpClick}>Convert to Upper case</button>

        <button className="btn btn-danger mx-2 my-2" onClick={handleLoClick}>Convert to Lower Case</button>

        <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text</button>

        <button className="btn btn-danger mx-2 my-2" onClick={handleCopy}>Copy Text</button>

        <button className="btn btn-danger mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>

      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#676767' }}>
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes required to read the text</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>

    </>
  );
}


