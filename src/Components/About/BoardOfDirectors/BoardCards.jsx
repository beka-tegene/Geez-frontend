import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

const BoardCards = (props) => {
  return (
    <Stack>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={400}
            sx={{ maxWidth: 550, minWidth: 300 }}
            src={props.image}
          />
          <CardContent>
            <Typography
              variant="h5"
              color={"#3348BB"}
              sx={{
                fontWeight: 900,
              }}
            >
              {props.FullName}
            </Typography>
            <Typography variant="h7" color={"#EF9B01"}>
              Ge'ez Bank S.C Board of Directors - {props.Position}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Stack>
  );
};

export default BoardCards;
