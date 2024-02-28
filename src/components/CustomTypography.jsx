import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";

const CustomTypography = ({ children, theme, color, fontSize, textAlign,lineHeight }) => {
  if (theme === "link") {
    return (
      <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#FFFFFF",lineHeight:{lineHeight} }}>
        {children}
      </Typography>
    );
  } else if (theme === "menuLink") {
    return (
      <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#2663A8",lineHeight:{lineHeight} }}>
      {children}
    </Typography>
    );
  } else if (theme === "heading") {
    return (
      <Typography sx={{ fontSize: 24, fontWeight: 700, color: { color } }}>
        {children}
      </Typography>
    );
  } else if (theme === "subheading") {
    return (
      <Typography
        variant="h7"
        component={'h3'}
        sx={{
          fontSize: {fontSize},
          fontWeight: 600,
          color: { color },
          textAlign: { textAlign },
        }}
      >
        {children}
      </Typography>
    );
  } else {
    return (
      <Typography
        variant="body2"
        sx={{ fontSize: { fontSize }, color: { color }, lineHeight: {lineHeight},}}
      >
        {children}
      </Typography>
    );
  }
};

export default CustomTypography;
