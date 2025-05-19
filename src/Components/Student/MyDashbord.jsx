import React from 'react'
import logoLight from "../../assets/logo-on-light.png"
import MyDashboardIcon from "../../assets/MyDashboardIcon.png";
import DiscoverIcon from "../../assets/DiscoverIcon.png";
import ProfileIcon from "../../assets/ProfileIcon.png";
import BlogsIcon from "../../assets/BlogsIcon.png";
import birdflying from "../../assets/bird-flying.png";
import QuizCompletedIcon from "../../assets/QuizCompletedIcon.png";
import PerformanceChart from "../../assets/PerformanceChart.png";
import ActivityTracker from "../../assets/ActivityTracker.png";
import Cup from "../../assets/cup.png";
import avatar from "../../assets/avatar.png"
import light from '../../assets/light.png';
import NavBar from '../NavBar';


function MyDashbord() {
  return (
    <div>
      <NavBar/>
      <div className="flex">


        <div className="w-[280px] h-[1079px] border border-black">
          <div className="w-[280px] h-[380px] border border-black">
            <div className="w-[256px] h-[68px] border border-black">
              <img src={logoLight} alt="" />
            </div>
            <div className="w-[256px] h-[255px] border border-black mt-[5px]">
              <div className="flex w-[256px] h-[60px] border border-black items-center">
                <img
                  src={MyDashboardIcon}
                  alt=""
                  className="w-[30px] h-[30px] border border-black ml-[20px]"
                />
                <p className="text-[20px] font-medium text-[rgba(114,64,253,1)] ml-[20px]">
                  My Dashboard
                </p>
              </div>
              <div className="flex w-[256px] h-[60px] border border-black items-center mt-[5px]">
                <img
                  src={DiscoverIcon}
                  alt=""
                  className="w-[30px] h-[30px] border border-black ml-[20px]"
                />
                <p className="text-[20px] font-medium text-[rgba(114,64,253,1)] ml-[20px]">
                  Discover
                </p>
              </div>
              <div className="flex w-[256px] h-[60px] border border-black items-center mt-[5px]">
                <img
                  src={ProfileIcon}
                  alt=""
                  className="w-[30px] h-[30px] border border-black ml-[20px]"
                />
                <p className="text-[20px] font-medium text-[rgba(114,64,253,1)] ml-[20px]">
                  Profile
                </p>
              </div>
              <div className="flex w-[256px] h-[60px] border border-black items-center mt-[5px]">
                <img
                  src={BlogsIcon}
                  alt=""
                  className="w-[30px] h-[30px] border border-black ml-[20px]"
                />
                <p className="text-[20px] font-medium text-[rgba(114,64,253,1)] ml-[20px]">
                  Blogs
                </p>
              </div>
            </div>
          </div>
        </div>

        

        <div className="">
          <p className="font-bold text-[24px] mt-[25px] ml-[20px]">
            Hi Alex, Welcome!
          </p>
          <div className="w-[777px] h-[984px] border border-black mt-[30px] ml-[30px]">
            <div className="w-[777px] h-[120px] rounded-[12px] bg-[linear-gradient(to_right,rgba(114,64,253,1),rgba(156,125,243,1))] flex justify-between items-center">
              <div className="w-[184px] h-[72px] border border-black ml-[30px]">
                <p className="text-white text-[16px] font-normal">
                  Total Lessons Completed
                </p>
                <p className="text-white text-[32px] font-normal">128</p>
              </div>
              <div className="w-[140px] h-[120px] border border-black mr-[60px]">
                <img src={birdflying} alt="" />
              </div>
            </div>

            <div className="w-[777px] h-[164px] flex justify-evenly items-center mt-[16px]">
              <div className="w-[248px] h-[144px] border border-[rgba(226, 232, 240, 1)] rounded-[10px]">
                <div>
                  <img
                    src={QuizCompletedIcon}
                    alt=""
                    className="w-[32px] h-[32px] m-[15px]"
                  />
                </div>
                <div className="w-[110px] h-[60px] m-[15px]">
                  <p className="font-normal text-[28px] ">234</p>
                  <p className="font-normal text-[14px] text-[rgba(104,116,148,1)]">
                    My Flashcards
                  </p>
                </div>
              </div>

              <div className="w-[248px] h-[144px] border border-[rgba(226, 232, 240, 1)] rounded-[10px]">
                <div>
                  <img
                    src={QuizCompletedIcon}
                    alt=""
                    className="w-[32px] h-[32px] m-[15px]"
                  />
                </div>
                <div className="w-[110px] h-[60px] m-[15px]">
                  <p className="font-normal text-[28px] ">29</p>
                  <p className="font-normal text-[14px] text-[rgba(104,116,148,1)]">
                    Quiz Completed
                  </p>
                </div>
              </div>

              <div className="w-[248px] h-[144px] border border-[rgba(226, 232, 240, 1)] rounded-[10px]">
                <div>
                  <img
                    src={QuizCompletedIcon}
                    alt=""
                    className="w-[32px] h-[32px] m-[15px]"
                  />
                </div>
                <div className="w-[110px] h-[60px] m-[15px]">
                  <p className="font-normal text-[28px] ">200</p>
                  <p className="font-normal text-[14px] text-[rgba(104,116,148,1)]">
                    Longest Streak
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[777px] h-[320px] mt-[16px]">
              <img src={PerformanceChart} alt="" />
            </div>

            <div className="w-[777px] h-[320px] mt-[17px]">
              <img src={ActivityTracker} alt="" />
            </div>
          </div>
        </div>

        <div>
          <div className="w-[319px] h-[621px] border border-border-black mt-[90px] ml-[30px]">
            <div className="w-[116px] h-[150px] border border-black mt-[28px] ml-[101px]">
              <img src={avatar} alt="" className="ml-[23px] w-[70px]" />
              <h1 className="font-bold text-[24px] text-center">Sarthak</h1>
              <p className="font-normal text-[14px] text-[rgba(104,116,148,1)] m-auto">
                joined 2 Years ago
              </p>
            </div>
            <div className="w-[261px] h-[81px] border border-black bg-[#f4f6fd] flex items-center m-auto mt-[10px]">
              <div className="w-[130px] h-[57px] border border-black">
                <p className="text-[24px] font-bold text-center">8</p>
                <div className="flex justify-center items-center">
                  <img
                    src={Cup}
                    alt=""
                    className="w-[18px] h-[18px] mr-[10px]"
                  />
                  <p className="text-[14px] font-medium text-[rgba(137,150,169,1)]">
                    Rank
                  </p>
                </div>
              </div>

              <div className="w-[130px] h-[57px] border border-black">
                <p className="text-[24px] font-bold text-center">1,627</p>
                <div className="flex justify-center items-center">
                  <img
                    src={light}
                    alt=""
                    className="w-[18px] h-[18px] mr-[10px]"
                  />
                  <p className="text-[14px] font-medium text-[rgba(137,150,169,1)]">
                    Points
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyDashbord
