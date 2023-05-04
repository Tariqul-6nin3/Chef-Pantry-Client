import React, { useEffect, useState } from "react";
import SingleChef from "./SingleChef";
import "../components/styles/root.css";

const ChefInfo = () => {
  const [chefData, setChefData] = useState([]);
  console.log(chefData);
  useEffect(() => {
    fetch("https://chef-recipe-server-tariqul-6nin3.vercel.app/")
      .then(res => res.json())
      .then(data => setChefData(data));
  }, []);
  return (
    <div className="mt-12">
      <h3 className="section-title">Our Chefs</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-container">
        {chefData.map(singleChef => (
          <SingleChef key={singleChef.id} singleChef={singleChef}></SingleChef>
        ))}
      </div>
    </div>
  );
};

export default ChefInfo;
