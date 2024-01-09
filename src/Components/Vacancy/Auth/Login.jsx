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
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLogin } from "../../../Utils/Store/AuthStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
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

    setErrors(newErrors);
    return isValid;
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await dispatch(setLogin({ data: { email, password } }));
    }
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
            LogIn
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
                sx={{color:"white"}}
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
            <Link
              style={{
                textAlign: "right",
                textDecoration: "none",
                color: "#272727",
              }}
            >
              Forget password
            </Link>
            <Stack direction={"row"} width={"100%"} gap={1}>
              <Button variant="contained" type="submit" sx={{ flex: "auto" }}>
                Login
              </Button>
            </Stack>
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              you don't have an account?
              <Link
                style={{
                  textDecoration: "none",
                  color: "#213322",
                }}
                to={"/login"}
              >
                Sign up
              </Link>
            </Typography>
          </Paper>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Login;
