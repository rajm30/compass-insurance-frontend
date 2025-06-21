import { useEffect } from "react";
import InsuranceLayout from "../../components/InsuranceLayout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function MarineInsurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <InsuranceLayout
        title="Marine Insurance"
        description="Coverage for ships, cargo and logistics operations against maritime risks."
        features={[
          "Hull and machinery coverage",
          "Protection and indemnity",
          "Cargo insurance for imports/exports",
          "Freight insurance",
          "War and strike risks coverage",
          "General average contribution",
          "Salvage charges coverage",
        ]}
        whyChoose={[
          "Specialized marine underwriters",
          "Global network of surveyors",
          "Customs clearance assistance",
          "Multimodal transport coverage",
          "Prompt claims handling",
        ]}
        icon="ShipIcon"
        color="blue"
      />
      <Link to="/services" state={{ color: "blue" }} className="hidden" />
    </>
  );
}
