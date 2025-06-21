import { useEffect } from "react";
import InsuranceLayout from "../../components/InsuranceLayout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function PersonalAccidentInsurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <InsuranceLayout
        title="Personal Accident Insurance"
        description="Financial protection against accidental injuries, disability or death."
        features={[
          "Accidental death coverage",
          "Permanent total disability benefit",
          "Permanent partial disability benefit",
          "Temporary total disability benefit",
          "Hospitalization expenses coverage",
          "Ambulance charges coverage",
          "Education benefit for children",
        ]}
        whyChoose={[
          "Worldwide coverage",
          "No medical tests required",
          "Lump sum payout for claims",
          "Flexible coverage amounts",
          "24/7 accident helpline",
        ]}
        icon="UserIcon"
        color="blue"
      />
      <Link to="/services" state={{ color: "cyan" }} className="hidden" />
    </>
  );
}
