import React from 'react'
import LogoDark from "../../assets/logo-on-dark.png";
import LogoLight from '../../assets/logo-on-light.png';
import OverTime from "../../assets/$40k.png";
import PerformanceTime from "../../assets/performanceOverTime.png";
import QuizScore from "../../assets/QuizScore.png";
import mailIcon from '../../assets/mailIcon.png';
import { Link } from "react-router-dom";
import LottiePlayer from '../../animations/LottiePlayer';
import Happy from "../../animations/data/Happy.json"
import CommonSideBar from '../CommonSideBar';



function ResetPassword() {
    return (
      <div>
        <div className=" w-screen flex">
          {/* <div className="mt-[15px] ml-[45px] bg-[linear-gradient(to_right,_rgba(156,125,243,1),_rgba(114,64,253,1))] w-[600px] rounded-xl  text-white h-[700px]">
            <div className="w-[256px] h-[68px] pt-[24px] pl-[28px]">
              <img src={LogoDark} alt="" />
            </div>
            <div className="w-[520px] h-[726.28px] pt-[50px] pl-[82px]">
              <div className="w-[520px] h-[175px] gap-[20px]">
                <h1 className="text-[28px] font-bold">
                  Stay Ahead with modern techniques
                </h1>
                <p className="text-[18px] font-medium w-[442px] h-[56px] mt-[30px]">
                  Maximize your physiotherapy skills with our expert- <br /> led
                  courses and tailored resources.
                </p>
              </div>
              <div className="w-[520px] h-[487.28px]  ml-[27px] flex">
                <div>
                  <img className="w-[231px] h-[235px]" src={OverTime} alt="" />
                  <img
                    className="w-[100px]"
                    //    src={musclePain}
                    alt=""
                  />
                  <img
                    className="w-[261px] h-[220px] mt-[-70px] ml-[-15px]"
                    src={PerformanceTime}
                    alt=""
                  />
                </div>
                <img
                  className="w-[211px] h-[212px] mt-[70px] ml-[-80px]"
                  src={QuizScore}
                  alt=""
                />
                <LottiePlayer animationFile={Happy}/>
              </div>
            </div>
          </div> */}
          <CommonSideBar/>
          <div className="w-[450px] h-[700px] mt-[15px] ml-[120px] bg-gray-100 p-6 rounded shadow-[inset_2px_2px_0px_0px_white,inset_-2px_-2px_0px_0px_#a3a3a3]">
            <div className="w-[380px] h-[100px] ">
              <h1 className="text-[30px] font-bold ml-[35px]">
                Create new Password
              </h1>
              <img src={LogoLight} alt="" className="w-[200px] m-auto" />
            </div>
            <div className="w-[380px] h-[392px] mt-[40px]">
              <div className="w-[380px] h-[188px]">
                <h3 className="text-[18px] font-normal">New Password</h3>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full h-[40px] border border-[rgba(73,93,121,1)] rounded-[8px] pl-[12px] mt-[9px]"
                />
                <h3 className="text-[18px] font-normal mt-[30px]">
                  Confirm Password
                </h3>
                <input
                  type="password"
                  placeholder="Enter Confirm password"
                  className="w-full h-[40px] border border-[rgba(73,93,121,1)] rounded-[8px] pl-[12px] mt-[9px]"
                />
              </div>
              <Link to={"/verifyemail"}>
                <div>
                  <button className="text-[16px] bg-[rgba(114,64,253,1)] text-white h-[42px] w-[380px] rounded-[12px] mt-[30px]">
                    Create Password
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ResetPassword
