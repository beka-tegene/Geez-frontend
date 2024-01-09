import { FiberManualRecord } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  ImageListItem,
  List,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import bg from "../../../Image/Frame 24.png";
import vision from "../../../Image/vision.png";

const LocalHero = () => {
  return (
    <Stack
      sx={{
        padding: "6rem 5%",
        gap: 3,
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack
          //   sx={{ width: "40%" }}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          gap={2}
        >
          <Stack>
            <Typography fontSize={"14px"} color={"#EF9B01"}>
              Ge'ez Local Banking
            </Typography>
            <Typography fontSize={"40px"} fontWeight={"bold"} color={"#3348BB"}>
              Local Banking
            </Typography>
          </Stack>
          <Typography>
            Ge'ez Bank S.C. provide Local Banking services to its esteemed
            customers.
          </Typography>
          <Stack>
            <List sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <FiberManualRecord sx={{ fontSize: "16px" }} />7 % Interest
              bearing compounded monthly
            </List>
            <List sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <FiberManualRecord sx={{ fontSize: "16px" }} />
              Opened individually or jointly
            </List>
            <List sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <FiberManualRecord sx={{ fontSize: "16px" }} /> Can be opened with
              zero balance
            </List>
            <List sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <FiberManualRecord sx={{ fontSize: "16px" }} />
              Operated by passbook, debit card, mobile banking and internet
              banking
            </List>
          </Stack>
        </Stack>
        <ImageListItem sx={{ width: 500 }}>
          <img
            src={bg}
            alt="Local"
            style={{ maxHeight: "40dvh", minHeight: "40dvh" }}
          />
        </ImageListItem>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ p: "2rem 0" }}
      >
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
      </Stack>
    </Stack>
  );
};

export default LocalHero;
