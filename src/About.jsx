import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/chef.png";
import Common from './Common';
const About = () =>{
return(
    <>
      <Common 
          name='We guarantee you with respect to the structure of cakes 🎂 loaded with cream, which is sufficient to make you hungry. "The Golden Bakers" duplicates your energy.' 
          imgsrc={web} 
          visit='/contact' 
          btnname="Contact Us" />
    </>
);
};

export default About;