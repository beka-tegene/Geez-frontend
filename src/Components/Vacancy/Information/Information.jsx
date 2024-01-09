import { ExpandLess, ExpandMore, FiberManualRecord } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getVacancyData } from "../../../Utils/Store/MediaStore";
import moment from "moment";
import parse from "html-react-parser";
const Information = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const dispatch = useDispatch();

  const Vacancys = useSelector((state) => state.MediaStore.outputVacnacy);
  useEffect(() => {
    dispatch(getVacancyData());
  }, [dispatch]);
  const CurrentDate = new Date();
  const filterDeadline = Vacancys?.vacancies?.filter((item) => {
    const vacancyDeadline = new Date(item.DeadLine);
    return vacancyDeadline.getTime() >= CurrentDate.getTime();
  });
  return (
    <Stack
      sx={{ backgroundColor: "#F7F7F7", padding: "2rem 5%" }}
      alignItems={"center"}
      gap={2}
    >
      <Typography fontSize={"14px"} color={"#EF9B01"}>
        Ge'ez Bank Vacancy
      </Typography>
      <Typography fontSize={"30px"} fontWeight={"bold"} color={"#3348BB"}>
        Welcome to Ge'ez bank vacancy portal system.
      </Typography>
      <Stack
        direction={"row"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        width={"100%"}
        gap={2}
      >
        <Grid container spacing={1} gap={1} alignItems={"flex-start"}>
          {filterDeadline?.map((vacancy, index) => (
            <Grid
              key={index}
              item
              xs={5.95}
              sx={{
                background: "#FFFFFF",
                px: 2,
                py: 3,
                borderRadius: 1,
                boxShadow: 1,
              }}
            >
              <Stack gap={1} alignItems={"flex-start"}>
                <Typography
                  fontSize={"11px"}
                  color={"red"}
                  textAlign={"right"}
                  width={"100%"}
                >
                  {moment(vacancy.DeadLine).fromNow()} Left
                </Typography>

                <Typography>
                  <b style={{ color: "#EF9B01" }}>Vacancy Number: </b>{" "}
                  <span>{vacancy.Vacancy_Number}</span>
                </Typography>
                <Typography>
                  <b style={{ color: "#EF9B01" }}>Position: </b>{" "}
                  <span>{vacancy.Position}</span>
                </Typography>
                <Typography>
                  <b style={{ color: "#EF9B01" }}>Category: </b>{" "}
                  <span>{vacancy.Category}</span>
                </Typography>
                <Typography>
                  <b style={{ color: "#EF9B01" }}>Posted Date: </b>{" "}
                  <span>{moment(vacancy.posted_Date).fromNow()} </span>
                </Typography>
                <Typography>
                  <b style={{ color: "#EF9B01" }}>DeadLine: </b>{" "}
                  <span>{moment(vacancy.DeadLine).calendar()} </span>
                </Typography>
                <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{ width: "100%" }}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Show More</Typography>
                  {expanded === `panel${index}` ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </AccordionSummary>
                <AccordionDetails
                  sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                >
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>CGPA: </b>{" "}
                    <span>{vacancy.CGPA}</span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Total Experience:</b>{" "}
                    <span>{vacancy.Total_Experience} </span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Place of Work0: </b>{" "}
                    <span>{vacancy.Place_of_work}</span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Employment Type: </b>{" "}
                    <span>{vacancy.Employment_Type}</span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Career Level: </b>{" "}
                    <span>{vacancy.Career_level}</span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Company Profile:</b>{" "}
                    <span>{parse(vacancy.Company_Profile)}</span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Essential Functions: </b>{" "}
                    <br />
                    <span>
                      <b>Job Position:</b> {parse(vacancy.Position)} <br />
                      <b>Purpose of the Job:</b> {parse(vacancy.Purpose_of_the_Job)}
                      <br />
                      <b>Generic Functions:</b> {parse(vacancy.Generic_Functions)}
                      <br />
                      <b>Specific Functions:</b> {parse(vacancy.Specific_Functions)}
                    </span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Job Requirement:</b>{" "}
                    <span>
                      <br /> <b>Qualification:</b>
                      {parse(vacancy.Qualification)}
                      <br />
                      <b>Experience:</b> {parse(vacancy.Experience)}
                    </span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Note:</b>{" "}
                    <span>
                      <b>NB:</b>
                      {parse(vacancy.Note)}
                    </span>
                  </Typography>
                </AccordionDetails>
              </Accordion>
                <Stack
                  alignItems={"flex-end"}
                  justifyContent={"flex-end"}
                  width={"100%"}
                >
                  <Button
                    variant="contained"
                    onClick={() => navigate("/login")}
                  >
                    Login to Apply
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Card sx={{ p: 2, position: "sticky", top: "15%" }}>
          <Typography fontSize={"18px"} color={"#EF9B01"}>
            How to Apply?
          </Typography>
          <Stack sx={{ maxWidth: 345 }}>
            <Typography
              fontSize={"10px"}
              sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
            >
              <FiberManualRecord sx={{ fontSize: "12px" }} />
              For New Applicant, first you should have to create a new account.
            </Typography>
            <Typography
              fontSize={"10px"}
              sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
            >
              <FiberManualRecord sx={{ fontSize: "12px" }} />
              log in to the website.
            </Typography>
            <Typography
              fontSize={"10px"}
              sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
            >
              <FiberManualRecord sx={{ fontSize: "12px" }} />
              Please fill in all your required personal information.
            </Typography>
            <Typography
              fontSize={"10px"}
              sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
            >
              <FiberManualRecord sx={{ fontSize: "12px" }} />
              If you have working Experience, please go to the Experience tab
              and add all your working experiences starting from your recent
              experience. If you do not have experience yet, just go to the next
              step (Click the Next button).
            </Typography>
            <Typography
              fontSize={"10px"}
              sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
            >
              <FiberManualRecord sx={{ fontSize: "12px" }} />
              Select the vacancy you want to apply for and click the VIEW DETAIL
              button
            </Typography>
            <Typography
              fontSize={"10px"}
              sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
            >
              <FiberManualRecord sx={{ fontSize: "12px" }} />
              Select the area of vacancy you want to apply (location), then
              click the APPLY button
            </Typography>
            <Typography
              fontSize={"10px"}
              sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
            >
              <FiberManualRecord sx={{ fontSize: "12px" }} />
              Check your personal information before you submit your
              application. If your information is not correct, click the EDIT
              INFORMATION button to update your information. After that go to
              step 5 to submit your application. If your information is correct,
              select the place where you see the vacancy post and check agreed
              to the information button is ticked (checked).
            </Typography>
            <Typography
              fontSize={"10px"}
              sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
            >
              <FiberManualRecord sx={{ fontSize: "12px" }} />
              Please click SUBMIT YOUR APPLICATION button to submit your
              application.
            </Typography>
            <Typography
              fontSize={"10px"}
              sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
            >
              <FiberManualRecord sx={{ fontSize: "12px" }} />
              Application success message will be displayed.
            </Typography>
            <Typography fontSize={"12px"}>
              <b style={{ color: "red" }}>Note</b>: if your working experience
              or educational qualification does not met the currently posted
              vacancy according to the mentioned requirement, the system will
              not entertain you!
            </Typography>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Information;
