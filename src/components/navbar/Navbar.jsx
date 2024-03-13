import {
  AppBar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../../asserts/images/Siric_logo.png";
import CustomButton from "../CustomButton";
import CustomTypography from "../CustomTypography";
import MenuIcon from "@mui/icons-material/Menu";


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ width: "auto", height: 6, backgroundColor: "#509AD4" }}></Box>
      <AppBar
        position="static"
        elevation={10}
        sx={{ display: "flex", justifyContent: "center",bgcolor:'#2663A8' }}
      >
        <Toolbar  sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: { xs: 400, lg: 1200 },
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "space-between", md: "space-between" },
            }}
          >
            <Box>
              <img src={logo} alt="Logo" />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <nav
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link
                  href="#"
                  underline="hover"
                  sx={{ marginLeft: 4, marginRight: 2 }}
                >
                  <CustomTypography theme={"link"}>HOME</CustomTypography>
                </Link>
                <Link
                  href="#about"
                  underline="hover"
                  sx={{ marginLeft: 2, marginRight: 2 }}
                >
                  <CustomTypography theme={"link"}>ABOUT</CustomTypography>
                </Link>
                <Link
                  href="#service"
                  underline="hover"
                  sx={{ marginLeft: 2, marginRight: 2 }}
                >
                  <CustomTypography theme={"link"}>SERVICE</CustomTypography>
                </Link>
                <Link
                  href="#mission"
                  underline="hover"
                  sx={{ marginLeft: 2, marginRight: 2 }}
                >
                  <CustomTypography theme={"link"}>MISSION</CustomTypography>
                </Link>
                <a href="#contact">
                <CustomButton theme={"link"}>
                  <CustomTypography theme={"link"}>CONTACT</CustomTypography>
                </CustomButton>
                </a>
              </nav>
            </Box>
            {/* Menu icon for mobile view */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherite"
              >
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="#"
                    underline="hover"
                    sx={{ marginLeft: 2, marginRight: 2 }}
                  >
                    <CustomTypography theme={"menuLink"}>HOME</CustomTypography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="#about"
                    underline="hover"
                    sx={{ marginLeft: 2, marginRight: 2 }}
                  >
                    <CustomTypography theme={"menuLink"}>
                      ABOUT
                    </CustomTypography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="#service"
                    underline="hover"
                    sx={{ marginLeft: 2, marginRight: 2 }}
                  >
                    <CustomTypography theme={"menuLink"}>
                      SERVICE
                    </CustomTypography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="#mission"
                    underline="hover"
                    sx={{ marginLeft: 2, marginRight: 2 }}
                  >
                    <CustomTypography theme={"menuLink"}>
                      MISSION
                    </CustomTypography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="#contact"
                    underline="hover"
                    sx={{ marginLeft: 2, marginRight: 2 }}
                  >
                    <CustomTypography theme={"menuLink"}>
                      CONTACT
                    </CustomTypography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
