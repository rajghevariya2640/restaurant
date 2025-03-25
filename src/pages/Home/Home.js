import React from "react";
import Header from "../../shared/Header";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import Review from "./Review";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <Review />
      <WhyChooseUs />
    </>
  );
};

export default Home;
