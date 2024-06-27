import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Delight from "./Delight";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Pagenotfound from "./Pagenotfound";
import Nav from "./Nav";


function App() {
  return (
     <BrowserRouter>
        <Nav path="/nav" element={<Nav/>}/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/delight" element={<Delight/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
        </Routes>
     </BrowserRouter>
  );
}


export default App;
