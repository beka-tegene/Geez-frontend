import React from "react";
import Navbar from "../../Components/Layout/Navbar";
import LocalHero from "../../Components/Service/Local/LocalHero";
import LocalJoin from "../../Components/Service/Local/LocalJoin";
import LocalProducts from "../../Components/Service/Local/LocalProducts";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Service/Local/Header";

const LocalService = () => {
  return (
    <Navbar>
      <Header />
      <LocalHero />
      <LocalJoin />
      <LocalProducts />
      <Footer />
    </Navbar>
  );
};

export default LocalService;
