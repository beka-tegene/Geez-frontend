import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
  AccordionActions,
  Button,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVacancyData } from "../../../Utils/Store/MediaStore";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import parse from "html-react-parser";
import moment from "moment";

const Apply = () => {
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
  const token = Cookies.get("token");
  const decodedToken = jwt_decode(token);
  const NotAppliedVacancy = filterDeadline?.filter((item) => {
    return (
      !item.AppliedPeople ||
      item.AppliedPeople.length === 0 ||
      !item.AppliedPeople.some((Apply) => Apply.Id === decodedToken.data._id)
    );
  });

  // AppliedPeople
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
      <Grid container spacing={1} gap={1} alignItems={"flex-start"}>
        {NotAppliedVacancy?.map((vacancy, index) => (
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
                <span>{vacancy.posted_Date}</span>
              </Typography>
              <Typography>
                <b style={{ color: "#EF9B01" }}>DeadLine: </b>{" "}
                <span>{vacancy.DeadLine}</span>
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
                      <b>Purpose of the Job:</b>{" "}
                      {parse(vacancy.Purpose_of_the_Job)}
                      <br />
                      <b>Generic Functions:</b>{" "}
                      {parse(vacancy.Generic_Functions)}
                      <br />
                      <b>Specific Functions:</b>{" "}
                      {parse(vacancy.Specific_Functions)}
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
                <AccordionActions>
                  <Button variant="contained">Apply</Button>
                </AccordionActions>
              </Accordion>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Apply;
