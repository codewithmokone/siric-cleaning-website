import React from 'react'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from '@mui/material';

const CustomTypography = ({ children, theme,color,fontSize }) => {
    if (theme === "link") {
        return (
          <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#FFFFFF" }}>
            {children}
          </Typography>
        );
      } else if (theme === "heading") {
        return (
          <Typography sx={{ fontSize: 24, fontWeight: 700, color: {color} }}>
            {children}
          </Typography>
        );
      } else if (theme === "subheading") {
        return (
          <Typography sx={{ fontSize: 20, fontWeight: 500, color:{color} }}>
            {children}
          </Typography>
        );
      } else {
        return (
          <Typography sx={{ fontSize:{fontSize}, color:{color} }}>
            {children}
          </Typography>
        );
      }
}

export default CustomTypography
