import React, { useEffect } from "react";
import Style from "./Home.module.scss";
import SlideRight from "./Slide/SlideRight";
import SideNav from "../Home/Slide/SideNav";
import Middle from "./Slide/Middle";
import { useDispatch } from "react-redux";
import { tweetData, tweeterUser } from "../../Redux/slice"; 
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://twitterback.onrender.com/api/userData")
      .then((res) => res.json())
      .then((res) => dispatch(tweeterUser({ data: res })));

    fetch("https://twitterback.onrender.com/api/tweetsdata")
      .then((res) => res.json())
      .then((res) => dispatch(tweetData({ data: res })));
  }, []);
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
