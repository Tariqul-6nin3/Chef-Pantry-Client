import React, { useEffect, useState } from "react";
import SingleChef from "./SingleChef";

const ChefInfo = () => {
  const [chefData, setChefData] = useState([]);
  console.log(chefData);
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(data => setChefData(data));
  }, []);
  return (
    <div className="mt-12">
      <h3 className="text-center font-bold text-3xl">
        Displaying all Chef Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-container">
        {chefData.map(singleChef => (
          <SingleChef key={singleChef.id} singleChef={singleChef}></SingleChef>
        ))}
      </div>
    </div>
  );
};

export default ChefInfo;
