import React from "react";

function SectionServices({
  title,
  subTitle,
  description,
  listItems,
  buttonText,
  imageSrc,
  altText,
}) {
  return (
    <section className="flex flex-col items-center justify-between bg-white rounded-md p-8 md:m-12 shadow-md mx-auto items-center">
      <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-5xl items-center">
        <div className="w-full md:w-1/2 md:order-2 md:text-left mb-4 md:mb-0">
          <img
            className="imageneser w-4/4 h-auto ml-4 transform hover:scale-90 hover:opacity-75 transition duration-300 ease-in-out items-center"
            src={imageSrc}
            alt={altText}
          />
        </div>
        <div className="w-full md:w-3/4 md:order-1">
          <h2 className="title-section mb-2 font-bold md:text-3xl leading-tight text-white text-2xl p-4 bg-blue-dark rounded-md mb-2">
            {title}
          </h2>
          {subTitle && (
            <h3 className="sub-title mb-4 text-xl font-bold text-blue-light">
              {subTitle}
            </h3>
          )}
          <div className="info-container">
            <p className="mb-3 text-2lg">{description}</p>
            <ul className="mb-4 text-black">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="butser bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionServices;