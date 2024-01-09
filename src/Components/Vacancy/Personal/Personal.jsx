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
import Education from "./Education";
import Work from "./Work";
import { useDispatch } from "react-redux";
import { setPersonalInformation } from "../../../Utils/Store/UserStore";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
const Personal = () => {
  const [emailFirst_Name, setEmailFirst_Name] = useState("");
  const [Middle_Name, setMiddle_Name] = useState("");
  const [Last_Name, setLast_Name] = useState("");
  const [Gender, setGender] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Alternative_Mobile, setAlternative_Mobile] = useState("");
  const [Marital_Status, setMarital_Status] = useState("");
  const [Date_of_Birth, setDate_of_Birth] = useState("");
  const [Current_Address, setCurrent_Address] = useState("");
  const [Total_Working_Experience, setTotal_Working_Experience] = useState("");
  const [Current_Organization, setCurrent_Organization] = useState("");
  const [Current_Gross_Salary, setCurrent_Gross_Salary] = useState("");
  const [errors, setErrors] = useState({
    emailFirst_Name: "",
    Middle_Name: "",
    Last_Name: "",
    Gender: "",
    Mobile: "",
    Alternative_Mobile: "",
    Marital_Status: "",
    Date_of_Birth: "",
    Current_Address: "",
    Total_Working_Experience: "",
    Current_Gross_Salary: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!emailFirst_Name) {
      newErrors.emailFirst_Name = "First Name is required";
    }

    if (!Middle_Name) {
      newErrors.Middle_Name = "Middle Name is required";
    }

    if (!Last_Name) {
      newErrors.Last_Name = "Last Name is required";
    }

    if (!Gender) {
      newErrors.Gender = "Gender is required";
    }

    if (!Mobile) {
      newErrors.Mobile = "Mobile is required";
    }

    if (!Marital_Status) {
      newErrors.Marital_Status = "Marital Status is required";
    }

    if (!Date_of_Birth) {
      newErrors.Date_of_Birth = "Date of Birth is required";
    }

    if (!Current_Address) {
      newErrors.Current_Address = "Current Address is required";
    }

    if (!Total_Working_Experience) {
      newErrors.Total_Working_Experience =
        "Total Working Experience is required";
    }

    if (!Current_Gross_Salary) {
      newErrors.Current_Gross_Salary = "Current Gross Salary is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    const token = Cookies.get("token");
    const decodedToken = jwt_decode(token);
    const Email = decodedToken.email;
    if (isValid) {
      await dispatch(
        setPersonalInformation({
          data: {
            Email,
            emailFirst_Name,
            Middle_Name,
            Last_Name,
            Gender,
            Mobile,
            Alternative_Mobile,
            Marital_Status,
            Date_of_Birth,
            Current_Address,
            Total_Working_Experience,
            Current_Organization,
            Current_Gross_Salary,
          },
        })
      );
    }
  };
  return (
    <Stack
      direction={"column"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      sx={{ p: 2 }}
      gap={2}
    >
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
        <Typography>Personal Information</Typography>
        <Divider sx={{ m: 1 }} />
        <Stack
          direction={"row"}
          gap={2}
          sx={{ width: "100%" }}
          alignItems={"center"}
        >
          <FormControl fullWidth>
            <FormLabel>First Name *</FormLabel>
            <TextField
              type="text"
              size="small"
              value={emailFirst_Name}
              onChange={(e) => setEmailFirst_Name(e.target.value)}
              error={!!errors.emailFirst_Name}
              helperText={errors.emailFirst_Name}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>Middle Name *</FormLabel>
            <TextField
              type="text"
              size="small"
              value={Middle_Name}
              onChange={(e) => setMiddle_Name(e.target.value)}
              error={!!errors.Middle_Name}
              helperText={errors.Middle_Name}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>Last Name *</FormLabel>
            <TextField
              type="text"
              size="small"
              value={Last_Name}
              onChange={(e) => setLast_Name(e.target.value)}
              error={!!errors.Last_Name}
              helperText={errors.Last_Name}
            />
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel id="Marital-label">Gender </InputLabel>
            <Select
              labelId="Marital-label"
              label="Marital"
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
              error={!!errors.Gender}
              helperText={errors.Gender}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack
          direction={"row"}
          gap={2}
          sx={{ width: "100%" }}
          alignItems={"center"}
        >
          <FormControl fullWidth>
            <FormLabel>Mobile *</FormLabel>
            <TextField
              type="tel"
              size="small"
              value={Mobile}
              onChange={(e) => setMobile(e.target.value)}
              error={!!errors.Mobile}
              helperText={errors.Mobile}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>Alternative Mobile</FormLabel>
            <TextField
              type="tel"
              size="small"
              value={Alternative_Mobile}
              onChange={(e) => setAlternative_Mobile(e.target.value)}
              error={!!errors.Alternative_Mobile}
              helperText={errors.Alternative_Mobile}
            />
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel id="Marital-label">Marital Status </InputLabel>
            <Select
              labelId="Marital-label"
              label="Marital"
              value={Marital_Status}
              onChange={(e) => setMarital_Status(e.target.value)}
              error={!!errors.Marital_Status}
              helperText={errors.Marital_Status}
            >
              <MenuItem value="Digital Economy">Digital Economy</MenuItem>
              <MenuItem value="Big Data">Big Data</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>Date of Birth(GC) *</FormLabel>
            <TextField
              type="date"
              size="small"
              value={Date_of_Birth}
              onChange={(e) => setDate_of_Birth(e.target.value)}
              error={!!errors.Date_of_Birth}
              helperText={errors.Date_of_Birth}
            />
          </FormControl>
        </Stack>
        <Stack direction={"row"} gap={2} sx={{ width: "100%" }}>
          <FormControl fullWidth>
            <FormLabel>Current Address (Location) *</FormLabel>
            <TextField
              type="text"
              size="small"
              value={Current_Address}
              onChange={(e) => setCurrent_Address(e.target.value)}
              error={!!errors.Current_Address}
              helperText={errors.Current_Address}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>Total Working Experience *</FormLabel>
            <TextField
              type="number"
              size="small"
              value={Total_Working_Experience}
              onChange={(e) => setTotal_Working_Experience(e.target.value)}
              error={!!errors.Total_Working_Experience}
              helperText={errors.Total_Working_Experience}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>Current Working organization</FormLabel>
            <TextField
              type="text"
              size="small"
              value={Current_Organization}
              onChange={(e) => setCurrent_Organization(e.target.value)}
              error={!!errors.Current_Organization}
              helperText={errors.Current_Organization}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>Current Gross Salary</FormLabel>
            <TextField
              type="number"
              size="small"
              value={Current_Gross_Salary}
              onChange={(e) => setCurrent_Gross_Salary(e.target.value)}
              error={!!errors.Current_Gross_Salary}
              helperText={errors.Current_Gross_Salary}
            />
          </FormControl>
        </Stack>
        <Stack
          direction={"row"}
          gap={2}
          sx={{ width: "100%" }}
          justifyContent={"flex-end"}
        >
          <Button type="reset">Cancel</Button>
          <Button type="submit">Submit</Button>
        </Stack>
      </Paper>
      <Education />
      <Work />
    </Stack>
  );
};

export default Personal;
