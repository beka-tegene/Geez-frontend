import React from "react";
// import Header from "../../Layout/Header";
import { Box, ImageListItem, Stack } from "@mui/material";
import logo from "../../../Image/Group 1.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const InnerNavbar = (props) => {
  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  };
  // const navigate = useNavigate();

  // const services = (s) => {
  //   navigate(`/${s}`);
  // };
  return (
    <Box>
      {/* <Header /> */}
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
        <ImageListItem >
          <img src={logo} alt="logo" />
        </ImageListItem>
        <Stack direction={"row"} alignItems={"center"} gap={5}>
          <Stack direction={"row"} gap={3} alignItems={"center"}>
            <Link style={linkStyle} to={"/dashboard"}>
              New Vacancy
            </Link>
            <Link style={linkStyle} to={"/applied-vacancy"}>
              Applied Vacancy
            </Link>
            <Link style={linkStyle} to={"/personal-information"}>
              Personal Information
            </Link>
            <Link style={linkStyle} to={"/change-password"}>
              Change Password
            </Link>
            <Link
              style={linkStyle}
              onClick={() => {
                localStorage.clear();
                Cookies.remove("token");
                window.location.href = "/login";
              }}
            >
              Logout
            </Link>
          </Stack>
        </Stack>
      </Stack>
      {props.children}
    </Box>
  );
};

export default InnerNavbar;
