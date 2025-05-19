import React from 'react'
import logolight from "../../assets/logo-on-light.png";
import mailIcon from "../../assets/mailIcon.png";
import facebookIcon from "../../assets/facebook-icon.png";
import instagram from "../../assets/instagram.png";
import X from "../../assets/x.png";


function Herov8() {
  return (
    <div>
       <div className="w-full h-[370px] flex flex-col justify-evenly items-center">
              <div className="w-[1200px] h-[126px] flex justify-between ">
                <div className="w-[198px] h-[126px] flex ">
                  <div className="flex flex-col justify-between h-[126px]">
                    <div>
                      <img src={logolight} alt="" />
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <img src={mailIcon} alt="" />
                      <p className="text-[rgba(114,64,253,1)] font-medium text-[18px]">
                        mail@example.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[664px] h-[126px] flex justify-between">
                  <div className="w-[120px] h-[126px]">
                    <p className="text-[16px] text-medium">Features</p>
                    <div className="text-[rgba(137,150,169,1)] text-14px">
                      <p className="mt-[8px]">Quiz</p>
                      <p className="mt-[8px]">Flesh Cards</p>
                      <p className="mt-[8px]">Mock Test</p>
                    </div>
                  </div>
                  <div className="w-[120px] h-[126px]">
                    <p className="text-[16px] text-medium">Articles</p>
                    <div className="text-[rgba(137,150,169,1)] text-14px">
                      <p className="mt-[8px]">Our blogs</p>
                      <p className="mt-[8px]">Rehab protocols</p>
                    </div>
                  </div>
                  <div className="w-[120px] h-[126px]">
                    <p className="text-[16px] text-medium">Resources</p>
                    <div className="text-[rgba(137,150,169,1)] text-14px">
                      <p className="mt-[8px]">About Us</p>
                      <p className="mt-[8px]">Contact</p>
                    </div>
                  </div>
                  <div className="w-[140px] h-[126px]">
                    <p className="text-[16px] text-medium">Exstra</p>
                    <div className="text-[rgba(137,150,169,1)] text-14px">
                      <p className="mt-[8px]">Customer Support</p>
                      <p className="mt-[8px]">Privacy Policy</p>
                      <p className="mt-[8px]">Terms & Condition</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1200px] h-[48px] flex justify-between">
                <p className="text-[rgba(127,137,149,1)] text-[14px] font-normal">
                  @Copyright 2025, Physiohub all right reserved
                </p>
                <div className="w-[150px] flex gap-[12px]">
                  <img
                    src={facebookIcon}
                    alt=""
                    className="w-[50px] h-[50px] rounded-[4px] flex"
                  />
                  <img
                    src={instagram}
                    alt=""
                    className="w-[50px] h-[50px] rounded-[4px] flex"
                  />
                  <img
                    src={X}
                    alt=""
                    className="w-[50px] h-[50px] rounded-[4px] flex"
                  />
                </div>
              </div>
            </div>
    </div>
  )
}

export default Herov8
