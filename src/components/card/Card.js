import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import MediaQuery from "react-responsive";

function Card(card) {
  useEffect(() => {
    Aos.init({ duration: 500 });
    Aos.refresh();
  }, []);

  return (
    <li className="card">
      <MediaQuery minWidth={701}>
        <video
          className="card__video"
          autoPlay
          muted
          playsInline
          controls={false}
          src={card.video}
          data-aos={`${card.id % 2 === 0 ? "fade-up" : "fade-down"}`}
          data-aos-delay="40"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <source src={card.video} type="video/mp4"  playsInline />
        </video>

        <div
          className="card__container"
          data-aos={`${card.id % 2 === 0 ? "fade-down" : "fade-up"}`}
          data-aos-delay="40"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <h4 className="card__title">{card.name}</h4>
          <p className="card__subtitle">{card.discription}</p>
          <p className="card__subtitle">{card.stack}</p>
          <a className="card__link card__subtitle" href={card.link}>
            View Project
          </a>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={700}>
        <video
          className="card__video"
          autoPlay
          muted
          loop
          playsInline
          data-aos="fade-down"
          data-aos-delay="40"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <source src={card.video} type="video/mp4" />
        </video>

        <div
          className="card__container"
          data-aos="fade"
          data-aos-delay="40"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <h4 className="card__title">{card.name}</h4>
          <p className="card__subtitle">{card.discription}</p>
          <p className="card__subtitle">{card.stack}</p>
          <a className="card__link card__subtitle" href={card.link}>
            View Project
          </a>
        </div>
      </MediaQuery>
    </li>
  );
}

export default Card;
