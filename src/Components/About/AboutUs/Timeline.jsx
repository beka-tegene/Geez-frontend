import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import imagess1 from "../../../Image/Frame 10 (1).png";
import imagess2 from "../../../Image/Frame 10 (2).png";
import imagess3 from "../../../Image/Frame 10 (3).png";

const timelineData = [
  {
    year: "2011",
    image: imagess1,
    text: "Description for the year 2011",
  },
  {
    year: "2012",
    image: imagess2,
    text: "Description for the year 2012",
  },
  {
    year: "2013",
    image: imagess3,
    text: "Description for the year 2013",
  },
  {
    year: "2014",
    image: imagess3,
    text: "Description for the year 2014",
  },
  {
    year: "2015",
    image: imagess2,
    text: "Description for the year 2015",
  },
  {
    year: "2016",
    image: imagess1,
    text: "Description for the year 2016",
  },
];

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((activeStep + 1) % timelineData.length);
  };

  const handleBack = () => {
    setActiveStep((activeStep - 1 + timelineData.length) % timelineData.length);
  };

  return (
    <Stack
      alignItems={"center"}
      sx={{
        padding: "6rem 5%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography fontSize={"20px"} fontWeight={"bold"} color={"#EF9B01"}>
        Company History
      </Typography>
      <Typography fontSize={"40px"} fontWeight={"bold"} color={"#3348BB"}>
        Ge'ez Bank Timeline
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          style={{ backgroundColor: "transparent" }}
        >
          {timelineData.map((item, index) => (
            <Step key={item.year}>
              <StepButton color="primary" onClick={handleStep(index)}>
                {item.year}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div
          style={{
            width: "100%",
            overflowX: "hidden",
            backgroundColor: "#FAFAFA",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            position: "relative",
          }}
        >
          <style>
            {`
                ::-webkit-scrollbar {
                    display: none;
                }
                .scroll-container {
                    display: flex;
                    transition: transform 0.3s ease-in-out;
                  }
            `}
          </style>
          <div
            className="scroll-container"
            style={{
              transform: `translateX(-${activeStep * 420}px)`,
              transition: "transform 0.5s",
              display: "flex",
              width: `${timelineData.length * 420}px`,
            }}
          >
            {timelineData.map((item) => (
              <Card
                style={{
                  margin: "1rem",
                  minWidth: 420,
                  border: "2px solid #3348BB",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
                key={item.year}
              >
                <CardMedia component="img" image={item.image} alt={item.year} />
                <CardContent>
                  <Typography>{item.text}</Typography>
                </CardContent>
              </Card>
            ))}
            {timelineData.map((item) => (
              <Card
                style={{
                  margin: "1rem",
                  minWidth: 420,
                  border: "2px solid #3348BB",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
                key={item.year}
              >
                <CardMedia component="img" image={item.image} alt={item.year} />
                <CardContent>
                  <Typography>{item.text}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Box>
      <Stack direction="row" gap={2} sx={{ mt: 2 }}>
        <button
          style={{
            backgroundColor: "#3348BB",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={handleBack}
        >
          Previous
        </button>
        <button
          style={{
            backgroundColor: "#3348BB",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={handleNext}
        >
          Next
        </button>
      </Stack>
    </Stack>
  );
};

export default Timeline;
