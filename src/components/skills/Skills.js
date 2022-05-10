import React from "react";
import SectionHeader from "../sectionHeader/SectionHeader";
import MediaQuery from "react-responsive";

function Skills() {
  return (
    <>
      <MediaQuery minWidth={592}>
        <div className="skills">
          <SectionHeader name="Skills" />
          <ul className="skills__grid">
            <li className="skills__grid-name">HTML</li>
            <li className="skills__grid-name">CSS</li>
            <li className="skills__grid-name">SASS</li>
            <li className="skills__grid-name">JS</li>
            <li className="skills__grid-name">NODE.JS</li>
            <li className="skills__grid-name">REACT</li>
            <li className="skills__grid-name">GIT</li>
            <li className="skills__grid-name">BEM</li>
            <li className="skills__grid-name">MONGODB</li>
            <li className="skills__grid-name">VSC</li>
            <li className="skills__grid-name">EXPRESS</li>
          </ul>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={591}>
        <section className="skills">
          <SectionHeader name="Skills" />
          <ul className="skills__grid">
            <li className="skills__grid-name">HTML</li>
            <li className="skills__grid-name">CSS</li>
            <li className="skills__grid-name">SASS</li>
            <li className="skills__grid-name">JS</li>
            <li className="skills__grid-name">NODE.JS</li>
            <li className="skills__grid-name">REACT</li>
            <li className="skills__grid-name">GIT</li>
            <li className="skills__grid-name">BEM</li>
            <li className="skills__grid-name">MONGODB</li>
            <li className="skills__grid-name">VSC</li>
            <li className="skills__grid-name">EXPRESS</li>
          </ul>
        </section>
      </MediaQuery>
    </>
  );
}

export default Skills;
