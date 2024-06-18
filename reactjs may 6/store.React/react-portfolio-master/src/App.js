import React from 'react';
import About from './Mainfile/About';
import Contact from './Mainfile/Contact';
import Home from './Mainfile/Home';
import Skills from './Mainfile/Skills';
import Nav from './Mainfile/Nav';
import Projects from './Mainfile/Projects';
import { useMemo, useState } from 'react';


const App = () => {

  //USEMEMO USED FOR CREATE A COLOR CAHNGE
  const[dark,setDark] = useState(false)

  const changetheme = useMemo(() => {
    return{
      background : dark ? "#DCCFED" : "#FFFF" ,
      color : dark ? "#291C3A" : "#331C52"
    }
  },[dark])

  return (
    <div className='app' style={changetheme}>
    <Nav/>
      <label>
              <input type='checkbox' onClick={()=> setDark(!dark)} />
              <span className='slider round'></span>
      </label>
      
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    
    </div>
  );
};

export default App;