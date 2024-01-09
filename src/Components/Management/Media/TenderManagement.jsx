import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
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
import { Add, Delete, Edit } from "@mui/icons-material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  getTenderData,
  setDeleteTender,
  setEditTender,
  setTender,
} from "../../../Utils/Store/MediaStore";
import striptags from "striptags";
import moment from "moment";
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
const TenderManagement = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [TenderTitle, setTenderTitle] = useState(""); // Initialize with an empty string
  const [description, setDescription] = useState(""); // Initialize with an empty string
  const [errors, setErrors] = useState({
    image: "",
    TenderTitle: "",
  });
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const dispatch = useDispatch();
  const [editConfirmationOpen, setEditConfirmationOpen] = useState(false);
  const validationSchema = Yup.object().shape({
    TenderTitle: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    image: Yup.mixed().required("Image is required"),
  });
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const [isEditing, setIsEditing] = useState(false);
  const [editedTenderTitle, setEditedTenderTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [Id, setId] = useState("");

  const editHandler = (item) => {
    setIsEditing(true);
    setEditedTenderTitle(item.tenderTitle);
    setEditedDescription(item.description);
    setId(item._id);
  };
  const saveEditHandler = () => {
    setEditConfirmationOpen(true);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ TenderTitle, description, image });
      // Validation passed, reset errors
      setErrors({ TenderTitle: "", description: "", image: "" });

      const formData = new FormData();
      formData.append("TenderTitle", TenderTitle);
      formData.append("description", description); // Use the editorHtml state
      formData.append("image", image);

      await dispatch(setTender(formData));
    } catch (error) {
      setErrors({
        TenderTitle: error.path === "TenderTitle" ? error.message : "",
        description: error.path === "description" ? error.message : "",
        image: error.path === "image" ? error.message : "",
      });
    }
  };
  const Tender = useSelector((state) => state.MediaStore.outputTender);
  useEffect(() => {
    dispatch(getTenderData());
  }, [dispatch]);
  const deleteHandler = (_id) => {
    setDeleteItemId(_id);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    dispatch(setDeleteTender({ data: { _id: deleteItemId } }));
    setDeleteConfirmationOpen(false);
  };
  const handleEditConfirmation = () => {
    dispatch(
      setEditTender({
        data: {
          _id: Id,
          description: editedDescription,
          tenderTitle: editedTenderTitle,
        },
      })
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
          ADD New Tender
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
              Tender Upload
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
                <FormLabel sx={{ color: "white" }}>Tender Title</FormLabel>
                <Input
                  type="text"
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
                  value={TenderTitle}
                  onChange={(e) => setTenderTitle(e.target.value)}
                  error={!!errors.TenderTitle}
                  helperText={errors.TenderTitle}
                />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel sx={{ color: "white" }}>Tender Detail</FormLabel>
                <ReactQuill
                  value={description}
                  onChange={setDescription}
                  style={{ height: "30vh" }}
                  theme="snow"
                />
              </FormControl>
              <InputLabel htmlFor="Photo-basic" sx={{ color: "white", pt: 5 }}>
                Tender Image
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
      <Typography>Tender</Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        gap={2}
      >
        {Tender.tender?.map((item, index) => (
          <Card
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              p: 2,
              alignItems: "flex-start",
            }}
            key={index}
          >
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "100%",
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
                <Stack direction={"row"} gap={2}>
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
                </Stack>
              )}
            </CardActions>
            <Stack gap={1}>
              {isEditing ? (
                <Input
                  value={editedTenderTitle}
                  onChange={(e) => setEditedTenderTitle(e.target.value)}
                />
              ) : (
                <Typography fontSize={"26px"} fontWeight={"bold"}>
                  {item.tenderTitle}
                </Typography>
              )}
              <Typography fontSize={"14px"}>
                {moment(item.createdAt).format("LL").toString()} | Ge'ez Bank
              </Typography>
              {isEditing ? (
                <ReactQuill
                  value={editedDescription}
                  onChange={setEditedDescription}
                  style={{ height: "30vh" }}
                  theme="snow"
                />
              ) : (
                <Typography fontSize={"16px"}>
                  {striptags(item.description)}
                </Typography>
              )}
            </Stack>
            <CardMedia
              component="img"
              image={item.image}
              alt="News Image"
              sx={{ mt: isEditing ? 6 : 0 }}
            />
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
          Are you sure you want to delete this Tender?
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

export default TenderManagement;
