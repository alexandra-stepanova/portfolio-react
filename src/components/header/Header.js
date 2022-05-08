import React from "react";
import Navigation from "../navigation/Navigation";
import logo from "../../images/arctic-fox.svg";
import Links from "../links/Links";
import MediaQuery from "react-responsive";

function Header(props) {
  return (
    <header className="header">
      <img
        className="header__image"
        src={logo}
        alt="arctic-fox"
        onClick={props.onScroll}
      />
      <MediaQuery minWidth={701}>
        <Navigation
          onOpen={props.onOpen}
          onClose={props.onClose}
        />
        <Links />
      </MediaQuery>
      <MediaQuery maxWidth={700}>
          <button
            onClick={props.onOpen}
            className="header__sandwich-icon"
          ></button>
      </MediaQuery>
    </header>
  );
}

export default Header;
