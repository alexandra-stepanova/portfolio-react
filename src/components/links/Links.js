import React from "react";
import gitIcon from "../../images/github(1).svg";
import linIcon from "../../images/linkedin(1).svg";

function Links() {
  return (
    <div className="links">
      <a className="link" href="https://github.com/alexandra-stepanova">
        <img className="link__img" src={gitIcon} alt="icon" />
      </a>
      <a
        className="link"
        href="https://www.linkedin.com/in/alexandra-stepanova-6a716193"
      >
        <img className="link__img" src={linIcon} alt="icon" />
      </a>
    </div>
  );
}

export default Links;
