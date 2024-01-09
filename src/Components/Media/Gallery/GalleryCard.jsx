import { ImageListItem } from "@mui/material";
import React from "react";

const GalleryCard = (props) => {
  return (
    <ImageListItem sx={{ maxWidth: "98%" }}>
      <img src={props.image} alt="gallery" />
    </ImageListItem>
  );
};

export default GalleryCard;
