import { Box } from "@mui/material";
import React from "react";
import image from "../../assets/images/newherosection.svg";
import logo from "../../assets/images/blue_logo.svg";
import CustomTypography from "../CustomTypography";
import CustomButton from "../CustomButton";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "auto",
        height: { xs: 200, lg: 400 },
        display: { lg: "flex" },
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <img src={logo} alt="main-image" width={"60%"} /> */}
        <CustomTypography theme={"heading"} color={"#FFFFFF"}>
          Siric Cleaning Services and Projects Pty (Ltd)
        </CustomTypography>
        <CustomTypography theme={"subheading"} color={"#FFFFFF"}>
          SOLUTIONS TAILERED TO YOUR SPECIFIC DEMANDS.
        </CustomTypography>
        {/* <CustomTypography theme={"subheading"} color={"#FFFFFF"}>
          HELPING YOU KEEP YOUR FUTURE CLEAN.
        </CustomTypography> */}
        {/* <CustomTypography fontSize={12} color={"#8F8888"}>
          HELPING YOU KEEP YOUR FUTURE CLEAN
        </CustomTypography> */}
        <Box sx={{ marginTop: 2 }}>
          <a href="#contact">
            <CustomButton width={160}>
              Contact Us
            </CustomButton>
          </a>
        </Box>
      </Box>
      {/* <Box sx={{ marginLeft: 20, marginBottom: -13 }}>
        <img src={image} alt="main-image" width={"100%"} height={300} />
      </Box> */}
    </Box>
  );
};

export default HeroSection;
