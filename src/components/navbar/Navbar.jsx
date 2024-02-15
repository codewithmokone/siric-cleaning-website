import { Box, Link } from "@mui/material";
import React from "react";
import logo from "../../asserts/images/Siric_logo.png";
import TextComponent from "../TextComponent";
import CustomButton from "../CustomButton";
import CustomTypography from "../CustomTypography";

const Navbar = () => {
  return (
    <>
     <Box sx={{ width: "auto", height: 2, backgroundColor: "#509AD4" }}></Box>
     <Box
      sx={{
        width: "auto",
        height: 60,
        bgcolor: "#2663A8",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 1200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img src={logo} alt="Logo" />
        </Box>
        <Box>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent:'center',
            }}
          >
            <Link href="#" underline="hover" sx={{marginLeft: 4, marginRight: 2,}}>
              {/* <TextComponent theme={'link' }>HOME</TextComponent> */}
              <CustomTypography theme={'link'}>HOME</CustomTypography>
            </Link>
            <Link href="#" underline="hover" sx={{marginLeft: 2, marginRight: 2,}}>
              <CustomTypography theme={'link'}>ABOUT</CustomTypography>
            </Link>
            <Link href="#" underline="hover" sx={{marginLeft: 2, marginRight: 2,}}>
              <CustomTypography theme={'link'}>SERVICE</CustomTypography>
            </Link>
            <Link href="#" underline="hover" sx={{marginLeft: 2, marginRight: 2,}}>
              <CustomTypography theme={'link'}>MISSION</CustomTypography>
            </Link>
            <CustomButton theme={'link'}><CustomTypography theme={'link'}>CONTACT</CustomTypography></CustomButton>
          </nav>
        </Box>
      </Box>
    </Box>
    </>
    
  );
};

export default Navbar;
