import { Card, Stack, Typography } from "@mui/material";
import React from "react";

const DashboardManagement = () => {
  return (
    <Stack gap={2} sx={{ p: 2 }}>
      <Stack direction={"row"} width={"100%"} gap={2}>
        <Card sx={{ flex: "1 1", p: 1 }}>
          <Typography>Home Image</Typography>
          <Typography>10</Typography>
        </Card>
        <Card sx={{ flex: "1 1", p: 1 }}>
          <Typography>News</Typography>
        </Card>
        <Card sx={{ flex: "1 1", p: 1 }}>
          <Typography>Gallery</Typography>
        </Card>
        <Card sx={{ flex: "1 1", p: 1 }}>
          <Typography>Publications</Typography>
        </Card>
        <Card sx={{ flex: "1 1", p: 1 }}>
          <Typography>Tender</Typography>
        </Card>
        <Card sx={{ flex: "1 1", p: 1 }}>
          <Typography>Annual Report</Typography>
        </Card>
        <Card sx={{ flex: "1 1", p: 1 }}>
          <Typography>Vacancy</Typography>
        </Card>
      </Stack>
      <Stack direction={"row"} gap={2}>
        <Stack gap={2}>
          <Stack>wold</Stack>
          <Stack>hello</Stack>
        </Stack>
        <Stack>world</Stack>
      </Stack>
    </Stack>
  );
};

export default DashboardManagement;
