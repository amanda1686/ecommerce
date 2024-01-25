import React from "react";
import SectionServices from "../componentes/SectionServices";

function PurchaseSection() {
  const purchaseData = {
    title: "Compra",
    subTitle:
      "Confía en GoldenHands para brindar a tus mayores el apoyo y las provisiones necesarias para un hogar feliz y saludable.",
    description:
      "Permítenos ser el vínculo de confianza que necesitas para garantizar que tus seres queridos siempre tengan las provisiones adecuadas para vivir de manera plena y segura, incluye:",
    listItems: [
      "- Realizar la compra",
      "- Elaboración de alimentos",
      "- Asistencia de nutrición",
    ],
    buttonText: "Añadir al carrito",
    imageSrc: "../../public/img/compra.jpg",
    altText: "Una mujer pagando en la caja de un supermercado",
  };

  return <SectionServices {...purchaseData} />;
}

export default PurchaseSection;