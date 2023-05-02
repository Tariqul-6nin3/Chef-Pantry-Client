import React, { useEffect, useState } from "react";

const ChefInfo = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <div>
      <h3>Displaying all Chef Information</h3>
    </div>
  );
};

export default ChefInfo;
