import { Box, ImageListItem, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPartnerData } from "../../Utils/Store/MediaStore";
const WorkingWithUs = () => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;
    const scrollRight = () => {
      const scrollAmount = 1;
      container.scrollLeft += scrollAmount;
      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }
    };
    scrollInterval = setInterval(scrollRight, 30);
    return () => clearInterval(scrollInterval);
  }, []);
  const Image = useSelector((state) => state.MediaStore.outputPartner);
  useEffect(() => {
    dispatch(getPartnerData());
  }, [dispatch]);
  return (
    <Box
      sx={{
        padding: "6rem 5%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Stack alignItems={"center"}>
        <Typography fontSize={"14px"} color={"#EF9B01"}>
          Companies Working With Us
        </Typography>
        <Typography fontSize={"40px"} fontWeight={"bold"} color={"#3348BB"}>
          Money Transfer Companies Working With Us
        </Typography>
      </Stack>
      <div
        style={{
          width: "100%",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          position: "relative",
        }}
      >
        <style>
          {`
                ::-webkit-scrollbar {
                    display: none;
                }
            `}
        </style>
        <Stack
          direction={"row"}
          gap={3}
          sx={{
            width: "100%",
            padding: "1rem",
            overflowX: "auto",
            "& > *": { flex: "0 0 225px", minWidth: 225, maxWidth: 225 },
            transform: "translateX(0)",
          }}
          ref={containerRef}
        >
          {Image?.partner?.map((item, index) => (
            <ImageListItem key={index}>
              <img src={item.image} alt="partner" />
            </ImageListItem>
          ))}
        </Stack>
      </div>
    </Box>
  );
};

export default WorkingWithUs;
