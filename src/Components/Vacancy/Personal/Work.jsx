import React, { useState } from "react";
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { setWorkInformation } from "../../../Utils/Store/UserStore";
import { useDispatch } from "react-redux";
const Work = () => {
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
  const [Orginization, setOrginization] = useState("");
  const [Position, setPosition] = useState("");
  const [From_Date, setFrom_Date] = useState("");
  const [To_Date, setTo_Date] = useState("");
  const [errors, setErrors] = useState({
    Orginization: "",
    Position: "",
    From_Date: "",
    To_Date: "",
  });
  const dispatch = useDispatch();

  const validateForm = () => {
    const newErrors = {};

    if (!Orginization) {
      newErrors.Orginization = "Organization is required";
    }

    if (!Position) {
      newErrors.Position = "Position is required";
    }

    if (!From_Date) {
      newErrors.From_Date = "From Date is required";
    }

    if (!To_Date) {
      newErrors.To_Date = "To Date is required";
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
      await dispatch(
        setWorkInformation({
          WorkExperience: {
            email,
            Orginization,
            Position,
            From_Date,
            To_Date,
          },
        })
      );
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
      <Typography>Work Experience</Typography>
      <Divider sx={{ m: 1 }} />
      <Stack direction={"row"} gap={2} sx={{ width: "100%" }}>
        <FormControl fullWidth>
          <FormLabel>Organization (Company)</FormLabel>
          <TextField
            type="text"
            size="small"
            value={Orginization}
            onChange={(e) => setOrginization(e.target.value)}
            error={!!errors.Orginization}
            helperText={errors.Orginization}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Position</FormLabel>
          <TextField
            type="text"
            size="small"
            value={Position}
            onChange={(e) => setPosition(e.target.value)}
            error={!!errors.Position}
            helperText={errors.Position}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>From Date</FormLabel>
          <TextField
            type="date"
            size="small"
            value={From_Date}
            onChange={(e) => setFrom_Date(e.target.value)}
            error={!!errors.From_Date}
            helperText={errors.From_Date}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>To Date</FormLabel>
          <TextField
            type="date"
            size="small"
            value={To_Date}
            onChange={(e) => setTo_Date(e.target.value)}
            error={!!errors.To_Date}
            helperText={errors.To_Date}
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

export default Work;
