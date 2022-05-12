import React from "react";
import Navigation from "../navigation/Navigation";
import logo from "../../images/arctic-fox.svg";
import Links from "../links/Links";
import MediaQuery from "react-responsive";

function Header({ click, setClick, onScroll, isOpen }) {
  return (
    <header className="header">
      <img
        className="header__image"
        src={logo}
        alt="arctic-fox"
        onClick={onScroll}
      />
      <MediaQuery minWidth={745}>
        <Navigation />
        <Links />
      </MediaQuery>
      <MediaQuery maxWidth={744}>
        <div
          onClick={() => setClick(!click)}
          className={`header__sandwich ${isOpen ? "toggle" : ""}`}
        >
          <div className="header__sandwich-line" />
          <div className="header__sandwich-line" />
          <div className="header__sandwich-line" />
        </div>
      </MediaQuery>
    </header>
  );
}

export default Header;
