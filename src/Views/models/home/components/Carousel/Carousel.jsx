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
    <div className="carousel ">
      <img
        src="https://citigym.com.vn/storage/uploads/citigym-ntmk/banner-web-01-1905x834.jpg"
        alt="Image 2"
      />
    </div>
    // <Grid container spacing={2}>
    //   <Grid item xs={12}>
    //     <div className="relative w-full h-40">
    //       <Slider {...settings}>
    //         <div className="carousel h-960">
    //           <img src="./carousel.jpg" alt="Image 1" />
    //         </div>

    //         <div className="carousel h-960">
    //           <img
    //             src="https://citigym.com.vn/storage/uploads/citigym-ntmk/banner-web-01-1905x834.jpg"
    //             alt="Image 2"
    //           />
    //         </div>

    //         {/* <div className="carousel w-full h-650">
    //           <img
    //             src="https://ptfitness.vn/wp-content/uploads/2022/06/thiet-ke-phong-gym-chuyen-nghiep.jpg"
    //             alt="Image 3"
    //           />
    //         </div> */}

    //         {/* Add more images as needed */}
    //       </Slider>
    //     </div>
    //   </Grid>
    // </Grid>
  );
}

export default ImageCarousel;
