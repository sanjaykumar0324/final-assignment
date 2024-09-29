import React from "react";
import CustomerCare from "./sections/CustomerCare";
import FAQ from "./sections/FAQ";
import HelpDesk from "./sections/HelpDesk";
import HeroContactUs from "./sections/HeroContactUs";
import Layout from "../../layout/Layout";

const ContactUs: React.FC = () => {
  return (
    <>
      <Layout>
        <HeroContactUs />
        <HelpDesk />
        <FAQ />
        <CustomerCare />
      </Layout>
    </>
  );
};

export default ContactUs;
