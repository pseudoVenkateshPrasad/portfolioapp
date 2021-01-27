import React, { useState } from "react";
import ScrollImage from './down.svg';
import Search from "./search.png";





const NavbarComp = () => {

  
  function downScroll()
  {
    window.scrollBy(0,625);
  }


  return (
    <>
      <div className="nav-bar-container">
        <ul>
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#about"> About </a>
          </li>
          <li>
            <a href="#skill"> Skills </a>
          </li>
         
          <li>
            <a href="#portfolio"> Portfolio </a>
          </li>
          <li>
            <a href="#education"> Education </a>
          </li>
          <li>
            <a href="#interest"> Personal Interests </a>
          </li>
          <li>
            <a href="#contact"> Contact Me </a>
          </li>
        </ul>

        <input placeholder="Search" className=" user-input " />
        <img src={Search} alt="Search-Logo" />

        <button className = "explore-button" onClick = {downScroll}> 
          <img src = {ScrollImage}  alt = "arrow" /> 
        </button>

      </div>
    </>
  );
};

export default NavbarComp;
