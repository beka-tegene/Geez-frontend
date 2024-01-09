import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  Add,
  Delete,
  Download,
  Edit,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import parse from "html-react-parser";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVacancyData } from "../../../Utils/Store/MediaStore";
const VacancyManagement = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const Vacancys = useSelector((state) => state.MediaStore.outputVacnacy);
  useEffect(() => {
    dispatch(getVacancyData());
  }, [dispatch]);

  return (
    <Stack p={2} gap={2}>
      <Stack
        direction={"row"}
        alignContent={"center"}
        justifyContent={"flex-end"}
      >
        <Button
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
          variant="contained"
          onClick={() => navigate("/private/geezbank/vacancy-uploader")}
        >
          ADD New Vacancy
          <Add sx={{ fontSize: "20px" }} />
        </Button>
      </Stack>
      <Divider sx={{ height: "2px" }} />
      <Typography>Vacancy</Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"space-between"}
      >
        {Vacancys?.vacancies?.map((item, index) => (
          <Card
            sx={{
              width: "49%",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              p: 2,
              alignItems: "flex-start",
            }}
            key={index}
          >
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "100%",
                gap:2
              }}
            >
              <IconButton
                sx={{
                  color: "white",
                  background: "blue",
                  "&:hover": { color: "black" },
                }}
                component={Link}
                to={`/private/geezbank/edit-vacancy/${item._id}`}
              >
                <Edit />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  background: "red",
                  "&:hover": { color: "black" },
                }}
              >
                <Delete />
              </IconButton>
            </CardActions>
            <Stack gap={1} alignItems={"flex-start"} width={"100%"}>
              <Typography>
                <b style={{ color: "#EF9B01" }}>Vacancy Number: </b>{" "}
                <span>ABa/EVA/{item.Vacancy_Number}</span>
              </Typography>
              <Typography>
                <b style={{ color: "#EF9B01" }}>Position: </b>{" "}
                <span>{item.Position}</span>
              </Typography>
              <Typography>
                <b style={{ color: "#EF9B01" }}>Category: </b>{" "}
                <span>{item.Category}</span>
              </Typography>
              <Typography>
                <b style={{ color: "#EF9B01" }}>Posted Date: </b>{" "}
                <span>{item.posted_Date}</span>
              </Typography>
              <Typography>
                <b style={{ color: "#EF9B01" }}>DeadLine: </b>{" "}
                <span>{item.DeadLine}</span>
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
                    <span>{item.CGPA}</span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Total Experience:</b>{" "}
                    <span>{item.Total_Experience} </span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Place of Work0: </b>{" "}
                    <span>{item.Place_of_work}</span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Employment Type: </b>{" "}
                    <span>{item.Employment_Type}</span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Career Level: </b>{" "}
                    <span>{item.Career_level}</span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Company Profile:</b>{" "}
                    <span >{parse(item.Company_Profile)}</span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Essential Functions: </b>{" "}
                    <span>
                      <b>Job Position:</b> {parse(item.Position)} <br />
                      <b>Purpose of the Job:</b> {parse(item.Purpose_of_the_Job)}
                      <br />
                      <b>Generic Functions:</b> {parse(item.Generic_Functions)}
                      <br />
                      <b>Specific Functions:</b> {parse(item.Specific_Functions)}
                    </span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Job Requirement:</b>{" "}
                    <span>
                      <br /> <b>Qualification:</b>
                      {parse(item.Qualification)}
                      <br />
                      <b>Experience:</b> {parse(item.Experience)}
                    </span>
                  </Typography>
                  <Typography>
                    <b style={{ color: "#EF9B01" }}>Note:</b>{" "}
                    <span>
                      <b>NB:</b>
                      {parse(item.Note)}
                    </span>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <IconButton>
                  <Download />
                </IconButton>
                <p>Download The Applicant</p>
              </Typography>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default VacancyManagement;
