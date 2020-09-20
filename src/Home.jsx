import React from 'react';
import { NavLink } from 'react-router-dom';
import home from "../src/images/bg.jpg";
import About from './About';
import Common from './Common';
import Contact from './Contact';
import Service from './Service';
const Home = () =>{
return(
    <>
        <Common 
          name='Life is a cake 🎂 and love 💖 is the icing on top of it.' 
          imgsrc={home} 
          visit='/service' 
          btnname="Get Started" />
          <Service />
          <About />
          <Contact/>
    </>
);
};

export default Home;