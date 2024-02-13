import { Box } from "@mui/material";
import React from "react";
import image from "../../asserts/images/HeroImage.jpg";

const HeroSection = () => {
  return (
    <Box sx={{ width: "auto", height: 400,display:'flex',justifyContent: "center"}}>
      <Box>
        <img src={image} alt="main-image" width={1200} height={400} />
      </Box>
    </Box>
  );
};

export default HeroSection;
