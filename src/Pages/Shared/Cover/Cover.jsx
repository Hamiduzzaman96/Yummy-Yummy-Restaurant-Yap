import React, { useEffect, useState } from "react";

import "./Cover.css";
import SectionTitle from "../../../Components/Section/SectionTitle";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import MenuItem from "../MenuItem/MenuItem";
import img from "../../../assets/home/chef-service.jpg";
import ShareDiv from "../../Menu/Menu/ShareDiv/ShareDiv";

const Cover = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const items = data.filter((item) => item.category === "popular");
        setMenu(items);
      });
  }, []);
  return (
    <>
      <div className="hero  h-96  ">
        <div className="bg-black div bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content p-10 hero-over ">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold uppercase">Our menu</h1>
            <p className="mb-5 uppercase">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
      <div>
        <SectionTitle
          subHeading="---- Don't miss ----"
          heading="Today's offer"
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
          {menu.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </div>
      <div className="uppercase p-10 mx-auto  text-center text">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          order your favourite food
        </button>
      </div>
      <div className="py-10">
        <ShareDiv></ShareDiv>
      </div>
      <div>
        <PopularMenu></PopularMenu>
      </div>
      <div className="uppercase p-10 mx-auto  text-center text">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          order your favourite food
        </button>
      </div>
      <div>
        <ShareDiv></ShareDiv>
      </div>
    </>
  );
};

export default Cover;
