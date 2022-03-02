import React from "react";
import { Link } from "react-scroll";

function Navigation(props) {

  return (
    <ul className="navigation">
      <li>
        <Link
        className="link"
        activeClass="link-underline"
          to="profile"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={props.onClose}
        >
          About
        </Link>
      </li>
      <li>
        <Link
        className="link"
        activeClass="link-underline"
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          onClick={props.onClose}
        >
          Projects
        </Link>
      </li>
      <li
      >
         <Link
        className="link"
        activeClass="link-underline"
          to="contact"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          onClick={props.onClose}
        >
          Contact Me
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
