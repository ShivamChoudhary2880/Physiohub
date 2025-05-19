import React from 'react'
import logolight from "../assets/logo-on-light.png";
import { Link} from "react-router-dom";


function NavBar() {
  return (
    <div>
      <div className="h-[84px] w-full flex justify-evenly items-center">
        <div>
          <Link to={"/herov1"}>
            <img
              className="w-[165px] h-[32] mr-[80px]"
              src={logolight}
              alt=""
            />
          </Link>
        </div>
        <div className="w-[498px] h-[26px]">
          <Link to={"/login"}>
            <a className="ml-[30px]" href="">
              Login
            </a>
          </Link>
          <a className="ml-[30px]" href="">
            Feature
          </a>
          <a className="ml-[30px]" href="">
            Articles
          </a>
          <a className="ml-[30px]" href="">
            About Us
          </a>
          <a className="ml-[30px]" href="">
            Contact
          </a>
        </div>
        <div className="w-[201px] h-[44px] flex justify-evenly items-center">
          <Link to={"/studentdashboard"}>
            <button
              className="w-[90px] h-[44px] rounded-[10px] border cursor-pointer"
              style={{ borderColor: "rgb(114, 64, 253)", borderWidth: "1px" }}
            >
              Student
            </button>
          </Link>
          <Link to={"/teacherdashboard"}>
            <button
              className="w-[90px] h-[44px] rounded-[10px] text-white cursor-pointer"
              style={{ backgroundColor: "rgb(114, 64, 253)" }}
            >
              Teacher
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar
