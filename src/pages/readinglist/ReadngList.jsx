import "./readinglist.css";
import Top from "../../components/Top";
import { readingpage } from "../../assets/data/data";

const attributes = {
  subtitle: "All reading lists ",
  content:
    "Get in-depth insights on web design, freelancing, content management, and more with these series of related reads.",
};

const ReadngList = () => {
  return (
    <>
      <div className="container">
        <Top subtitle={attributes.subtitle} content={attributes.content} />
      </div>
      <div className="container readinglist-container">
        {readingpage.map(({ image, title, content }, index) => {
          return (
            <div className="readinglist__content" key={index}>
              <img src={image} alt="" />
              <div>
                <h2>{title}</h2>
                <p>{content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReadngList;
