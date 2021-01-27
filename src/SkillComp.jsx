import React from "react";
import SkillBars from "./SkillBars";
import SkillData from "./SkillData";
import './index.css';

// const skillcard = (sVal) => {
//   return (
//     <SkillBars
//       className="taken-frame"
//       id={sVal.key}
//       skillname={sVal.skillname}
//       value={sVal.value}
//     />
//   );
// };

const SkillComp = () => {
  return (
    <>
      <section id="skill" className="sections">
        <h1 className=" section-title-h1 "> Skills </h1>

        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className=" skill-box ">
          {/* {SkillData.map(skillcard)} */}
          <SkillBars
            className="taken-frame"
            id={SkillData[3].key}
            skillname={SkillData[3].skillname}
            value={SkillData[3].value}
          />
          );
        </div>
      </section>
    </>
  );
};

export default SkillComp;
