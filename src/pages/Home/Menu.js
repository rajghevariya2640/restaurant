import React from "react";
import BContainer from "../../shared/BContainer";
import BRow from "../../shared/BRow";
import BCol from "../../shared/BCol";
import MenuImage from "../../assets/image/menu-favourite.png";
import BButton from "../../shared/BButton";

const Menu = () => {
  return (
    <div className="menu-section section">
      <BContainer>
        <BRow className="align-items-center">
          <BCol xs={12} lg={6}>
            <div className="img">
              <img src={MenuImage} alt="" />
            </div>
          </BCol>
          <BCol xs={12} lg={6}>
            <div className="content">
              <h3>Menu Favorites</h3>
              <BRow>
                <BCol xs={6}>
                  <div className="single-menu">
                    <h5>TSUKIJI OMAKASE</h5>
                    <p>
                      A platter of our handcrafted sushi, curated by our head
                      chef
                    </p>
                  </div>
                </BCol>
                <BCol xs={6}>
                  <div className="single-menu">
                    <h5>PRAWN TEMPURA</h5>
                    <p>Golden-fried tiger prawns in a light crispy coating</p>
                  </div>
                </BCol>
                <BCol xs={6}>
                  <div className="single-menu">
                    <h5>KARAAGE SALAD</h5>
                    <p>Special fried chicken served with fresh salad greens</p>
                  </div>
                </BCol>
                <BCol xs={6}>
                  <div className="single-menu">
                    <h5>KUROBUTA KATSU</h5>
                    <p>
                      Breaded cutlets using the finest kurobuta pork from Japan
                    </p>
                  </div>
                </BCol>
                <BCol xs={6}>
                  <div className="single-menu">
                    <h5>IKIGAI OYAKODON</h5>
                    <p>
                      The classic chicken and egg bowl served with an Ikigai
                      twist
                    </p>
                  </div>
                </BCol>
                <BCol xs={6}>
                  <div className="single-menu">
                    <h5>TTONKOTSU RAMEN</h5>
                    <p>
                      Our signature ramen with a pork broth base, stewed for 16
                      hours
                    </p>
                  </div>
                </BCol>
              </BRow>
              <BButton>View our full menu</BButton>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  );
};

export default Menu;
