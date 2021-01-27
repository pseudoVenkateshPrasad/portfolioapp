import React from 'react';
import InterestBoxes from './InterestBoxes';
import IData from './interestData';


const Icard = (iVal) => {
    return(
        <>
            <InterestBoxes 
                        image={iVal.image}
                        title={iVal.title}
                        description={iVal.description}
                        interestLink={iVal.interestLink}
                        sample={iVal.sample}
            />
        </>
    )

}


const InterestComp = () => 
{
  return (
            <>
                <section id="interest" className = "sections">
                <h1 className = " section-title-h1 "> Personal Interests </h1>
                
                <div className = "description interest-description" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                </div>

                <div className = "interest-container">
                    {IData.map(Icard)}
                </div>
                
                
                </section>

            </>
        );
}

export default InterestComp;