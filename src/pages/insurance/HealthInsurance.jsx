import { useEffect } from "react";
import InsuranceLayout from "../../components/InsuranceLayout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function HealthInsurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <InsuranceLayout
        title="Health Insurance"
        description="Medical coverage for individuals and families with cashless hospitalization across India."
        features={[
          "Coverage for hospitalization expenses",
          "Pre and post hospitalization cover",
          "Daycare procedures coverage",
          "Annual health check-ups",
          "Cashless treatment at 10,000+ network hospitals",
          "Maternity cover (optional)",
          "Critical illness cover (optional)",
        ]}
        whyChoose={[
          "Lifelong renewability",
          "Tax benefits under section 80D",
          "No claim bonus up to 100%",
          "Alternative treatments coverage (AYUSH)",
          "International treatment coverage available",
        ]}
        icon="HeartPulseIcon"
        color="blue"
      />
      <Link to="/services" state={{ color: "yellow" }} className="hidden" />
    </>
  );
}
