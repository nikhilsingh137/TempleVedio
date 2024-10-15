import React from "react";
import Style from "./header.module.scss";
import HDImg from "../img/nikhil-logo3-removebg-preview.png";

const Header = () => {
  return (
    <div className={Style.header}>
      <div className={Style.navbar}>
        <div className={Style.logo}>
          <img src={HDImg} alt="Logo" />
        </div>
        <div className={Style.Icon}>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-solid fa-link"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
