import React from "react";
import { Link } from "react-scroll";

function Navigation({ onClose }) {
  return (
    <ul className="navigation">
      <li className="margin-btn">
        <Link
          onClick={onClose}
          className="link margin-btn"
          activeClass="link-underline"
          to="profile"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About
        </Link>
      </li>
      <li className="margin-btn">
        <Link
          className="link"
          activeClass="link-underline"
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          onClick={onClose}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          className="link"
          activeClass="link-underline"
          to="contact"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          onClick={onClose}
        >
          Contact Me
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
