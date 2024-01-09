import React from "react";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Footer/Footer";
import DownAndPubliHeader from "../../Components/Media/DownloadsAndPublications/DownAndPubliHeader";
import DPDocuments from "../../Components/Media/DownloadsAndPublications/DPDocuments";


const DownloadAndPublications = () => {
    return (
        <Navbar>
            <DownAndPubliHeader />
            <DPDocuments/>
            <Footer />
        </Navbar>
    );
};

export default DownloadAndPublications;
