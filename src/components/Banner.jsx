import React from "react";

const Banner = () => {
  return (
    <div className="banner bg-base-200">
      <div className="container">
        <div className="banner-info flex flex-col justify-center items-center py-10 md:py-20">
          <h1 className="banner-title text-center text-4xl md:text-6xl font-bold text-gray-800">
            "Satisfy your <span className="text-pink-500">food</span> cravings
            with a <br />
            click!"
          </h1>
          <button className="btn-primary mt-10 px-8 py-3 rounded-full text-white font-medium text-lg hover:bg-pink-600 transition-colors duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
