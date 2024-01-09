import React from "react";
import Header from "../../Layout/Header";
import { Box, ImageListItem, Stack } from "@mui/material";
import logo from "../../../Image/Group 1.png";
import { Link, useNavigate } from "react-router-dom";
const VacancyNavbar = (props) => {
  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  };
  const navigate = useNavigate();

  const services = (s) => {
    navigate(`/${s}`);
  };
  return (
    <Box>
      <Header />
      <Stack
        direction={"row"}
        position={"sticky"}
        top={0}
        sx={{
          height: "11dvh",
          backgroundColor: "#272727",
          padding: "0.5rem 5%",
          zIndex: 1,
        }}
        justifyContent={"space-between"}
      >
        <ImageListItem onClick={() => services("")}>
          <img src={logo} alt="logo" />
        </ImageListItem>
        <Stack direction={"row"} alignItems={"center"} gap={5}>
          <Stack direction={"row"} gap={3} alignItems={"center"}>
            <Link style={linkStyle} to={"/vacancy"}>
              Vacancy
            </Link>
            <Link style={linkStyle} to={"/login"}>
              Login
            </Link>
            <Link style={linkStyle} to={"/register"}>
              Register
            </Link>
          </Stack>
        </Stack>
      </Stack>
      {props.children}
    </Box>
  );
};

export default VacancyNavbar;
