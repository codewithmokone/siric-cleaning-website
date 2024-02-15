import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailIcon from "@mui/icons-material/Mail";

const CustomTextField = ({ placeholder, children, icon, multiline, rows }) => {
  return (
    <TextField
      fullWidth
      size="small"
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
      sx={{
        height: "auto",
        marginTop: 2,
        marginBottom: 2,
        color: "#FFFFFF",
        backgroundColor:'#FFFFFF'
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon === "name" ? <PersonIcon sx={{color:"#509AD4"}} /> : null}
            {icon === "phone" ? <LocalPhoneIcon sx={{color:"#509AD4"}} /> : null}
            {icon === "email" ? <AlternateEmailIcon sx={{color:"#509AD4"}} /> : null}
            {icon === "message" ? <MailIcon  sx={{color:"#509AD4"}}/> : null}
          </InputAdornment>
        ),
      }}
    >
      {children}
    </TextField>
  );
};

export default CustomTextField;
