import React from "react";
import { Link } from "react-router-dom";

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
    <section className="flex flex-col md:flex-row items-center justify-between bg-white rounded-md p-10 md:m-12 shadow-md mx-auto">
      <div className="w-full md:w-2/5 md:text-right mb-4 md:mb-0 md:order-1 md:ml-12">
        <img
          className="imageneser w-full h-auto transform hover:scale-90 hover:opacity-75 transition duration-300 ease-in-out"
          src={imageSrc}
          alt={altText}
        />
      </div>
      <div className="w-full md:w-2/4 md:order-2 md:ml-4">
        <h2 className="title-section mb-2 font-bold md:text-3xl leading-tight text-white text-2xl p-4 bg-blue-dark rounded-md mb-2 text-right">
          {title}
        </h2>
        {subTitle && (
          <h3 className="sub-title mb-4 text-xl font-bold text-blue-light text-right">
            {subTitle}
          </h3>
        )}
        <div className="info-container text-right">
          <p className="mb-3 text-2lg">{description}</p>
          <ul className="mb-4 text-black">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Link to="/login">
            <button className="butser bg-gradient-to-r from-[#d88530] via-[#f2cb79] to-[#f2df80] text-[#032940] font-bold py-2 px-4 rounded-md hover:from-[#f2df80] hover:via-[#f2cb79] hover:to-[#d88530] transition ease-in-out duration-150 mx-auto">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SectionServices;
