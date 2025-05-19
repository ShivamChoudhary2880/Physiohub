import React, { useEffect, useState } from "react";
import LogoDark from "../assets/logo-on-dark.png";
import OverTime from "../assets/$40k.png";
import QuizScore from "../assets/QuizScore.png";
import musclePain from "../assets/auth-activity.png";
import LottiePlayer from "../animations/LottiePlayer";
import happy from "../animations/data/Happy.json";
import OverTimeImgLine from "../assets/OverTimeImgLine.png";
import OverTimeImgLine2 from "../assets/OverTimeImgLine2.png";
import PerformanceOverTime from "../assets/PerformanceOverTime.png";

const CommonSideBar = () => {
  const sentences = [
    "Master Your Physiotherapy Skills Now!",
    "Build Stronger Recovery Programs",
    "Stay Ahead with Modern Techniques"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sentences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <div className="mt-[15px] ml-[45px] bg-[linear-gradient(to_right,_rgba(156,125,243,1),_rgba(114,64,253,1))] w-[600px] rounded-xl  text-white h-[700px]">
        <div className="w-[256px] h-[68px] pt-[24px] pl-[28px]">
          <img src={LogoDark} alt="" />
        </div>
        <div className="w-[520px] h-[726.28px] pt-[50px] pl-[82px]">
          <div className="w-[520px] h-[175px] gap-[20px]">
            <h1 className="text-[28px] font-bold">{sentences[currentIndex]}</h1>
            <p className="text-[18px] font-medium w-[442px] h-[56px] mt-[10px]">
              Maximize your physiotherapy skills with our expert- <br /> led
              courses and tailored resources.
            </p>
          </div>
          <div className="w-[289px] h-[271px]  ml-[27px] flex">
            <div>
              <div className="w-[131px] h-[135px] ml-[30px] bg-white rounded-[10px]">
                <div className="flex">
                  <div className="w-[39px] h-[41px] mt-[11px] ml-[11px]">
                    <p className="text-[7px] font-medium text-black">
                      Over time
                    </p>
                    <p className="text-[15px] font-medium text-black">$40K</p>
                    <p className="text-[6px] font-normal text-[rgba(84,96,120,1)]">
                      Last 7 days
                    </p>
                  </div>
                  <div className="w-[49px] h-[53px] mt-[11px] ml-[40px]">
                    <img
                      className="w-[31px] h-[11px] mr-[10px]"
                      src={OverTimeImgLine}
                      alt=""
                    />
                    <img
                      className="w-[27px] h-[9px] mt-[10px] mr-[10px]"
                      src={OverTimeImgLine2}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[119px] h-[64px] ml-[5px] rounded-[6px] object-cover">
                  <img className="w-full " src={musclePain} alt="" />
                </div>
              </div>

              <div className="w-[161px] h-[120px] mt-[15px] rounded-[7px] bg-white object-cover">
                <p className="text-black text-[9px] font-medium pt-[11px] pl-[11px]">
                  Performance over time
                </p>
                <div className="w-[135px] h-[76px] mt-[13px] ml-[13px]">
                  <img src={PerformanceOverTime} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="w-[60px] h-[60px] ">
                <LottiePlayer animationFile={happy} className="w-full" />
              </div>
              <div className="w-[111px] h-[112px] ml-[10px] mt-[30px] bg-white rounded-[7px]">
                <p className="text-black text-[9px] font-medium ml-[11px] pt-[11px]">
                  Quiz Score
                </p>
                <div className="w-[59px] h-[59px] mt-[14px] ml-[26px]">
                  <img src={QuizScore} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonSideBar;
