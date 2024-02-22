import Top from "../../components/Top";
import PostSocials from "./PostSocials";
// import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { pagebuilder, postlast } from "../../assets/data/data";
import commentimage from "../../assets/images/img55.png";
import commentimage2 from "../../assets/images/img56.png";
import commentimage3 from "../../assets/images/img57.png";

import PostImage from "../../assets/images/img50.png";

import "./post.css";
import PostEnding from "./postEnding";

const attributes = {
  subtitle: "10 Reasons to Build Your Website with WP Page Builder",
  content:
    "People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers).",
  author: "BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS",
};

const dummy_data = [
  "People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust pagebuilding tools, creating websites has become a lot more fun(especially for non-developers). The multitude of tools and pluginsavailable to you is vast when you try building websites on WordPress. Today we’ll explore a new one, WP Page Builder. If you’retired of the same old page builder plugins, this is one you should try out.",
];

const Post = () => {
  return (
    <div className="entire__post-container">
      <div>
        <Top
          subtitle={attributes.subtitle}
          content={attributes.content}
          author={attributes.author}
        />
      </div>
      <div className="container post__contents">
        <div className="posts__socials">
          <PostSocials />
        </div>

        <div className="post__icons">
          <ul>
            <li>
              <i className="heart">
                {/* <CiHeart /> */}
                <FaHeart />
              </i>
              <p>12k</p>
            </li>
            <li>
              <i>
                <IoMdEye />
              </i>
              <p>25k</p>
            </li>
          </ul>
        </div>

        <div className="Post__image">
          <img src={PostImage} alt="" />
          <p> {dummy_data}</p>
        </div>

        <div className="webpage__container">
          <div className="webpage__contents">
            {pagebuilder.map(({ title, body, image }, index) => {
              return (
                <div key={index}>
                  <h2>{title}</h2>
                  <p>{body}</p>
                  <img src={image} alt="" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="form">
          <ul>
            <header>Here are some of the amazing add-ons included:</header>
            <li>
              <span>Form:</span>Create web forms effortlessly. It gives you a
              convenient way to style your forms as you desire. The Form add-on
              itself is capable of setting up any kind of form without needing
              to install any plugin. Moreover, you can manage form plugins and
              enable reCAPTCHA with just a simple click. There is also an add-on
              for Contact Form 7 if you prefer.
            </li>
            <li>
              <span>Carousel:</span> It’s hard to find an advanced add-on like a
              carousel in a free page builder plugin, but WP Page Builder lets
              you create stunning hero sliders without having to pay for it.
            </li>
            <li>
              <span>Post Grid:</span> Display blog posts in grids defining the
              number of posts and styling the look.
            </li>
            <li>
              <span> Feature Box:</span>Use the Feature Box add-on to display
              the features of products on your website.
            </li>
            <li>
              <span> Accordion: </span>Need any collapse text content on your
              site? Use WP Page Builder’s Accordion add-on and modify the style
              the way you want.
            </li>
          </ul>
        </div>
        <PostEnding />
        <div className="ending__title">
          <div className="ending__title-display">
            <h2 className="ending__title-choice">You might also like...</h2>
            <h4 className="ending__title-more">More</h4>
          </div>

          <div className="postlast__container">
            {postlast.map(({ id, image, author, title, content }) => {
              return (
                <div key={id}>
                  <img src={image} alt="" />
                  <h4>{author}</h4>
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="comment__body">
          <div className="comment__title">
            <h2>Comments</h2>
            <h4>Leave a Comment</h4>
          </div>
          <div className="comment__subtitle">
            <p>
              <span>Comment policy:</span> We love comments and appreciate the
              time that readers spend to share ideas and give feedback. However,
              all comments are manually moderated and those deemed to be spam or
              solely promotional will be deleted.
            </p>
          </div>
          <div className="comment__comments">
            <ul>
              <li>
                <header className="comment__comments-title">
                  <img src={commentimage} alt="" />
                  <h4>Brian Jackson</h4>
                  <h5>December 14, 2017 at 5:13 pm</h5>
                  <p>Reply</p>
                </header>
                <p className="comment__comments-body">
                  I think, you forgot to mention a very good one: Thrive
                  architect from thrivethemes. That thing is pretty powerful.
                </p>
              </li>
              <li className="need__border need__padding">
                <header className="comment__comments-title">
                  <img src={commentimage2} alt="" />
                  <h4>Sean Scott</h4>
                  <h5>December 14, 2017 at 5:13 pm</h5>
                </header>
                <p className="comment__comments-body">
                  Thanks Brian! We have updated the above post. You are correct,
                  their page builder has both a free and a premium version.
                </p>
              </li>
              <li className="need__border">
                <header className="comment__comments-title">
                  <img src={commentimage3} alt="" />
                  <h4>Wiliam Hilton</h4>
                  <h5>December 14, 2017 at 5:13 pm</h5>
                  <p>Reply</p>
                </header>
                <p className="comment__comments-body">
                  I think, you forgot to mention a very good one: Thrive
                  architect from thrivethemes. That thing is pretty powerful.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="form">
          <form className="contact__form">
            <textarea
              name="message"
              id="message"
              placeholder="Comment"
            ></textarea>
            <input type="text" placeholder="Name" />

            <input type="email" placeholder="E-mail" />

            <fieldset class="contact__form--submit">
              <div>
                <input type="checkbox" class="terms" />
                <label for="terms">I agree to terms and conditions</label>
              </div>

              <input type="submit" value="Post Comment" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
