import React, { useEffect, useState } from "react";
import { WechatOutlined } from "@ant-design/icons";
import { PiStarThin } from "react-icons/pi";
import { FaBook, FaCheck, FaClock, FaLayerGroup, FaUserGraduate } from "react-icons/fa";
import { IoPlayCircle } from "react-icons/io5";
import { FcAlarmClock, FcGraduationCap } from "react-icons/fc";
import { FaBoltLightning, FaPhotoFilm } from "react-icons/fa6";
import { Divider } from "@mui/material";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import Course from "../../../../../Models/Course";
export default function CoursesDetail() {
  const [courseDetail, setCourseDetail] = useState(null);
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const coursesData = await Course.getById(id);
        setCourseDetail(coursesData);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div id="user_detail">
      {courseDetail && (
        <div className="flex flex-col-reverse px-4 mx-auto lg:flex-row max-w-screen-2xl">
          <div className="lg:w-2/3">
            <h1 className="hidden my-10 text-2xl font-medium uppercase lg:block">
              {courseDetail.NameCourse}
            </h1>
            <div className="flex flex-col items-center justify-between mt-10 mb-10 lg:mt-0 sm:flex-row">
              <div className="flex items-center gap-2 mb-5 sm:mb-0">
                <img
                  src="./home_carousel_03.jpg"
                  alt="Teacher Icon"
                  className="object-cover w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-sm text-gray-400">Huấn luyện viên</p>
                  <p>Xizuku</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-5 sm:mb-0">
                <FcGraduationCap className="text-3xl text-teal-500" />

                <div>
                  <p className="text-sm text-gray-400">Lĩnh vực</p>
                  <p>{courseDetail.Goal}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <WechatOutlined className="block text-4xl sm:hidden" />
                <div>
                  <div className="flex items-center">
                    <PiStarThin className="text-yellow-500" />
                    <PiStarThin className="text-yellow-500" />
                    <PiStarThin className="text-yellow-500" />
                    <PiStarThin className="text-yellow-500" />
                    <PiStarThin className="text-yellow-500" />
                    <span className="font-medium ms-2">4.9</span>
                  </div>
                  <p className="text-sm text-gray-400 sm:text-right">100 đánh giá</p>
                </div>
              </div>
            </div>
            <p className="text-gray-500">{courseDetail.Description}</p>
            <Divider />

            <div>
              <h3 className="mb-5 text-lg font-medium">Nội dung khóa học</h3>
              <div className="mb-10">
                <div className="flex items-center justify-between gap-5 p-5 bg-gray-100">
                  <h4 className="text-lg">MỤC I - GIỚI THIỆU</h4>
                  <button className="px-3 border-[1px] border-teal-500 text-teal-500 py-2 duration-300 hover:bg-teal-500 hover:text-white">
                    Xem Trước
                  </button>
                </div>
                <h5 className="py-3">Bài học</h5>
                <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                  <div className="flex items-center">
                    <IoPlayCircle className="text-teal-500 me-2" />
                    <p className="line-clamp-1">Tại sao phải tập gym</p>
                  </div>
                  <div className="flex items-center justify-end flex-grow">
                    <FcAlarmClock className="me-2" />

                    <p>15:00</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                  <div className="flex items-center">
                    <IoPlayCircle className="text-teal-500 me-2" />
                    <p className="line-clamp-1">Giới thiệu về các nhóm cơ</p>
                  </div>
                  <div className="flex items-center justify-end flex-grow">
                    <FcAlarmClock className="me-2" />
                    <p>15:00</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                  <div className="flex items-center">
                    <IoPlayCircle className="text-teal-500 me-2" />
                    <p className="line-clamp-1">Phân chia lịch tập</p>
                  </div>
                  <div className="flex items-center justify-end flex-grow">
                    <FcAlarmClock className="me-2" />
                    <p>15:00</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                  <div className="flex items-center">
                    <IoPlayCircle className="text-teal-500 me-2" />
                    <p className="line-clamp-1">Tư vấn chế độ ăn</p>
                  </div>
                  <div className="flex items-center justify-end flex-grow">
                    <FcAlarmClock className="me-2" />
                    <p>15:00</p>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="mb-10">
                <div className="flex items-center justify-between gap-5 p-5 bg-gray-100">
                  <h4 className="text-lg">MỤC II - KIẾN THỨC CĂN BẢN</h4>
                  <button className="px-3 border-[1px] border-teal-500 text-teal-500 py-2 duration-300 hover:bg-teal-500 hover:text-white">
                    Xem Trước
                  </button>
                </div>
                <h5 className="py-3">Bài học</h5>
                <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                  <div className="flex items-center">
                    <IoPlayCircle className="text-teal-500 me-2" />
                    <p className="line-clamp-1">Thức ăn nào giúp các nhóm cơ phát triển</p>
                  </div>
                  <div className="flex items-center justify-end flex-grow">
                    <FcAlarmClock className="me-2" />
                    <p>15:00</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                  <div className="flex items-center">
                    <IoPlayCircle className="text-teal-500 me-2" />
                    <p className="line-clamp-1">Tập bao nhiêu tháng để có cơ thể cường tráng</p>
                  </div>
                  <div className="flex items-center justify-end flex-grow">
                    <FcAlarmClock className="me-2" />
                    <p>15:00</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                  <div className="flex items-center">
                    <IoPlayCircle className="text-teal-500 me-2" />
                    <p className="line-clamp-1">Thuốc kích thích cơ </p>
                  </div>
                  <div className="flex items-center justify-end flex-grow">
                    <FcAlarmClock className="me-2" />
                    <p>15:00</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                  <div className="flex items-center">
                    <IoPlayCircle className="text-teal-500 me-2" />
                    <p className="line-clamp-1">Lịch tập như nào là hợp lý</p>
                  </div>
                  <div className="flex items-center justify-end flex-grow">
                    <FcAlarmClock className="me-2" />
                    <p>15:00</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                  <div className="flex items-center">
                    <IoPlayCircle className="text-teal-500 me-2" />
                    <p className="line-clamp-1">Những vật dụng cần thiết khi tập gym</p>
                  </div>
                  <div className="flex items-center justify-end flex-grow">
                    <FcAlarmClock className="me-2" />
                    <p>15:00</p>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="mb-10">
                <div className="flex items-center justify-between gap-5 p-5 bg-gray-100">
                  <h4 className="text-lg">MỤC III - KIẾN THỨC CHUYÊN SÂU</h4>
                  <button className="px-3 border-[1px] border-teal-500 text-teal-500 py-2 duration-300 hover:bg-teal-500 hover:text-white">
                    Xem Trước
                  </button>
                </div>
                <h5 className="py-3">Bài học</h5>
                <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                  <div className="flex items-center">
                    <IoPlayCircle className="text-teal-500 me-2" />
                    <p className="line-clamp-1">Tập trung vào bụng và ngực.</p>
                  </div>
                  <div className="flex items-center justify-end flex-grow">
                    <FcAlarmClock className="me-2" />
                    <p>15:00</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                  <div className="flex items-center">
                    <IoPlayCircle className="text-teal-500 me-2" />
                    <p className="line-clamp-1"> Kết hợp giữa đùi trước và bắp chân</p>
                  </div>
                  <div className="flex items-center justify-end flex-grow">
                    <FcAlarmClock className="me-2" />
                    <p>15:00</p>
                  </div>
                  <div></div>
                </div>
                <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                  <div className="flex items-center">
                    <IoPlayCircle className="text-teal-500 me-2" />
                    <p className="line-clamp-1">Đùi sau và lưng dưới</p>
                  </div>
                  <div className="flex items-center justify-end flex-grow">
                    <FcAlarmClock className="me-2" />
                    <p>15:00</p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 lg:my-10 sm:w-2/3 lg:w-1/3 lg:ps-10">
            <div className="sticky p-5 overflow-hidden rounded-md shadow-2xl top-28">
              <div>
                <img
                  className="object-cover w-full aspect-[3/2] group-hover:scale-110 duration-300"
                  src={courseDetail.Image}
                  alt="Course Banner"
                />
              </div>
              <p className="my-5 text-2xl font-medium text-right">
                <FaBoltLightning className="text-lg text-orange-400" />
                {courseDetail.Price}
                <sup>đ</sup>
              </p>
              <button
                className="w-full py-2 duration-300 border-[1px] border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500 hover:scale-95"
                onClick={openModal}
              >
                Thanh toán
              </button>
              <div className="flex justify-between">
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Payment Modal"
                >
                  <h2>Chọn phương thức thanh toán</h2>
                  <div>
                    <button className="px-10 py-3 mt-10 text-sm font-semibold text-white uppercase rounded-full bg-teal-500 hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg sm:mb-0 mb-5">
                      Tiền mặt
                    </button>
                  </div>
                  <div>
                    <button className="px-10 py-3 mt-10 text-sm font-semibold text-white uppercase rounded-full bg-teal-500 hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg sm:mb-0 mb-5">
                      Bank
                    </button>
                  </div>
                  <button
                    className="px-10 py-3 mt-10 text-sm font-semibold text-white uppercase rounded-full bg-red-500 hover:bg-red duration-300 hover:scale-90 shadow-lg sm:mb-0 mb-5"
                    onClick={closeModal}
                  >
                    Đóng
                  </button>
                </Modal>
              </div>
              <div className="flex items-center justify-between py-5 border-b-[1px] border-gray-200">
                <p className="text-gray-500">
                  Ghi danh: <span className="font-medium text-black">9999 học viên</span>
                </p>
                <FaUserGraduate className="text-orange-400" />
              </div>
              <div className="flex items-center justify-between py-5 border-b-[1px] border-gray-200">
                <p className="text-gray-500">
                  Thời gian: <span className="font-medium text-black">5 giờ</span>
                </p>
                <FaClock className="text-orange-400 " />
              </div>
              <div className="flex items-center justify-between py-5 border-b-[1px] border-gray-200">
                <p className="text-gray-500">
                  Tổng: <span className="font-medium text-black">10 bài học</span>
                </p>
                <FaBook className="text-orange-400" />
              </div>
              <div className="flex items-center justify-between py-5 border-b-[1px] border-gray-200">
                <p className="text-gray-500">
                  Video: <span className="font-medium text-black">14 buổi</span>
                </p>
                <FaPhotoFilm className="text-orange-400 fa-solid" />
              </div>
              <div className="flex items-center justify-between py-5 border-b-[1px] border-gray-200">
                <p className="text-gray-500">
                  Ngày tập: <span className="font-medium text-black">3 - 7 ngày</span>
                </p>
                <FaLayerGroup className="text-orange-400" />
              </div>
              <input
                type="text"
                placeholder="Nhập Mã"
                className="w-full p-3 mt-5 duration-300 border-b-2 border-gray-100 outline-none focus:border-teal-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* {courseDetail.map((courseDetail, index) => (
        <div key={index} className="py-16 text-white bg-orange-400">
          <div className="px-4 mx-auto max-w-screen-2xl">
            <h1 className="mb-2 text-4xl font-bold uppercase sm:text-5xl">THÔNG TIN KHÓA TẬP</h1>
            <p className="flex items-center text-black sm:text-lg">
              <CaretRightOutlined className="me-1 animate-pulse" />
              Muốn thân hình đẹp phải tập thể thao!
            </p>
          </div>
        </div>
      ))} */
}
