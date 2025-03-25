import React from "react";
import FooterBg from "../assets/image/footer-image.jpg";
import BContainer from "./BContainer";
import BRow from "./BRow";
import BCol from "./BCol";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${FooterBg})` }}
      className="footer-section"
      id="contact"
    >
      <BContainer>
        <BRow>
          <BCol lg={6} className="mb-3 mb-lg-0">
            <h2>Shree sai malhar dhosa</h2>
          </BCol>
          <BCol xs={6} lg={3} className="mb-3 mb-lg-0">
            <h5>PHONE NUMBER</h5>
            <p>+91 84900 96181</p>
          </BCol>
          <BCol xs={6} lg={3} className="mb-3 mb-lg-0">
            <h5>EMAIL ADDRESS</h5>
            <p>hello@reallygreatsite.com</p>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  );
};

export default Footer;
