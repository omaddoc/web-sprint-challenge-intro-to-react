import React from "react";
import Character from "./Character";

const Characters = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      {data.map((friend, i) => {
        return <Character key={i} data={friend} />;
      })}
    </div>
  );
};

export default Characters;
