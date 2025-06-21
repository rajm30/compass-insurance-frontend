import { useEffect } from "react";
import InsuranceLayout from "../../components/InsuranceLayout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function HomeInsurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <InsuranceLayout
        title="Home Insurance"
        description="Protection for your home and belongings against fire, theft and natural calamities."
        features={[
          "Building and contents coverage",
          "Protection against fire, earthquakes, floods",
          "Burglary and theft coverage",
          "Alternative accommodation expenses",
          "Public liability coverage",
          "Electronics and appliances coverage",
          "Jewelry and valuables coverage (optional)",
        ]}
        whyChoose={[
          "New-for-old replacement",
          "Flexible sum insured options",
          "Discounts for security systems",
          "Quick claim settlement",
          "24/7 emergency assistance",
        ]}
        icon="HomeIcon"
        color="blue"
      />
      <Link to="/services" state={{ color: "teal" }} className="hidden" />
    </>
  );
}
