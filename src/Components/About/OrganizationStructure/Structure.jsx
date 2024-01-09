import React from "react";
import { ImageListItem, Stack } from "@mui/material";
import OsImage from "../../../Image/OrganizationStructure.png";

const Structure = () => {
    return (
        <Stack alignItems={"center"} sx={{ width: "100%" }}>
            <ImageListItem sx={{ display: "flex", justifyContent: "center", width:"100%"}}>
                <img src={OsImage} alt="heroImage" style={{ maxWidth: "50%", minWidth: "50%"}}/>
            </ImageListItem>
        </Stack>
    );
};

export default Structure;
