import React from "react";
import CustomerCare from "./CustomerCare";
import FAQ from "./FAQ";
import HelpDesk from "./HelpDesk";

const ContactUs: React.FC = () => {
  return (
    <>
      <HelpDesk />
      <FAQ />
      <CustomerCare />
    </>
  );
};

export default ContactUs;
