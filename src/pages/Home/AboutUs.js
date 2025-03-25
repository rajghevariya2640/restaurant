import React from "react";
import BContainer from "../../shared/BContainer";
import BRow from "../../shared/BRow";
import BCol from "../../shared/BCol";
import AboutImage from "../../assets/image/about-us.png";

const AboutUs = () => {
  return (
    <div className="about-us-section section">
      <BContainer>
        <h2 class="title text-center">About Us</h2>
        <BRow className="align-items-center">
          <BCol xs={12} lg={6}>
            <div className="img">
              <img src={AboutImage} alt="" />
            </div>
          </BCol>
          <BCol xs={12} lg={6}>
            <div className="content">
              <h6>ABOUT SHREE SAI MALHAR DOSA</h6>
              <p>
                Welcome to Shree Sai Malhar Dosa, where tradition meets taste!
                We take pride in serving authentic, flavorful, and hygienically
                prepared South Indian delicacies that capture the essence of
                traditional dosa-making.
              </p>
              <p>
                Our mission is to bring you the finest quality dosas, idlis, and
                other South Indian favorites, made with the freshest ingredients
                and a touch of love.
              </p>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  );
};

export default AboutUs;
