import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Section/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="py-10">
      <SectionTitle
        subHeading={"What Our Client Say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className=" flex flex-col items-center my-8 mx-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              ></Rating>
              <FontAwesomeIcon className="text-7xl p-2" icon={faQuoteLeft} />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
