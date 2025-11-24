import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import About from './components/About';
import Values from './components/Values';
import Mission from './components/Mission';
import Contacts from './components/Contacts';


function App() {

  return (
    <>
      <Header />
      <div className='main'>

      <About />
      <Values />
      <Mission />
      <Contacts />
      </div>
    </>
  )
}

export default App
