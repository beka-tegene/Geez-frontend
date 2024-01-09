import React, { useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../../Utils/Store/MediaStore";
import striptags from "striptags";
import parse from "html-react-parser";
const News = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 325;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 325;
    }
  };
  const dispatch = useDispatch();
  const News = useSelector((state) => state.MediaStore.outputNews);
  useEffect(() => {
    dispatch(getNewsData());
  }, [dispatch]);
  console.log(News);
  return (
    <Box
      sx={{
        padding: "6rem 5%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Stack alignItems={"center"}>
        <Typography fontSize={"14px"} color={"#EF9B01"}>
          Ge’ez Bank News
        </Typography>
        <Typography fontSize={"40px"} fontWeight={"bold"} color={"#3348BB"}>
          Latest News
        </Typography>
      </Stack>
      <div
        style={{
          width: "100%",
          overflowX: "hidden",
          backgroundColor: "#FAFAFA",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          position: "relative",
        }}
      >
        <style>
          {`
                ::-webkit-scrollbar {
                    display: none;
                }
                .scroll-container {
                    display: flex;
                    transition: transform 0.3s ease-in-out; // Add the transition here
                  }
            `}
        </style>
        <Stack
          direction={"row"}
          className="scroll-container"
          gap={3}
          sx={{
            width: "100%",
            padding: "1rem",
            overflowX: "auto",
            "& > *": { flex: "0 0 325px", minWidth: 325, maxWidth: 325 },
            transform: "translateX(0)",
          }}
          alignItems={"flex-start"}
          ref={containerRef}
        >
          {News.news?.map((item, index) => (
            <Card key={index}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={item.image}
                  alt="News Image"
                />
                <CardContent>
                  <Typography
                    padding={"0.5rem 0 0 0"}
                    variant="h6"
                    color={"#3348BB"}
                    fontWeight={900}
                  >
                    {item.newsTitle}
                  </Typography>
                  <Typography variant="h7" color={"#EF9B01"}>
                    {item.createdAt}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {parse(item.description)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
        <IconButton
          onClick={scrollLeft}
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
          }}
        >
          <ArrowCircleLeft sx={{ fontSize: "32px", color: "#EF9B01" }} />
        </IconButton>
        <IconButton
          onClick={scrollRight}
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
          }}
        >
          <ArrowCircleRight sx={{ fontSize: "32px", color: "#EF9B01" }} />
        </IconButton>
      </div>
    </Box>
  );
};

export default News;
