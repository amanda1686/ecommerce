import React from "react";
import CompanionSection from "../componentes/CompanionSection";
import PurchaseSection from "../componentes/PurchaseSection";
import CleaningSection from "../componentes/CleaningSection";

function Services() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">
        Nuestros Servicios
      </h1>

      <CompanionSection />
      <PurchaseSection />
      <CleaningSection />
    </div>
  );
}

export default Services;
