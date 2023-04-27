import React from "react";
import Style from "./Home.module.scss";
import SideNav from "../../Components/SideNav";
const Home = () => {
  return (
    <div className={Style.root}>
      <SideNav/>
      <h1>Welcome to home page</h1>
    </div>
  );
};

export default Home;
