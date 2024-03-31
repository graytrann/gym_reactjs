import { Grid } from "@mui/material";
import React from "react";
import style from "./Footer.module.scss";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <div>
      <Grid container className={style.extraFooter}>
        <Grid item xs={12} md={4}>
          <div className={style.logoContainer}>
            <div className={style.textLogo}>
              <span className={style.textE}>C</span>ityGym
              <i className={style.iconLogo}>
                <FitnessCenterIcon />
              </i>
            </div>
          </div>
          <div className={style.menuFooter}>
            <ul>
              <li>
                <p>
                  <FaPhoneAlt className={style.iconSize} />
                  1900 633 638
                </p>
              </li>

              <li>
                <span>
                  <IoMail className={style.iconSize} />
                  52 Thành Thái, phường 12, Quận 10, <br />
                  thành phố Hồ Chí Minh
                </span>
              </li>
              <li>
                <FaLocationDot className={style.iconSize} />
                <span>
                  Thứ Hai - Thứ Sáu: 6:00 đến 23:00 <br /> Thứ Bảy - Chủ Nhật: 8:00 đến 22:00
                </span>
              </li>
            </ul>
          </div>
        </Grid>

        {/* Liên kết */}
        <Grid item xs={6} md={2}>
          <div>
            <br />
            <br />
            <br />
            <div className={style.menuFooter}>
              <ul>
                <li>Phương thức thanh toán</li>
                <li>Dịch vụ</li>
                <li>Chính sách giá</li>
                <li>Chính sách bảo mật</li>
              </ul>
            </div>
          </div>
        </Grid>

        {/* Khóa học */}
        <Grid item xs={6} md={2}>
          <div>
            <br />
            <br />
            <br />
            <div className={style.menuFooter}>
              <ul>
                <li>Tuyển dụng</li>
                <li>Tin tức</li>
                <li>Liên hệ</li>
                <li>Câu lạc bộ</li>
              </ul>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <br />
          <br />

          <div>
            <h1>Mạng xã hội</h1>
          </div>
          <InstagramIcon className={style.iconSize} />
          <FacebookIcon className={style.iconSize} />
          <TwitterIcon className={style.iconSize} />
        </Grid>
      </Grid>

      <Grid className={style.extraFooters}>
        <Grid item xs={12} md={4}>
          <p>Copyright © 2024. All rights reserved.</p>
        </Grid>
      </Grid>
    </div>
  );
}
