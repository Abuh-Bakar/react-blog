import React from "react";
import Card from "../UI/Card";
import { readList } from "../assets/data/data";
import { IoIosArrowForward } from "react-icons/io";

const ReadList = () => {
  return (
    <div className=" container container__readlist">
      <div className="readlist__header">
        <h2> Reading lists</h2>
        <h4> View all</h4>
      </div>
      <div>
        <Card>
          <div className="readlist__container">
            {readList.map(({ id, image, name, available }) => {
              return (
                <div key={id}>
                  <img src={image} alt="" />
                  <h4 className={!available ? "disable" : ""}>{name}</h4>
                </div>
              );
            })}
            <button className="arrow__button">
              <IoIosArrowForward />
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ReadList;
