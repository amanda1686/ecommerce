import React from "react";
import Article from "./Article";
import Formulario from "./AboutUsFormulario";

const Agradecimiento = () => {
  return (
    <p className="text-center text-black text-xl mt-8">
      ¡Gracias por confiar en GoldenHands para cuidar de ti y tus seres
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
        text="En GoldenHands, nos dedicamos apasionadamente a proporcionar apoyo integral a nuestros mayores, reconociendo la importancia de su bienestar y comodidad en cada etapa de la vida. Nuestro compromiso es ofrecer servicios de acompañamiento personalizados y productos especializados que mejoren la calidad de vida de quienes han acumulado sabiduría a lo largo de los años."
      />

      <Article
        image="../../public/img/charla.jpg"
        title="Nuestra Misión"
        text="Nuestra misión es ser un faro de apoyo y comodidad para la comunidad de personas mayores. Buscamos no solo satisfacer sus necesidades cotidianas, sino también enriquecer sus vidas a través de servicios personalizados y productos de alta calidad, promoviendo un envejecimiento activo y saludable."
        reverseImage // Agregar la prop reverseImage para invertir la posición de la imagen
      />
      <Article
        image="../../public/img/pareja.jpg"
        title="Razones para confiar en nosotros"
        text="En GoldenHands, nos esforzamos por crear un entorno en el que la atención, el respeto y la empatía son la base de cada interacción. Nuestro equipo está comprometido con brindar un servicio excepcional y productos de calidad, adaptados a las necesidades individuales de cada persona mayor a la que servimos."
      />
      <Agradecimiento />

      <Formulario />
    </main>
  );
};

export default AboutUs;
