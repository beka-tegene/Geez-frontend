import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  ImageListItem,
  Input,
  InputLabel,
  Modal,
  Paper,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Add, Delete, Download, Edit } from "@mui/icons-material";
import image1 from "../../../Image/PDF.png";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  getReportData,
  setDeleteReport,
  setEditReport,
  setReport,
} from "../../../Utils/Store/MediaStore";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "#272727",
  border: "2px solid #EF9B01",
  color: "#FFFFFF",
  boxShadow: 24,
  p: 4,
};
const AnnualReportManagement = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [ReportName, setReportName] = useState(null);
  const [errors, setErrors] = useState({
    image: "",
    ReportName: "",
  });
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const dispatch = useDispatch();
  const [editConfirmationOpen, setEditConfirmationOpen] = useState(false);
  const validationSchema = Yup.object().shape({
    ReportName: Yup.string().required("Title is required"),
  });

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const [isEditing, setIsEditing] = useState(false);
  const [editedReportName, setEditedReportName] = useState("");
  const [Id, setId] = useState("");

  const editHandler = (item) => {
    setIsEditing(true);
    setEditedReportName(item.ReportName);
    setId(item._id);
  };
  const saveEditHandler = () => {
    setEditConfirmationOpen(true);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ ReportName });
      setErrors({ ReportName: "" });

      const formData = new FormData();
      formData.append("ReportName", ReportName);
      formData.append("file", image);

      await dispatch(setReport(formData));
    } catch (error) {
      setErrors({ ReportName: error.message });
    }
  };
  const Report = useSelector((state) => state.MediaStore.outputReport);
  useEffect(() => {
    dispatch(getReportData());
  }, [dispatch]);
  console.log(Report);

  const deleteHandler = (_id) => {
    setDeleteItemId(_id);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    dispatch(setDeleteReport({ data: { _id: deleteItemId } }));
    setDeleteConfirmationOpen(false);
  };
  const handleEditConfirmation = () => {
    dispatch(
      setEditReport({ data: { _id: Id, reportName: editedReportName } })
    );
    setIsEditing(false);
    setEditConfirmationOpen(false);
  };
  return (
    <Stack p={2} gap={2}>
      <Stack
        direction={"row"}
        alignContent={"center"}
        justifyContent={"flex-end"}
      >
        <Button
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          ADD New Annual Report
          <Add sx={{ fontSize: "20px" }} />
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          // sx={{zIndex:10}}
        >
          <Box sx={style}>
            <Typography fontSize={"20px"} color={"#EF9B01"}>
              Annual Report Upload
            </Typography>
            <Paper
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 2,
                background: "#272727",
                color: "white",
              }}
              onSubmit={submitHandler}
            >
              <FormControl fullWidth required>
                <FormLabel sx={{ color: "white" }}>Title</FormLabel>
                <textarea
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "15px",
                    outline: "none",
                    border: "2px solid #3348BB",
                    borderRadius: 4,
                    resize: "none",
                    background: "#272727",
                    color: "white",
                  }}
                  value={ReportName}
                  onChange={(e) => setReportName(e.target.value)}
                  error={!!errors.ReportName}
                  helperText={errors.ReportName}
                />
              </FormControl>
              <InputLabel htmlFor="Photo-basic" sx={{ color: "white" }}>
                Publication File
              </InputLabel>
              <FormControl fullWidth size="small">
                <Input
                  id="Photo-basic"
                  variant="outlined"
                  type="file"
                  sx={{ color: "white" }}
                  onChange={handleImageChange}
                  error={!!errors.image}
                  helperText={errors.image}
                />
              </FormControl>

              <Stack
                mt={2}
                direction={"row"}
                gap={2}
                justifyContent={"flex-end"}
              >
                <Button variant="contained" type="reset">
                  Cancel
                </Button>
                <Button variant="contained" type="submit">
                  Upload
                </Button>
              </Stack>
            </Paper>
          </Box>
        </Modal>
      </Stack>
      <Divider sx={{ height: "2px" }} />
      <Typography>Annual Report</Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        // justifyContent={"space-between"}
        alignItems={"flex-start"}
        gap={2}
      >
        {Report.report?.map((item, index) => (
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              p: 2,
              alignItems: "flex-start",
              width: 400,
              flex: "0 0 32%",
            }}
            key={index}
          >
            <ImageListItem sx={{ width: 70 }}>
              <img src={image1} alt="logo" />
            </ImageListItem>
            {isEditing ? (
              <FormControl fullWidth>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                  }}
                  value={editedReportName}
                  onChange={(e) => setEditedReportName(e.target.value)}
                />
              </FormControl>
            ) : (
              <Typography fontSize={"20px"} fontWeight={"bold"}>
                {item.ReportName}
              </Typography>
            )}
            <Typography fontSize={"16px"} fontWeight={"bold"}>
              {item.report.size}
            </Typography>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                width={"100%"}
              >
                <IconButton>
                  <Download />
                </IconButton>
                <Stack direction={"row"} gap={2}>
                  {isEditing ? (
                    <Button
                      onClick={saveEditHandler}
                      sx={{
                        backgroundColor: "#3348BB",
                        color: "#fff",
                      }}
                    >
                      Save
                    </Button>
                  ) : (
                    <React.Fragment>
                      <IconButton
                        sx={{
                          color: "white",
                          background: "blue",
                          "&:hover": { color: "black" },
                        }}
                        onClick={() => editHandler(item)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        sx={{
                          color: "white",
                          background: "red",
                          "&:hover": { color: "black" },
                        }}
                        onClick={() => deleteHandler(item._id)}
                      >
                        <Delete />
                      </IconButton>
                    </React.Fragment>
                  )}
                </Stack>
              </Stack>
            </CardActions>
          </Card>
        ))}
      </Stack>
      <Dialog
        open={deleteConfirmationOpen}
        onClose={() => setDeleteConfirmationOpen(false)}
        aria-labelledby="delete-confirmation-dialog"
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this Annual Report?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDeleteConfirmationOpen(false)}
            color="primary"
          >
            No
          </Button>
          <Button onClick={handleDeleteConfirmation} color="error">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={editConfirmationOpen}
        onClose={() => setEditConfirmationOpen(false)}
        aria-labelledby="edit-confirmation-dialog"
      >
        <DialogTitle>Confirm Changes</DialogTitle>
        <DialogContent>
          Are you sure you want to save the changes?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setEditConfirmationOpen(false)}
            color="primary"
          >
            No
          </Button>
          <Button onClick={handleEditConfirmation} color="error">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default AnnualReportManagement;
