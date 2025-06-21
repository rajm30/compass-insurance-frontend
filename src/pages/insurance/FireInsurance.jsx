import { useEffect } from "react";
import InsuranceLayout from "../../components/InsuranceLayout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function FireInsurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <InsuranceLayout
        title="Fire Insurance"
        description="Coverage against fire-related damages for residential and commercial properties."
        features={[
          "Coverage for fire and lightning damage",
          "Explosion/implosion coverage",
          "Aircraft damage protection",
          "Riot, strike and malicious damage",
          "Bursting/overflowing of water tanks",
          "Earthquake and flood coverage",
          "Spontaneous combustion coverage",
        ]}
        whyChoose={[
          "Specialized risk assessment",
          "Flexible policy terms",
          "Quick survey and claim settlement",
          "Industrial and commercial risk coverage",
          "Transparent underwriting process",
        ]}
        icon="AlertTriangleIcon"
        color="blue"
      />
      <Link to="/services" state={{ color: "pink" }} className="hidden" />
    </>
  );
}
