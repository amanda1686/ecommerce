import PropTypes from "prop-types";

const Article = ({ image, title, text, reverse, reverseImage }) => {
  return (
    <article className="flex flex-col md:flex-row items-center justify-between bg-white rounded-md p-8 m-4 md:m-8 shadow-md mx-auto">
      <div
        className={`md:w-1/2 ${
          reverse ? "md:order-2" : ""
        } text-center md:text-left`}
      >
        <h2 className="text-white text-2xl p-4 bg-blue-dark rounded-md mb-2">
          {title}
        </h2>
        <p className="text-brown mb-4">{text}</p>
      </div>
      <img
        src={image}
        alt={title}
        className={`md:w-3/5 md:max-w-md rounded-md transition-transform transform hover:scale-105 ${
          reverseImage ? "md:order-1" : ""
        }`}
      />
    </article>
  );
};

Article.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  reverseImage: PropTypes.bool,
};

export default Article;