import React from "react";
import Navigation from "../navigation/Navigation";
import Links from "../links/Links";

function PopupNavigation(props) {
  return (
    <div
      className={`popupNavigation ${
        props.isOpen ? "popupNavigation_is-opened" : ""
      }`}
    >
      <div className="popupNavigation__container">
        <Navigation onClose={props.onClose} />
        <Links />
      </div>
    </div>
  );
}

export default PopupNavigation;
