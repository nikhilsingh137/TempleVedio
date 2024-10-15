import React, { useEffect, useRef } from "react";
import Style from "./darshandetail.module.scss";

export interface IType {
  setAnimatedImage: any;
  puspData: any;
  setPuspData: any;
  prasadData: any;
  setPrasadData: any;
  jyotiData: any;
  setJyotiData: any;
  aartiData: any;
  setAartiData: any;
}

const DarshanDetail: React.FC<IType> = ({
  setAnimatedImage,
  puspData,
  setPuspData,
  prasadData,
  setPrasadData,
  jyotiData,
  setJyotiData,
  aartiData,
  setAartiData,
}) => {
  const puspVideoRef: any = useRef(null);
  const puspAudioRef: any = useRef(null);
  const prasadVideoRef: any = useRef(null);
  const prasadAudioRef: any = useRef(null);
  const jyotiVideoRef: any = useRef(null);
  const jyotiAudioRef: any = useRef(null);
  const aartiVideoRef: any = useRef(null);
  const aartiAudioRef: any = useRef(null);

  const handlePuspVedioEnd = () => {
    setAnimatedImage(true);
    setPuspData(false);
  };

  const handlePrasadVedioEnd = () => {
    setAnimatedImage(true);
    setPrasadData(false);
  };

  const handleJyotiVedioEnd = () => {
    setAnimatedImage(true);
    setJyotiData(false);
  };

  const handleAartiVedioEnd = () => {
    setAnimatedImage(true);
    setAartiData(false);
  };

  const handlePuspPlay = () => {
    if (puspVideoRef.current) {
      puspVideoRef.current.play();
    }
    if (puspAudioRef.current) {
      puspAudioRef.current.play();
    }
  };

  const handlePrasadPlay = () => {
    if (prasadVideoRef.current) {
      prasadVideoRef.current.play();
    }
    if (prasadAudioRef.current) {
      prasadAudioRef.current.play();
    }
  };
  const handleJoytiPlay = () => {
    if (jyotiVideoRef.current) {
      jyotiVideoRef.current.play();
    }
    if (jyotiAudioRef.current) {
      jyotiAudioRef.current.play();
    }
  };

  const handleAartiPlay = () => {
    if (aartiVideoRef.current) {
      aartiVideoRef.current.play();
    }
    if (aartiAudioRef.current) {
      aartiAudioRef.current.play();
    }
  };

  return (
    <div className={Style.DarshanDetail}>
      {puspData && (
        <div className={Style.Detail}>
          <video
            ref={puspVideoRef}
            onCanPlay={handlePuspPlay}
            onEnded={handlePuspVedioEnd}
          >
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/desktop/Flower_SingleAnim-vp9-chrome.webm" />
          </video>
          <audio ref={puspAudioRef} autoPlay>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/flower-shower.mp3" />
          </audio>
        </div>
      )}
      {prasadData && (
        <div className={Style.Detail}>
          <video
            ref={prasadVideoRef}
            onCanPlay={handlePrasadPlay}
            onEnded={handlePrasadVedioEnd}
          >
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/desktop/Prasad_SingleAnim-vp9-chrome.webm" />
          </video>
          <audio ref={prasadAudioRef} autoPlay>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/prasad-audio.mp3" />
          </audio>
        </div>
      )}
      {jyotiData && (
        <div className={Style.Detail}>
          <video
            ref={jyotiVideoRef}
            onCanPlay={handleJoytiPlay}
            onEnded={handleJyotiVedioEnd}
          >
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/desktop/RamJyoti_SingleAnim-vp9-chrome.webm" />
          </video>
          <audio ref={jyotiAudioRef} autoPlay>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/ram-jyoti-audio.mp3" />
          </audio>
        </div>
      )}
      {aartiData && (
        <div className={Style.Detail}>
          <video
            ref={aartiVideoRef}
            loop
            onCanPlay={handleAartiPlay}
            onEnded={handleAartiVedioEnd}
          >
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/desktop/AartiThali_Loop-vp9-chrome.webm" />
          </video>
          <audio ref={aartiAudioRef} autoPlay>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/aarti-audio.mp3" />
          </audio>
        </div>
      )}
    </div>
  );
};

export default DarshanDetail;
