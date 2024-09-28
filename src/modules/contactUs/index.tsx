import React from "react";
import CustomerCare from "./sections/CustomerCare";
import FAQ from "./sections/FAQ";
import HelpDesk from "./sections/HelpDesk";
import HeroContactUs from "./sections/HeroContactUs";

const ContactUs: React.FC = () => {
  return (
    <>
      <HeroContactUs />
      <HelpDesk />
      <FAQ />
      <CustomerCare />
    </>
  );
};

export default ContactUs;
