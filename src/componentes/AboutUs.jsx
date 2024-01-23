import React from "react";
import Formulario from "./AboutUsFormulario";

const Article = ({ image, title, text, reverse }) => {
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
        className="md:w-3/5 md:max-w-md rounded-md transition-transform transform hover:scale-105"
      />
    </article>
  );
};

const Agradecimiento = () => {
  return (
    <p className="text-center text-black text-xl mt-8">
      ¡Gracias por confiar en Manos Doradas para cuidar de ti y tus seres
      queridos!
    </p>
  );
};

const AboutUs = () => {
  return (
    <main className="bg-D88530">
      <h1 className="text-4xl text-blue-dark font-bold text-center my-8">
        Quiénes Somos
      </h1>

      <Article
        image="../../public/img/baston.jpg"
        title="Nuestra Pasión por el Bienestar"
        text="En Manos Doradas, nos dedicamos apasionadamente a proporcionar apoyo integral a nuestros mayores, reconociendo la importancia de su bienestar y comodidad en cada etapa de la vida. Nuestro compromiso es ofrecer servicios de acompañamiento personalizados y productos especializados que mejoren la calidad de vida de quienes han acumulado sabiduría a lo largo de los años."
      />

      <Article
        image="../../public/img/charla.jpg"
        title="Nuestra Misión"
        text="Nuestra misión es ser un faro de apoyo y comodidad para la comunidad de personas mayores. Buscamos no solo satisfacer sus necesidades cotidianas, sino también enriquecer sus vidas a través de servicios personalizados y productos de alta calidad, promoviendo un envejecimiento activo y saludable."
      />

      <Article
        image="../../public/img/pareja.jpg"
        title="Razones para confiar en nosotros"
        text="En Manos Doradas, nos esforzamos por crear un entorno en el que la atención, el respeto y la empatía son la base de cada interacción. Nuestro equipo está comprometido con brindar un servicio excepcional y productos de calidad, adaptados a las necesidades individuales de cada persona mayor a la que servimos."
      />

      <Formulario />

      <Agradecimiento />
    </main>
  );
};

export default AboutUs;
