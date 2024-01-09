import React, { useEffect, useState } from "react";
import Header from "./Header";
import {
    Box,
    Button,
    IconButton,
    ImageListItem,
    Menu,
    MenuItem,
    Stack,
} from "@mui/material";
import logo from "../../Image/Group 1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowDropDown, Chat, KeyboardArrowUp } from "@mui/icons-material";
const Navbar = (props) => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    const linkStyle = {
        color: "#FFFFFF",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
    };
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEl1, setAnchorEl1] = useState(null);
    const open1 = Boolean(anchorEl1);
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };

    const [anchorEl2, setAnchorEl2] = useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const navigate = useNavigate();

    const services = (s) => {
        navigate(`/${s}`);
    };

    return (
        <Box>
            <Header />
            <Stack
                direction={"row"}
                position={"sticky"}
                top={0}
                sx={{
                    height: "11dvh",
                    backgroundColor: "#272727",
                    padding: "0.5rem 5%",
                    zIndex: 1,
                }}
                justifyContent={"space-between"}
            >
                <ImageListItem>
                    <img src={logo} alt="logo" />
                </ImageListItem>
                <Stack direction={"row"} alignItems={"center"} gap={5}>
                    <Stack direction={"row"} gap={3} alignItems={"center"}>
                        <Link style={linkStyle} to={"/"}>
                            Home
                        </Link>
                        <Link
                            style={linkStyle}
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                        >
                            About us <ArrowDropDown />
                        </Link>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem
                                onClick={() => {
                                    services("about-us");
                                }}
                            >
                                About Ge'ez
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    services("organization-structure");
                                }}
                            >
                                Organizational Structure
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    services("board-directors");
                                }}
                            >
                                Board of Directors
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    services("executive-management");
                                }}
                            >
                                Executive Management
                            </MenuItem>
                        </Menu>
                        <Link
                            style={linkStyle}
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick1}
                        >
                            Product & Service <ArrowDropDown />
                        </Link>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl1}
                            open={open1}
                            onClose={handleClose1}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem
                                onClick={() => {
                                    services("local-service");
                                }}
                            >
                                Local Banking
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    services("international-service");
                                }}
                            >
                                International Banking
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    services("loan-service");
                                }}
                            >
                                Loan Service
                            </MenuItem>
                        </Menu>
                        <Link style={linkStyle} to={"/vacancy"}>
                            Vacancy
                        </Link>
                        <Link
                            style={linkStyle}
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick2}
                        >
                            Media <ArrowDropDown />
                        </Link>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl2}
                            open={open2}
                            onClose={handleClose2}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem
                                onClick={() => {
                                    services("news");
                                }}
                            >
                                News
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    services("gallery");
                                }}
                            >
                                Gallery
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    services("downloads-publications");
                                }}
                            >
                                Download and publications
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    services("tenders");
                                }}
                            >
                                Tenders
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    services("annual-report");
                                }}
                            >
                                Annual Report
                            </MenuItem>
                        </Menu>
                    </Stack>
                    <Stack>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#EF9B01",
                                color: "white",
                                "&:hover": {
                                    color: "#EF9B01",
                                    fontWeight: "bold",
                                },
                            }}
                        >
                            Open Account
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
            {showScrollButton && (
                <IconButton
                    sx={{
                        position: "fixed",
                        bottom: "2rem",
                        right: "2rem",
                        backgroundColor: "#EF9B01",
                        color: "#FFFFFF",
                        zIndex: 10,
                        "&:hover": {
                            backgroundColor: "#EF9B0199",
                            color: "#272727",
                        },
                    }}
                    onClick={scrollToTop}
                >
                    <KeyboardArrowUp />
                </IconButton>
            )}
            <IconButton
                sx={{
                    position: "fixed",
                    bottom: "5rem",
                    right: "2rem",
                    backgroundColor: "#EF9B01",
                    color: "#FFFFFF",
                    zIndex: 10,
                    "&:hover": {
                        backgroundColor: "#EF9B0199",
                        color: "#272727",
                    },
                }}
            >
                <Chat />
            </IconButton>
            {props.children}
        </Box>
    );
};

export default Navbar;
