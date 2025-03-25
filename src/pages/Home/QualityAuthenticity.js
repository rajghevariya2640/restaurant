import React from "react";
import BContainer from "../../shared/BContainer";
import BRow from "../../shared/BRow";
import BCol from "../../shared/BCol";
import SectionImage from "../../assets/image/quality-authencity.png";

const QualityAuthenticity = () => {
  return (
    <div className="our-story-section common-section section">
      <BContainer>
        <BRow className="align-items-center flex-column-reverse flex-lg-row">
          <BCol xs={12} lg={6}>
            <div className="content">
              <h6>Quality & Authenticity</h6>
              <p>
                We meticulously source our ingredients, ensuring that every bite
                you take is filled with authentic South Indian taste.
              </p>
              <p>
                Our batter is freshly prepared, fermented to perfection, and
                cooked to achieve the ideal balance of crispiness and softness.
              </p>
              <p>
                From classic plain dosas to innovative fusion varieties, every
                dish we serve reflects our commitment to quality and
                authenticity.
              </p>
            </div>
          </BCol>
          <BCol xs={12} lg={6}>
            <div className="img">
              <img src={SectionImage} alt="" />
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  );
};

export default QualityAuthenticity;
