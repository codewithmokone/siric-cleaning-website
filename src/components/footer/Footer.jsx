import { Box, Link } from "@mui/material";
import React from "react";
import TextComponent from "../TextComponent";
import logo from "../../asserts/images/full-logofulllogo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import CustomTypography from "../CustomTypography";

const Footer = () => {
  return (
    <>
      <Box sx={{ width: "auto", height: 6, backgroundColor: "#509AD4" }}></Box>
      <Box
        sx={{
          width: "auto",
          height: {xs:400,lg:250},
          backgroundColor: "#2663A8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
        }}
      >
        <Box
          sx={{
            width: { xs: 400, lg: 1100 },
            display: "flex",
            flexDirection: {lg: "row" },
            flexWrap:{xs:'wrap'},
            alignItems:{xs:'center'},
            justifyContent: {xs:'center', lg: "space-between" },
          }}
        >
          <Box sx={{width:{xs:200}}}>
            <img src={logo} alt="Logo" height={120} />
          </Box>
          <Box sx={{width:{xs:200}}}>
            <TextComponent theme={"subheading"} color="#FFFFFF">
              Address
            </TextComponent>
            <TextComponent>428 Roshland Lodge</TextComponent>
            <TextComponent>Cleveland</TextComponent>
            <TextComponent>Johannesburg</TextComponent>
            <TextComponent>2094</TextComponent>
            <TextComponent>+27 69 963 7937</TextComponent>
          </Box>
          <Box sx={{width:{xs:200},marginTop:{xs:4}}}>
            <TextComponent theme={"subheading"} color="#FFFFFF">
              Links
            </TextComponent>
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
          <Box sx={{width:{xs:200},marginTop:{xs:2}}}>
            <TextComponent theme={"subheading"} color="#FFFFFF">
              Follow Us
            </TextComponent>
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
        <Box sx={{ height: 20, marginTop: 6 }}>
          <CustomTypography fontSize={14} color={"#FFFFFF"}>
            Copyright &copy; 2024 - Siric | Website managed by Siric
          </CustomTypography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
