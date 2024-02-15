import { Box } from "@mui/material";
import React from "react";
import CustomTypography from "../CustomTypography";
import Card from "../Card";

const Services = () => {
  return (
    <Box
      sx={{
        width: "auto",
        height: 850,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#2663A8"
      }}
    >
      <Box
        sx={{
          width: 1200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <CustomTypography theme={"subheading"}>Services</CustomTypography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card />
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
