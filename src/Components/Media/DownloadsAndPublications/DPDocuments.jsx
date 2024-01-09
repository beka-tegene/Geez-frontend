import {
  Box,
  Card,
  CardActionArea,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import image1 from "../../../Image/PDF.png";
import { useDispatch, useSelector } from "react-redux";
import { getLegalData } from "../../../Utils/Store/MediaStore";
const DPDocuments = () => {
  const dispatch = useDispatch();

  const Legal = useSelector((state) => state.MediaStore.outputLegal);
  useEffect(() => {
    dispatch(getLegalData());
  }, [dispatch]);
  console.log(Legal);
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
          Ge'ez Bank Account Opening Forms
        </Typography>
        <Typography fontSize={"40px"} fontWeight={"bold"} color={"#3348BB"}>
          Branch Banking Forms
        </Typography>
      </Stack>
      <Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap={2}
        >
        {Legal.document?.map((item, index) => (

          <Card
            sx={{
              width: 400,
            }}
            key={index} >
            <CardActionArea
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                p: 2,
                alignItems: "flex-start",
              }}
            >
              <ImageListItem sx={{ width: 70 }}>
                <img src={image1} alt="logo" />
              </ImageListItem>
              <Typography fontSize={"20px"} fontWeight={"bold"}>
              {item.DocumentName}

              </Typography>
              <Typography fontSize={"16px"} fontWeight={"bold"}>
              {item.document.size}
              </Typography>
            </CardActionArea>
          </Card>
            ))}
      
        </Stack>
      </Stack>
    </Box>
  );
};

export default DPDocuments;
