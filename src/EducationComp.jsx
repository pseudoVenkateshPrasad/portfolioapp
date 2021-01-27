import React from 'react';
import EducationBox from './EducationBox';
import EduData from './EduData';

const EduCard = (EdVal) =>
{
           return (  <EducationBox 
                        qualification = {EdVal.qualification}
                        school = {EdVal.school}
                        marks = {EdVal.marks}
                        year = {EdVal.year}
                    />
           )
}

const EducationComp = () => 
{
  return (
            <>
                <section id="education" className = "sections">

                    <h1 className = " section-title-h1 "> Education </h1>
                
                    <div className = "education-container">

                        {EduData.map(EduCard)}
                        
                        <div className = "timeline">
                            <div className = "plane-div">
                                <i class="fas fa-plane traveller"></i>
                            </div>
                            
                        </div>
                        

                    </div>

                </section>
            </>
        );
}

export default EducationComp;