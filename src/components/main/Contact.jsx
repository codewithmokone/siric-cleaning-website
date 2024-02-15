import { Box } from "@mui/material";
import React from "react";
import TextComponent from "../TextComponent";
import CustomTextField from "../CustomTextField";
import CustomButton from "../CustomButton";

const Contact = () => {
  return (
    <Box
      sx={{
        width: "auto",
        height: 600,
        backgroundColor: "#F2F2F2",
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        margin: 0,
      }}
    >
      <Box
        sx={{
          width: 1200,
          display: "column",
          justifyContent: "center",
          marginTop: 6,
        }}
      >
        <Box sx={{ width: 1200, display: "flex", justifyContent: "center" }}>
          <TextComponent
            color="#509AD4"
            theme={"subheading"}
            sx={{ display: "flex", alignItems: "center" }}
          >
            Contact Us
          </TextComponent>
        </Box>
        <Box
          sx={{
            width: 1200,
            display: "flex",
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          <Box sx={{ width: 600, display: "column", alignItems: "center" }}>
            <CustomTextField placeholder="Name" icon={"name"}></CustomTextField>
            <CustomTextField placeholder="Phone" icon={"phone"}></CustomTextField>
            <CustomTextField placeholder="Email" icon={"email"}></CustomTextField>
            <CustomTextField
              multiline
              rows={4}
              placeholder="Message"
            ></CustomTextField>
            <Box sx={{ width: 600, display: "flex", justifyContent:'center',alignItems: "center",marginTop:2 }}>
              <CustomButton>Send</CustomButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
