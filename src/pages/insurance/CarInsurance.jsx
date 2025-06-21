import { useEffect } from "react";
import InsuranceLayout from "../../components/InsuranceLayout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function CarInsurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <InsuranceLayout
        title="Car Insurance"
        description="Comprehensive coverage for your personal vehicles with protection against accidents, theft, and natural calamities."
        features={[
          "Coverage for damages due to accidents, theft, natural calamities",
          "Third-party liability coverage as per Motor Vehicles Act",
          "Add-on covers like zero depreciation, engine protection",
          "24/7 roadside assistance across India",
          "Cashless repairs at network garages",
          "Personal accident cover for owner-driver",
        ]}
        whyChoose={[
          "Wide network of 4000+ garages across India",
          "Quick claim settlement with 95% satisfaction rate",
          "Flexible premium payment options",
          "Instant policy issuance with digital documents",
          "Special discounts for safe drivers",
        ]}
        icon="CarIcon"
        color="blue"
      />
      <Link to="/services" state={{ color: "blue" }} className="hidden" />
    </>
  );
}
