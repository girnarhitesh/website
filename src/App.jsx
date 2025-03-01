import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Commpont/NavigationContainer/Navigation';
import Hero from './Commpont/HeroContainer/Hero'; // ✅ Import Hero Component
import Contant from "./Commpont/ContantContainer/Contant";
import Footer from './Commpont/FooterContianer/Footer';
import Projects from './Commpont/ProjectContaint/Project';
import Services from './Commpont/ServicesContainer/Services';
import Aboutpage from './Commpont/AboutpageContainer/Aboutpage';
// import Pagecomponets from './Commpont/pagescomponets/pagescomponets';



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />  {/* ✅ Correct Syntax */}
          <Route path='/About' element={<Aboutpage />} />  {/* ✅ Correct Syntax */}
          <Route path='/Projects' element={<Projects />} />
          <Route path="/contact" element={<Contant />} />  {/* ✅ Correct Syntax */}
          <Route path='/Services' element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <div className="Pagecomponets">
        <Pagecomponets />
      </div> */}
    </>

  );
}

export default App;
