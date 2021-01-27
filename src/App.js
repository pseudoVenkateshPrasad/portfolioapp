import React from 'react';
import './index.css';
import NavbarComp from './NavbarComp';
import HomeComp from './HomeComp';
import AboutComp from './AboutComp';
import SkillComp from './SkillComp';
// import ExperienceComp from './ExperienceComp';
import PortfolioComp from './PortfolioComp';
import EducationComp from './EducationComp';
import InterestComp from './InterestComp';
import ContactComp from './ContactComp';
import { Test } from "./Test";


const App = () => 
{
  return (
            <>
              <NavbarComp />
              <HomeComp />
              <AboutComp />
              <SkillComp />
              {/* <ExperienceComp /> */}
              <PortfolioComp />
              <EducationComp />
              <InterestComp />
              <ContactComp />
             
            </>
  );
}


export default App;