import { ImageList, Pagination, Stack } from "@mui/material";
import React, { useEffect } from "react";
import GalleryCard from "./GalleryCard";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryData } from "../../../Utils/Store/MediaStore";

const GalleryDetails = () => {
  const dispatch = useDispatch();

  const Image = useSelector((state) => state.MediaStore.outputGallery);
  useEffect(() => {
    dispatch(getGalleryData());
  }, [dispatch]);
  console.log(Image);
  return (
    <Stack>
      <ImageList
        sx={{ padding: "3rem 3%", width: "100%",gap:8 }}
        cols={4}
        variant="standard"
      >
        {Image?.gallerys?.map((item, index) => (
          <GalleryCard key={index} image={item.image} />
        ))}
      </ImageList>
      <Stack alignItems={"center"} spacing={2} pt={8} pb={4}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </Stack>
  );
};

export default GalleryDetails;
