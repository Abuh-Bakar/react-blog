import React from "react";
import Overlay from "./Overlay";
import HeaderImager from "../assets/images/img7.png";
import Card from "../UI/Card";
import { popular } from "../assets/data/data";

const Popular = () => {
  return (
    <div className="container header-container">
      <div>
        <h2 className=" container title">Popular</h2>
      </div>
      <div className="body__content">
        <div>
          <Overlay className="container__overlay" image={HeaderImager}>
            <h4>BY TOMAS LAURINAVICIUS IN DESIGN PROCESS</h4>
            <h2>
              Web page layout 101: website anatomy every designer needs to learn
            </h2>
            <p>
              User research is the reality check every project needs. Here’s our
              guide to why you should be doing it — and how to get started.
            </p>
          </Overlay>
        </div>

        <div className="side__popular">
          {popular.map(({ title, content, available }, index) => {
            return (
              <Card key={index} className="content__content">
                <div>
                  <h4>{title}</h4>
                  <p className={!available ? "disable" : ""}>{content}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
