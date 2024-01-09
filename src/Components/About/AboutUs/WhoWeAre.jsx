import { ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import heroImage from "../../../Image/logo-trans.png";
import mission from "../../../Image/mission.png";
import vision from "../../../Image/vision.png";
import value from "../../../Image/value.png";

const WhoWeAre = () => {
  return (
    <Stack
      sx={{
        padding: "6rem 5%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Stack direction={"row"} gap={"25%"}>
        <Stack
          sx={{ width: "40%" }}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          gap={2}
        >
          <Stack>
            <Typography fontSize={"20px"} fontWeight={"bold"} color={"#EF9B01"}>
              Who We Are
            </Typography>
            <Typography fontSize={"40px"} fontWeight={"bold"} color={"#3348BB"}>
              Way to your success!
            </Typography>
          </Stack>
          <Typography>
            To meet the pressing needs of the public, and to contribute a
            milestone in the development of our country financial sector, Geez
            bank has come to existence. It has placed its groundwork through the
            unreserved commitment, hard work, due diligence, strong willpower of
            its organizers. These qualities, as its hallmark, will lead the way
            to feeding the banking sector with fund and reach out people with
            the mind of investment, innovations, and entrepreneurship.
          </Typography>
        </Stack>
        <ImageListItem sx={{ width: 345 }}>
          <img src={heroImage} alt="heroImage" />
        </ImageListItem>
      </Stack>
      <Stack
        direction={"row"}
        JustifyContent={"space-around"}
        sx={{ padding: "2rem 0" }}
      >
        <Stack alignItems={"center"} sx={{ width: "40%" }} gap={2}>
          <ImageListItem sx={{ width: 80 }}>
            <img src={vision} alt="vision" />
          </ImageListItem>
          <Typography variant="h5" fontWeight={"bold"}>
            Vision
          </Typography>
          <Typography sx={{ textAlign: "center", width: "85%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia
            maxime debitis ullam
          </Typography>
        </Stack>
        <Stack alignItems={"center"} sx={{ width: "40%" }} gap={2}>
          <ImageListItem sx={{ width: 80 }}>
            <img src={mission} alt="mission" />
          </ImageListItem>
          <Typography variant="h5" fontWeight={"bold"}>
            Mission
          </Typography>
          <Typography sx={{ textAlign: "center", width: "85%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia
            maxime debitis ullam
          </Typography>
        </Stack>
        <Stack alignItems={"center"} sx={{ width: "40%" }} gap={2}>
          <ImageListItem sx={{ width: 80 }}>
            <img src={value} alt="value" />
          </ImageListItem>
          <Typography variant="h5" fontWeight={"bold"}>
            Core Value
          </Typography>
          <Typography sx={{ textAlign: "center", width: "85%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia
            maxime debitis ullam
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WhoWeAre;
