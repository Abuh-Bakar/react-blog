import Top from "../../components/Top";
import { popularpage } from "../../assets/data/data";
import { popularimages } from "../../assets/data/data";
import ReadList from "../../components/ReadList";
import NewsLetter from "../../components/NewsLetter";

import "./popular.css";

const attributes = {
  title: "Reading lists",
  subtitle: "Popular",
  content:
    "Check out the most-read and most-shared posts from the 3layers blog.",
};

const PoPular = (props) => {
  return (
    <div className="entire__popular-container">
      <div className="container">
        <Top subtitle={attributes.subtitle} content={attributes.content} />
      </div>

      <div className=" popular__page-container">
        <div className="popular__typography">
          {popularpage.map(({ id, title, content }, index) => {
            return (
              <div className="typography" key={index}>
                <h3>{id}</h3>
                <h4>{title}</h4>
                <p>{content}</p>
              </div>
            );
          })}
        </div>
        <div className="popular__images">
          {popularimages.map(({ image }, index) => {
            return (
              <div className="images">
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <ReadList />
      <NewsLetter />
    </div>
  );
};

export default PoPular;
