import React from "react";
import "../components/styles/root.css";
import LazyLoad from "react-lazy-load";

const Banner = () => {
  return (
    <LazyLoad offset={300}>
      <div className="banner">
        <div className="container">
          <div className="banner-info md:py-20">
            <h1 className=" px-1  text-4xl md:text-6xl font-bold">
              "Satisfy your <span className="text-pink-500">food</span> <br />{" "}
              cravings with a <br />
              click!"
            </h1>
            <button className="btn-primary mt-10 px-8 py-3 rounded-full text-white font-medium text-lg hover:bg-pink-600 transition-colors duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Banner;
