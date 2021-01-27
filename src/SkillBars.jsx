import React from 'react';
import { Test,Inner } from "./Test";


const SkillBars = (props) => 
{
  return (
            <>
                {/* <div className = "skill-tube-container"> */}
                    {/* <div className = "s-tube">
                        <div id= {props.key} className="percent">
                            <div className = "percent-circle">
                                <p> { props.value } </p>
                            </div>
                        </div>
                    </div>
                    <p> {props.skillname} </p> */}
                    <Test>
                        <Inner style = {{height:"90%", background: "linear-gradient(60deg, #1488cc, #2b32b2)"}}></Inner>
                    </Test>
                    <Test>
                        <Inner style = {{height:"85%", background:"linear-gradient(0deg, #833ab4, #fd1d1d, #fcb045)"}}></Inner>
                    </Test>
                    <Test>
                        <Inner style = {{height:"70%", background: "linear-gradient(60deg, #11998e, #38ef7d)"}}></Inner>
                    </Test>
                    <Test>
                        <Inner style = {{height:"65%", background: "linear-gradient(60deg, #ec008c, #fc6767)"}}></Inner>
                        
                    </Test>
                    <Test>
                        <Inner style = {{height:"60%", background: "linear-gradient(180deg, #1CB5E0, #000046)"}}></Inner>
                    </Test>
                    <Test>
                        <Inner style = {{height:"75%", background: "linear-gradient(60deg, #add100, #7b920a)"}}></Inner>
                    </Test>

                {/* </div> */}
            
            </>
        );
}

export default SkillBars;