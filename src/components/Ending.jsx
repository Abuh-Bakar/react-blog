import React from "react";
import Card from "../UI/Card";
import { ending } from "../assets/data/data";

const Ending = () => {
  return (
    <div className=" container container__ending">
      <Card>
        <div className="ending__container">
          {ending.map(({ id, image, author, title, content }) => {
            return (
              <div key={id}>
                <img src={image} alt="" />
                <h4>{author}</h4>
                <h2>{title}</h2>
                <p>{content}</p>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Ending;
