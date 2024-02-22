import React from "react";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";

const PostSocials = () => {
  return (
    <div className="post__socials">
      <span>
        <FaFacebookF />
      </span>
      <span>
        <TiSocialTwitter />
      </span>
      <span>
        <FaInstagram />
      </span>
      <span>
        <FaPinterestP />
      </span>
    </div>
  );
};

export default PostSocials;
