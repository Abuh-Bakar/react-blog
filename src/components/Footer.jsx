import React from "react";
import Image from "../assets/images/logo.png";
import { TiSocialVimeo } from "react-icons/ti";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer-logo">
        <img src={Image} alt="" />
      </div>
      <div className="footer-icons">
        <span>
          <TiSocialVimeo />
        </span>
        <span>
          <FaPinterestP />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <TiSocialTwitter />
        </span>
        <span>
          <FaFacebookF />
        </span>
      </div>
      <div className="footer-rights">
        <p>All Rights Reserved 2018 3layers</p>
      </div>
    </div>
  );
};

export default Footer;
