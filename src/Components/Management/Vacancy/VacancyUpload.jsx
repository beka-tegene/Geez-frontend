import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Paper,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { setVacancy } from "../../../Utils/Store/MediaStore";

const VacancyUpload = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    Vacancy_Number: "",
    Position: "",
    Category: "",
    Qualification: "",
    CGPA: "",
    Total_Experience: "",
    Career_level: "",
    Purpose_of_the_Job: "",
    Company_Profile: "",
    Generic_Functions: "",
    Specific_Functions: "",
    Place_of_work: "",
    Note: "",
    Experience: "",
    Employment_Type: "",
    DeadLine: "",
  });

  const [errors, setErrors] = useState({
    Vacancy_Number: "",
    Position: "",
    Category: "",
    Qualification: "",
    CGPA: "",
    Total_Experience: "",
    Career_level: "",
    Purpose_of_the_Job: "",
    Company_Profile: "",
    Generic_Functions: "",
    Specific_Functions: "",
    Place_of_work: "",
    Note: "",
    Experience: "",
    Employment_Type: "",
    DeadLine: "",
  });

  const validationSchema = Yup.object().shape({
    Vacancy_Number: Yup.string().required("Vacancy Number is required"),
    Position: Yup.string().required("Position is required"),
    Category: Yup.string().required("Category is required"),
    DeadLine: Yup.string().required("Deadline is required"),
    CGPA: Yup.string().required("CGPA is required"),
    Total_Experience: Yup.string().required("Total Experience is required"),
    Place_of_work: Yup.string().required("Place of Work is required"),
    Employment_Type: Yup.string().required("Employment Type is required"),
    Career_level: Yup.string().required("Career Level is required"),
    Company_Profile: Yup.string().required("Company Profile is required"),
    Purpose_of_the_Job: Yup.string().required("Purpose of the Job is required"),
    Generic_Functions: Yup.string().required("Generic Functions is required"),
    Specific_Functions: Yup.string().required("Specific Functions is required"),
    Qualification: Yup.string().required("Qualification is required"),
    Experience: Yup.string().required("Experience is required"),
    Note: Yup.string().required("Note is required"),
  });

  const handleEditorChange = (field, html) => {
    setFormValues({ ...formValues, [field]: html });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formValues, { abortEarly: false });

      setErrors({});
      await dispatch(setVacancy({ data: formValues }));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors = {};

        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <Stack p={2} gap={2}>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Link
          to="/private/geezbank/vacancy"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            textDecoration: "none",
            justifyContent: "flex-start",
          }}
        >
          <ArrowBack /> back to vacancy
        </Link>
      </Stack>
      <Typography fontSize="20px" color="#EF9B01">
        Vacancy Upload
      </Typography>
      <Paper
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
        onSubmit={submitHandler}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Vacancy Number</FormLabel>
              <input
                name="Vacancy_Number"
                value={formValues.Vacancy_Number}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
                type="text"
              />
              {errors.Vacancy_Number && (
                <Typography sx={{ color: "red" }}>
                  {errors.Vacancy_Number}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Position</FormLabel>
              <input
                name="Position"
                value={formValues.Position}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
                type="text"
              />
              {errors.Position && (
                <Typography sx={{ color: "red" }}>{errors.Position}</Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Category</FormLabel>
              <input
                name="Category"
                value={formValues.Category}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
                type="text"
              />
              {errors.Category && (
                <Typography sx={{ color: "red" }}>{errors.Category}</Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Deadline</FormLabel>
              <input
                name="DeadLine"
                value={formValues.DeadLine}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
                type="Date"
              />
              {errors.DeadLine && (
                <Typography sx={{ color: "red" }}>{errors.DeadLine}</Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>CGPA</FormLabel>
              <input
                name="CGPA"
                value={formValues.CGPA}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
                type="number"
              />
              {errors.CGPA && (
                <Typography sx={{ color: "red" }}>{errors.CGPA}</Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Total Experience</FormLabel>
              <input
                name="Total_Experience"
                value={formValues.Total_Experience}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
                type="number"
              />
              {errors.Total_Experience && (
                <Typography sx={{ color: "red" }}>
                  {errors.Total_Experience}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Place of Work</FormLabel>
              <input
                name="Place_of_work"
                value={formValues.Place_of_work}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
                type="text"
              />
              {errors.Place_of_work && (
                <Typography sx={{ color: "red" }}>
                  {errors.Place_of_work}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Employment Type</FormLabel>
              <input
                name="Employment_Type"
                value={formValues.Employment_Type}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
                type="text"
              />
              {errors.Employment_Type && (
                <Typography sx={{ color: "red" }}>
                  {errors.Employment_Type}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Career Level</FormLabel>
              <input
                name="Career_level"
                value={formValues.Career_level}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
                type="text"
              />
              {errors.Career_level && (
                <Typography sx={{ color: "red" }}>
                  {errors.Career_level}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Company Profile</FormLabel>
              <ReactQuill
                value={formValues.Company_Profile}
                onChange={(html) => handleEditorChange("Company_Profile", html)}
                style={{ height: "30dvh" }}
                theme="snow"
              />
              {errors.Company_Profile && (
                <Typography sx={{ color: "red" }}>
                  {errors.Company_Profile}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Purpose of the Job</FormLabel>
              <ReactQuill
                value={formValues.Purpose_of_the_Job}
                onChange={(html) =>
                  handleEditorChange("Purpose_of_the_Job", html)
                }
                style={{ height: "30dvh" }}
                theme="snow"
              />
              {errors.Purpose_of_the_Job && (
                <Typography sx={{ color: "red" }}>
                  {errors.Purpose_of_the_Job}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Specific Functions</FormLabel>
              <ReactQuill
                value={formValues.Specific_Functions}
                onChange={(html) =>
                  handleEditorChange("Specific_Functions", html)
                }
                style={{ height: "30dvh" }}
                theme="snow"
              />
              {errors.Specific_Functions && (
                <Typography sx={{ color: "red" }}>
                  {errors.Specific_Functions}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Generic Functions</FormLabel>
              <ReactQuill
                value={formValues.Generic_Functions}
                onChange={(html) =>
                  handleEditorChange("Generic_Functions", html)
                }
                style={{ height: "30dvh" }}
                theme="snow"
              />
              {errors.Generic_Functions && (
                <Typography sx={{ color: "red" }}>
                  {errors.Generic_Functions}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Qualification</FormLabel>
              <ReactQuill
                value={formValues.Qualification}
                onChange={(html) => handleEditorChange("Qualification", html)}
                style={{ height: "30dvh" }}
                theme="snow"
              />
              {errors.Qualification && (
                <Typography sx={{ color: "red" }}>
                  {errors.Qualification}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Experience</FormLabel>
              <ReactQuill
                value={formValues.Experience}
                onChange={(html) => handleEditorChange("Experience", html)}
                style={{ height: "30dvh" }}
                theme="snow"
              />
              {errors.Experience && (
                <Typography sx={{ color: "red" }}>
                  {errors.Experience}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Note</FormLabel>
              <ReactQuill
                value={formValues.Note}
                onChange={(html) => handleEditorChange("Note", html)}
                style={{ height: "30dvh" }}
                theme="snow"
              />
              {errors.Note && (
                <Typography sx={{ color: "red" }}>{errors.Note}</Typography>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Stack mt={2} direction="row" gap={2} justifyContent="flex-end" pt={4}>
          <Button variant="contained" type="reset">
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Upload
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default VacancyUpload;
