import React from "react";
import BContainer from "../../shared/BContainer";
import BRow from "../../shared/BRow";
import BCol from "../../shared/BCol";
import customer1 from "../../assets/image/customer-1.png";
import customer2 from "../../assets/image/customer-2.png";
import customer3 from "../../assets/image/customer-3.png";

const customerReview = [
  {
    image: customer1,
    title: "Rohit S.",
    desc: `"The best dosa I've ever had! Crispy, flavorful, and served with delicious chutneys. Highly recommend!"`,
  },
  {
    image: customer2,
    title: "Meena R.",
    desc: `"Absolutely loved the food here! Authentic South Indian taste and excellent service. Will definitely visit again."`,
  },
  {
    image: customer3,
    title: "Rohit S.",
    desc: `"The best dosa I've ever had! Crispy, flavorful, and served with delicious chutneys. Highly recommend!"`,
  },
];

const Review = () => {
  return (
    <div className="section pb-70">
      <BContainer>
        <BRow>
          <BCol xs={12}>
            <h2 className="title text-center">Customer Reviews</h2>
          </BCol>
        </BRow>
        <BRow>
          {customerReview.map((data, i) => (
            <BCol md={4}>
              <div className="customer-review">
                <img src={data.image} alt="" />
                <h4>{data.title}</h4>
                <p>{data.desc}</p>
              </div>
            </BCol>
          ))}
        </BRow>
      </BContainer>
    </div>
  );
};

export default Review;
