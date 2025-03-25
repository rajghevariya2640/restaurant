import React from "react";
import BRow from "../../shared/BRow";
import BCol from "../../shared/BCol";
import BContainer from "../../shared/BContainer";
import BannerImage from '../../assets/image/banner-image.png'
import BannerImage1 from '../../assets/image/banner-image-1.webp'
import Dosa1 from '../../assets/image/dosa-1.jpg'
import Dosa2 from '../../assets/image/dosa-2.jpg'
import BButton from "../../shared/BButton";

const Banner = () => {
  return (
    <div className="banner-main" style={{backgroundImage: `url('${BannerImage}')`}}>
      <BContainer className="position-relative z-1">
        <BRow className="align-items-center">
          <BCol xs={12} lg={6}>
            <div className="content">
              <span className="primary-text">art of fine dining</span>
              <h1>
                Shree Sai Malhar <span>Dosa</span>
              </h1>
              <p>
              Savor the crispy, golden perfection of our dosas, served with flavorful chutneys and aromatic sambar. From classic Masala Dosa to unique fusion delights, we bring you the taste of tradition with a modern twist.
              </p>
              <BButton className="mt-4" icon={true}>Book a Table</BButton>
            </div>
          </BCol>
          <BCol xs={12} lg={6}>
            <div className="image-box">
              <img src={BannerImage1} alt="" />
              <img src={Dosa1} alt="" className="dosa dosa1" />
              <img src={Dosa2} alt="" className="dosa dosa2" />
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  );
};

export default Banner;
