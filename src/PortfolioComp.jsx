import React from 'react';
import PortfolioData from './PortfolioData';
import PortfolioBoxes from './PortfolioBoxes';



const PortCard = (PortVal) =>
{
    return (
        <PortfolioBoxes
                                image = {PortVal.image}
                                heading = {PortVal.heading}
                                para = {PortVal.para}
                                link = {PortVal.link}
                            />
    )
}


const PortfolioComp = () => 
{
  return (
            <>
                <section id="portfolio" className = "sections">
                    <h1 className = " section-title-h1 "> Portfolio </h1>

                    <div className = "port-container" >
                           {PortfolioData.map(PortCard)} 

                    </div>

                </section>

            </>
        );
}

export default PortfolioComp;