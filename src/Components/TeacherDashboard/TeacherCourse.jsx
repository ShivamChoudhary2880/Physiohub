import React from 'react'
import TeacherDashboard from './TeacherDashboard'

function TeacherCourse() {
  return (
    <div className='flex'>
      <TeacherDashboard />

      <div className="h-[42px] w-[847px]  flex justify-between ml-[180px] mt-[50px]">
        <div className="font-bold text-[24px]">Course</div>
        <div className="w-[295px] h-[42px] flex justify-evenly">
          <button className="w-[120px] h-[42px] font-medium text-[14px] bg-[rgba(180,187,205,1)] rounded-[10px]">
            Featured
          </button>
          <button className="w-[120px] h-[42px] bg-[rgba(114,64,253,1)] text-white rounded-[12px] font-medium text-[16px]">
            + Create new
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeacherCourse
