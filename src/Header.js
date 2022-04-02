import React from "react";
import headerOne from "./images/header-1.png";
import headerTwo from "./images/header-2.png";

const Header = () => {
  return (
    <header>
      <img src={headerOne} alt="header" className="d-none d-lg-block" />
      <img src={headerTwo} alt="header" className="d-block d-lg-none" />
    </header>
  );
};

export default Header;
