import React from "react";
import { essentials } from "../assets/data/data";
import Overlay from "./Overlay";
import HeaderImager from "../assets/images/img9.png";
import Card from "../UI/Card";

const Essentials = () => {
  return (
    <div className="essentials__container">
      <div>
        <h2 className=" container title">Essentials</h2>
      </div>
      <div className=" essential__header-container">
        <div className="side__essential">
          {essentials.map(({ title, content, available }, index) => {
            return (
              <Card key={index} className="essentials__essential">
                <h4>{title}</h4>
                <p className={!available ? "disable" : ""}>{content}</p>
              </Card>
            );
          })}
        </div>

        <div className="container__overlay-essentials">
          <Overlay
            className="container__overlay-essential"
            image={HeaderImager}
          >
            <h4>BY TOMAS LAURINAVICIUS IN FREELANCING</h4>
            <h2>
              How to Fix the WordPress HTTP Error (Uploading Images to Media
              Library)
            </h2>
            <p>
              User research is the reality check every project needs. Here’s our
              guide to why you should be doing it — and how to get started.
            </p>
          </Overlay>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
