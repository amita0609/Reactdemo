import logo from './logo.svg';
import './App.css';

import React from 'react';
import Navbar from './components/Navbar';

import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';


// let name="John"

function App() {

  return (
   <>
     <Navbar title="TextUtils" about="About Us"/>
    
    
      <Alert alert="This is alert"/> 

      <div className="container my-3">
         <Textform heading="Enter text to manipulate which you want" /> 
      </div> 
      <About/>
     
    
    </>
   
  );
}

export default App;
