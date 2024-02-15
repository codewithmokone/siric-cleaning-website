import { Box } from "@mui/material";
import React from "react";
import image from "../../assets/images/hero-sec.png";
import logo from "../../assets/images/blue_logo.svg";
import CustomTypography from "../CustomTypography";
import CustomButton from "../CustomButton";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "auto",
        height:400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#F2F2F2',
      }}
    >
      <Box
        sx={{
          width: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom:-8
        }}
      >
        <img src={logo} alt="main-image" width={"60%"} />
        <CustomTypography theme={"heading"} color={"#509AD4"}>
          CLEANING SERVICES
        </CustomTypography>
        <CustomTypography theme={"subheading"}>
          AND PROJECTS PTY(LTD)
        </CustomTypography>
        <CustomTypography fontSize={12} color={"#8F8888"}>
          HELPING YOU KEEP YOUR FUTURE CLEAN
        </CustomTypography>
        <Box sx={{ marginTop: 2 }}>
          <CustomButton width={160} buttonColor={'#509AD4'} >
            Contact Us
          </CustomButton>
        </Box>
      </Box>
      <Box sx={{ marginLeft: 20,marginBottom:-13 }}>
        <img src={image} alt="main-image" width={"100%"} height={300} />
      </Box>
    </Box>
  );
};

export default HeroSection;
