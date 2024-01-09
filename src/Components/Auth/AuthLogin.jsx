import {
  Button,
  Card,
  CardContent,
  FormControl,
  ImageListItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Image/logo-trans.png";
const AuthLogin = () => {
  return (
    <Stack
      sx={{ height: "100dvh", backgroundColor: "#F7F7F7" }}
      direction={"row"}
      gap={3}
    >
      <Stack flex={"0 0 45%"} alignItems={"flex-end"} justifyContent={"center"}>
        <ImageListItem sx={{ width: "50%" }}>
          <img src={logo} alt="logo" />
        </ImageListItem>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        flex={"0 0 45%"}
      >
        <Card sx={{ width: "70%" }}>
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
            >
              <FormControl sx={{ width: "100%" }} size="small" required>
                <TextField
                  id="email-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                />
              </FormControl>
              <FormControl sx={{ width: "100%" }} size="small" required>
                <TextField
                  id="password-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
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
            </Paper>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

export default AuthLogin;
