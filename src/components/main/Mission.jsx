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
        backgroundColor:'#F2F2F2'
      }}
    >
      <Box
        sx={{
          width: 1200,
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
            width: 450,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomTypography theme={"subheading"} color={"#FFFFFF"}>
            Our Mission
          </CustomTypography>
          <CustomTypography color={"#FFFFFF"} sx={{ marginTop: 4 }}>
            Guided by our unwavering values of dedication, commitment, and
            diligent effort, our mission is ambitious. Our aim is to create a
            notable difference by establishing no less than 200 employment
            opportunities for individuals seeking to enhance their livelihoods.
            Through this endeavor, we aspire to foster social progress and
            enhance the overall quality of life for the communities we touch.
          </CustomTypography>
        </Box>
      </Box>
    </Box>
  );
};

export default Mission;
