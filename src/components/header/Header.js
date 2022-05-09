import React, { useState, useEffect } from "react";
import Navigation from "../navigation/Navigation";
import logo from "../../images/arctic-fox.svg";
import Links from "../links/Links";
import MediaQuery from "react-responsive";

function Header({ onClose, onOpen, onScroll, isOpen }) {
  const [click, setClick] = useState(true);

  useEffect(() => {
    if (!click) {
      return onOpen();
    } else {
      return onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

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
