import React from "react";
import { postending } from "../../assets/data/data";

const PostEnding = () => {
  return (
    <div className="post__image__container">
      {postending.map(
        ({ image1, image2, info, profile, author, follow }, index) => {
          return (
            <div key={index} className="post__image-child">
              <div className="need__grid">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
              </div>
              <div className="need__flex">
                <p>{info}</p>
                <img src={profile} alt="" className="profile" />
                <h2 className="centering">{author}</h2>
                <h6 className="centering">{follow}</h6>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default PostEnding;
