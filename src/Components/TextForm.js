import React,{useState} from 'react'


export default function TextForm(props){
    const handleUpClick = () =>{
        // console.log("btn was cliked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase!","success");
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleCopy = () =>{
        let text1 = document.getElementById("myBox");
        text1.select();
        navigator.clipboard.writeText(text1.value);
        props.showAlert("Copied to clipboard!","success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Message repeating!","success");
    }
    const handleFirstLetterUppercase = () =>{
        function capitalize(str) {
          return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
        const upper = text.split(' ').map(capitalize).join(' ');
        setText(upper);
        props.showAlert("Text Capitalized!","success");
    }


    const handleOnChange = (event) =>{
        // console.log("handle on change");
        setText(event.target.value);
    }


    const [text, setText] = useState("");
    //text = ("text")wrong way to set text
    // setText("new Text");
    return(
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"
                 placeholder='Enter your text here' value={text} onChange={handleOnChange} 
                style = {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
            <button className="btn btn-primary mx-1" onClick={handleFirstLetterUppercase}>Capitalize</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} characters and {text.length} words</p>
            <p>{0.08 * text.split(" ").length} Minutes read</p>

            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}