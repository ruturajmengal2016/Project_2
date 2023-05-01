import React, { useState} from "react";
import Style from "./Middle.module.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PublicIcon from "@mui/icons-material/Public";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import GifBoxIcon from "@mui/icons-material/GifBox";
import PollIcon from "@mui/icons-material/Poll";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FaRetweet } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { useSelector} from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import CloseIcon from "@mui/icons-material/Close";
import imgs from '../../../utils/profile.png'
const Middle = () => {
  return (
    <div className={Style.root}>
      <BasicTabs title="Home" />
    </div>
  );
};

// Default profile Box
const Profile = () => {
  const [value, setValue] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        border: "0.009rem solid rgb(201, 197, 197)",
        display: "flex",
        maxHeight: "fit-content",
      }}
    >
      <div className={Style.first}>
        <Avatar
          alt="Remy Sharp"
          src={imgs}
          sx={{ width: 56, height: 56, bgcolor: "blue" }}
        >
          RM
        </Avatar>
      </div>
      <div className={Style.second}>
        <div>
          <div>
            <Button
              variant="outlined"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                textTransform: "none",
                borderRadius: "1rem",
                padding: " 0rem 0.2rem 0rem 0.2rem",
              }}
            >
              Everyone <ExpandMoreIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Everyone</MenuItem>
              <MenuItem onClick={handleClose}>Twitter Circle</MenuItem>
            </Menu>
          </div>
        </div>
        <div>
          <TextField
            sx={{
              "& fieldset": { border: "none" },
              maxHeight: "fit-content",
              width: "80%",
            }}
            InputProps={{
              style: {
                color: "black",
                fontWeight: "bold",
              },
            }}
            focused={false}
            placeholder="What’s happening?"
            type="text"
            multiline
            rows={3}
            variant="outlined"
            fullWidth
            size="small"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="text"
            sx={{ borderRadius: "1rem", textTransform: "none" }}
          >
            <PublicIcon sx={{ color: "#42a5f5" }} />
            Everyone can reply
          </Button>
        </div>
        <hr style={{ width: "100%" }} />
        <div className={Style.icons}>
          <div
            style={{ alignSelf: "flex-end", display: "flex", gap: "0.5rem" }}
          >
            <span>
              <CropOriginalIcon sx={{ color: "#42a5f5" }} />
            </span>
            <span>
              <GifBoxIcon sx={{ color: "#42a5f5" }} />
            </span>
            <span>
              <PollIcon sx={{ color: "#42a5f5" }} />
            </span>
            <span>
              <SentimentSatisfiedAltIcon sx={{ color: "#42a5f5" }} />
            </span>
            <span>
              <EditCalendarIcon sx={{ color: "#42a5f5" }} />
            </span>
            <span>
              <LocationOnIcon sx={{ color: "#42a5f5" }} />
            </span>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                borderRadius: "2rem",
                textTransform: "none",
                fontSize: "1rem",
                padding: "0.2rem 1.2rem 0.2rem 1.2rem",
              }}
            >
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
};

//Table Panal
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 0,
            height: "100vh",
            overflow: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Main Tab
