import { Box } from "@mui/material";
import React from "react";
import image from "../../assets/images/cartoon1.png";
import CustomTypography from "../CustomTypography";

const CustomizedSolutions = () => {
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
          alignItems: "center",
        }}
      >
        <Box sx={{ width: {xs:450,lg: 400} }}>
          <img src={image} alt="main-image" width={300} height={300} />
        </Box>
        <Box sx={{ width: 360,marginLeft:-55 }}>
          <Box>
            <CustomTypography theme={"subheading"} color={"#509AD4"}>
              Customized Solutions
            </CustomTypography>
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <CustomTypography >
              We understand that each workplace is unique, with distinct needs
              and requirements. That's why we offer customized cleaning
              solutions tailored to the specific demands of your environment.
              Whether you operate in a busy office, a bustling warehouse, or a
              sensitive healthcare facility, we have the expertise to design a
              cleaning plan that aligns with your objectives and ensures a
              pristine and inviting atmosphere.
            </CustomTypography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomizedSolutions;
