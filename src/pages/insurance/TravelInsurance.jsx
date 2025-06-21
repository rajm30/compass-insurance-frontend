import { useEffect } from "react";
import InsuranceLayout from "../../components/InsuranceLayout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function TravelInsurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <InsuranceLayout
        title="Travel Insurance"
        description="Protection for domestic and international trips with medical, baggage and trip delay coverage."
        features={[
          "Medical expenses coverage abroad",
          "Trip cancellation/interruption protection",
          "Lost baggage and personal effects coverage",
          "Flight delay compensation",
          "Emergency medical evacuation",
          "24/7 worldwide assistance",
          "Personal accident cover during travel",
        ]}
        whyChoose={[
          "Single trip and multi-trip options",
          "Schengen visa compliant policies",
          "Adventure sports coverage available",
          "Instant policy issuance",
          "Cashless hospitalization overseas",
        ]}
        icon="PlaneIcon"
        color="blue"
      />
      <Link to="/services" state={{ color: "indigo" }} className="hidden" />
    </>
  );
}
