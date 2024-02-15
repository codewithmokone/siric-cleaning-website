import React from "react";
import CustomTypography from "../CustomTypography";
import { Box } from "@mui/material";

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
          width: 1200,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: 360 }}>
          <Box sx={{display:'flex',justifyContent:'center',marginBottom: 2 }}>
            <CustomTypography theme={"heading"} color={"#509AD4"}>
              About Us
            </CustomTypography>
          </Box>

          <CustomTypography sx={{ marginTop: 4 }}>
            Discover Siric Cleaning Services and Projects Pty (Ltd), a
            forward-thinking cleaning company that embarked on its journey in
            February 2023 under the visionary leadership of Sizwe E Ndzimande.
            We have set our sights on redefining cleanliness and hygiene
            standards within diverse workplace environments, ranging from
            Industrial, commercial, Domestic and Warehouses to Offices.
          </CustomTypography>
        </Box>
        <Box sx={{ width: 400 }}>
          {/* <img src={image} alt="main-image" width={250} height={250} /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
