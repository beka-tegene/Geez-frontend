import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Paper,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getVacancyData,
  setEditVacancy,
} from "../../../Utils/Store/MediaStore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const EditVacancy = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Vacancys = useSelector((state) => state.MediaStore.outputVacnacy);
  useEffect(() => {
    dispatch(getVacancyData());
  }, [dispatch]);
  const EditThisVacancy = Vacancys?.vacancies?.find((item) => item._id === id);
  const [formValues, setFormValues] = useState({
    Vacancy_Number: EditThisVacancy?.Vacancy_Number,
    Position: EditThisVacancy?.Position,
    Category: EditThisVacancy?.Category,
    CGPA: EditThisVacancy?.CGPA,
    Total_Experience: EditThisVacancy?.Total_Experience,
    Career_level: EditThisVacancy?.Career_level,
    Place_of_work: EditThisVacancy?.Place_of_work,
    Employment_Type: EditThisVacancy?.Employment_Type,
    DeadLine: EditThisVacancy?.DeadLine,
  });
  const [Company_Profile, setCompany_Profile] = useState(
    EditThisVacancy?.Company_Profile
  );
  const [Purpose_of_the_Job, setPurpose_of_the_Job] = useState(
    EditThisVacancy?.Purpose_of_the_Job
  );
  const [Specific_Functions, setSpecific_Functions] = useState(
    EditThisVacancy?.Specific_Functions
  );
  const [Generic_Functions, setGeneric_Functions] = useState(
    EditThisVacancy?.Generic_Functions
  );
  const [Qualification, setQualification] = useState(
    EditThisVacancy?.Qualification
  );
  const [Experience, setExperience] = useState(EditThisVacancy?.Experience);
  const [Note, setNote] = useState(EditThisVacancy?.Note);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // Dispatch an action to save the updated formValues
      await dispatch(
        setEditVacancy({
          data: {
            id,
            ...formValues,
            Company_Profile,
            Purpose_of_the_Job,
            Specific_Functions,
            Generic_Functions,
            Qualification,
            Experience,
            Note,
          },
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack p={2} gap={2}>
      <Typography>Edit Vacancy</Typography>
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
                value={formValues?.Vacancy_Number}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Position</FormLabel>
              <input
                name="Position"
                value={formValues?.Position}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Category</FormLabel>
              <input
                name="Category"
                value={formValues?.Category}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Deadline</FormLabel>
              <input
                name="DeadLine"
                value={formValues?.DeadLine}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>CGPA</FormLabel>
              <input
                name="CGPA"
                value={formValues?.CGPA}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Total Experience</FormLabel>
              <input
                name="Total_Experience"
                value={formValues?.Total_Experience}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Place of Work</FormLabel>
              <input
                name="Place_of_work"
                value={formValues?.Place_of_work}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Employment Type</FormLabel>
              <input
                name="Employment_Type"
                value={formValues?.Employment_Type}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <FormLabel>Career Level</FormLabel>
              <input
                name="Career_level"
                value={formValues?.Career_level}
                onChange={handleChange}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "15px",
                  outline: "none",
                  border: "2px solid #3348BB",
                  borderRadius: 4,
                  resize: "none",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Company Profile</FormLabel>
              <ReactQuill
                value={Company_Profile}
                onChange={(html) => setCompany_Profile(html)}
                style={{ height: "30vh" }}
                theme="snow"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Purpose of the Job</FormLabel>
              <ReactQuill
                value={Purpose_of_the_Job}
                onChange={(html) => setPurpose_of_the_Job(html)}
                style={{ height: "30vh" }}
                theme="snow"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Specific Functions</FormLabel>
              <ReactQuill
                value={Specific_Functions}
                onChange={(html) => setSpecific_Functions(html)}
                style={{ height: "30vh" }}
                theme="snow"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Generic Functions</FormLabel>
              <ReactQuill
                value={Generic_Functions}
                onChange={(html) => setGeneric_Functions(html)}
                style={{ height: "30vh" }}
                theme="snow"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Qualification</FormLabel>
              <ReactQuill
                value={Qualification}
                onChange={(html) => setQualification(html)}
                style={{ height: "30vh" }}
                theme="snow"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Experience</FormLabel>
              <ReactQuill
                value={Experience}
                onChange={(html) => setExperience(html)}
                style={{ height: "30vh" }}
                theme="snow"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <FormControl fullWidth required>
              <FormLabel>Note</FormLabel>
              <ReactQuill
                value={Note}
                onChange={(html) => setNote(html)}
                style={{ height: "30vh" }}
                theme="snow"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Stack mt={2} direction="row" gap={2} justifyContent="flex-end" pt={4}>
          <Button variant="contained" type="submit">
            Save Changes
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default EditVacancy;
