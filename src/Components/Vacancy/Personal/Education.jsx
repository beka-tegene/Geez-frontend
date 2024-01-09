import React, { useState } from "react";
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { setEducationalInformation } from "../../../Utils/Store/UserStore";
const Education = () => {
  const [forms, setForms] = useState([
    {
      id: 1,
    },
  ]);

  const addForm = () => {
    if (forms.length < 3) {
      const newId = forms.length + 1;
      setForms([...forms, { id: newId }]);
    }
  };

  const removeForm = (formId) => {
    if (forms.length === 1) {
      return;
    }

    setForms(forms.filter((form) => form.id !== formId));
  };

  return (
    <Stack direction={"column"} gap={2} width={"100%"}>
      {forms.map((form) => (
        <Form key={form.id} formId={form.id} onRemove={removeForm} />
      ))}

      <Button
        onClick={addForm}
        sx={{
          backgroundColor: "#EF9B01",
          color: "#FFFFFF",
          "&:hover": { backgroundColor: "#EF9B0190", color: "#FFFFFF" },
        }}
      >
        ADD
      </Button>
    </Stack>
  );
};

const Form = ({ formId, onRemove }) => {
  const [Current_Educational_Status, setCurrent_Educational_Status] =
    useState("");
  const [Field_of_Study, setField_of_Study] = useState("");
  const [CGPA, setCGPA] = useState("");
  const [Year_of_Graduation, setYear_of_Graduation] = useState("");
  const [Academic_Institution, setAcademic_Institution] = useState("");
  const [Attach_Updated_Documents, setAttach_Updated_Documents] = useState("");
  const [Exit_Exam_Result, setExit_Exam_Result] = useState("");
  const [errors, setErrors] = useState({
    Current_Educational_Status: "",
    Field_of_Study: "",
    CGPA: "",
    Year_of_Graduation: "",
    Academic_Institution: "",
    Attach_Updated_Documents: "",
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setAttach_Updated_Documents(file);
  };
  const dispatch = useDispatch();
  const validateForm = () => {
    const newErrors = {};

    if (!Current_Educational_Status) {
      newErrors.Current_Educational_Status =
        "Current Educational Status is required";
    }

    if (!Field_of_Study) {
      newErrors.Field_of_Study = "Field of Study is required";
    }

    if (!CGPA) {
      newErrors.CGPA = "CGPA is required";
    }

    if (!Year_of_Graduation) {
      newErrors.Year_of_Graduation = "Year of Graduation is required";
    }

    if (!Academic_Institution) {
      newErrors.Academic_Institution = "Academic Institution is required";
    }

    if (!Attach_Updated_Documents) {
      newErrors.Attach_Updated_Documents =
        "Attach Updated Documents is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    const token = Cookies.get("token");
    const decodedToken = jwt_decode(token);
    const email = decodedToken.email;
    if (isValid) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("Current_Educational_Status", Current_Educational_Status);
      formData.append("Field_of_Study", Field_of_Study);
      formData.append("CGPA", CGPA);
      formData.append("Year_of_Graduation", Year_of_Graduation);
      formData.append("Academic_Institution", Academic_Institution);
      formData.append("file", Attach_Updated_Documents);
      formData.append("Exit_Exam_Result", Exit_Exam_Result);
      await dispatch(setEducationalInformation(formData));
    }
  };
  return (
    <Paper
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        width: "100%",
      }}
      onSubmit={submitHandler}
    >
      <Typography>Educational Information</Typography>
      <Divider sx={{ m: 1 }} />
      <Stack
        direction={"row"}
        gap={2}
        sx={{ width: "100%" }}
        alignItems={"center"}
      >
        <FormControl fullWidth size="small">
          <InputLabel id="Current-label">Educational Status</InputLabel>
          <Select
            labelId="Current-label"
            label="Current"
            value={Current_Educational_Status}
            onChange={(e) => setCurrent_Educational_Status(e.target.value)}
            error={!!errors.Current_Educational_Status}
            helperText={errors.Current_Educational_Status}
          >
            <MenuItem value="Digital Economy">Digital Economy</MenuItem>
            <MenuItem value="Big Data">Big Data</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth size="small">
          <InputLabel id="Field-label">Field of Study</InputLabel>
          <Select
            labelId="Field-label"
            label="Field"
            value={Field_of_Study}
            onChange={(e) => setField_of_Study(e.target.value)}
            error={!!errors.Field_of_Study}
            helperText={errors.Field_of_Study}
          >
            <MenuItem value="Digital Economy">Digital Economy</MenuItem>
            <MenuItem value="Big Data">Big Data</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>CGPA *</FormLabel>
          <TextField
            size="small"
            type="number"
            value={CGPA}
            onChange={(e) => setCGPA(e.target.value)}
            error={!!errors.CGPA}
            helperText={errors.CGPA}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Year of Graduation *</FormLabel>
          <TextField
            size="small"
            type="date"
            value={Year_of_Graduation}
            onChange={(e) => setYear_of_Graduation(e.target.value)}
            error={!!errors.Year_of_Graduation}
            helperText={errors.Year_of_Graduation}
          />
        </FormControl>
      </Stack>
      <Stack direction={"row"} gap={2} sx={{ width: "100%" }}>
        <FormControl fullWidth>
          <FormLabel>Academic Institution *</FormLabel>
          <TextField
            type="text"
            size="small"
            value={Academic_Institution}
            onChange={(e) => setAcademic_Institution(e.target.value)}
            error={!!errors.Academic_Institution}
            helperText={errors.Academic_Institution}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Attach Updated Documents *</FormLabel>
          <TextField
            type="file"
            size="small"
            // value={Attach_Updated_Documents}
            onChange={handleImageChange}
            error={!!errors.Attach_Updated_Documents}
            helperText={errors.Attach_Updated_Documents}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Exit Exam Result (for fresh graduate)</FormLabel>
          <TextField
            size="small"
            type="number"
            value={Exit_Exam_Result}
            onChange={(e) => setExit_Exam_Result(e.target.value)}
            error={!!errors.Exit_Exam_Result}
            helperText={errors.Exit_Exam_Result}
          />
        </FormControl>
      </Stack>
      <Stack
        direction={"row"}
        gap={2}
        sx={{ width: "100%" }}
        justifyContent={"space-between"}
      >
        {formId === 1 ? (
          <Button disabled>Remove</Button>
        ) : (
          <Button onClick={() => onRemove(formId)}>Remove</Button>
        )}
        <Stack
          direction={"row"}
          gap={2}
          sx={{ width: "100%" }}
          justifyContent={"flex-end"}
        >
          <Button type="reset">Cancel</Button>
          <Button type="submit">Submit</Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Education;
