import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
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
    alt: "industrial image",
    heading: "Industrial Environment",
    info: "Ensuring the spotless upkeep of industrial environments to promote productivity and safety.",
  },
  {
    image: image1,
    alt: "image1 image",
    heading: "Warehouse Environment",
    info: "Transforming storage spaces into organized and hygienic zones that optimize functionality.",
  },
  {
    image: office,
    alt: "office image",
    heading: "Office Environment",
    info: "Elevating the work environment by maintaining pristine offices that inspire productivity and well-being.",
  },
  {
    image: commercial,
    alt: "commercial image",
    heading: "Commercial Environment",
    info: "Partnering with businesses to enhance the appearance and hygiene of their public spaces.",
  },
  {
    image: healthcare,
    alt: "healthcare image",
    heading: "Health Care Environment",
    info: "Safeguarding the health of patients, staff, and visitors through rigorous cleaning and sanitization practices.",
  },
  {
    image: domestic,
    alt: "domestic image",
    heading: "Domestic Environment",
    info: "Elevating the Living space environment by maintaining pristine Houses that are welcoming and improve ones well-being.",
  },
];

const CustomCard = () => {
  return (
    <>
      {cardInfo.map((item, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: { xs: 160, lg: 280 },
            margin: { xs: 2, lg: 4 },
            height: { xs: 150, lg: 335 },
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "column" },
            }}
          >
            <CardMedia
              sx={{ width: { lg: 280 }, height: { xs: 200, lg: 200 } }}
              component="img"
              // height="200"
              // height="auto"
              image={item.image}
              alt={item.alt}
            />
            <CardContent sx={{ marginTop: { xs: -8, lg: 0 } }}>
              <CustomTypography
                theme={"subheading"}
                color={"#509AD4"}
                textAlign={"center"}
              >
                {item.heading}
              </CustomTypography>
            </CardContent>
            <CardContent sx={{marginTop:{xs:-8,lg:-3}}}>
              <CustomTypography
                fontSize={14}
                color={"#8F8888"}
              >
                {item.info}
              </CustomTypography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};

export default CustomCard;
