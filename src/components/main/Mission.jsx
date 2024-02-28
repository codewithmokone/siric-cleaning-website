import { Box } from "@mui/material";
import React from "react";
import image from "../../assets/images/missionimage.jpg";
import CustomTypography from "../CustomTypography";

const Mission = () => {
  return (
    <Box
      sx={{
        width: "auto",
        height: 450,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F2F2F2",
      }}
      id="mission"
    >
      <Box
        sx={{
          width: {xs:'auto',lg:1200},
          height: 450,
          display: "flex",
          justifyContent: "center",
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: {xs:"auto",lg:450},
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <CustomTypography theme={"subheading"} color={"#509AD4"}>
              Our Mission
            </CustomTypography>
          </Box>
          <Box sx={{ marginTop: 2, }}>
            <CustomTypography color={"#FFFFFF"} >
              Guided by our unwaveing values of dedication, commitment, and
              diligent effort, our mission is ambitious. Our aim is to create a
              notable difference by establishing no less than 200 employment
              opportunities for individuals seeking to enhance their
              livelihoods. Through this endeavor, we aspire to foster social
              progress and enhance the overall quality of life for the
              communities we touch.
            </CustomTypography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mission;
