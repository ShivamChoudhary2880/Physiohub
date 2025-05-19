import React from 'react'
import logoLight from "../../assets/logo-on-light.png";
import DiscoverIcon from "../../assets/DiscoverIcon.png";
import ProfileIcon from "../../assets/ProfileIcon.png";
import BlogsIcon from "../../assets/BlogsIcon.png";
import NavBar from "../NavBar";
import Course from "../../assetsImg/Course.png";
import FlashCardIcon from "../../assetsImg/FlashCardIcon.png";
import QuizIcon from "../../assetsImg/QuizIcon.png";
import DeleteIcon from "../../assetsImg/DeleteIcon.png";
import EditIcon from "../../assetsImg/EditIcon.png";
import { Link } from 'react-router-dom';
import TeacherDashboard from './TeacherDashboard';
import avtar from "../../assets/avatar.png"



function TeacherBlog() {
  return (
    <div className="flex">
      {/* <div className="w-[280px] h-[1079px] ">
        <div className="w-[280px] h-[380px] ">
          <Link to="/herov1">
            <div className="w-[256px] h-[68px]  m-[40px]">
              <img src={logoLight} alt="" />
            </div>
          </Link>
          <div className="w-[256px] h-[255px]  mt-[10px]  m-[30px]">
            <div className="flex w-[256px] h-[60px]  items-center">
              <img
                src={BlogsIcon}
                alt=""
                className="w-[30px] h-[30px]  ml-[20px]"
              />
              <p className="text-[20px] font-medium text-[rgba(114,64,253,1)] ml-[20px]">
                Blogs
              </p>
            </div>
            <div className="flex w-[256px] h-[60px]  items-center mt-[5px]">
              <img
                src={FlashCardIcon}
                alt=""
                className="w-[30px] h-[30px]  ml-[20px]"
              />
              <p className="text-[20px] font-medium text-[rgba(114,64,253,1)] ml-[20px]">
                Flashcards
              </p>
            </div>
            <div className="flex w-[256px] h-[60px]  items-center mt-[5px]">
              <img
                src={QuizIcon}
                alt=""
                className="w-[30px] h-[30px]  ml-[20px]"
              />
              <p className="text-[20px] font-medium text-[rgba(114,64,253,1)] ml-[20px]">
                Quizs
              </p>
            </div>
            <div className="flex w-[256px] h-[60px]  items-center mt-[5px]">
              <img
                src={Course}
                alt=""
                className="w-[30px] h-[30px]  ml-[20px]"
              />
              <p className="text-[20px] font-medium text-[rgba(114,64,253,1)] ml-[20px]">
                Course
              </p>
            </div>
            <div className="flex w-[256px] h-[60px]  items-center mt-[5px]">
              <img
                src={BlogsIcon}
                alt=""
                className="w-[30px] h-[30px] ml-[20px]"
              />
              <p className="text-[20px] font-medium text-[rgba(114,64,253,1)] ml-[20px]">
                Lessons
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <TeacherDashboard />

      <div>
        <div className="h-[42px] w-[847px]  flex justify-between ml-[180px] mt-[50px]">
          <div className="font-bold text-[24px]">Blogs</div>
          <div className="w-[295px] h-[42px] flex justify-evenly">
            <button className="w-[120px] h-[42px] font-medium text-[14px] bg-[rgba(180,187,205,1)] rounded-[10px]">
              Featured
            </button>
            <button className="w-[120px] h-[42px] bg-[rgba(114,64,253,1)] text-white rounded-[12px] font-medium text-[16px]">
              + Create new
            </button>
          </div>
        </div>

        <div className="h-[42px] w-[847px]  flex justify-between ml-[180px] mt-[50px]">
          <div className="font-medium text-[18px]">Featured Articles</div>
          <div className="w-[295px] h-[42px] flex justify-evenly">
            <button
              className="w-[120px] h-[42px] font-medium text-[16px] rounded-[10px] border-2 text-[rgba(114,64,253,1)]"
              style={{ borderColor: "rgba(114, 64, 253, 1)" }}
            >
              Save as Draft
            </button>
            <button className="w-[120px] h-[42px] bg-[rgba(114,64,253,1)] text-white rounded-[12px] font-medium text-[16px]">
              Publish
            </button>
          </div>
        </div>

        <div className="w-[791px] h-[612px] ml-[180px]">
          <div className="w-[791px] h-[204px] border-b flex justify-between items-center mt-[40px]">
            <div
              className='w-[175px] h-[132px] '
            >
              <img src={avtar} alt="" className="w-[150px]" />
            </div>

            <div className="w-[588px] h-[164px] flex justify-between items-center">
              <div className="w-[476px] h-[164px]  flex flex-col justify-between">
                <div className="w-[476px] h-[124px] ">
                  <p className="text-[rgba(66,151,251,1)] font-medium text-[14px]">
                    Geriatric
                  </p>
                  <p className="font-medium text-[20px]">
                    Unlocking the Secrets of Movement: Advanced Techniques for
                    Enhancing Physiotherapy <br /> Outcomes
                  </p>
                </div>
                <div className="w-[277px] h-[28px] text-[rgba(73,93,121,1)] flex justify-between">
                  <p className="ml-[30px]">Sandy Gustiman</p>
                  <p>May 16, 2025</p>
                </div>
              </div>
              <div className="w-[90px] h-[40px] flex justify-between">
                <div>
                  <img src={DeleteIcon} alt="" className="w-[40px]" />
                </div>
                <div>
                  <img src={EditIcon} alt="" className="w-[40px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[791px] h-[204px] border-b flex justify-between items-center mt-[40px]">
            <div
              className='w-[175px] h-[132px]'
            >
              <img src={avtar} alt="" className="w-[150px]" />
            </div>

            <div className="w-[588px] h-[164px] flex justify-between items-center">
              <div className="w-[476px] h-[164px]  flex flex-col justify-between">
                <div className="w-[476px] h-[124px] ">
                  <p className="text-[rgba(66,151,251,1)] font-medium text-[14px]">
                    Geriatric
                  </p>
                  <p className="font-medium text-[20px]">
                    Unlocking the Secrets of Movement: Advanced Techniques for
                    Enhancing Physiotherapy <br /> Outcomes
                  </p>
                </div>
                <div className="w-[277px] h-[28px] text-[rgba(73,93,121,1)] flex justify-between">
                  <p className="ml-[30px]">Sandy Gustiman</p>
                  <p>May 16, 2025</p>
                </div>
              </div>
              <div className="w-[90px] h-[40px] flex justify-between">
                <div>
                  <img src={DeleteIcon} alt="" className="w-[40px]" />
                </div>
                <div>
                  <img src={EditIcon} alt="" className="w-[40px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[791px] h-[204px] border-b flex justify-between items-center mt-[40px]">
            <div
              className='w-[175px] h-[132px] '
            >
              <img src={avtar} alt="" className="w-[150px]" />
            </div>

            <div className="w-[588px] h-[164px]  flex justify-between items-center">
              <div className="w-[476px] h-[164px]  flex flex-col justify-between">
                <div className="w-[476px] h-[124px]">
                  <p className="text-[rgba(66,151,251,1)] font-medium text-[14px]">
                    Geriatric
                  </p>
                  <p className="font-medium text-[20px]">
                    Unlocking the Secrets of Movement: Advanced Techniques for
                    Enhancing Physiotherapy <br /> Outcomes
                  </p>
                </div>
                <div className="w-[277px] h-[28px]  text-[rgba(73,93,121,1)] flex justify-between">
                  <p className="ml-[30px]">Sandy Gustiman</p>
                  <p>May 16, 2025</p>
                </div>
              </div>
              <div className="w-[90px] h-[40px] flex justify-between">
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

export default TeacherBlog
