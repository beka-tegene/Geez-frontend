import {
  Button,
  Card,
  CardContent,
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setRegister } from "../../../Utils/Store/AuthStore";
import { useDispatch } from "react-redux";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      await dispatch(setRegister({ data: { email, password } }));
      resetForm();
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});
  };

  return (
    <Stack
      sx={{ height: "83dvh", backgroundColor: "#F7F7F7" }}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Card sx={{ width: "33%" }}>
        <CardContent>
          <Typography
            fontSize={"14px"}
            color={"#EF9B01"}
            sx={{ textAlign: "center" }}
          >
            Ge'ez Bank Vacancy
          </Typography>
          <Typography
            fontSize={"30px"}
            fontWeight={"bold"}
            color={"#3348BB"}
            sx={{ textAlign: "center" }}
          >
            SignUp
          </Typography>
          <Paper
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
              p: 2,
            }}
            onSubmit={submitHandler}
          >
            <FormControl sx={{ width: "100%" }} size="small" required>
              <TextField
                id="email-basic"
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
            </FormControl>
            <FormControl sx={{ width: "100%" }} size="small" required>
              <TextField
                id="password-basic"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
            </FormControl>
            <FormControl sx={{ width: "100%" }} size="small" required>
              <TextField
                id="confirm-password-basic"
                label="Confirm Password"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            </FormControl>
            <Stack direction={"row"} width={"100%"} gap={1}>
              <Button variant="contained" type="submit" sx={{ flex: "auto" }}>
                Register
              </Button>
            </Stack>
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              you already have an account?
              <Link
                style={{
                  textDecoration: "none",
                  color: "#213322",
                }}
                to={"/login"}
              >
                Login
              </Link>
            </Typography>
          </Paper>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Register;
