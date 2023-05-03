import React from "react";
import "../components/styles/root.css";

const Hotel = () => {
  return (
    <section className="py-30">
      <div className="discover-menu">
        <div className="container">
          <div className="buttons">
            <button className="btn-secondary mr-4">DISCOVER FAMOUS CHEF</button>
            <div className="line border-l-2 border-gray-400 h-10"></div>
            <button className="btn-secondary ml-4">BOOK THE CHEF</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotel;
