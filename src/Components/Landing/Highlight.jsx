import React from "react";
import bg from "../../Image/Frame 15.png";
import { ImageListItem, Stack, Typography } from "@mui/material";

const Highlight = () => {
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
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          width: "100%",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          padding: "0 5%",
          color: "#FFFFFF",
        }}
      >
        <Stack>
          <Typography fontSize={"40px"} fontWeight={"bold"} color={"#FFFFFF"}>
            100k+
          </Typography>
          <Typography fontSize={"14px"} color={"#EF9B01"}>
            way to
          </Typography>
        </Stack>
        <Stack>
          <Typography fontSize={"40px"} fontWeight={"bold"} color={"#FFFFFF"}>
            100k+
          </Typography>
          <Typography fontSize={"14px"} color={"#EF9B01"}>
            wayto
          </Typography>
        </Stack>
        <Stack>
          <Typography fontSize={"40px"} fontWeight={"bold"} color={"#FFFFFF"}>
            100k+
          </Typography>
          <Typography fontSize={"14px"} color={"#EF9B01"}>
            way t o
          </Typography>
        </Stack>
        <Stack>
          <Typography fontSize={"40px"} fontWeight={"bold"} color={"#FFFFFF"}>
            100k+
          </Typography>
          <Typography fontSize={"14px"} color={"#EF9B01"}>
            wayt
          </Typography>
        </Stack>
        <Stack>
          <Typography fontSize={"40px"} fontWeight={"bold"} color={"#FFFFFF"}>
            100k+
          </Typography>
          <Typography fontSize={"14px"} color={"#EF9B01"}>
            way to
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Highlight;
