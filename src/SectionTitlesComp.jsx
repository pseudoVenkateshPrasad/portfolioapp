import React from 'react';



const SectionTitlesComp = (props) => 
{
  return (
            <>
                <div className = " section-title ">
                    <h1> {props.title} </h1>
                </div>
            </>
  );
}

export default SectionTitlesComp;