import React from "react";
import SectionServices from "../componentes/SectionServices";
import AddToCartButton from "./AddToCartButton";

function CompanionSection() {
  const companionData = {
    title: "Acompañamiento",
    subTitle: "En GoldenHands, nuestra misión es brindar tranquilidad y bienestar a las familias alrededor del mundo.",
    description: "Entendemos lo importante que es para ti el cuidado de tus seres queridos, especialmente cuando se trata de tus mayores. Es por eso que nos preocupamos profundamente por garantizar que tus seres queridos estén siempre acompañados, con amor y atención dedicados, incluye:",
    listItems: ["- Citas médicas", "- Paseo", "- Actividades de ocio"],
    buttonText: "Añadir al carrito",
    imageSrc: "../../public/img/abuela.jpg",
    altText: "Una mujer de tercera edad riendo con otra mujer más joven",
  };

  return <SectionServices {...companionData} />;
}

export default CompanionSection;