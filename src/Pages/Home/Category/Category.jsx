import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import img7 from "../../../assets/home/slide1.jpg";
import img8 from "../../../assets/home/slide2.jpg";
import img9 from "../../../assets/home/slide3.jpg";
import img10 from "../../../assets/home/slide4.jpg";
import img11 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/Section/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"--- From 11.00am to 10.00pm ---"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24 mt-24"
      >
        <SwiperSlide>
          <img src={img7} alt="" />
          <h3 className="text-center uppercase -mt-16 text-3xl text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="" />
          <h3 className="text-center uppercase -mt-16 text-3xl text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="" />
          <h3 className="text-center uppercase -mt-16 text-3xl text-white">
            soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="" />
          <h3 className="text-center uppercase -mt-16 text-3xl text-white">
            cake
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} alt="" />
          <h3 className="text-center uppercase -mt-16 text-3xl text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
