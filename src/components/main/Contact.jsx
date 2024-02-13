import { Box } from "@mui/material";
import React from "react";
import TextComponent from "../TextComponent";
import InputComponent from "../InputComponent";
import ButtonComponent from "../ButtonComponent";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailIcon from "@mui/icons-material/Mail";

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
            <InputComponent placeholder="Name" icon={"name"}></InputComponent>
            <InputComponent placeholder="Phone" icon={"phone"}></InputComponent>
            <InputComponent placeholder="Email" icon={"email"}></InputComponent>
            <InputComponent
              multiline
              rows={4}
              placeholder="Message"
              // icon={"message"}
            ></InputComponent>
            <ButtonComponent>Send</ButtonComponent>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