function BasicTabs({ title }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const selector = useSelector((state) => state.tweet.data);
  const selector2 = useSelector((state) => state.tweeterUsers.data);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box
        sx={{
          position: "sticky",
          zIndex: 1,
          top: 0,
          borderBottom: 1,
          borderColor: "divider",
          backdropFilter: "blur(8px)",
          height: "15vh",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginLeft: "1rem" }}
        >
          {title}
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "5rem",
            alignItems: "flex-end",
            width: "100%",
          }}
          TabIndicatorProps={{
            style: {
              width: "50px",
              translate: "9.5rem",
              height: "5px",
              borderRadius: "1rem",
            },
          }}
        >
          <Tab
            label="For you"
            {...a11yProps(0)}
            sx={{ textTransform: "none", fontSize: "1rem", width: "50%" }}
          />
          <Tab
            label="Following"
            {...a11yProps(1)}
            sx={{ textTransform: "none", fontSize: "1rem", width: "50%" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Profile />
        {selector[0] && selector[0].map((ele, ind) => {
            return (
              <TweetBox
                avatar={selector2[0][ind].image}
                commentCount={ele.commentCount}
                content={ele.content}
                isLiked={ele.isLiked}
                key={ele.id}
                image={ele.image}
                reTweetCount={ele.reTweetsCount}
                tweetedBy={ele.tweetedBy}
                likeCount={ele.likeCount}
              />
            );
          })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Profile />
        {selector[0] && selector[0].slice(20, 60).map((ele, ind) => {
            return (
              <TweetBox
                avatar={selector2[0][ind].image}
                commentCount={ele.commentCount}
                content={ele.content}
                isLiked={ele.isLiked}
                key={ele.id}
                image={ele.image}
                reTweetCount={ele.reTweetsCount}
                tweetedBy={ele.tweetedBy}
                likeCount={ele.likeCount}
              />
            );
          })}
      </TabPanel>
    </Box>
  );
}

// Tweet Box
function TweetBox({
  avatar,
  content,
  image,
  tweetedBy,
  likeCount,
  commentCount,
  isLiked,
  reTweetCount,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        height: "fit-content",
        width: "fit-content",
        padding: "0.5rem",
        display: "flex",
        justifyContent: "space-evenly",
        "&:hover": {
          backgroundColor: "rgb(180, 178, 178, 0.2)",
        },
      }}
    >
      <div style={{ boxSizing: "border-box", padding: "0.2rem" }}>
        <Avatar alt={tweetedBy.name} src={avatar} />
      </div>
      <div
        style={{
          boxSizing: "border-box",
          padding: "0.2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          gap: "0.5rem",
        }}
      >
        <div>
          <strong>{tweetedBy.name}</strong>
          &nbsp;
          <span>@{tweetedBy.name}</span>
        </div>
        <div>{content} </div>
        <div>
          <img
            src={image}
            style={{ objectFit: "contain", width: "90%", borderRadius: "1rem" }}
            alt=""
          />
        </div>
        <div className={Style.tweetIcons}>
          <span onClick={handleClickOpen}>
            <ChatBubbleOutlineIcon />
            &nbsp;<span>{commentCount}</span>
          </span>
          <CommentDialog
            handleClose={handleClose}
            open={open}
            avater={avatar}
            name={tweetedBy.name}
            content={content}
          />
          <span>
            <FaRetweet size={30} />
            &nbsp;<span>{reTweetCount}</span>
          </span>
          <span>
            {isLiked ? (
              <AiFillHeart size={25} fill="#e91e63" />
            ) : (
              <FavoriteBorderIcon />
            )}
            &nbsp;<span>{likeCount}</span>
          </span>
          <span>
            <ViewKanbanIcon />
          </span>
          <span>
            <FiShare size={25} />
          </span>
        </div>
      </div>
    </Box>
  );
}

function CommentDialog({ open, handleClose, avater, content, name }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "40rem",
            height: "20rem",
            borderRadius: "1rem",
          },
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1 }}>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </div>
          <div
            style={{
              flex: 2,
              padding: "0rem 0rem 1rem 3rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Avatar src={avater}></Avatar>&nbsp;<strong>{name}</strong>&nbsp;
              <span>@{name}</span>&nbsp;
              <span
                style={{
                  paddingLeft: "2rem",
                  width: "80%",
                  height: "2.5rem",
                  overflow: "hidden",
                }}
              >
                {content}
              </span>
            </div>
            <div
              style={{
                height: "5rem",
                backgroundColor: "gray",
                display: "inline-block",
                width: "0.2rem",
                boxSizing: "border-box",
                marginLeft: "1rem",
              }}
            ></div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar sx={{ bgcolor: "blue" }} src={imgs}>RM</Avatar>
              <TextField
                placeholder="Tweet your reply"
                sx={{
                  "& fieldset": { border: "none" },
                  maxHeight: "fit-content",
                  width: "80%",
                  fontSize: "2rem",
                }}
                multiline
              />
            </div>
            <div style={{ width: "90%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    alignSelf: "flex-end",
                    display: "flex",
                    gap: "0.5rem",
                    boxSizing: "border-box",
                    padding: "0.5rem",
                  }}
                >
                  <span>
                    <CropOriginalIcon sx={{ color: "#42a5f5" }} />
                  </span>
                  <span>
                    <GifBoxIcon sx={{ color: "#42a5f5" }} />
                  </span>
                  <span>
                    <PollIcon sx={{ color: "#42a5f5" }} />
                  </span>
                  <span>
                    <SentimentSatisfiedAltIcon sx={{ color: "#42a5f5" }} />
                  </span>
                  <span>
                    <EditCalendarIcon sx={{ color: "#42a5f5" }} />
                  </span>
                  <span>
                    <LocationOnIcon sx={{ color: "#42a5f5" }} />
                  </span>
                </div>
                <div>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{
                      borderRadius: "2rem",
                      textTransform: "none",
                      fontSize: "1rem",
                      padding: "0.2rem 1.2rem 0.2rem 1.2rem",
                    }}
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Middle;
