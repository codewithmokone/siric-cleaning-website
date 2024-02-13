import { Box, Link } from "@mui/material";
import React from "react";
import TextComponent from "../TextComponent";
import logo from "../../asserts/images/full-logofulllogo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <>
      <Box sx={{ width: "auto", height: 6, backgroundColor: "#509AD4" }}></Box>
      <Box
        sx={{
          width: "auto",
          height: 300,
          backgroundColor: "#2663A8",
          display: "flex",
          justifyContent: "center",
          margin: 0,
        }}
      >
        <Box
          sx={{
            width: 1100,
            display: "flex",
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
          <Box>
            <img src={logo} alt="Logo" height={120} />
          </Box>
          <Box>
            <TextComponent theme={"subheading"} color='#FFFFFF'>Address</TextComponent>
            <TextComponent>428 Roshland Lodge</TextComponent>
            <TextComponent>Cleveland</TextComponent>
            <TextComponent>Johannesburg</TextComponent>
            <TextComponent>2094</TextComponent>
            <TextComponent>+27 69 963 7937</TextComponent>
          </Box>
          <Box>
            <TextComponent theme={"subheading"} color='#FFFFFF'>Links</TextComponent>
            <Link href="#" underline="hover" sx={{ marginTop: 20 }}>
              <TextComponent>Home</TextComponent>
            </Link>
            <Link href="#" underline="hover">
              <TextComponent>About</TextComponent>
            </Link>
            <Link href="#" underline="hover" sx={{ lineHeight: 1 }}>
              <TextComponent>Service</TextComponent>
            </Link>
            <Link href="#" underline="hover" sx={{ lineHeight: 1 }}>
              <TextComponent>Mission</TextComponent>
            </Link>
            <Link href="#" underline="hover" sx={{ lineHeight: 1 }}>
              <TextComponent>Company Profile</TextComponent>
            </Link>
          </Box>
          <Box>
            <TextComponent theme={"subheading"} color='#FFFFFF'>Follow Us</TextComponent>
            <Link href="#" sx={{ display: "flex", alignItems: "center" }}>
              <FacebookRoundedIcon
                sx={{ color: "#FFFFFF", fontSize: 16, marginRight: 1 }}
              />
              <TextComponent>Facebook</TextComponent>
            </Link>
            <Link href="#" sx={{ display: "flex", alignItems: "center" }}>
              <XIcon sx={{ color: "#FFFFFF", fontSize: 16, marginRight: 1 }} />
              <TextComponent>Twitter</TextComponent>
            </Link>
            <Link href="#" sx={{ display: "flex", alignItems: "center" }}>
              <InstagramIcon
                sx={{ color: "#FFFFFF", fontSize: 16, marginRight: 1 }}
              />
              <TextComponent>Instagram</TextComponent>
            </Link>
            <Link href="#" sx={{ display: "flex", alignItems: "center" }}>
              <LinkedInIcon
                sx={{ color: "#FFFFFF", fontSize: 16, marginRight: 1 }}
              />
              <TextComponent>Linkedin</TextComponent>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
