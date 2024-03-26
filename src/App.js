import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
// import About from './Components/About'
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route 
// } from "react-router-dom";

function App() {

    const [mode, setMode] = useState("light");
    const [alert,setAlert] = useState(null);

    const showAlert = (message,type) =>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null);
        }, 1500);
    }

    const toggleMode = ()=>{
      if (mode === 'light'){
        setMode("dark");
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enabled", "success");
        document.title = "TextUtils - Dark mode";
        // setInterval(()=>{
        //   document.title = "noob!";
        // },2000)
        // setInterval(()=>{
        //   document.title = "dog";
        // }, 1500);
      }else {
        setMode("light")
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
        document.title = "TextUtils - Light mode";
      }
    }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3" style={{}}>
          {/* <Routes>
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/" element ={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
