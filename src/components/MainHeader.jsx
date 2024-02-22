import React from "react";
import { NewList } from "../assets/data/data";
import HeaderImager from "../assets/images/img1.png";
import Overlay from "./Overlay";

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="overlay__contents">
          <Overlay className="container__overlay" image={HeaderImager}>
            <div className="text">
              <h4>BY TOMAS LAURINAVICIUS IN INSPIRATION</h4>
              <h2>How to accept rejection gracefully — and use it to grow</h2>
              <p>
                User research is the reality check every project needs. Here’s
                our guide to why you should be doing it — and how to get
                started.
              </p>
            </div>
          </Overlay>
        </div>

        <div className="new__list">
          <div className="new__list-header">
            <h2 className="new__list-header__new">New</h2>

            <h4 className="new__list-header__side">view all new</h4>
          </div>
          <div className="new__list-body">
            {NewList.map(({ date, title, available }, index) => {
              return (
                <ul>
                  <li key={index}>
                    <h4>{date}</h4>
                    <p className={!available ? "disable" : ""}>{title}</p>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
