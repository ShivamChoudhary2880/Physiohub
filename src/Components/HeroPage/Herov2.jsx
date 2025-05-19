import React from 'react'
import lungimg from "../../assets/lungimg.png";
import lungs from "../..//assets/lungs.png";
import RightTick from "../../assets/RightTick.png";

function Herov2() {
  return (
      <div>
             <div>
                  <div className="w-[1440px] h-[300px]  flex items-center justify-center">
                    <div className="w-[640px] h-[252px] mt-[120px] flex flex-col items-center text-center justify-center ">
                      <p className="text-[rgba(114,64,253,1)] m-auto">
                        OVER 200+ RESOURCES
                      </p>
                      <h1 className="m-auto text-[48px] font-bold">
                        <span className="m-auto">Transform your</span>{" "}
                        <span className="m-auto"> physiotherapy Learning</span>
                      </h1>
                      <p className="m-auto">
                        physiohub is a learning plarform design to help budding <br />{" "}
                        physiotherepist perfect their craft and become industry experts.
                      </p>
                    </div>
                  </div>
                  <div className="w-[1440px] h-[600px] flex items-center justify-center">
                    <div className="w-[1232px] h-[580px] flex">
                      <div className="w-[616px] h-[580px] flex items-center justify-center">
                        <img src={lungimg} alt="" />
                        {/* <img src={lungs} alt="" /> */}
                      </div>
                      <div className="w-[616px] h-[580px] flex items-center justify-end">
                        <div className="w-[516px] h-[310px]">
                          <p className="text-[rgba(114,64,253)]">NO SIGN UP REQUIRED</p>
                          <h1 className="font-bold text-[40px] mt-[10px]">
                            Learn with Flash Cards
                          </h1>
                          <p className="text-[rgba(127,137,149,1)] text-[16px] font-medium mt-[10px]">
                            Master key concept and terms with our interactive flashcards.
                            A <br /> perfect tool for quick revisions and reinforcing your
                            learning, <br /> making complex information easy to remember.
                          </p>
                          <div className="flex gap-[10px]  mt-[20px] text-[18px]">
                            <img src={RightTick} alt="" className="w-[24px] h-[2]" />
                            <p>1000 + pre made flashcards</p>
                          </div>
                          <div className="flex gap-[10px]  mt-[12px]  text-[18px]">
                            <img src={RightTick} alt="" className="w-[24px] h-[24px]" />
                            <p>Effortless Memorization with spaced repetition</p>
                          </div>
                          <div className="flex gap-[10px]  mt-[12px]  text-[18px]">
                            <img src={RightTick} alt="" className="w-[24px] h-[24px]" />
                            <p>spaced repetition</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
    </div>
  )
}

export default Herov2
