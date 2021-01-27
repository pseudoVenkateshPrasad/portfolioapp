import React from 'react';



const PortfolioBoxes = (props) => 
{
  return (
            <>
                <div className = "port-box">

                    <span className= "hidebox icards">

                        <p> {props.para} </p>
                        <a href = {props.link}>
                            <button className = "port-btn"> Check Project </button>
                        </a>

                    </span>
                    <figure className = "pback icards">
                        <h2> {props.heading} </h2>
                    </figure>

                    <figure className = "pfront icards">
                        <img src = {props.image} alt="portfolio-image"  />
                    </figure>
                    


                </div>

            </>
        );
}

export default PortfolioBoxes;