import React from "react";
import SectionServices from "../componentes/SectionServices";

function CleaningSection() {
  const cleaningData = {
    title: "Limpieza",
    subTitle:
      "En GoldenHands, nuestra principal misión es garantizar que tus seres queridos mayores vivan en un ambiente limpio y confortable.",
    description:
      "Nos dedicamos a brindar un cuidado integral que va más allá de la simple limpieza y comodidad en el hogar Nos esforzamos por crear un espacio donde la calidad de vida y el bienestar de tus seres queridos sean la máxima prioridad para que disfruten de una vida plena y sin preocupaciones en su propio hogar, incluye:",
    listItems: [
      "- Limpieza general",
      "- Aseo y higiene personal",
      "- Orden del mobiliario",
    ],
    buttonText: "Más Información",
    imageSrc: "/img/limpieza.jpg",
    altText: "Una mujer limpiando una mesa con uniforme y guantes",
  };

  return <SectionServices {...cleaningData} />;
}

export default CleaningSection;
