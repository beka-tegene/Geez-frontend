import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
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
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  getNewsData,
  setDeleteNews,
  setEditNews,
  setNews,
} from "../../../Utils/Store/MediaStore";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "#272727",
  borderRadius: 2,
  border: "2px solid #EF9B01",
  color: "#FFFFFF",
  boxShadow: 24,
  p: 4,
};

const NewsManagement = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [newsTitle, setNewsTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({
    image: "",
    newsTitle: "",
  });
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    newsTitle: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    image: Yup.mixed().required("Image is required"),
  });

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ newsTitle, description, image });
      // Validation passed, reset errors
      setErrors({ newsTitle: "", description: "", image: "" });

      const formData = new FormData();
      formData.append("newsTitle", newsTitle);
      formData.append("description", description); // Use the editorHtml state
      formData.append("image", image);

      await dispatch(setNews(formData));
    } catch (error) {
      setErrors({
        newsTitle: error.path === "newsTitle" ? error.message : "",
        description: error.path === "description" ? error.message : "",
        image: error.path === "image" ? error.message : "",
      });
    }
  };
  const News = useSelector((state) => state.MediaStore.outputNews);
  useEffect(() => {
    dispatch(getNewsData());
  }, [dispatch]);
  console.log(News);

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
          ADD News
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
              News Upload
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
              <FormControl fullWidth>
                <FormLabel sx={{ color: "white" }}>News Title</FormLabel>
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
                  value={newsTitle}
                  onChange={(e) => setNewsTitle(e.target.value)}
                  error={!!errors.newsTitle}
                  helperText={errors.newsTitle}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ color: "white" }}>News Detail</FormLabel>
                <ReactQuill
                  value={description}
                  onChange={setDescription}
                  style={{ height: "30vh" }}
                  theme="snow"
                />
                {errors.description && (
                  <Typography sx={{ color: "red" }}>
                    {errors.description}
                  </Typography>
                )}
              </FormControl>
              <InputLabel htmlFor="Photo-basic" sx={{ color: "white", pt: 4 }}>
                News Photo
              </InputLabel>
              <FormControl fullWidth size="small">
                <Input
                  id="Photo-basic"
                  variant="outlined"
                  type="file"
                  sx={{ color: "white" }}
                  onChange={handleImageChange}
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
      <Typography>News</Typography>
      <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
        {News.news?.map((item, index) => (
          <NewsCard
            key={index}
            Id={item._id}
            image={item.image}
            title={item.newsTitle}
            date={item.createdAt}
            description={item.description}
          />
        ))}
      </Stack>
    </Stack>
  );
};

const NewsCard = ({ Id, image, title, date, description }) => {
  const dispatch = useDispatch();
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const deleteHandler = (_id) => {
    setDeleteItemId(_id);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    dispatch(setDeleteNews({ data: { _id: deleteItemId } }));
    setDeleteConfirmationOpen(false);
  };
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editConfirmationOpen, setEditConfirmationOpen] = useState(false);
  const editHandler = () => {
    setIsEditing(true);
  };

  const saveEditHandler = () => {
    setEditConfirmationOpen(true);
  };
  const handleEditConfirmation = () => {
    dispatch(
      setEditNews({
        data: {
          description: editedDescription,
          newsTitle: editedTitle,
          _id: Id,
        },
      })
    );
    setIsEditing(false);
    setEditConfirmationOpen(false);
  };
  return (
    <Card sx={{ width: 400 }}>
      <CardMedia component="img" height="300" image={image} alt="News Image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {isEditing ? (
            <Input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            title
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {isEditing ? (
            <ReactQuill
              value={editedDescription}
              onChange={setEditedDescription}
              style={{ height: "150px" }}
            />
          ) : (
            description
          )}
          {!isEditing && <Link to="#">See More</Link>}
        </Typography>
      </CardContent>
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
              mt: 6,
            }}
          >
            Save
          </Button>
        ) : (
          <React.Fragment>
            <IconButton
              onClick={editHandler}
              sx={{
                backgroundColor: "#3348BB",
                color: "#fff",
              }}
            >
              <Edit />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                background: "red",
                "&:hover": { color: "black" },
              }}
              onClick={() => deleteHandler(Id)}
            >
              <Delete />
            </IconButton>
          </React.Fragment>
        )}
      </CardActions>
      <Dialog
        open={deleteConfirmationOpen}
        onClose={() => setDeleteConfirmationOpen(false)}
        aria-labelledby="delete-confirmation-dialog"
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this News?
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
    </Card>
  );
};

export default NewsManagement;
