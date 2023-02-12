import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="uil uil-university about__icon"></i>
        <h3 className="about__title">Degree</h3>
        <span className="about__subtitle">BEng Hons.</span>
      </div>
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title"> Experience </h3>
        <span className="about__subtitle"> 13 Months </span>
      </div>
      <div className="about__box">
        <i class="bx bxs-badge-check about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">Industrial Placement</span>
      </div>
    </div>
  );
};

export default Info;
