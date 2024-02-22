import { TiSocialVimeo } from "react-icons/ti";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import profile from "../../assets/images/img54.png";
import firstImage from "../../assets/images/img58.png";
import secondImage from "../../assets/images/img59.png";
import thirdImage from "../../assets/images/img60.png";
import popular1 from "../../assets/images/img61.png";
import popular2 from "../../assets/images/img62.png";
import popular3 from "../../assets/images/img63.png";
import essential1 from "../../assets/images/img65.png";
import essential2 from "../../assets/images/img66.png";
import essential3 from "../../assets/images/img64.png";
import { FaTimes } from "react-icons/fa";
import Month from "../../components/Month";

import "./author.css";
import NewsLetter from "../../components/NewsLetter";

const Author = () => {
  return (
    <div className=" author__container">
      <aside>
        <div className="about__author">
          <img src={profile} alt="" />
          <h3>TOMAS LAURINAVICIUS</h3>
          <p>Hi, my name is Daniel, I'm the CTO here at Kinsta.</p>
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
        </div>

        <div className="little__stories">
          <ul>
            <li>
              <img src={firstImage} alt="" />
              <h2>BY TOMAS LAURINAVICIUS IN RESOURCE</h2>
              <p>How to Migrate from Wix to WordPress (Complete Guide)</p>
            </li>
            <li>
              <img src={secondImage} alt="" />
              <h2>BY TOMAS LAURINAVICIUS IN RESOURCE</h2>
              <p>
                Preparing Your WordPress Site for the Google Mobile-First Index
              </p>
            </li>
            <li>
              <img src={thirdImage} alt="" />
              <h2>BY TOMAS LAURINAVICIUS IN RESOURCE</h2>
              <p>How To Use Yoast SEO On WordPress: Complete Tutorial</p>
            </li>
          </ul>
        </div>
        <div className="numbering">
          <ul>
            <div className="need__needed">
              <li className="needed svg__needed">
                <IoIosArrowBack />
              </li>
              <li className="needed">01</li>
              <li className="needed need__special">02</li>
              <li className="needed">03</li>
              <li>...</li>
              <li className="needed">15</li>
              <li className="needed">16</li>
              <li className="needed svg__needed">
                <IoIosArrowForward />
              </li>
            </div>
          </ul>
        </div>
        <NewsLetter />
      </aside>
      <main>
        <div className="search__label">
          <p>Type something…</p>
          <AiOutlineSearch />
        </div>
        <div className="main__popular">
          <h3>POPULAR POST</h3>
          <div className="main__popular-subs">
            <ul>
              <li className="man__popular-sub__li">
                <img src={popular1} alt="" />
                <div className="main__popular-sub">
                  <h4>DESIGN PROCESS</h4>
                  <p>Our 15 favorite websites from August </p>
                </div>
              </li>
              <li className="man__popular-sub__li">
                <img src={popular2} alt="" />
                <div className="main__popular-sub">
                  <h4>INSPIRATION</h4>
                  <p>The beginners guide to user research </p>
                </div>
              </li>
              <li className="man__popular-sub__li">
                <img src={popular3} alt="" />
                <div className="main__popular-sub">
                  <h4>INSPIRATION</h4>
                  <p>Web page layout 101: website anatomy every designer </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="recent__post">
          <h3>RECENT POST</h3>
          <ul>
            <li className="recent__post-list">
              <h4>DESIGN PROCESS</h4>
              <p>Our 15 favorite websites from August </p>
            </li>
            <li className="recent__post-list">
              <h4>INSPIRATION</h4>
              <p>The beginners guide to user research </p>
            </li>
            <li className="recent__post-list">
              <h4>INSPIRATION</h4>
              <p>
                Web page layout 101: website anatomy every designer needs to
                learn
              </p>
            </li>
            <li className="recent__post-list">
              <h4>FREELANCING</h4>
              <p>10 essential sections to a high landing page</p>
            </li>
          </ul>
        </div>
        <div className="subscribe">
          <h3>SUBSCRIBE</h3>
          <form class="footer__newsletter--form">
            <input type="email" placeholder="Enter Email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>

        <div className="essentials">
          <div className="essential__images">
            <img src={essential1} alt="" className="img1" />
            <img src={essential2} alt="" className="img2" />
            <img src={essential3} alt="" className="img3" />
          </div>
          <h3>Essentials</h3>
        </div>
        <div className="socials">
          <h3>SOCIAL MEDIA</h3>
          <div className="socials__icons">
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
        </div>
        <div className="monthly__calender">
          <Month />
        </div>
        <div className="adds__banner">
          <h3>ADS BANNER</h3>
        </div>
        <div className="properties">
          <ul className="properties__subtitle">
            <li className="Properties__sub">
              <h5>Sale</h5>
              <FaTimes />
            </li>
            <li className="Properties__sub">
              <h5>Revenue</h5>
              <FaTimes />
            </li>
            <li className="Properties__sub">
              <h5> Shipment </h5>
              <FaTimes />
            </li>
            <li className="Properties__sub">
              <h5> Dashboards </h5>
              <FaTimes />
            </li>
            <li className="Properties__sub">
              <h5>Users </h5>
              <FaTimes />
            </li>
            <li className="Properties__sub">
              <h5> Booking</h5>
              <FaTimes />
            </li>
            <li className="Properties__sub">
              <h5> Admin</h5>
              <FaTimes />
            </li>
            <li className="Properties__sub">
              <h5>Late</h5>
              <FaTimes />
            </li>
            <li className="Properties__sub">
              <h5>Values</h5>
              <FaTimes />
            </li>
            <li className="Properties__sub">
              <h5>Benefits</h5>
              <FaTimes />
            </li>
            <li className="Properties__sub">
              <h5>Bank</h5>
              <FaTimes />
            </li>
            <li className="Properties__sub span">
              <h5>
                <span>Master</span>
              </h5>
              <FaTimes />
            </li>
            <li className="Properties__sub">
              <h5>Employee</h5>
              <FaTimes />
            </li>
            <li className="Properties__sub">
              <h5>Management</h5>
              <FaTimes />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Author;
