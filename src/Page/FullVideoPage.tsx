import React from "react";
import Header from "../Common-component/Header";
import ImageBox from "../Component/ImageBox";

const FullVideoPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        position: "fixed",
        top: "0px",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Header />
      <ImageBox />
    </div>
  );
};

export default FullVideoPage;
