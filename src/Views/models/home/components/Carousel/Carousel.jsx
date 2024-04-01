import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div style={{ position: "relative", width: "100%", height: "650px" }}>
          <Slider {...settings}>
            <div className="carousel">
              <img width="100%" height="650" src="./carousel.jpg" alt="Image 1" />
            </div>

            <div className="carousel">
              <img
                width="100%"
                height="650"
                src="https://citigym.com.vn/storage/uploads/citigym-ntmk/banner-web-01-1905x834.jpg"
                alt="Image 2"
              />
            </div>

            <div className="carousel">
              <img
                width="100%"
                height="650"
                src="https://ptfitness.vn/wp-content/uploads/2022/06/thiet-ke-phong-gym-chuyen-nghiep.jpg"
                alt="Image 3"
              />
            </div>

            {/* Add more images as needed */}
          </Slider>
        </div>
      </Grid>
    </Grid>
  );
}

export default ImageCarousel;
