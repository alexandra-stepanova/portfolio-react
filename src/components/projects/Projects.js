import React from "react";
import projectsInformation from "../../utils/projectsInformation";
import Card from "../card/Card";
import SectionHeader from "../sectionHeader/SectionHeader";

function Projects() {
  return (
    <section id="projects" className="projects">
      <SectionHeader name="Projects" />
      <ul className="projects__grid-items">
        {projectsInformation.map((card) => {
          return (
            <Card
              id={card.id}
              name={card.name}
              video={card.video}
              link={card.link}
              stack={card.stack}
              discription={card.discription}
              key={card.id}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
