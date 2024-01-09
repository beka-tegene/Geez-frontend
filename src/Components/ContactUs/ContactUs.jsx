import {
  Button,
  FormControl,
  FormLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setContactUs } from "../../Utils/Store/AuthStore";

const ContactUs = () => {
  const [FullName, setFullName] = useState();
  const [Email, setEmail] = useState();
  const [Subject, setSubject] = useState();
  const [Message, setMessage] = useState();
  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(
      setContactUs({
        data: {
          name: FullName,
          email: Email,
          subject: Subject,
          message: Message,
        },
      })
    );
  };
  return (
    <Stack
      sx={{
        padding: "6rem 5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Stack alignItems={"center"}>
        <Typography fontSize={"14px"} color={"#EF9B01"}>
          Ge'ez Bank Account Opening Forms
        </Typography>
        <Typography fontSize={"40px"} fontWeight={"bold"} color={"#3348BB"}>
          Branch Banking Forms
        </Typography>
      </Stack>
      <Paper
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          justifyContent: "center",
          p: 2,
          width: 500,
        }}
        onSubmit={submitHandler}
      >
        <FormControl fullWidth required>
          <FormLabel>Full Name</FormLabel>
          <TextField
            id="Name-basic"
            variant="outlined"
            type="text"
            size="small"
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth required>
          <FormLabel>Email</FormLabel>
          <TextField
            id="email-basic"
            variant="outlined"
            type="email"
            size="small"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth required>
          <FormLabel>Subject</FormLabel>
          <TextField
            id="Subject-basic"
            variant="outlined"
            type="text"
            size="small"
            onChange={(e) => setSubject(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth required>
          <FormLabel>Message</FormLabel>
          <textarea
            rows={5}
            style={{
              resize: "none",
              fontSize: "15px",
              padding: "0.5rem 1rem",
              outline: "none",
              borderRadius: 4,
            }}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <Stack direction={"row"} width={"100%"} gap={1}>
          <Button variant="contained" type="submit" sx={{ flex: "auto" }}>
            Send
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ContactUs;
