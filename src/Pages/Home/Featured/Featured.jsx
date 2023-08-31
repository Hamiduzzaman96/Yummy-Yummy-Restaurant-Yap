import React from "react";
import SectionTitle from "../../../Components/Section/SectionTitle";
import FeaturdImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20  bg-fixed   ">
      <div className="bg-slate-500 bg-opacity-50 p-10 font-bold text-white">
        <SectionTitle subHeading="Check it out" heading="Form Our Menu " />
      </div>

      <div className="md:flex justify-center items-center pb-20 px-36 pt-12 bg-slate-500 bg-opacity-50 py-20 ">
        <div>
          <img className="rounded-full " src={FeaturdImg} alt="" />
        </div>
        <div className="md:ml-10 font-light">
          <p className="font-bold">Aug 26 ,2023</p>
          <p className="uppercase font-medium">Where can i get some ?</p>
          <p className="font-mono text-justify md:flex-wrap">
            A little bit sweet, a little sour, a little spicy, fuchka is one of
            the most ubiquitous street foods in Bangladesh. The crispy, hollow
            spheres commonly come with a filling of mashed potatoes and
            chickpeas, mixed with freshly chopped onions, cucumber, lime,
            coriander and green chillies in a chaat masala blend.
          </p>
          <button className="btn btn-outline  text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
