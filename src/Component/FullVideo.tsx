import React, { useEffect, useRef, useState } from "react";
import Style from "./fullVideo.module.scss";
import GanntiIcon from "../img/ganti-touch icon.png";
import Start from "../img/ram-mandir-aage-bade-button.png";
import PuspImg from "../img/ram-mandir-pusp-button.png";
import PrasadImg from "../img/ram-mandir-prasad-button.png";
import JyotiImg from "../img/ram-mandir-jyoti-button.png";
import AartiImg from "../img/ram-mandir-aarti-button.png";
import ChakraImg from "../img/ram-mandir-button-chakra-button.png";
import DarshanDetail from "./DarshanDetail";

export interface IType {
  firstVideoPlaying: any;
  setFirstVideoPlaying: any;
}
const FullVideo: React.FC<IType> = ({
  firstVideoPlaying,
  setFirstVideoPlaying,
}) => {
  const [secondVideoPlaying, setSecondVideoPlaying] = useState(false);
  const [thirdVideoPlaying, setThirdVideoPlaying] = useState(false);
  const [fourthVideoPlaying, setFourthVideoPlaying] = useState(false);
  const [fifthVideoPlaying, setFifthVideoPlaying] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [animatedImage, setAnimatedImage] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [puspData, setPuspData] = useState(false);
  const [prasadData, setPrasadData] = useState(false);
  const [jyotiData, setJyotiData] = useState(false);
  const [aartiData, setAartiData] = useState(false);
  const firstVideoRef: any = useRef(null);
  const secondVideoRef: any = useRef(null);
  const thirdVideoRef: any = useRef(null);
  const fourthVideoRef: any = useRef(null);
  const fifthVideoRef: any = useRef(null);
  const audioRef: any = useRef(null);
  const audioRef1: any = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      const currentWidth = window.innerWidth;
      setIsMobile(currentWidth <= 768);
    };

    // Check on initial render
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handlePlayVideo = () => {
    if (firstVideoRef.current) {
      firstVideoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setSecondVideoPlaying(true);
  };

  const handleGanti = () => {
    if (secondVideoRef.current) {
      secondVideoRef.current.play();
    }
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleThirdVideo = () => {
    setFirstVideoPlaying(false);
    setSecondVideoPlaying(false);
    setThirdVideoPlaying(true);
  };

  const handlePlayVideo2 = () => {
    if (thirdVideoRef.current) {
      thirdVideoRef.current.play();
    }
  };

  const handleVideoEnd1 = () => {
    setFourthVideoPlaying(true);
  };

  const handleGanti1 = () => {
    if (fourthVideoRef.current) {
      fourthVideoRef.current.play();
    }
    if (audioRef1.current) {
      audioRef1.current.play();
    }
  };

  const handleFifthVideo = () => {
    setThirdVideoPlaying(false);
    setFourthVideoPlaying(false);
    setFifthVideoPlaying(true);
  };

  const handlePlayVideo3 = () => {
    if (fifthVideoRef.current) {
      const totalDuration = fifthVideoRef.current.duration;
      fifthVideoRef.current.currentTime = Math.max(0, totalDuration - 46);
      fifthVideoRef.current.play();
    }
  };

  //Darshan-vedio //

  const handleTimeUpdate = () => {
    if (fifthVideoRef.current) {
      const currentTime = fifthVideoRef.current.currentTime;
      if (currentTime >= 35 && !showImage) {
        console.log("13 seconds reached, showing button.");
        setShowImage(true);
      }
    }
  };

  const handleLoadedMetadata = () => {
    const videoElement = fifthVideoRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
    }
  };

  useEffect(() => {
    return () => {
      const videoElement = fifthVideoRef.current;
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const handleFifthEnd = () => {
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
    <div className={Style.FullVideo}>
      {firstVideoPlaying && (
        <div className={Style.video}>
          <video
            ref={firstVideoRef}
            onCanPlay={handlePlayVideo}
            onEnded={handleVideoEnd}
          >
            <source
              src={
                isMobile
                  ? "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-mobile-p3-v1.mp4"
                  : "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-desktop-p3-v1.mp4"
              }
            />
          </video>
        </div>
      )}
      {secondVideoPlaying && (
        <div className={Style.video}>
          <video ref={secondVideoRef}>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/desktop-ghanta1-vp9-chrome.webm" />
          </video>
          <div className={Style.icon} onClick={handleGanti}>
            <div className={Style.zooming}></div>
            <img src={GanntiIcon} alt="" />
          </div>
          <img src={Start} alt="" onClick={handleThirdVideo} />
          <audio ref={audioRef}>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/ghanta2.mp3" />
          </audio>
        </div>
      )}
      {thirdVideoPlaying && (
        <div
          className={Style.video}
          onCanPlay={handlePlayVideo2}
          onEnded={handleVideoEnd1}
        >
          <video ref={thirdVideoRef}>
            <source
              src={
                isMobile
                  ? "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-mobile-p3-v2.mp4"
                  : "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-desktop-p3-v2.mp4"
              }
            />
          </video>
        </div>
      )}
      {fourthVideoPlaying && (
        <div className={Style.video}>
          <video ref={fourthVideoRef}>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/desktop-ghanta2-vp9-chrome.webm" />
          </video>
          <div className={Style.icon} onClick={handleGanti1}>
            <div className={Style.zooming}></div>
            <img src={GanntiIcon} alt="" />
          </div>
          <img src={Start} alt="" onClick={handleFifthVideo} />
          <audio ref={audioRef1}>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/ghanta2.mp3" />
          </audio>
        </div>
      )}
      {fifthVideoPlaying && (
        <>
          <div className={Style.video}>
            <video
              ref={fifthVideoRef}
              onEnded={handleFifthEnd}
              onLoadedMetadata={() => {
                handlePlayVideo3();
                handleLoadedMetadata();
              }}
            >
              <source
                src={
                  isMobile
                    ? "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-mobile-p3-v3.mp4"
                    : "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-desktop-p3-v3.mp4"
                }
              />
            </video>
          </div>
          {showImage && (
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
        </>
      )}
    </div>
  );
};

export default FullVideo;
