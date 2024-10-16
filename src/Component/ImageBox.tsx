import React, { useEffect, useState } from "react";
import Style from "./imagebox.module.scss";
import ImageImg from "../img/ram-mandir-background.jpg";
import FullTemp from "../img/pura-mandir-button.png";
import DarshanTemp from "../img/darshan-button-image.png";
import FullVideo from "./FullVideo";
import DrashanVedio from "./DrashanVedio";
import MobileImage from "../img/ram-mandir-mobile-background.jpg";

const ImageBox = () => {
  const [showImage, setShowImage] = useState(true);
  const [firstVideoPlaying, setFirstVideoPlaying] = useState(false);
  const [vedio, setVedio] = useState(false);
  const [showFullVideo, setShowFullVideo] = useState(false);
  const [showDarshanVideo, setShowDarshanVideo] = useState(false);
  const [mobileImage, setMobileImage] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkIfMobile = () => {
      const currentWidth = window.innerWidth;
      setMobileImage(currentWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleFullVideo = () => {
    setShowImage(false);
    setFirstVideoPlaying(true);
    setShowFullVideo(true);
  };
  const handleDarshanVedio = () => {
    setShowImage(false);
    setVedio(true);
    setShowDarshanVideo(true);
  };

  return (
    <>
      {showImage && (
        <div className={Style.ImageBox}>
          <div className={Style.image}>
            {!mobileImage ? (
              <img src={ImageImg} alt="" />
            ) : (
              <img src={MobileImage} alt="" />
            )}
          </div>
          <div className={Style.buttonBox}>
            <div className={Style.button}>
              <span>
                <img src={FullTemp} alt="" onClick={handleFullVideo} />
              </span>
              <span>
                <img src={DarshanTemp} alt="" onClick={handleDarshanVedio} />
              </span>
            </div>
          </div>
        </div>
      )}
      {showFullVideo && (
        <FullVideo
          firstVideoPlaying={firstVideoPlaying}
          setFirstVideoPlaying={setFirstVideoPlaying}
        />
      )}
      {showDarshanVideo && <DrashanVedio vedio={vedio} setVedio={setVedio} />}
    </>
  );
};

export default ImageBox;
