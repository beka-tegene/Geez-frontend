import React from "react";
import bg from "../../Image/Frame 24.png";
import { ImageListItem, Stack, Typography } from "@mui/material";

const Motto = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#F7F7F7",
        position: "relative",
        height: "40dvh",
        width: "100%",
      }}
    >
      <ImageListItem
        sx={{
          width: "100%",
        }}
      >
        <img
          src={bg}
          alt="bg"
          style={{ maxHeight: "40dvh", minHeight: "40dvh", width: "100%" }}
        />
      </ImageListItem>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#07195270", 
        }}
      ></div>
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "5%",
        }}
      >
        <Typography fontSize={"14px"} color={"#EF9B01"}>
          Ge’ez Bank
        </Typography>
        <Typography fontSize={"40px"} fontWeight={"bold"} color={"#FFFFFF"}>
          way to your success!
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Motto;
