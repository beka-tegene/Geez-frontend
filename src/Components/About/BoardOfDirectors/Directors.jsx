import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Images from "../../../Image/DirChairman.png";
import Cards from "./BoardCards";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getBoardData } from "../../../Utils/Store/MediaStore";

const Directors = () => {
  const dispatch = useDispatch();
  const Board = useSelector((state) => state.MediaStore.outputBoard);
  useEffect(() => {
    dispatch(getBoardData());
  }, [dispatch]);
  console.log(Board);
  return (
    <motion.Stack
      initial={{ scale: 0 }}
      animate={{ rotate: 180, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Stack
        justifyContent={"space-around"}
        sx={{ padding: "4rem 5%" }}
        alignItems={"center"}
      >
        <Card sx={{ width: "60%" }}>
          <CardActionArea sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              height={500}
              sx={{ maxWidth: "50%" }}
              src={Images}
            />
            <CardContent sx={{ padding: "0rem 2%", maxWidth: "50%" }}>
              <Typography
                color={"#3348BB"}
                sx={{ fontSize: "34px", fontWeight: 900 }}
                gutterBottom
                component="div"
              >
                Mis Alem Belayneh
              </Typography>
              <Typography
                color={"#EF9B01"}
                sx={{
                  fontSize: "19px",
                  fontWeight: "Bold",
                }}
                gutterBottom
              >
                Ge'ez Bank S.C Board of Directors - Chairman
              </Typography>
              <Typography fontSize={"13px"}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
      <Stack sx={{ alignItems: "center", padding: "4rem 0% 2rem" }}>
        <Typography
          variant="h6"
          color={"#EF9B01"}
          sx={{
            fontWeight: "Bold",
          }}
          gutterBottom
          component="div"
        >
          Ge'ez Bank S.C
        </Typography>
        <Typography
          variant="h3"
          color={"#3348BB"}
          sx={{
            fontWeight: 900,
          }}
        >
          Board of Directors
        </Typography>
      </Stack>
      <Stack
        direction="row"
        gap={3}
        flexWrap={"wrap"}
        sx={{ padding: "3rem 7% 6rem" }}
      >
        {Board?.board?.map((item, index) => (
          <Cards
            key={index}
            FullName={item.FullName}
            Position={item.Position}
            image={item.image}
          />
        ))}
      </Stack>
    </motion.Stack>
  );
};

export default Directors;
