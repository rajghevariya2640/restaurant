import React from "react";
import BContainer from "../../shared/BContainer";
import BRow from "../../shared/BRow";
import BCol from "../../shared/BCol";
import OurStoryImage from "../../assets/image/our-story.png";

const OurStory = () => {
  return (
    <div className="our-story-section common-section section">
      <BContainer>
        <BRow className="align-items-center flex-column-reverse flex-lg-row">
          <BCol xs={12} lg={6}>
            <div className="content">
              <h6>OUR STORY</h6>
              <p>
                At Shree Sai Malhar Dosa, we believe in preserving the age-old
                techniques of dosa preparation while infusing them with modern
                hygiene and quality standards.
              </p>
              <p>
                Our journey began with a simple yet powerful vision: to offer
                delicious, crispy, and perfectly made dosas that leave a lasting
                impression on your taste buds.
              </p>
              <p>
                Over the years, we have become a favorite destination for dosa
                lovers, serving a variety of mouthwatering flavors to satisfy
                every palate.
              </p>
            </div>
          </BCol>
          <BCol xs={12} lg={6}>
            <div className="img">
              <img src={OurStoryImage} alt="" />
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  );
};

export default OurStory;
