import { useEffect } from "react";
import InsuranceLayout from "../../components/InsuranceLayout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function ThirdPartyInsurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <InsuranceLayout
        title="Third Party Insurance"
        description="Mandatory coverage for liability to third parties as required by Indian Motor Vehicles Act."
        features={[
          "Covers legal liability for death/injury to third party",
          "Covers damage to third party property",
          "Mandatory as per Motor Vehicles Act",
          "Affordable premium rates",
          "Basic protection against legal liabilities",
        ]}
        whyChoose={[
          "Instant policy issuance",
          "Compliant with all legal requirements",
          "Transparent pricing with no hidden charges",
          "Easy online renewal process",
          "24/7 customer support",
        ]}
        icon="ShieldCheckIcon"
        color="blue"
      />
      <Link to="/services" state={{ color: "green" }} className="hidden" />
    </>
  );
}
