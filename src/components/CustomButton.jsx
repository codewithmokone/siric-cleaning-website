import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ children, theme, width, buttonColor, type, value }) => {
  if (theme === "link") {
    return <Button sx={{ backgroundColor: "#509AD4" }}>{children}</Button>;
  } else {
    return (
      <Button
        type={type}
        value={value}
        sx={{
          backgroundColor: "#509AD4",
          color: "#FFFFFF",
          paddingLeft: 4,
          paddingRight: 4,
          width: { width },
        }}
      >
        {children}
      </Button>
    );
  }
};

export default CustomButton;
