import { Box, Button } from "@mui/material";
import React, { useState, useRef } from "react";
import CustomTextField from "../CustomTextField";
import CustomButton from "../CustomButton";
import CustomTypography from "../CustomTypography";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();

  // const [submitted, setSubmitted] = useState(false);

  // Function for sending contact email using emailjs
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        'service_j4v7fi5',
        'template_qno00vt',
        form.current,
        'UIEFYxSUvqD6lSTPa'
      )
      .then(
        (result) => {
          // show the user a success message
          // setSubmitted(true)
        },
        (error) => {
          // show the user an error
        }
      );
      // setSubmitted(false)
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
      id="contact"
    >
      {/* {submitted ? (
        <Box>
          <h2>Thank you for your message!</h2>
          <p>We will get back to you as soon as possible.</p>
        </Box>
      ) : ( */}
        <Box
          sx={{
            width: { xs: 390, lg: 1200 },
            display: "column",
            justifyContent: "center",
            marginTop: 6,
          }}
        >
          <Box
            sx={{
              width: { xs: 390, lg: 1200 },
              display: "flex",
              justifyContent: "center",
            }}
          >
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
              width: { xs: 390, lg: 1200 },
              display: "flex",
              justifyContent: "center",
              marginTop: 4,
            }}
          >
            <Box
              sx={{
                width: { xs: 360, lg: 600 },
                display: "column",
                alignItems: "center",
              }}
            >
              <form ref={form} onSubmit={handleSubmit}>
                <CustomTextField
                  name="user_name"
                  placeholder="Name"
                  icon={"name"}
                ></CustomTextField>
                <CustomTextField
                   name="user_phone"
                  placeholder="Phone"
                  icon={"phone"}
                ></CustomTextField>
                <CustomTextField
                  name="user_email"
                  placeholder="Email"
                  icon={"email"}
                ></CustomTextField>
                <CustomTextField
                  multiline
                  rows={4}
                  name="message"
                  placeholder="Message"
                ></CustomTextField>
                <Box
                  sx={{
                    width: { xs: 360, lg: 600 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 2,
                  }}
                >
                  <CustomButton type="submit" value="Send">Send</CustomButton>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
       {/* )} */}
    </Box>
  );
};

export default Contact;
