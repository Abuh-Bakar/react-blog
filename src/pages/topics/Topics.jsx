import Top from "../../components/Top";
import "./topics.css";
import { topicpage } from "../../assets/data/data";

const attributes = {
  subtitle: "Topics ",
  content:
    "Find everything from design inspiration to best practices, freelancing tips to tools.",
};

const Topics = () => {
  return (
    <>
      <div className="container">
        <Top subtitle={attributes.subtitle} content={attributes.content} />
      </div>
      <div className="container topicpage-container">
        {topicpage.map(({ image, title, content }, index) => {
          return (
            <div className="topicpage__content" key={index}>
              <div className="topicpage__content-heading">
                <img src={image} alt="" />

                <h2>{title}</h2>
              </div>
              <p>{content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Topics;
