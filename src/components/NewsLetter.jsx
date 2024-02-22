import React from "react";

const NewsLetter = () => {
  return (
    <div className="container footer__newsletter">
      <div class="footer__newsletter--title section__title">
        <h2>Get free web design insights...</h2>
        <h4>
          In your inbox, every other week. And unsubscribe in a click, if you
          want.
        </h4>
      </div>

      <form class="footer__newsletter--form">
        <input type="email" placeholder="Enter Email" />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  );
};

export default NewsLetter;
