import React from "react";
import CustomTypography from "../CustomTypography";
import { Box } from "@mui/material";
import image from '../../assets/images/aboutimage.png'

const About = () => {
  return (
    <Box
      sx={{
        width: "auto",
        height: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: {xs:400, lg:1200},
          display: "flex",
          alignItems:'center',
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ width: 360 }}>
          <Box sx={{display:'flex',justifyContent:'center',marginBottom: 2 }}>
            <CustomTypography theme={"subheading"} color={"#509AD4"}>
              About Us
            </CustomTypography>
          </Box>

          <CustomTypography sx={{ marginTop: 4 }} >
            Discover Siric Cleaning Services and Projects Pty (Ltd), a
            forward-thinking cleaning company that embarked on its journey in
            February 2023 under the visionary leadership of Sizwe E Ndzimande.
            We have set our sights on redefining cleanliness and hygiene
            standards within diverse workplace environments, ranging from
            Industrial, commercial, Domestic and Warehouses to Offices.
          </CustomTypography>
        </Box>
        <Box sx={{ width: 400 }}>
          <img src={image} alt="main-image" width={300} height={300} />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
