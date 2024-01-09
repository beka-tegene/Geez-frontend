import { ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import aboutusImage from "../../../Image/Frame 10.png";

const AnnualReportHeader = () => {
  return (
    <Stack>
      <ImageListItem sx={{ position: "relative", top: 0, left: 0 }}>
        <img
          src={aboutusImage}
          alt="hero"
          style={{
            maxHeight: "24dvh",
            minHeight: "24dvh",
            width: "100%",
          }}
        />
        <Typography
          variant="h2"
          color={"#EF9B01"}
          sx={{
            fontWeight: "Bold",
            letterSpacing: 4,
            m: 1,
            position: "absolute",
            top: "30%",
            left: "5%",
          }}
        >
          Ge'ez Bank AnnualReport
        </Typography>
      </ImageListItem>
    </Stack>
  );
};

export default AnnualReportHeader;
