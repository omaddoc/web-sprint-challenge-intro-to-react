// Write your Character component here
import React from "react";

const Character = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      <h3>Name: {data.name}</h3>
    </div>
  );
};

export default Character;
