import React from "react";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Footer/Footer";
import LoanHeader from "../../Components/Service/Loan/LoanHeader";
import LoanHero from "../../Components/Service/Loan/LoanHero";

const LoanService = () => {
  return (
    <Navbar>
      <LoanHeader />
      <LoanHero />
      <Footer />
    </Navbar>
  );
};

export default LoanService;
