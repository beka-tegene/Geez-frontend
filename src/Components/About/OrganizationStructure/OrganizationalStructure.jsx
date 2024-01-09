import { Stack, Typography } from "@mui/material";
import React from "react";

const OrganizationalStructure = () => {
    return (
        <Stack
            sx={{
                padding: "5rem 20.5%",
            }}
        >
            <Stack gap={2}>
                <Typography
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    color={"#EF9B01"}
                    sx={{ left: "20%" }}
                >
                    Organizational Structure
                </Typography>
                <Typography
                    fontSize={"40px"}
                    fontWeight={"bold"}
                    color={"#3348BB"}
                >
                    Ge'ez Bank Organizational Structure
                </Typography>
                <Typography>
                    The throng of shareholders makes Amhara Bank the most
                    powerful and prominent bank in Ethiopia as it was
                    established by more than 141 thousand subscribers with 4.8
                    billion paid up and 6.5 billion subscribed capital.
                </Typography>
            </Stack>
        </Stack>
    );
};

export default OrganizationalStructure;
