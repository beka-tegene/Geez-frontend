import React, { useEffect } from "react";
import { Icon, Stack, Typography } from "@mui/material";
import {
  Facebook,
  Help,
  Instagram,
  LinkedIn,
  SyncAlt,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import { FaSwift } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Stack
      direction={"row"}
      sx={{ padding: "0.5rem 5%" }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack
        direction={"row"}
        gap={1}
        sx={{ "&:hover": { color: "#EF9B01" } }}
        alignItems={"center"}
      >
        <FaSwift style={{ fontSize: "20px" }} />
        <Typography>Swift Code: GEEZ</Typography>
      </Stack>
      <Stack
        direction={"row"}
        gap={1}
        onClick={() => navigate("/exchange-rete")}
        sx={{ "&:hover": { color: "#EF9B01", cursor: "pointer" } }}
        alignItems={"center"}
      >
        <SyncAlt sx={{ fontSize: "20px" }} />

        <Typography>Daily Exchange Rete</Typography>
      </Stack>
      <Stack
        direction={"row"}
        gap={1}
        sx={{ "&:hover": { color: "#EF9B01", cursor: "pointer" } }}
        onClick={() => navigate("/faq")}
        alignItems={"center"}
      >
        <Help sx={{ fontSize: "20px" }} />
        <Typography>Help</Typography>
      </Stack>
      <Stack
        direction={"row"}
        gap={1}
        sx={{ "&:hover": { color: "#EF9B01", cursor: "pointer" } }}
        alignItems={"center"}
        onClick={() => navigate("/contact-us")}
      >
        <BsFillChatFill style={{ fontSize: "20px" }} />
        <Typography>Contact us</Typography>
      </Stack>
      <Stack direction={"row"} gap={1}>
        <Icon
          sx={{ "&:hover": { color: "#EF9B01", cursor: "pointer" } }}
          onClick={() => window.open("http://www.facebook.com", "_block")}
        >
          <Facebook sx={{ fontSize: "20px" }} />
        </Icon>
        <Icon
          sx={{ "&:hover": { color: "#EF9B01", cursor: "pointer" } }}
          onClick={() => window.open("http://www.facebook.com", "_block")}
        >
          <Twitter sx={{ fontSize: "20px" }} />
        </Icon>
        <Icon
          sx={{ "&:hover": { color: "#EF9B01", cursor: "pointer" } }}
          onClick={() => window.open("http://www.facebook.com", "_block")}
        >
          <Instagram sx={{ fontSize: "20px" }} />
        </Icon>
        <Icon
          sx={{ "&:hover": { color: "#EF9B01", cursor: "pointer" } }}
          onClick={() => window.open("http://www.facebook.com", "_block")}
        >
          <LinkedIn sx={{ fontSize: "20px" }} />
        </Icon>
        <Icon
          sx={{ "&:hover": { color: "#EF9B01", cursor: "pointer" } }}
          onClick={() => window.open("http://www.facebook.com", "_block")}
        >
          <Telegram sx={{ fontSize: "20px" }} />
        </Icon>
      </Stack>
    </Stack>
  );
};

export default Header;
