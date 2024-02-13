import { Box, Link } from "@mui/material";
import React from "react";
import logo from "../../asserts/images/Siric_logo.png";
import TextComponent from "../TextComponent";
import ButtonComponent from "../ButtonComponent";

const Navbar = () => {
  return (
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
            <Link href="#" underline="hover" sx={{marginLeft: 2, marginRight: 1,}}>
              <TextComponent theme={'link' }>HOME</TextComponent>
            </Link>
            <Link href="#" underline="hover" sx={{marginLeft: 1, marginRight: 1,}}>
              <TextComponent theme={'link'}>ABOUT</TextComponent>
            </Link>
            <Link href="#" underline="hover" sx={{marginLeft: 1, marginRight: 1,}}>
              <TextComponent theme={'link'}>SERVICE</TextComponent>
            </Link>
            <Link href="#" underline="hover" sx={{marginLeft: 1, marginRight: 1,}}>
              <TextComponent theme={'link'}>MISSION</TextComponent>
            </Link>
            <ButtonComponent theme={'link'}><TextComponent theme={'link'}>CONTACT</TextComponent></ButtonComponent>
          </nav>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
