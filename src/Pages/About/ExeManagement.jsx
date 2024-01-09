import React from "react";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Footer/Footer";
import ExeManHeader from "../../Components/About/ExecutiveManagement/ExeManHeader"
import ExeManagement from "../../Components/About/ExecutiveManagement/ExeManagement"

const ExecutiveManagement = () => {
    return (
        <Navbar>
            <ExeManHeader/>
            <ExeManagement/>
            <Footer />
        </Navbar>
    );
};

export default ExecutiveManagement;
