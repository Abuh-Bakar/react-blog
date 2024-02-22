import React from "react";
import { alltopics } from "../assets/data/data";

const AllTopics = () => {
  return (
    <div className=" container all__topics-container">
      {alltopics.map(({ image, name }, index) => {
        return (
          <div className="all__topics-content" key={index}>
            <img src={image} alt="" />
            <h4>{name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default AllTopics;
