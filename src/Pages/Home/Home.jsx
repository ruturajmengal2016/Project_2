import React, { useEffect } from "react";
import Style from "./Home.module.scss";
import SlideRight from "./Slide/SlideRight";
import Middle from "./Slide/Middle";
import { useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { tweetData, tweeterUser } from "../../Redux/slice";
import Navbar from "./Slide/SideNav";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://twitterback.onrender.com/api/userData")
      .then((res) => res.json())
      .then((res) => dispatch(tweeterUser({ data: res })));

    fetch("https://twitterback.onrender.com/api/tweetsdata")
      .then((res) => res.json())
      .then((res) => dispatch(tweetData({ data: res })));
  }, [dispatch]);
  return (
    <div className={Style.root}>
      <div className={Style.left}>
        <Navbar />
        {JSON.parse(localStorage.getItem("login")) && (
          <div style={{ position: "relative", bottom: "10rem", left: "10rem" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Avatar alt="Cindy Baker" src="" />
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                }}
              >
                <strong>
                  {" "}
                  {JSON.parse(localStorage.getItem("users")).name}
                </strong>
                <span>@{JSON.parse(localStorage.getItem("users")).name}</span>
              </span>
              <Tooltip title="Log out">
                <IconButton
                  onClick={() => {
                    localStorage.removeItem("login");
                    navigate("/", { state: 0 });
                  }}
                >
                  <MoreHorizIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        )}
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
