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
        height: {xs:800,lg:1000},
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#EFF4F8",
      }}
      id="service"
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
        <Box
          sx={{
            width: 320,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomTypography textAlig={"center"} color={"gray"}>
            Our Best Service
          </CustomTypography>
        </Box>
        <Box
          sx={{
            width: 320,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <CustomTypography
            textAlig={"center"}
            theme={"subheading"}
            color={"#509AD4"}
            textAlign={'center'}
          >
            We Are Offering The Best Cleaning Service For You
          </CustomTypography>
        </Box>
        <Box
          sx={{
            // width:{xs:400},
            display: "flex",
            flexWrap: "wrap",
            marginTop: 2,
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
