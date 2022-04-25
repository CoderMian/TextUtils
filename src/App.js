import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    console.log('switch clicked');
    if (mode === 'light') {
      setmode('dark');
      document.body.style.background = 'rgba(38, 38, 38)';
      showalert("Dark Mode Has Been Enabled", "success");
      document.title = 'TextUtils - Dark-Mode';
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000)
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500)
    }
    else {
      setmode('light');
      document.body.style.background = 'white';
      showalert("Light Mode Has Been Enabled", "success");
      document.title = 'TextUtils - Light-Mode';
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-5 ">
        <Textform heading="Enter The Text To Analyze Below" mode={mode} showalert={showalert} />
        {/* <Routes> */}
        {/* <Route exact path="/About"
              element={<About mode={mode} />}
            /> */}
        {/* <Route exact path="/"
              element={<Textform heading="Enter The Text To Analyze Below" mode={mode} showalert={showalert} />
              } */}
        {/* 
            />
          </Routes> */}

      </div>
      {/* </Router> */}
    </>

  );

}

export default App;
