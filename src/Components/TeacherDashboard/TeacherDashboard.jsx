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
import { Link } from "react-router-dom";
import avtar from "../../assets/avatar.png";

function TeacherDashboard() {
  return (
    <div>
      <div className="w-[280px] h-[1079px]">
        <div className="w-[280px] h-[1079px]">
          <Link to="/herov1">
            <div className="w-[256px] h-[68px]  m-[40px]">
              <img src={logoLight} alt="" />
            </div>
          </Link>
          <div className="w-[256px] h-[255px]  mt-[10px]  m-[30px]">
            <Link to={"/TeacherBlog"}>
              <div className="flex w-[256px] h-[60px]  items-center cursor-pointer">
                <img
                  src={BlogsIcon}
                  alt=""
                  className="w-[30px] h-[30px]  ml-[20px] cursor-pointer"
                />
                <p className="text-[20px] font-medium text-[rgba(114,64,253,1)] ml-[20px]">
                  Blogs
                </p>
              </div>
            </Link>
            <Link to={"/TeacherFlashcards"}>
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
            </Link>
            <Link to={"/TeacherQuiz"}>
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
            </Link>
            <Link to={"/TeacherCourse"}>
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
            </Link>
            <Link to={"/TeacherLessons"}>
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
            </Link>
            <div className="flex w-[300px] h-[60px]  items-center mt-[500px]">
              <div>
                <img
                  src={avtar}
                  alt=""
                  className="w-[70px] h-[70px] ml-[10px]"
                />
              </div>
              <div className='w-[140px] h-[40px]  ml-[10px]'>
                <h1 className="font-normal text-[18px]">Young Alaska</h1>
                <p className="text-[16px] font-normal ">
                  Alaskayng@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard
