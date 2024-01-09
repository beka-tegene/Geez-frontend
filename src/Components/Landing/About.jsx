import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import heroImage from "../../Image/logo-trans.png";
import mission from "../../Image/mission.png";
import vision from "../../Image/vision.png";
import value from "../../Image/value.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        padding: "6rem 5%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Stack direction={"row"} justifyContent={"space-around"}>
        <Stack
          sx={{ width: "40%" }}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          gap={2}
        >
          <Stack>
            <Typography fontSize={"14px"} color={"#EF9B01"}>
              welcome to Ge’ez Bank
            </Typography>
            <Typography fontSize={"40px"} fontWeight={"bold"} color={"#3348BB"}>
              way to your success!
            </Typography>
          </Stack>
          <Typography>
            To meet the pressing needs of the public, and to contribute a
            milestone in the development of our country's financial sector,
            Ge'ez bank has come to existence. It has placed its groundwork
            through the unreserved commitment, hard work, due diligence, strong
            willpower of its organizers. These qualities, as its hallmark, will
            lead the way to feeding the banking sector with fund and reach out
            people with the mind of investment, innovations, and
            entrepreneurship.
          </Typography>
          <Button variant="contained" onClick={() => navigate("/about-us")}>
            Discover more
          </Button>
        </Stack>
        <ImageListItem sx={{ width: 345 }}>
          <img src={heroImage} alt="heroImage" />
        </ImageListItem>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-around"}>
        <Card sx={{ maxWidth: 370 }}>
          <CardActionArea sx={{ padding: 5 }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <ImageListItem sx={{ width: 80 }}>
                <img src={vision} alt="vision" />
              </ImageListItem>
              <Typography variant="h5" fontWeight={"bold"}>
                Vision
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quia maxime debitis ullam
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 370 }}>
          <CardActionArea sx={{ padding: 5 }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <ImageListItem sx={{ width: 80 }}>
                <img src={mission} alt="mission" />
              </ImageListItem>
              <Typography variant="h5" fontWeight={"bold"}>
                Mission
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quia maxime debitis ullam
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 370 }}>
          <CardActionArea sx={{ padding: 5 }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <ImageListItem sx={{ width: 80 }}>
                <img src={value} alt="value" />
              </ImageListItem>
              <Typography variant="h5" fontWeight={"bold"}>
                Core Value
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quia maxime debitis ullam
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Box>
  );
};

export default About;
