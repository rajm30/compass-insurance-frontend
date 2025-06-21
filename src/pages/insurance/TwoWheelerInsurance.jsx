import { useEffect } from "react";
import InsuranceLayout from "../../components/InsuranceLayout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function TwoWheelerInsurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <InsuranceLayout
        title="Two Wheeler Insurance"
        description="Comprehensive protection for your bikes, scooters and motorcycles across India."
        features={[
          "Coverage for accidents, theft and natural calamities",
          "Third-party liability coverage as per law",
          "Add-on covers like zero depreciation, consumables",
          "24/7 roadside assistance",
          "Personal accident cover for rider",
          "Electrical accessories coverage",
        ]}
        whyChoose={[
          "Special discounts for anti-theft devices",
          "No-claim bonus protection available",
          "Instant policy issuance via WhatsApp/SMS",
          "Cashless repairs at 3000+ network garages",
          "Easy transfer of NCB from previous insurer",
        ]}
        icon="BikeIcon"
        color="blue"
      />
      <Link to="/services" state={{ color: "red" }} className="hidden" />
    </>
  );
}
