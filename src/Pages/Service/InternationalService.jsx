import React from "react";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Footer/Footer";
import InternationalHeader from "../../Components/Service/International/InternationalHeader";
import InternationalHero from "../../Components/Service/International/InternationalHero";

const InternationalService = () => {
  return (
    <Navbar>
      <InternationalHeader />
      <InternationalHero />
      <Footer />
    </Navbar>
  );
};

export default InternationalService;
