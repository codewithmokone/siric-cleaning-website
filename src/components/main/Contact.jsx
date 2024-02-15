import { Box } from "@mui/material";
import React, { useState } from "react";
import CustomTextField from "../CustomTextField";
import CustomButton from "../CustomButton";
import CustomTypography from "../CustomTypography";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(true);
    } catch (error) {
      setError("An error occurred while submitting the form");
    }
  };

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
      {submitted ? (
        <Box>
          <h2>Thank you for your message!</h2>
          <p>We will get back to you as soon as possible.</p>
        </Box>
      ) : (
        <Box
          sx={{
            width: {xs:400, lg:1200},
            display: "column",
            justifyContent: "center",
            marginTop: 6,
          }}
        >
          <Box sx={{ width: {xs:400, lg:1200}, display: "flex", justifyContent: "center" }}>
            <CustomTypography
              color="#509AD4"
              theme={"subheading"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              Contact Us
            </CustomTypography>
          </Box>
          <Box
            sx={{
              width: {xs:400, lg:1200},
              display: "flex",
              justifyContent: "center",
              marginTop: 4,
            }}
          >
            <Box sx={{ width:{xs:400, lg:600}, display: "column", alignItems: "center" }}>
              <CustomTextField
                placeholder="Name"
                icon={"name"}
              ></CustomTextField>
              <CustomTextField
                placeholder="Phone"
                icon={"phone"}
              ></CustomTextField>
              <CustomTextField
                placeholder="Email"
                icon={"email"}
              ></CustomTextField>
              <CustomTextField
                multiline
                rows={4}
                placeholder="Message"
              ></CustomTextField>
              <Box
                sx={{
                  width:{xs:400, lg:600},
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 2,
                }}
              >
                <CustomButton>Send</CustomButton>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Contact;
