import "./new.css";
import { Link } from "react-router-dom";
import Top from "../../components/Top";
import { newspage } from "../../assets/data/data";
import AllTopics from "../../components/AllTopics";
import NewsLetter from "../../components/NewsLetter";
const attributes = {
  subtitle: "New",
  content:
    "Our latest web design tips, tricks, insights, and resources, hot off the presses.",
};

const New = () => {
  return (
    <>
      <div className="container">
        <Top subtitle={attributes.subtitle} content={attributes.content} />
      </div>
      <div className="container new__page-container">
        {newspage.map(({ image, author, title, content }, index) => {
          return (
            <div className="new__contents" key={index}>
              <img src={image} alt="" />
              <h4>{author}</h4>
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
          );
        })}
      </div>
      <div className="linkdiv">
        <Link to="/readingList" className="button">
          Load More
        </Link>
      </div>
      <AllTopics />
      <NewsLetter />
    </>
  );
};

export default New;
