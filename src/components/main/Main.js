import React from "react";
import MediaQuery from "react-responsive";
import Promo from "../promo/Promo";
import Profile from "../profile/Profile";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Skills from "../skills/Skills";

function Main() {
  return (
    <main className="main">
      <Promo />
      <Profile />
      <MediaQuery maxWidth={591}>
        <Skills />
      </MediaQuery>
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
