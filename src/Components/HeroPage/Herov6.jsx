import React from 'react'
import TailwindLogo from "../../assets/TailwindLogo.png";
import avatar from "../../assets/avatar.png";

function Herov6() {
  return (
    <div>
      <div className="w-[1040px] h-[700px] m-auto">
              <div className="w-[540px] h-[270px] m-auto flex flex-col items-center text-center justify-center">
                <p className="text-[rgba(114,64,253,1)] m-auto text-xl">
                  TESTIMONIALS
                </p>
                <h1 className="m-auto text-[48px] font-bold text-xl">
                  Hear from Our Happy Users
                </h1>
                <p className="m-auto m-50">
                  physiohub is a learning plarform design to help budding <br />
                  physiotherepist perfect their craft and become industry experts.
                </p>
              </div>
              <div className="w-[1040px] h-[380px] flex justify-center">
                <div className="w-[1040px] h-[430px] flex justify-between items-center">
                  <div className="w-[300px] h-[300px] bg-[rgba(240,245,250,1)]">
                    <div className="w-[250px] h-[200px] pt-[1px] ml-[15px]">
                      <div className="flex">
                        <img src={TailwindLogo} alt="" />
                        <p>tailwind</p>
                      </div>
                      <p className="mt-[30px]">
                        "This app transformed our support operations. Response time
                        reduced, leading to a rise in customer satisfaction."
                      </p>
                    </div>
                    <div className="w-[280px] h-[100px] flex items-center justify-center">
                      <div className="flex items-center justify-center gap-[15px]">
                        <div>
                          <img src={avatar} alt="" className="w-[80px]" />
                        </div>
                        <div>
                          <h1>Fredric Hill</h1>
                          <p>Data engineer at tailwind</p>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="w-[280px] h-[300px] bg-[rgba(240,245,250,1)]">
                    <div className="w-[250px] h-[200px] pt-[1px] ml-[15px]">
                      <div className="flex">
                        <img src={TailwindLogo} alt="" />
                        <p>tailwind</p>
                      </div>
                      <p className="mt-[30px]">
                        "This app transformed our support operations. Response time
                        reduced, leading to a rise in customer satisfaction."
                      </p>
                    </div>
                    <div className="w-[280px] h-[100px] flex items-center justify-center">
                      <div className="flex items-center justify-center gap-[15px]">
                        <div>
                          <img src={avatar} alt="" className="w-[80px]" />
                        </div>
                        <div>
                          <h1>Fredric Hill</h1>
                          <p>Data engineer at tailwind</p>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="w-[280px] h-[300px] bg-[rgba(240,245,250,1)]">
                    <div className="w-[250px] h-[200px] pt-[1px] ml-[15px]">
                      <div className="flex">
                        <img src={TailwindLogo} alt="" />
                        <p>tailwind</p>
                      </div>
                      <p className="mt-[30px]">
                        "This app transformed our support operations. Response time
                        reduced, leading to a rise in customer satisfaction."
                      </p>
                    </div>
                    <div className="w-[280px] h-[100px] flex items-center justify-center">
                      <div className="flex items-center justify-center gap-[15px]">
                        <div>
                          <img src={avatar} alt="" className="w-[80px]" />
                        </div>
                        <div>
                          <h1>Fredric Hill</h1>
                          <p>Data engineer at tailwind</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Herov6
