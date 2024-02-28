import { Box, Grid, Link } from "@mui/material";
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
      <Box
        sx={{ width: "auto", height: 6, backgroundColor: "#509AD4" }}
      ></Box>
      <Box
        sx={{
          width: "auto",
          height: { xs: 500, lg: 250 },
          backgroundColor: "#2663A8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: 400, lg: 1200 },
            display: "flex",
            flexDirection: { lg: "row" },
            flexWrap: { xs: "wrap"},
            alignItems: { xs: "center", lg: "center" },
            justifyContent: { xs: "center", lg: "space-between" },
          }}
        >
          {/* Company Logo */}
          <Box sx={{ width: { xs: 180 }, marginLeft: 5 }}>
            <img src={logo} alt="Logo" height={120} />
          </Box>
          {/* Company Address */}
          <Box sx={{ width: { xs: 180 } }}>
            <CustomTypography theme={"subheading"} color="#FFFFFF">
              Address
            </CustomTypography>
            <CustomTypography lineHeight={2} color={"#FFFFFF"}>
              428 Roshland Lodge
            </CustomTypography>
            <CustomTypography lineHeight={2} color={"#FFFFFF"}>
              Cleveland
            </CustomTypography>
            <CustomTypography lineHeight={2} color={"#FFFFFF"}>
              Johannesburg
            </CustomTypography>
            <CustomTypography lineHeight={2} color={"#FFFFFF"}>
              2094
            </CustomTypography>
            <CustomTypography lineHeight={2} color={"#FFFFFF"}>
              +27 69 963 7937
            </CustomTypography>
          </Box>
          {/* Links */}
          <Box sx={{ width: { xs: 180 }, marginTop: { xs: 2, lg: 0 } }}>
            <CustomTypography theme={"subheading"} color="#FFFFFF">
              Links
            </CustomTypography>
            <Link href="#" underline="hover">
              <CustomTypography theme={"link"} lineHeight={2}>
                Home
              </CustomTypography>
            </Link>
            <Link href="#about" underline="hover">
              <CustomTypography theme={"link"} lineHeight={2}>
                About
              </CustomTypography>
            </Link>
            <Link href="#service" underline="hover">
              <CustomTypography theme={"link"} lineHeight={2}>
                Service
              </CustomTypography>
            </Link>
            <Link href="#mission" underline="hover">
              <CustomTypography theme={"link"} lineHeight={2}>
                Mission
              </CustomTypography>
            </Link>
            <Link href="#" underline="hover">
              <CustomTypography theme={"link"} lineHeight={2}>
                Company Profile
              </CustomTypography>
            </Link>
          </Box>
          {/* Social Media */}
          <Box
            sx={{
              width: { xs:180 },
              height: 170,
              marginTop: { xs: 2, lg: 0 },
              marginRight: -5,
            }}
          >
            <CustomTypography theme={"subheading"} color="#FFFFFF">
              Follow Us
            </CustomTypography>
            <Link
              href="#"
              sx={{ display: "flex", alignItems: "center", marginTop: 0.5 }}
            >
              <FacebookRoundedIcon
                sx={{ color: "#FFFFFF", fontSize: 16, marginRight: 1 }}
              />
              <CustomTypography theme={"link"}>Facebook</CustomTypography>
            </Link>
            <Link
              href="#"
              sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
            >
              <XIcon sx={{ color: "#FFFFFF", fontSize: 16, marginRight: 1 }} />
              <CustomTypography theme={"link"}>Twitter</CustomTypography>
            </Link>
            <Link
              href="#"
              sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
            >
              <InstagramIcon
                sx={{ color: "#FFFFFF", fontSize: 16, marginRight: 1 }}
              />
              <CustomTypography theme={"link"}>Instagram</CustomTypography>
            </Link>
            <Link
              href="#"
              sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
            >
              <LinkedInIcon
                sx={{ color: "#FFFFFF", fontSize: 16, marginRight: 1 }}
              />
              <CustomTypography theme={"link"}>Linkedin</CustomTypography>
            </Link>
          </Box>
        </Box>
        <Box sx={{ height: 20, marginTop: 4,display:'flex',alignItems:'center',justifyContent:'center' }}>
          <CustomTypography  fontSize={14} color={"#FFFFFF"}>
            Copyright &copy; 2024 - Siric | Designed by Simon
            Lephoto
          </CustomTypography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
