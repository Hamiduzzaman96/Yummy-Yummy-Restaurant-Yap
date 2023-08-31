import React from "react";
import image1 from "../../../assets/home/slide1.jpg";

const Card = () => {
  return (
    <div className="flex  space-x-16 bg-opacity-40 mt-20">
      <div className="card card-compact  bg-base-100 shadow-xl items-center justify-center bg-slate-400 text-white ">
        <figure className="">
          <img className=" w-96" src={image1} alt="Salad" />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title items-center justify-center">Salad</h2>
          <p className="items-center justify-center">
            Lorem ipsum dolor sit amet.
          </p>
          <div className="card-actions justify-center">
            <button className=" uppercase  border-0 border-b-4">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl  bg-slate-400 text-white">
        <figure className="">
          <img className=" w-96" src={image1} alt="Salad" />
        </figure>
        <div className="card-body items-center justify-center">
          <h2 className="card-title items-center justify-center">Salad</h2>
          <p className="items-center justify-center">
            Lorem ipsum dolor sit amet.
          </p>
          <div className="card-actions justify-center">
            <button className=" uppercase  border-0 border-b-4">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl bg-slate-400 text-white">
        <figure className=" ">
          <img className=" w-96" src={image1} alt="Salad" />
        </figure>
        <div className="card-body items-center justify-center">
          <h2 className="card-title items-center justify-center">Salad</h2>
          <p className="items-center justify-center">
            Lorem ipsum dolor sit amet.
          </p>
          <div className="card-actions justify-center">
            <button className="  uppercase  border-0 border-b-4">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
