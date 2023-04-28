import React from "react";
import Style from "./Home.module.scss";
import SlideRight from "./Slide/SlideRight";
import SideNav from "../Home/Slide/SideNav";
import Middle from "./Slide/Middle";
const Home = () => {
  return (
    <div className={Style.root}>
      <div className={Style.left}>
        <SideNav />
      </div>
      <div className={Style.middle}>
        <Middle />
      </div>
      <div className={Style.right}>
        <SlideRight />
      </div>
    </div>
  );
};

export default Home;
