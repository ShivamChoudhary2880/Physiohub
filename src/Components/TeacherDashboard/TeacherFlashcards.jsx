import React from 'react'
import TeacherDashboard from './TeacherDashboard'
import DeleteIcon from "../../assetsImg/DeleteIcon.png";
import EditIcon from "../../assetsImg/EditIcon.png";
import Quizicon from "../../assetsImg/QuizIcon.png";
import TimeIcon from "../../assetsImg/TimeIcon.png";
import authactivity from "../../assets/auth-activity.png";
import LungsFull from "../../assets/lungsFull.png";

function TeacherFlashcards() {
  return (
    <div className="flex">
      <TeacherDashboard />

      <div>
        <div className="h-[42px] w-[847px]  flex justify-between ml-[180px] mt-[50px]">
          <div className="font-bold text-[24px]">Flashcards</div>
          <div className="w-[295px] h-[42px] flex justify-evenly">
            <button className="w-[120px] h-[42px] font-medium text-[14px] bg-[rgba(180,187,205,1)] rounded-[10px]">
              Featured
            </button>
            <button className="w-[120px] h-[42px] bg-[rgba(114,64,253,1)] text-white rounded-[12px] font-medium text-[16px]">
              + Create new
            </button>
          </div>
        </div>

        <div className="w-[847px] h-[388px]  ml-[180px] mt-[50px]">
          <div className="w-[847px] h-[172px]  flex items-center justify-between">
            <div className="w-[240px] h-[140px]  object-cover">
              <img src={authactivity} alt="" />
            </div>
            <div className="w-[588px] h-[100px]  flex justify-between items-center">
              <div className="w-[476px] h-[100px]  flex flex-col justify-between">
                <div className="">
                  <p className="text-[17px] text-[rgba(66,151,251,1)]">
                    Geriatric
                  </p>
                  <p className="text-[23px]">Musculoskeletal Physiology Anatomy</p>
                </div>
                <div className="flex  w-[210px] h-[20px] ">
                  <div className="flex items-center">
                    <img src={Quizicon} alt="" className="w-[20px] mr-[5px]" />
                    <p>23 Questions</p>
                  </div>
                  <div className="flex items-center ml-[20px] ">
                    <img src={TimeIcon} alt="" className="mr-[5px]" />
                    <p>20 min</p>
                  </div>
                </div>
              </div>
              <div className="w-[90px] h-[40px] flex justify-between ">
                <div>
                  <img src={DeleteIcon} alt="" className="w-[40px]" />
                </div>
                <div>
                  <img src={EditIcon} alt="" className="w-[40px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[847px] h-[172px]  flex items-center justify-between mt-[20px]">
            <div className="w-[240px] h-[140px]  object-cover">
              <img src={LungsFull} alt="" />
            </div>
            <div className="w-[588px] h-[100px]  flex justify-between items-center">
              <div className="w-[476px] h-[100px]  flex flex-col justify-between">
                <div className="">
                  <p className="text-[17px] text-[rgba(66,151,251,1)]">
                    Geriatric
                  </p>
                  <p className="text-[23px]">Ligament Physiotherapy</p>
                </div>
                <div className="flex  w-[210px] h-[20px] ">
                  <div className="flex items-center">
                    <img src={Quizicon} alt="" className="w-[20px] mr-[5px]" />
                    <p>23 Questions</p>
                  </div>
                  <div className="flex items-center ml-[20px] ">
                    <img src={TimeIcon} alt="" className="mr-[5px]" />
                    <p>20 min</p>
                  </div>
                </div>
              </div>
              <div className="w-[90px] h-[40px] flex justify-between ">
                <div>
                  <img src={DeleteIcon} alt="" className="w-[40px]" />
                </div>
                <div>
                  <img src={EditIcon} alt="" className="w-[40px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherFlashcards
