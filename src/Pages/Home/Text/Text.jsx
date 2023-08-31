import React from "react";
import SectionTitle from "../../../Components/Section/SectionTitle";

const Text = () => {
  return (
    <div>
      <div className="bg-black py-20  items-center  justify-center my-20">
        <p className="text-white  text-center  text-4xl">
          call us: +8801610980994
        </p>
      </div>
      <div>
        <SectionTitle
          subHeading={"--- should try ---"}
          heading={"chef recommends"}
        ></SectionTitle>
      </div>
    </div>
  );
};

export default Text;
