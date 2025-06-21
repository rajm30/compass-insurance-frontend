import { useEffect } from "react";
import InsuranceLayout from "../../components/InsuranceLayout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function WorkmenCompensation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <InsuranceLayout
        title="Workmen Compensation"
        description="Insurance coverage for employers against liabilities arising from employee injuries."
        features={[
          "Coverage as per Workmen Compensation Act",
          "Death benefit to dependents",
          "Permanent total disability benefit",
          "Temporary disability benefit",
          "Medical expenses reimbursement",
          "Legal liability coverage",
          "Occupational disease coverage",
        ]}
        whyChoose={[
          "Compliance with labor laws",
          "Risk assessment services",
          "Safety training programs",
          "Flexible premium payment",
          "Dedicated claims support",
        ]}
        icon="HammerIcon"
        color="blue"
      />
      <Link to="/services" state={{ color: "green" }} className="hidden" />
    </>
  );
}
