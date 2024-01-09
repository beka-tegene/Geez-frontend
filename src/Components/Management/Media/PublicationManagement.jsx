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
  getLegalData,
  setDeleteLegal,
  setEditPublication,
  setPublication,
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
const PublicationManagement = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [DocumentName, setDocumentName] = useState(null);
  const [errors, setErrors] = useState({
    image: "",
    DocumentName: "",
  });
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    DocumentName: Yup.string().required("Title is required"),
  });

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const [editConfirmationOpen, setEditConfirmationOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDocumentName, setEditedDocumentName] = useState("");
  const [Id, setId] = useState("");
  const editHandler = (item) => {
    setIsEditing(true);
    setEditedDocumentName(item.DocumentName);
    setId(item._id);
  };
  const saveEditHandler = () => {
    setEditConfirmationOpen(true);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ DocumentName });
      // Validation passed, reset errors
      setErrors({ DocumentName: "" });

      const formData = new FormData();
      formData.append("DocumentName", DocumentName);
      formData.append("file", image);

      await dispatch(setPublication(formData));
    } catch (error) {
      // Validation failed, set error message
      setErrors({ DocumentName: error.message });
    }
  };
  const Legal = useSelector((state) => state.MediaStore.outputLegal);
  useEffect(() => {
    dispatch(getLegalData());
  }, [dispatch]);

  const deleteHandler = (_id) => {
    setDeleteItemId(_id);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    dispatch(setDeleteLegal({ data: { _id: deleteItemId } }));
    setDeleteConfirmationOpen(false);
  };
  const handleEditConfirmation = () => {
    dispatch(
      setEditPublication({ data: { reportName: editedDocumentName, _id: Id } })
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
          ADD New Download and Publications
          <Add sx={{ fontSize: "20px" }} />
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            // sx={{zIndex:10}}
          >
            <Box sx={style}>
              <Typography fontSize={"20px"} color={"#EF9B01"}>
                Publication Upload
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
                    value={DocumentName}
                    onChange={(e) => setDocumentName(e.target.value)}
                    error={!!errors.DocumentName}
                    helperText={errors.DocumentName}
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
        </Button>
      </Stack>
      <Divider sx={{ height: "2px" }} />
      <Typography>Download and Publications</Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        gap={2}
      >
        {Legal.document?.map((item, index) => (
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              p: 2,
              alignItems: "flex-start",
              width: 400,
              flex: "0 0 33%",
            }}
            key={index}
          >
            <ImageListItem sx={{ width: 70 }}>
              <img src={image1} alt="logo" />
            </ImageListItem>
            {isEditing ? (
              <Input
                value={editedDocumentName}
                onChange={(e) => setEditedDocumentName(e.target.value)}
              />
            ) : (
              <Typography fontSize={"20px"} fontWeight={"bold"}>
                {item.DocumentName}
              </Typography>
            )}
            <Typography fontSize={"16px"} fontWeight={"bold"}>
              {item.document.size}
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
          Are you sure you want to delete this Publication?
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

export default PublicationManagement;
