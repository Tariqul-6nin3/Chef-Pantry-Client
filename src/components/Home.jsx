import React from "react";
import Banner from "./Banner";
import ChefInfo from "./ChefInfo";
import Hotel from "./Hotel";
import Lesson from "./Lesson";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <ChefInfo />
      <Lesson />
      <Hotel />
    </div>
  );
};

export default Home;
