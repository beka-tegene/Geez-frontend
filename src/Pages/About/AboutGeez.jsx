import React from "react";
import AboutHeader from "../../Components/About/AboutUs/AboutHeader";
import WhoWeAre from "../../Components/About/AboutUs/WhoWeAre";
import Ownership from "../../Components/About/AboutUs/Ownership";
import Timeline from "../../Components/About/AboutUs/Timeline";
import Partnership from "../../Components/About/AboutUs/Partnership";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Footer/Footer";

const AboutGeez = () => {
    return (
        <Navbar>
            <AboutHeader/>
            <WhoWeAre />
            <Ownership/>
            <Timeline/>
            <Partnership/>
            <Footer/>
        </Navbar>
    );
};

export default AboutGeez;
