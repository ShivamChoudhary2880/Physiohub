import React from "react";
import OverTimeImgLine from "../../assets/OverTimeImgLine.png";
import OverTimeImgLine2 from "../../assets/OverTimeImgLine2.png";
import PerformanceOverTime from "../../assets/performanceOverTime.png";
import QuizScore from "../../assets/QuizScore.png";
import LottiePlayer from "../../animations/LottiePlayer";
import Happy from "../../animations/data/Happy.json";
import musclePain from "../../assets/auth-activity.png";

function Herov1() {
  return (
    <div>
      <div className="flex justify-evenly h-[500px] bg-purple-300">
        <div className="w-[684px] h-[500px]  bg-purple-300">
          <div className="w-[524px] h-[561px] mt-[50px] ml-[120px] ">
            <p
              className="W-[277px] h-[24px] gap-[8px] text-lg text-[16px]"
              style={{ color: "rgba(114, 64, 253, 1)" }}
            >
              Top #1 EXPERT-LED COURSES
            </p>
            <h1 className="text-[42px] font-bold mt-[20px]">
              Master Your <br />{" "}
              <span className="text-[rgba(114,64,253,1)]">Physiotherapy</span>{" "}
              <br /> Skill Now!
            </h1>
            <p className="text-[18px] font-medium mt-[30px]">
              Maximize your physiotherapy skills with our expert-led <br />{" "}
              courses and tailored resources.
            </p>
            <div className="mt-[30px]">
              <button className="bg-[rgba(114,64,253,1)] text-white w-[147px] h-[52px] rounded-[12px]">
                Get Started
              </button>
              <button className="bg-[#eef0f3] w-[147px] h-[52px] text-[rgba(114,64,253,1)] rounded-[12px] ml-[30px]">
                Complete Quiz
              </button>
            </div>
          </div>
        </div>

        <div className="w-[684px] h-[500px] rounded-xl  text-white flex flex-col justify-center items-center">
          {/* <div className="w-[600px] h-[566px]">
            <div className="flex items-center justify-center">
              <div className="ml-[100px]">
                <img className="w-[324px] h-[332px]" src={OverTime} alt="" />
                <img
                  className="w-[388px] h-[302px]  mt-[-500px]- "
                  src={PerformanceTime}
                  alt=""
                />
              </div>
              <div>
                <img className="w-[284px] h-[284px] " src={QuizScore} alt="" />
              </div>
              <LottiePlayer animationFile={Happy}/>
            </div>
          </div> */}
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
                <LottiePlayer animationFile={Happy} className="w-full" />
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
}

export default Herov1;
