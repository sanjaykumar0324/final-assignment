import React from "react";
import CustomerCare from "./sections/CustomerCare";
import FAQ from "./sections/FAQ";
import HelpDesk from "./sections/HelpDesk";
import ServiceContactUs from "./sections/ServiceContactUs";

const ContactUs: React.FC = () => {
  return (
    <>
      <ServiceContactUs />
      <HelpDesk />
      <FAQ />
      <CustomerCare />
    </>
  );
};

export default ContactUs;
