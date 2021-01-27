import React from 'react';



const EducationBox = (props) => 
{
  return (
            <>
                <figure className = "e-box">
                    <h1 className = "qualification"> { props.qualification } </h1>
                    <h3 className = "school"> { props.school } </h3>
                    <span className = "marks"> { props.marks } </span>
                    <span className = "year"> { props.year } </span>
                </figure>
            </>
        );
}

export default EducationBox;