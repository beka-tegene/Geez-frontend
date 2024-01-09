import { Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../../../Utils/Store/MediaStore";

const linkStyle = {
  color: "#3348BB",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
};

const NewsDetails = () => {
  const dispatch = useDispatch();

  const News = useSelector((state) => state.MediaStore.outputNews);
  useEffect(() => {
    dispatch(getNewsData());
  }, [dispatch]);
  console.log(News);
  return (
    <Stack>
      <Stack
        direction={"row"}
        sx={{ padding: "4rem 40% 1rem" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={"#3348BB"}
      >
        <Stack direction={"row"} gap={2}>
          <Typography fontSize={"13px"}>
            <Link style={linkStyle}>All News</Link>
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <Typography fontSize={"13px"}>
            <Link style={linkStyle}>Agreement</Link>
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <Typography fontSize={"13px"}>
            <Link style={linkStyle}>Announcement</Link>
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <Typography fontSize={"13px"}>
            <Link style={linkStyle}>Bank News</Link>
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        // justifyContent={"space-between"}
        gap={5}
        flexWrap={"wrap"}
        sx={{ padding: "2rem 9%" }}
      >
        {News.news?.map((item, index) => (
          <NewsCard
            key={index}
            image={item.image}
            title={item.newsTitle}
            date={item.createdAt}
            description={item.description}
          />
        ))}
      </Stack>
      <Stack alignItems={"center"} spacing={4} pt={8} pb={4}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </Stack>
  );
};

export default NewsDetails;
