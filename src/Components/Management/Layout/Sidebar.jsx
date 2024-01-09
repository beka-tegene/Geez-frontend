import {
  Collapse,
  ImageListItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import logo from "../../../Image/Group 1.png";
import {
  ContentPasteSearch,
  Dashboard,
  ExpandLess,
  ExpandMore,
  Info,
  Logout,
  PermMedia,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  //     const [selectedIndex, setSelectedIndex] = React.useState(1);

  //   const handleListItemClick = (event, index) => {
  //     setSelectedIndex(index);
  //   };
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
    setOpen2(false);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
    setOpen(false);
  };
  return (
    <Stack
      sx={{
        width: 245,
        background: "#272727",
        height: "100dvh",
        position: "sticky",
        top: 0,
        pt: 2,
      }}
      gap={5}
    >
      <ImageListItem>
        <img src={logo} alt="logo" />
      </ImageListItem>
      <Stack>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            onClick={() => navigate("/private/geezbank/dashboard")}
            sx={{ "&:hover": { background: "#EF9B01" } }}
          >
            <ListItemIcon>
              <Dashboard sx={{ color: "#FFFFFF" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: "#FFFFFF" }} />
          </ListItemButton>
          <ListItemButton
            sx={{ "&:hover": { background: "#EF9B01" } }}
            onClick={handleClick2}
          >
            <ListItemIcon>
              <Info sx={{ color: "#FFFFFF" }} />
            </ListItemIcon>
            <ListItemText primary="About" sx={{ color: "#FFFFFF" }} />
            {open2 ? (
              <ExpandLess sx={{ color: "#FFFFFF" }} />
            ) : (
              <ExpandMore sx={{ color: "#FFFFFF" }} />
            )}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4, "&:hover": { background: "#EF9B01" } }}
                onClick={() => navigate("/private/geezbank/board-director")}
              >
                <ListItemText
                  primary="Board of Director"
                  sx={{ color: "#FFFFFF" }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4, "&:hover": { background: "#EF9B01" } }}
                onClick={() =>
                  navigate("/private/geezbank/executive-management")
                }
              >
                <ListItemText
                  primary="Executive Management"
                  sx={{ color: "#FFFFFF" }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4, "&:hover": { background: "#EF9B01" } }}
                onClick={() => navigate("/private/geezbank/partnership")}
              >
                <ListItemText primary="Partnership" sx={{ color: "#FFFFFF" }} />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton
            sx={{ "&:hover": { background: "#EF9B01" } }}
            onClick={handleClick}
          >
            <ListItemIcon>
              <PermMedia sx={{ color: "#FFFFFF" }} />
            </ListItemIcon>
            <ListItemText primary="Media" sx={{ color: "#FFFFFF" }} />
            {open ? (
              <ExpandLess sx={{ color: "#FFFFFF" }} />
            ) : (
              <ExpandMore sx={{ color: "#FFFFFF" }} />
            )}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4, "&:hover": { background: "#EF9B01" } }}
                onClick={() => navigate("/private/geezbank/home-gallery")}
              >
                <ListItemText
                  primary="Home Gallery"
                  sx={{ color: "#FFFFFF" }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4, "&:hover": { background: "#EF9B01" } }}
                onClick={() => navigate("/private/geezbank/news")}
              >
                <ListItemText primary="News" sx={{ color: "#FFFFFF" }} />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4, "&:hover": { background: "#EF9B01" } }}
                onClick={() => navigate("/private/geezbank/gallery")}
              >
                <ListItemText primary="Gallery" sx={{ color: "#FFFFFF" }} />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4, "&:hover": { background: "#EF9B01" } }}
                onClick={() => navigate("/private/geezbank/publication")}
              >
                <ListItemText
                  primary="Publications"
                  sx={{ color: "#FFFFFF" }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4, "&:hover": { background: "#EF9B01" } }}
                onClick={() => navigate("/private/geezbank/tender")}
              >
                <ListItemText primary="Tender" sx={{ color: "#FFFFFF" }} />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4, "&:hover": { background: "#EF9B01" } }}
                onClick={() => navigate("/private/geezbank/annual-report")}
              >
                <ListItemText
                  primary="Annual Report"
                  sx={{ color: "#FFFFFF" }}
                />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            onClick={() => navigate("/private/geezbank/vacancy")}
            sx={{ "&:hover": { background: "#EF9B01" } }}
          >
            <ListItemIcon>
              <ContentPasteSearch sx={{ color: "#FFFFFF" }} />
            </ListItemIcon>
            <ListItemText primary="Vacancy" sx={{ color: "#FFFFFF" }} />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              localStorage.clear();
              window.location.href = "/private/geezbank/login";
            }}
            sx={{ "&:hover": { background: "#EF9B01" } }}
          >
            <ListItemIcon>
              <Logout sx={{ color: "#FFFFFF" }} />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ color: "#FFFFFF" }} />
          </ListItemButton>
        </List>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
