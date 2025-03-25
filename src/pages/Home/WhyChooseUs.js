import React from "react";
import BContainer from "../../shared/BContainer";
import BRow from "../../shared/BRow";
import BCol from "../../shared/BCol";
import whyChoose1 from "../../assets/image/why-choose-1.jpg";
import whyChoose2 from "../../assets/image/why-choose-2.jpg";
import whyChoose3 from "../../assets/image/why-choose-3.jpg";

const whyChoose = [
  {
    image: whyChoose1,
    title: "FRESH & HIGH-QUALITY INGREDIENTS – WE NEVER COMPROMISE ON QUALITY.",
  },
  {
    image: whyChoose2,
    title:
      "HYGIENIC PREPARATION – OUR KITCHEN FOLLOWS THE HIGHEST STANDARDS OF CLEANLINESS AND SAFETY.",
  },
  {
    image: whyChoose3,
    title:
      "WIDE VARIETY – FROM TRADITIONAL DOSAS TO INNOVATIVE FLAVORS, WE HAVE SOMETHING FOR EVERYONE",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="section pb-70">
      <BContainer>
        <BRow>
          <BCol>
            <h2 className="title">Why Choose Us?</h2>
          </BCol>
        </BRow>
        <BRow>
          {whyChoose.map((data, i) => (
            <BCol md={4} key={i}>
              <div
                className="why-choose"
                style={{ backgroundImage: `url(${data.image})` }}
              >
                <h6>{data.title}</h6>
              </div>
            </BCol>
          ))}
        </BRow>
      </BContainer>
    </div>
  );
};

export default WhyChooseUs;
