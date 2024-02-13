import { Typography } from "@mui/material";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const TextComponent = ({ children, theme,color }) => {
  if (theme === "link") {
    return (
      <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#FFFFFF" }}>
        {children}
      </Typography>
    );
  } else if (theme === "heading") {
    return (
      <Typography sx={{ fontSize: 20, fontWeight: 700, color: "#FFFFFF" }}>
        {children}
      </Typography>
    );
  } else if (theme === "subheading") {
    return (
      <Typography sx={{ fontSize: 18, fontWeight: 700, color:{color} }}>
        {children}
      </Typography>
    );
  } else {
    return (
      <Typography sx={{ fontSize: 14, color: "#FFFFFF" }}>
        {children}
      </Typography>
    );
  }
};

export default TextComponent;
