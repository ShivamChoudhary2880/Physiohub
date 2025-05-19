import React from 'react'
import OrangeRightTick from "../../assets/OrangeRightTick.png";
import IntrestinQuiz1 from "../../assets/IntrestingQuiz1.png";
import IntrestingQuiz2 from "../../assets/IntrestingQuiz2.png";
import IntrestingQuiz3 from "../../assets/IntrestingQuiz3.png";


function Herov3() {
  return (
    <div>
      <div className="w-[1440px] h-[740px] flex items-center justify-center">
              <div className="w-[1232px] h-[580px] flex ">
                <div className="w-[616px] h-[580px] flex items-center">
                  <div className="w-[516px] h-[350px] ">
                    <p className="text-[rgba(255,127,4,1)]">Multiple choice Quizes</p>
                    <h1 className="font-bold text-[40px] mt-[10px]">
                      Intresting Quiz
                    </h1>
                    <p className="text-[rgba(127,137,149,1)] text-[16px] font-medium mt-[10px]">
                      Design exclusively for aspiring and practicing physiotherepist,{" "}
                      <br /> our comprehensive quiz are crafted to enhance your
                      knowledge, <br /> skills and confidence.
                    </p>
                    <div className="flex gap-[10px]  mt-[20px] text-[18px]">
                      <img
                        src={OrangeRightTick}
                        alt=""
                        className="w-[24px] h-[24px]"
                      />
                      <p>
                        Time-base quizzes to improve your quick thinking and <br />{" "}
                        diagnostics.
                      </p>
                    </div>
                    <div className="flex gap-[10px]  mt-[12px]  text-[18px]">
                      <img
                        src={OrangeRightTick}
                        alt=""
                        className="w-[24px] h-[24px]"
                      />
                      <p>Personalized Dashbord</p>
                    </div>
                    <div className="flex gap-[10px]  mt-[12px]  text-[18px]">
                      <img
                        src={OrangeRightTick}
                        alt=""
                        className="w-[24px] h-[24px]"
                      />
                      <p>Accesible anywhere anytime</p>
                    </div>
                  </div>
                </div>
                <div className="w-[616px] h-[580px] bg-[rgba(255,127,4,0.1)] flex justify-center items-end">
                  <div className="w-[479px] h-[543px] flex justify-center items-center bg-white rounded-[20px]">
                    <div className="w-[440px] h-[500px] rounded-[16px]">
                      <img src={IntrestinQuiz1} alt="" />
                      <img
                        src={IntrestingQuiz2}
                        alt=""
                        className="w-full h-[161px]"
                      />
                      <img src={IntrestingQuiz3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Herov3
