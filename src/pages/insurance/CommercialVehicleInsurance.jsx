import { useEffect } from "react";
import InsuranceLayout from "../../components/InsuranceLayout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function CommercialVehicleInsurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <InsuranceLayout
        title="Commercial Vehicle Insurance"
        description="Specialized coverage for trucks, buses, taxis and other commercial vehicles operating in India."
        features={[
          "Coverage for goods carrying and passenger vehicles",
          "Protection against accidents, theft and natural calamities",
          "Third-party liability coverage",
          "Add-on covers like electrical accessories, NCB protection",
          "Legal liability to paid driver and cleaners",
          "24/7 roadside assistance",
        ]}
        whyChoose={[
          "Specialized policies for different commercial vehicles",
          "Fleet discounts available for multiple vehicles",
          "Quick claim settlement for business continuity",
          "Dedicated relationship manager for commercial clients",
          "Pan-India network of garages",
        ]}
        icon="TruckIcon"
        color="blue"
      />
      <Link to="/services" state={{ color: "purple" }} className="hidden" />
    </>
  );
}
