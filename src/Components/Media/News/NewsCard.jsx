import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
const NewsCard = (props) => {
  return (
    <Card sx={{ width: "33.33%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={300}
          sx={{ width:"100%"}}
          src={props.image}
        />
      </CardActionArea>
      <Stack gap={1} padding={"0.5rem"}>
        <Typography
          padding={"0.5rem 0 0 0"}
          variant="h5"
          color={"#3348BB"}
          fontWeight={900}
        >
          {props.title}
        </Typography>
        <Typography variant="h7" color={"#EF9B01"}>
          {props.date}
        </Typography>
        <Typography variant="h7">{parse(props.description)}</Typography>
        <CardActions>
          <Button size="small">
            {" "}
            <Link>Read More</Link>
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default NewsCard;
