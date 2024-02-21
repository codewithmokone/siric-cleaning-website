import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import image1 from "../assets/images/warehousecleaning.jpg";
import commercial from "../assets/images/card-images/commercial.jpg";
import healthcare from "../assets/images/card-images/healthcare.PNG";
import office from "../assets/images/card-images/office.JPG";
import domestic from "../assets/images/card-images/domestic.JPG";
import industrial from "../assets/images/card-images/industrial.JPG";
import CustomTypography from "./CustomTypography";

const cardInfo = [
  {
    image: industrial,
    heading: "Industrial Environment",
    info: "Ensuring the spotless upkeep of industrial environments to promote productivity and safety.",
  },
  {
    image: image1,
    heading: "Warehouse Environment",
    info: "Transforming storage spaces into organized and hygienic zones that optimize functionality.",
  },
  {
    image: office,
    heading: "Office Environment",
    info: "Elevating the work environment by maintaining pristine offices that inspire productivity and well-being.",
  },
  {
    image: commercial,
    heading: "Commercial Environment",
    info: "Partnering with businesses to enhance the appearance and hygiene of their public spaces.",
  },
  {
    image: healthcare,
    heading: "Health Care Environment",
    info: "Safeguarding the health of patients, staff, and visitors through rigorous cleaning and sanitization practices.",
  },
  {
    image: domestic,
    heading: "Domestic Environment",
    info: "Elevating the Living space environment by maintaining pristine Houses that are welcoming and improve ones well-being.",
  },
];

const Card = () => {
  const [data, setData] = useState();

  return (
    <>
      {cardInfo.map((item, index) => (
        <Paper
          sx={{ width:260, height:335, borderBottomRadius: 2, margin: 4 }}
          elevation={2}
        >
          <Box
            sx={{
              width:260,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width:260,
                height: 200,
              }}
              src={item.image}
              alt="project_image"
            />
          </Box>
          <Box sx={{ margin: 1, display: "flex", justifyContent: "center" }}>
            <CustomTypography theme={"subheading"} color={'#509AD4'}>
              {item.heading}
            </CustomTypography>
          </Box>
          <Box
            sx={{
              width: 250,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}
          >
            <CustomTypography fontSize={14} color={'#8F8888'}>{item.info}</CustomTypography>
          </Box>
        </Paper>
      ))}
    </>
  );
};

export default Card;
