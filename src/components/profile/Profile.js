import React, { useEffect } from "react";
import MediaQuery from "react-responsive";
import Aos from "aos";
import "aos/dist/aos.css";
import Skills from "../skills/Skills";

function Profile() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <section id="profile" className="profile">
      <div className="container profile__container">
        <MediaQuery minWidth={1000}>
          <Skills />
        </MediaQuery>
        <MediaQuery maxWidth={999}>
          <div
            className="profile__avatar profile__avatar-img"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          ></div>
        </MediaQuery>
        <div className="profile__content">
          <p
            className="subtitle"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            I consider myself as a pashionat frontend developer who is keen to learn and develop. 
            I finished free courses in Finland. Then I had decided to upgraded my
            knowledge(which was 0,9%) and participated in the Bootcamp 
            <a
              className="profile__link"
              href="https://practicum.yandex.com/"
            >
              _Yandex-Practicum_
            </a>
            . During the course, we'd been guided and mentored by experienced practising developers.
            During my study, I used tools like VSCode, Git. 
            When studied backend, used: Express, MongoDB, Mongoose, Nodemon. Created
            security for a web application with Helmet,
            secret-key(.env(secret-key), express Rate Limit, stored user's
            informatin in local storage and cookies.

          </p>
          <p
            className="subtitle"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            I continue learning, and at the moment, I'm grasping Redux. And the
            VUE framework is next in line. I've recently been fascinated by
            UI/UX, so, clearly, it will be the next thing for me after.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
