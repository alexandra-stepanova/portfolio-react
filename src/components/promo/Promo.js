import React from "react";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1
          className="title"
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <span className="promo__span">Hi. I'm Sasha.</span>
          <span className="promo__span">Frontend developer.</span>
        </h1>
        <p
          className="subtitle"
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
        >
          Currently, I'm a freelance developer looking to land a permanent job.
          Meanwhile, I'm developing a few small projects and continue learning
          Redux, TS and UI/UX.
        </p>
      </div>
      <div className="promo__image"></div>
    </section>
  );
}

export default Promo;
