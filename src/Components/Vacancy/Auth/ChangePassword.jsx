import React, { useState } from "react";
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setChangePassword } from "../../../Utils/Store/AuthStore";
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      setChangePassword({
        data: {
          oldPassword,
          newPassword,
          confirmNewPassword,
        },
      })
    );
  };
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
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
          width: 425,
        }}
        onSubmit={submitHandler}
      >
        <Typography>Change Password</Typography>
        <Divider sx={{ m: 1 }} />
        <Stack direction={"column"} gap={2} sx={{ width: "100%" }}>
          <FormControl fullWidth>
            <FormLabel>Old Password</FormLabel>
            <input
              type="password"
              style={{
                padding: "0.5rem 1rem",
                fontSize: "15px",
                outline: "none",
                border: "2px solid #3348BB",
                borderRadius: 4,
              }}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>New Password</FormLabel>
            <input
              type="password"
              style={{
                padding: "0.5rem 1rem",
                fontSize: "15px",
                outline: "none",
                border: "2px solid #3348BB",
                borderRadius: 4,
              }}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>Confirm New Password</FormLabel>
            <input
              type="password"
              style={{
                padding: "0.5rem 1rem",
                fontSize: "15px",
                outline: "none",
                border: "2px solid #3348BB",
                borderRadius: 4,
              }}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
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
          <Button type="submit">Change Password</Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ChangePassword;
