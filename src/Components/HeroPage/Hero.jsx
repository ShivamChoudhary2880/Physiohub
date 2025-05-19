import React from "react";
import NavBar from "../NavBar";
import Herov2 from "./Herov2";
import Herov1 from "./Herov1";
import Herov3 from "./Herov3";
import Herov4 from "./Herov4";
import Herov5 from "./Herov5";
import Herov6 from "./Herov6";
import Herov7 from "./Herov7";
import Herov8 from "./Herov8";

function Hero() {
  return (
    <div className="">
      <NavBar />
      
        <Herov1 />

      {/* <Outlet /> */}

      <Herov2 />

      <Herov3 />

      <Herov4 />

      <Herov5 />

      <Herov6 />

      <Herov7 />

      <Herov8 />
    </div>
  );
}

export default Hero;
