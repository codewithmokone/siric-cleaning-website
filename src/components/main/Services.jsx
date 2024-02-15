import { Box } from "@mui/material";
import React from "react";
import CustomTypography from "../CustomTypography";
// import Card from "../Card";
import CustomCard from "../CustomCard";

const Services = () => {
  return (
    <Box
      sx={{
        width: "auto",
        height: 900,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EFF4F8",
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
          <CustomTypography theme={"subheading"} color={"#509AD4"}>
            Service
          </CustomTypography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            // marginTop: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Card /> */}
          <CustomCard />
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
