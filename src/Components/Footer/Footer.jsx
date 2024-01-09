import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Icon,
  IconButton,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import {
  LocationOn,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import logo from "../../Image/Group 1.png";
import heroImage from "../../Image/logo-trans.png";
import { FaSwift } from "react-icons/fa";

const Footer = () => {
  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  };
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#071952",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        sx={{ padding: "2rem 5% 2rem" }}
      >
        <Stack gap={1}>
          <Typography color={"#FFFFFF"}>Contacts</Typography>
          <Stack
            direction={"row"}
            gap={1}
            sx={{
              "&:hover": { color: "#EF9B01", cursor: "pointer" },
              color: "#FFFFFF",
            }}
          >
            <Icon>
              <FaSwift sx={{ fontSize: "20px" }} />
            </Icon>
            <Typography>Swift Code: GEEZ</Typography>
          </Stack>
          <Stack
            direction={"row"}
            gap={1}
            sx={{
              "&:hover": { color: "#EF9B01", cursor: "pointer" },
              color: "white",
            }}
          >
            <Icon>
              <Email sx={{ fontSize: "25px" }} />
            </Icon>
            <Typography>info@geezbank.com.et</Typography>
          </Stack>
          <Stack
            direction={"row"}
            gap={1}
            sx={{
              "&:hover": { color: "#EF9B01", cursor: "pointer" },
              color: "white",
            }}
          >
            <Icon>
              <LocationOn sx={{ fontSize: "25px" }} />
            </Icon>
            <Stack>
              <Typography>
                Mekelle Office: Address: Office No 604, Momona Building,
                Mekelle, Tigrai, Ethiopia
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            gap={1}
            sx={{
              "&:hover": { color: "#EF9B01", cursor: "pointer" },
              color: "white",
            }}
          >
            <Icon>
              <LocationOn sx={{ fontSize: "25px" }} />
            </Icon>
            <Typography>info@geezbank.com.et</Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography color={"#FFFFFF"}>world</Typography>
          <Stack>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
          </Stack>
        </Stack>
        <Stack>
          <Typography color={"#FFFFFF"}>world</Typography>
          <Stack>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
          </Stack>
        </Stack>
        <Stack>
          <Typography color={"#FFFFFF"}>world</Typography>
          <Stack>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
            <Link style={{ display: "flex", alignItems: "center" }}>
              <Facebook /> hello
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ padding: ".5rem 5%", backgroundColor: "#FFFFFF" }}
        >
          <ImageListItem sx={{ width: 345 }}>
            <img src={heroImage} alt="heroImage" />
          </ImageListItem>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ padding: ".5rem 5%", backgroundColor: "#272727" }}
      >
        <Typography color={"#FFFFFF"}>
          Copyright© 2023 Ge'ez Bank S.C. | All Rights Reserved
        </Typography>
        <ImageListItem onClick={() => navigate("/")}>
          <img src={logo} alt="logo" style={{ maxHeight: "50px" }} />
        </ImageListItem>
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <IconButton
            style={linkStyle}
            onClick={() => window.open("http://www.facebook.com", "_block")}
          >
            <Facebook />
          </IconButton>
          <IconButton
            style={linkStyle}
            onClick={() => window.open("http://www.facebook.com", "_block")}
          >
            <Twitter />
          </IconButton>
          <IconButton
            style={linkStyle}
            onClick={() => window.open("http://www.facebook.com", "_block")}
          >
            <Instagram />
          </IconButton>
          <IconButton
            style={linkStyle}
            onClick={() => window.open("http://www.facebook.com", "_block")}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            style={linkStyle}
            onClick={() => window.open("http://www.facebook.com", "_block")}
          >
            <Telegram />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
