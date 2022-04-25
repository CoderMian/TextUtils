import React, { useState } from "react";
export default function Textform(props) {
  const handleclick = () => {
    // console.log("upper case wase clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Text Converted To Upper Case", "success")

  };
  const RemoveSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  }
  const getCopy = () => {
    console.log('copy fired');
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleLower = () => {
    // console.log("upper case wase clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Text Converted To Lower Case", "success")
  };
  const handleonchange = (event) => {
    // console.log("handle onchange was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea
            className="form-control no-outline"
            placeholder="Leave a text here"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleonchange}
            style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgba(19, 19, 19, 0.67)', color: props.mode === 'light' ? 'black' : 'white' }}
          ></textarea>
          <button className="btn btn-primary mt-2 mx-2" onClick={handleclick}>
            Convert To UpperCase
          </button>
          <button className="btn btn-success mt-2 mx-2" onClick={handleLower}>
            Convert To LowerCase
          </button>
          <button type="button" className="btn btn-secondary mt-2 mx-2" onClick={getCopy}>Copy</button>
          <button type="button" className="btn btn-primary mt-2 mx-2" onClick={RemoveSpaces}>Remove Spaces</button>
        </div>

        <div className="container my-3 ">
          <h1>Your Text Summary</h1>
          <p>
            {text.split(" ").length - 1} words and {text.length} characters
          </p>
          <p>{0.008 * (text.split(" ").length - 1)} Minutes read</p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
  // console.clear();
}
