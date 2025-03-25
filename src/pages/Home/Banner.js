import React from "react";
import BRow from "../../shared/BRow";
import BCol from "../../shared/BCol";

const Banner = () => {
  return (
    <div className="banner-main">
      <BRow>
        <BCol xs={12} lg={6}>
          <div className="content">
            <span className="primary-text">art of fine dining</span>
            <h1>
              Dining redefined with <span>every bite</span>
            </h1>
            <p>
              art of fine dining Dining redefined with every bite Immerse
              yourself in a dining experience like no other, where every dish is
              a masterpiece of flavor, crafted with care and precision. From the
              freshest ingredients.
            </p>
          </div>
        </BCol>
        <BCol xs={12} lg={6}></BCol>
      </BRow>
    </div>
  );
};

export default Banner;
