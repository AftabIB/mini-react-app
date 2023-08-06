//import logo from './logo.svg';
import "./App.css";
import Alert from "./Components/Alert";
// import MyAbout from "./Components/MyAbout";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";
import React, { useState } from 'react';
// import About1 from "./Components/About1";
// let name = "Aftab";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#676767';
      showAlert("Dark Mode enabled", "success");
    }
    else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode enabled", "success");
    }
  }


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Aftab Bhadgaonkar
    //     </a>
    //   </header>
    // </div>
    // <div className="blank">Hello</div>
    <>
      {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hey {name}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          sequi, beatae odio reiciendis, perferendis explicabo non ducimus
          distinctio velit eius nihil, rem tempora labore quidem corrupti?
          Veniam eaque a odio?
        </p>
      </div> */}

      {/* <Navbar /> */}

      <Navbar title="My React Application" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert Alert={alert} />
      <TextForms heading="Enter the Text : " mode={mode} />
      <div className="container my-3">
        {/* <MyAbout /> */}
      </div>
    </>
  );
}

export default App;
