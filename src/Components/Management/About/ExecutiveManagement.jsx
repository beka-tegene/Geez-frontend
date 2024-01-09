import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  Modal,
  Paper,
  Stack,
  Typography,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  getExecutiveData,
  setDeleteExecutive,
  setEditExecutive,
  setExecutive,
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
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
const ExecutiveManagement = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [displayimage, setDisplayImage] = useState(null);
  const [FullName, setFullName] = useState();
  const [Position, setPosition] = useState();
  const [errors, setErrors] = useState({
    image: "",
    FullName: "",
    Position: "",
  });
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const dispatch = useDispatch();
  const [editConfirmationOpen, setEditConfirmationOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedFullName, setEditedFullName] = useState("");
  const [editedPosition, setEditedPosition] = useState("");
  const [Id, setId] = useState("");

  const editHandler = (item) => {
    setIsEditing(true);
    setEditedFullName(item.FullName);
    setEditedPosition(item.Position);
    setId(item._id);
  };
  const saveEditHandler = () => {

    setEditConfirmationOpen(true);
  };

  const validationSchema = Yup.object().shape({
    FullName: Yup.string().required("full name is required"),
    Position: Yup.string().required("Position is required"),
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ FullName, Position });
      // Validation passed, reset errors
      setErrors({ FullName: "", Position: "" });

      const formData = new FormData();
      formData.append("FullName", FullName);
      formData.append("Position", Position);
      formData.append("image", image);
      console.log(formData.get("FullName"));
      await dispatch(setExecutive(formData));
    } catch (error) {
      // Validation failed, set error message
      setErrors({ FullName: error.message, Position: error.message });
    }
  };
  const Executive = useSelector((state) => state.MediaStore.outputExecutive);
  useEffect(() => {
    dispatch(getExecutiveData());
  }, [dispatch]);
  console.log(Executive.Executive);

  const deleteHandler = (_id) => {
    setDeleteItemId(_id);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    dispatch(setDeleteExecutive({ data: { _id: deleteItemId } }));

    setDeleteConfirmationOpen(false);
  };
  const handleEditConfirmation = () => {
    dispatch(
      setEditExecutive({
        data: { _id: Id, FullName: editedFullName, Position: editedPosition },
      })
    );
    setIsEditing(false);
    setEditedFullName("");
    setEditedPosition("");
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
          ADD New Executive Management
          <Add sx={{ fontSize: "20px" }} />
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography fontSize={"20px"} color={"#EF9B01"}>
              Executive Management Upload
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
                <FormLabel sx={{ color: "white" }}>Full Name Mr/Mis</FormLabel>
                <input
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
                  value={FullName}
                  onChange={(e) => setFullName(e.target.value)}
                  error={!!errors.FullName}
                  helperText={errors.FullName}
                />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel sx={{ color: "white" }}>Position</FormLabel>
                <input
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
                  value={Position}
                  onChange={(e) => setPosition(e.target.value)}
                  error={!!errors.Position}
                  helperText={errors.Position}
                />
              </FormControl>
              <InputLabel htmlFor="Photo-basic" sx={{ color: "white" }}>
                Photo
              </InputLabel>
              <FormControl fullWidth size="small">
                <Input
                  id="Photo-basic"
                  variant="outlined"
                  type="file"
                  sx={{ color: "white" }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const imageURL = URL.createObjectURL(file);
                    setImage(e.target.files[0]);
                    setDisplayImage(imageURL);
                  }}
                  error={!!errors.image}
                  helperText={errors.image}
                />
              </FormControl>
              {displayimage && (
                <div
                  style={{
                    width: "50%",
                    height: 200,
                    overflow: "hidden",
                    marginTop: "1rem",
                  }}
                >
                  <img
                    src={displayimage} // Display the URL of the selected image, not the File object
                    alt="Selected"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
              )}

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
      <Typography>Executive Management</Typography>
      <Grid container spacing={2}>
        {Executive?.Executive?.map((item, index) => (
          <Grid item xs={3} key={index}>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
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
            </CardActions>
            <CardMedia component="img" src={item.image} />
            <CardContent>
              {isEditing ? (
                <FormControl fullWidth>
                  <Input
                    type="text"
                    style={{
                      fontSize: "15px",
                    }}
                    value={editedFullName}
                    onChange={(e) => setEditedFullName(e.target.value)}
                  />
                </FormControl>
              ) : (
                <Typography
                  variant="h5"
                  color={"#3348BB"}
                  sx={{
                    fontWeight: 900,
                  }}
                >
                  {item.FullName}
                </Typography>
              )}
              {isEditing ? (
                <FormControl fullWidth>
                  <Input
                    type="text"
                    style={{
                      fontSize: "15px",
                    }}
                    value={editedPosition}
                    onChange={(e) => setEditedPosition(e.target.value)}
                  />
                </FormControl>
              ) : (
                <Typography variant="h7" color={"#EF9B01"}>
                  Ge'ez Bank S.C - {item.Position}
                </Typography>
              )}
            </CardContent>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={deleteConfirmationOpen}
        onClose={() => setDeleteConfirmationOpen(false)}
        aria-labelledby="delete-confirmation-dialog"
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this Executive Management?
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

export default ExecutiveManagement;
