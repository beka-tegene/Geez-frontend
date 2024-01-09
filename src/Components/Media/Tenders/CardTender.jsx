import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import image1 from "../../../Image/Frame 10 (3).png";
import { useDispatch, useSelector } from "react-redux";
import { getTenderData } from "../../../Utils/Store/MediaStore";
import moment from "moment";
import striptags from "striptags";

const CardTender = () => {
  const dispatch = useDispatch();

  const Tender = useSelector((state) => state.MediaStore.outputTender);
  useEffect(() => {
    dispatch(getTenderData());
  }, [dispatch]);
  console.log(Tender);
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
          <Stack gap={1}>
            <Typography fontSize={"26px"} fontWeight={"bold"}>
            {item.tenderTitle}
            </Typography>
            <Typography fontSize={"14px"}>{moment(item.createdAt).format("LL").toString()} | Ge'ez Bank</Typography>
            <Typography fontSize={"16px"}>
            {striptags(item.description)}
            </Typography>
          </Stack>
          <CardMedia component="img" image={image1} alt="News Image"  sx={{maxHeight:"50dvh",minHeight:"50dvh",width:"100%"}}/>
        </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default CardTender;
