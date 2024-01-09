import { ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import bg from "../../../Image/Frame 15.png";

const Ownership = () => {
    return (
        <Stack
            sx={{
                backgroundColor: "#F7F7F7",
                position: "relative",
                height: "35dvh",
                width: "100%",
            }}
        >
            <ImageListItem
                sx={{
                    width: "100%",
                }}
            >
                <img
                    src={bg}
                    alt="bg"
                    style={{
                        maxHeight: "35dvh",
                        minHeight: "35dvh",
                        width: "100%",
                    }}
                />
            </ImageListItem>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            ></div>
            <Typography
                variant="h2"
                sx={{
                    fontWeight: "bold",
                    position: "absolute",
                    top: "15%",
                    left: "40%",
                    transform: "translateY(-50%)",
                    color: "#EF9B01",
                }}
            >
                Ownership
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    position: "absolute",
                    top: "40%",
                    left: "10%",
                    right: "10%",
                    transform: "translateY(-50%)",
                    color: "#FFFFFF",
                }}
            >
                The throng of shareholders makes Amhara Bank the most powerful
                and prominent bank in Ethiopia as it was established by more
                than 141 thousand subscribers with 4.8 billion paid up and 6.5
                billion subscribed capital.
            </Typography>
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{
                    width: "100%",
                    position: "absolute",
                    top: "70%",
                    transform: "translateY(-50%)",
                    padding: "0 10%",
                    color: "#FFFFFF",
                }}
            >
                <Stack>
                    <Typography
                        fontSize={"40px"}
                        fontWeight={"bold"}
                        color={"#FFFFFF"}
                    >
                        100k+
                    </Typography>
                    <Typography fontSize={"14px"} color={"#EF9B01"}>
                        way to
                    </Typography>
                </Stack>
                <Stack>
                    <Typography
                        fontSize={"40px"}
                        fontWeight={"bold"}
                        color={"#FFFFFF"}
                    >
                        100k+
                    </Typography>
                    <Typography fontSize={"14px"} color={"#EF9B01"}>
                        wayto
                    </Typography>
                </Stack>
                <Stack>
                    <Typography
                        fontSize={"40px"}
                        fontWeight={"bold"}
                        color={"#FFFFFF"}
                    >
                        100k+
                    </Typography>
                    <Typography fontSize={"14px"} color={"#EF9B01"}>
                        way to
                    </Typography>
                </Stack>
                <Stack>
                    <Typography
                        fontSize={"40px"}
                        fontWeight={"bold"}
                        color={"#FFFFFF"}
                    >
                        100k+
                    </Typography>
                    <Typography fontSize={"14px"} color={"#EF9B01"}>
                        wayt
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Ownership;
