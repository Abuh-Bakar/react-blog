const Top = ({ title, image, subtitle, content, author }) => {
  return (
    <header className="top">
      <div className=" container top__container">
        <div className="top__content">
          <h4>{subtitle}</h4>
          <p>{content}</p>
          <h5>{author}</h5>
        </div>
      </div>
    </header>
  );
};

export default Top;
