import React, { useEffect, useRef, useState } from "react";
import Style from "./darshanVedio.module.scss";
import PuspImg from "../img/ram-mandir-pusp-button.png";
import PrasadImg from "../img/ram-mandir-prasad-button.png";
import JyotiImg from "../img/ram-mandir-jyoti-button.png";
import AartiImg from "../img/ram-mandir-aarti-button.png";
import ChakraImg from "../img/ram-mandir-button-chakra-button.png";
import DarshanDetail from "./DarshanDetail";

export interface IType {
  vedio?: any;
  setVedio?: any;
}

const DrashanVedio: React.FC<IType> = ({ vedio, setVedio }) => {
  const vedioRef: any = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [animatedImage, setAnimatedImage] = useState(false);
  const [puspData, setPuspData] = useState(false);
  const [prasadData, setPrasadData] = useState(false);
  const [jyotiData, setJyotiData] = useState(false);
  const [aartiData, setAartiData] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const MobileVideo = () => {
      const mobilevedio = window.innerWidth <= 768;
      setIsMobile(mobilevedio);
    };
    window.addEventListener("resize", MobileVideo);
    return () => {
      window.removeEventListener("resize", MobileVideo);
    };
  }, []);

  const handlePlayVedio = () => {
    if (vedioRef.current) {
      const totalDuration = vedioRef.current.duration;
      vedioRef.current.currentTime = Math.max(0, totalDuration - 20);
      vedioRef.current.play();
    }
    setOverlay(true);
  };

  const handleTimeUpdate = () => {
    if (vedioRef.current) {
      const currentTime = vedioRef.current.currentTime;
      if (currentTime >= 35 && !showButton) {
        console.log("13 seconds reached, showing button.");
        setShowButton(true);
      }
    }
  };

  const handleLoadedMetadata = () => {
    const videoElement = vedioRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
    }
  };

  useEffect(() => {
    return () => {
      const videoElement = vedioRef.current;
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const handleVedioEnd = () => {
    setAnimatedImage(true);
  };

  const handlePusp = () => {
    setPuspData(true);
    setAnimatedImage(false);
  };
  const handlePrasad = () => {
    setPrasadData(true);
    setAnimatedImage(false);
  };

  const handleJyoti = () => {
    setJyotiData(true);
    setAnimatedImage(false);
  };

  const handleAarti = () => {
    setAartiData(true);
    setAnimatedImage(false);
  };
  return (
    <>
      <div className={Style.DrashanVedio}>
        {vedio && (
          <div className={Style.vedio}>
            <video
              ref={vedioRef}
              onEnded={handleVedioEnd}
              onLoadedMetadata={() => {
                handlePlayVedio();
                handleLoadedMetadata();
              }}
            >
              <source
                src={
                  !isMobile
                    ? "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-desktop-p3-v3.mp4"
                    : "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-mobile-p3-v3.mp4"
                }
              />
            </video>
          </div>
        )}
        {showButton && (
          <div className={Style.Content}>
            <div className={Style.imageButton}>
              <div className={Style.text}>
                <span onClick={handlePusp}>
                  <div className={Style["chakra-wrapper"]}>
                    {animatedImage && (
                      <img src={ChakraImg} alt="" className={Style.chakra} />
                    )}
                    <img src={PuspImg} alt="" className={Style.image} />
                  </div>
                </span>
                <strong>पुष्प चढ़ाएं</strong>
              </div>
              <div className={Style.text}>
                <span onClick={handlePrasad}>
                  <div className={Style["chakra-wrapper"]}>
                    {animatedImage && (
                      <img src={ChakraImg} alt="" className={Style.chakra} />
                    )}
                    <img src={PrasadImg} alt="" className={Style.image} />
                  </div>
                </span>
                <strong>प्रसाद चढ़ाएं</strong>
              </div>
              <div className={Style.text}>
                <span onClick={handleJyoti}>
                  <div className={Style["chakra-wrapper"]}>
                    {animatedImage && (
                      <img src={ChakraImg} alt="" className={Style.chakra} />
                    )}
                    <img src={JyotiImg} alt="" className={Style.image} />
                  </div>
                </span>
                <strong>ज्योति जलाएं</strong>
              </div>
              <div className={Style.text}>
                <span onClick={handleAarti}>
                  <div className={Style["chakra-wrapper"]}>
                    {animatedImage && (
                      <img src={ChakraImg} alt="" className={Style.chakra} />
                    )}
                    <img src={AartiImg} alt="" className={Style.image} />
                  </div>
                </span>
                <strong>पूरी आरती करें</strong>
              </div>
            </div>
          </div>
        )}
        {overlay && <div className={Style.overlay}></div>}
        <DarshanDetail
          setAnimatedImage={setAnimatedImage}
          puspData={puspData}
          setPuspData={setPuspData}
          prasadData={prasadData}
          setPrasadData={setPrasadData}
          jyotiData={jyotiData}
          setJyotiData={setJyotiData}
          aartiData={aartiData}
          setAartiData={setAartiData}
        />
      </div>
    </>
  );
};

export default DrashanVedio;
