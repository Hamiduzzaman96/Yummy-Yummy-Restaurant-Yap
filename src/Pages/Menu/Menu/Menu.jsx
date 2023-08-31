import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Yummy | Menu</title>
      </Helmet>
      <h2>This is menu</h2>
      <Cover />
    </div>
  );
};

export default Menu;
