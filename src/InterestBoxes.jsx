import React from 'react';



const InterestBoxes = ( props ) => 
{
  return (
            <>
                <div className = "card-container">

                    <div className = "card" >
                        <figure className = "front" >
                            <img src= { props.image } 
                                alt="interest-image" 
                                style={{ height:"180px", 
                                        width:"230px"}} 
                            />

                            <h1 className="I-Title" 
                                style={{  marginTop:"15px",
                                        color:"#fff",
                                        fontWeight:"400"}} 
                            > { props.title } </h1>

                        </figure>

                        <figure className = "back" >

                            <p> { props.description } </p>

                            <a href = { props.interestLink } 
                               target ="_blank" > 
                               <button className = "link-btn"> {props.sample} </button>
                            </a>

                        </figure>
                    </div>

                </div>               

            </>
        );
}

export default InterestBoxes;


{/* <div className="I-Box-holder">
                    <div className="I-Box-front">
                        <img src= { props.image } alt="interest-image" style={{width:"100%",height:"70%", paddingBottom:"15px",borderBottom:"1px solid white"}} />
                        <h1 className="I-Title" style={{marginTop:"15px", color:"#fff",fontWeight:"400"}} > { props.title } </h1>
                    </div>

                    <div className = "I-box-back" >
                        <p> { props.description } </p>
                        <a href = { props.interestLink } target ="_blank" > <button className = "link-btn"> {props.sample} </button> </a>
                    </div>
                </div> */}