import React from "react";

function SectionHeader({ name }) {
  return (
    <div className="sectionHeader">
      <h2
        className="sectionHeader__title"
        data-aos="fade-down"
        data-aos-delay="40"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        {name}
      </h2>
      <div className="border"></div>
    </div>
  );
}

export default SectionHeader;
