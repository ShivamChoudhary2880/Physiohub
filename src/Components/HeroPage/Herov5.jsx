import React from 'react'
import ToolsNeed from "../../assets/ToolsNeed.png";


function Herov5() {
  return (
    <div>
      <div className="w-[1440px] h-[1000px]">
              <div className="w-[640px] h-[150px] m-auto flex flex-col items-center text-center justify-center ">
                <p className="text-[rgba(114,64,253,1)] m-auto text-xl">
                  YOUR OWN DASHBOARD
                </p>
                <h1 className="m-auto text-[48px] font-bold text-xl">
                  The Tools You Really Need
                </h1>
                <p className="m-auto m-50">
                  physiohub is a learning plarform design to help budding <br />
                  physiotherepist perfect their craft and become industry experts.
                </p>
              </div>
      
              <div className="w-[1002px] h-[500px] m-auto">
                <img src={ToolsNeed} alt="" />
              </div>
            </div>
    </div>
  )
}

export default Herov5
