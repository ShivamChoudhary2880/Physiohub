import React from 'react'
import InformativeblogsTick from "../../assets/InformativeblogsTick.png";
import Informativeblogs1 from "../../assets/Informativeblogs1.png";
import InformativeBlogs2 from "../../assets/InformativeBlogs2.png";


function Herov4() {
  return (
    <div>
      <div className="w-[1440px] h-[780px] flex items-center justify-center">
        <div className="w-[1232px] h-[580px] flex">
          <div className="w-[616px] h-[580px] flex items-center justify-center bg-[rgba(12,194,170,0.1)] rounded-[24px]">
            <div className="w-[441px] h-[400px]">
              <img src={Informativeblogs1} alt="" />
              <div className="w-[340px] h-[104px] ml-[50px]">
                <img src={InformativeBlogs2} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[616px] h-[580px] flex items-center justify-end">
            <div className="w-[516px] h-[310px]">
              <p className="text-[rgba(12,194,170,1)]">INFORMATIVE ARTICLES</p>
              <h1 className="font-bold text-[40px] mt-[10px]">
                Informative blogs
              </h1>
              <p className="text-[rgba(127,137,149,1)] text-[16px] font-medium mt-[10px]">
                Stay updated with the latest trend, reserches and best
                practicies in physiotherapy.Our blogs are written by experienced
                professionals, providing valuable insights and continues
                learning oppurtunity.
              </p>
              <div className="flex gap-[10px]  mt-[20px] text-[18px]">
                <img
                  src={InformativeblogsTick}
                  alt=""
                  className="w-[24px] h-[2]"
                />
                <p>75 + Informative articles and rehab protocols</p>
              </div>
              <div className="flex gap-[10px]  mt-[12px]  text-[18px]">
                <img
                  src={InformativeblogsTick}
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                <p>No sign up required, access out blog completely free</p>
              </div>
              <div className="flex gap-[10px]  mt-[12px]  text-[18px]">
                <img
                  src={InformativeblogsTick}
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                <p>Complete guide to physio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herov4
