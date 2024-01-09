import {
  ImageListItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import aboutusImage from "../../Image/Frame 10.png";
const ReteExchange = () => {
  return (
    <Stack>
      <Stack>
        <ImageListItem sx={{ position: "relative", top: 0, left: 0 }}>
          <img
            src={aboutusImage}
            alt="hero"
            style={{ maxHeight: "24dvh", minHeight: "24dvh", width: "100%" }}
          />
          <Typography
            variant="h2"
            color={"#EF9B01"}
            sx={{
              fontWeight: "Bold",
              letterSpacing: 4,
              m: 1,
              position: "absolute",
              top: "30%",
              left: "5%",
            }}
          >
            Daily Exchange Rete
          </Typography>
        </ImageListItem>
      </Stack>
      <Stack
        sx={{
          padding: "6rem 5%",
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
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
        <TableContainer component={Paper} sx={{width:"50%"}}>
          <Table  aria-label="sticky table" stickyHeader >
            <TableHead>
              <TableRow>
                <TableCell >Currency</TableCell>
                <TableCell>Cash Buying</TableCell>
                <TableCell>Cash Selling</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>USD</TableCell>
                <TableCell>777</TableCell>
                <TableCell>222</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>USD</TableCell>
                <TableCell>777</TableCell>
                <TableCell>222</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>USD</TableCell>
                <TableCell>777</TableCell>
                <TableCell>222</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>USD</TableCell>
                <TableCell>777</TableCell>
                <TableCell>222</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
};

export default ReteExchange;
