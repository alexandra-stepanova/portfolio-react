import React from "react";
import { Link } from "react-scroll";

function Navigation({ onClose }) {
  return (
    <ul className="navigation">
      <li
        className="margin-btn"
        data-aos="fade-up"
        data-aos-delay="10"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
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
      <li
        className="margin-btn"
        data-aos="fade-up"
        data-aos-delay="10"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
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
      <li
        data-aos="fade-up"
        data-aos-delay="10"
        data-aos-duration="3000"
        data-aos-easing="ease-in-out"
      >
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
