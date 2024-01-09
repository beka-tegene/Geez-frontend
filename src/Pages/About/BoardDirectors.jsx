import React from "react";
import BoardHeader from "../../Components/About/BoardOfDirectors/BoardHeader";
import Directors from "../../Components/About/BoardOfDirectors/Directors";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Footer/Footer";

const BoardDirectors = () => {
    return (
        <Navbar>
            <BoardHeader />
            <Directors />
            <Footer />
        </Navbar>
    );
};

export default BoardDirectors;
