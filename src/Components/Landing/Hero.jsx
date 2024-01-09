import React, { useCallback, useEffect, useState } from "react";
import { IconButton, ImageListItem, Stack } from "@mui/material";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getHeroGalleryData } from "../../Utils/Store/MediaStore";

const Hero = () => {
  const HeroImage = useSelector((state) => state.MediaStore.outputHeroGallery);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHeroGalleryData());
  }, [dispatch]);
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [HeroImage?.hero];
  const intervalDuration = 3000;
  const handlePrevClick = () => {
    setHeroIndex(
      (prevIndex) => (prevIndex - 1 + heroImages[0]?.length) % heroImages[0]?.length
    );
  };

  const handleNextClick = () => {
    setHeroIndex((prevIndex) => (prevIndex + 1) % heroImages[0]?.length);
  };

  const autoChangeImage = useCallback(() => {
    setHeroIndex((prevIndex) => (prevIndex + 1) % heroImages[0]?.length);
  }, [heroImages[0]?.length]);

  useEffect(() => {
    const timer = setInterval(autoChangeImage, intervalDuration);

    return () => {
      clearInterval(timer);
    };
  }, [autoChangeImage]);

  return (
    <Stack
      sx={{
        backgroundColor: "#F7F7F7",
        position: "relative",
        height: "83dvh",
        width: "100%",
      }}
    >
      {HeroImage.hero?.map((item, index) => (
        <ImageListItem
          key={index}
          sx={{
            opacity: index === heroIndex ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            position: "absolute",
            width: "100%",
            top: 0,
          }}
        >
          <img
            src={item.image}
            alt="hero"
            style={{ maxHeight: "83dvh", minHeight: "83dvh", width: "100%" }}
          />
        </ImageListItem>
      ))}
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
        }}
        onClick={handlePrevClick}
      >
        <ArrowCircleLeft sx={{ fontSize: "32px", color: "#EF9B01" }} />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
        }}
        onClick={handleNextClick}
      >
        <ArrowCircleRight sx={{ fontSize: "32px", color: "#EF9B01" }} />
      </IconButton>
    </Stack>
  );
};

export default Hero;
