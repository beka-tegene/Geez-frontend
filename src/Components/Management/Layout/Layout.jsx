import { Stack } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      width={"100%"}
    >
      <Sidebar />
      <Stack width={"84.5%"}>
        <Navbar />
        {props.children}
      </Stack>
    </Stack>
  );
};

export default Layout;
