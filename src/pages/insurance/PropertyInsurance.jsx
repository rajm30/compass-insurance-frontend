import { useEffect } from "react";
import InsuranceLayout from "../../components/InsuranceLayout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function PropertyInsurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <InsuranceLayout
        title="Property Insurance"
        description="Comprehensive coverage for residential and commercial properties against multiple risks."
        features={[
          "Building and structure coverage",
          "Contents and inventory protection",
          "Rental income loss coverage",
          "Public liability coverage",
          "Architect and surveyor fees",
          "Debris removal coverage",
          "Temporary relocation expenses",
        ]}
        whyChoose={[
          "Tailored policies for different property types",
          "Competitive premium rates",
          "Risk improvement recommendations",
          "Large sum insured capabilities",
          "Dedicated claims support",
        ]}
        icon="BuildingIcon"
        color="blue"
      />
      <Link to="/services" state={{ color: "orange" }} className="hidden" />
    </>
  );
}
