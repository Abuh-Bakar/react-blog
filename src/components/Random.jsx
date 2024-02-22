import React from "react";
import HeaderImager from "../assets/images/img8.png";
import { random } from "../assets/data/data";
import Card from "../UI/Card";
import Overlay from "./Overlay";

const Random = () => {
  return (
    <div className="container random__container">
      <div>
        <h2 className=" container title__random">Random</h2>
      </div>

      <div className="random__body">
        <div className="random__right">
          <div className="random__wrapper">
            {random.map(({ id, author, title, content }) => {
              return (
                <Card key={id} className="randoms__random">
                  <h4>{author}</h4>
                  <h2>{title}</h2>
                  <p>{content}</p>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="random__image">
          <Overlay
            className="container__overlay"
            image={HeaderImager}
          ></Overlay>
        </div>
      </div>
    </div>
  );
};

export default Random;
