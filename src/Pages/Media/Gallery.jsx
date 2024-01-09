import React from "react";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Footer/Footer";
import GalleryHeader from "../../Components/Media/Gallery/GalleryHeader";
import GalleryDetail from "../../Components/Media/Gallery/GalleryDetail";

const Gallery = () => {
    return (
        <Navbar>
            <GalleryHeader />
            <GalleryDetail />
            <Footer />
        </Navbar>
    );
};

export default Gallery;
