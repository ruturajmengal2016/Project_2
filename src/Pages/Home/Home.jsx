import React from "react";
import Style from "./Home.module.scss";
import SlideRight from "./Slide/SlideRight";
const Home = () => {
  return (
    <div className={Style.root}>
      <div className={Style.left}>
        left
      </div>
      <div className={Style.middle}>
        middle
      </div>
      <div className={Style.right}>
        <SlideRight />
      </div>
    </div>
  );
};

export default Home;
