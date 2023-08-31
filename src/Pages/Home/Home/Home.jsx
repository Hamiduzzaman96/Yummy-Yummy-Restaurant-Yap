import React from "react";

// import Swiper from "swiper";

import PopularMenu from "../PopularMenu/PopularMenu";
import Slider from "../Slider/Slider";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import Card from "../Card/Card";

import Yummy from "../Yummy/Yummy";
import { Helmet } from "react-helmet-async";
import Text from "../Text/Text";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Yummy | Home</title>
      </Helmet>
      <Slider />
      <Category />
      <Yummy />
      <PopularMenu />
      <Text></Text>
      <Card />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
