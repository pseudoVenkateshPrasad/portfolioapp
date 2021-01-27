import React from 'react';
import profile from "./profile.jpg";


const AboutComp = () => 
{
  return (
            <>
                <section id="about" className = "sections">
                    <h1 className = " section-title-h1 "> About </h1>
                    <div className = "about-container">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                        <img className = "profile-img" src = {profile} alt = "profile-image" />
                    </div>
                </section>

            </>
  );
}

export default AboutComp;