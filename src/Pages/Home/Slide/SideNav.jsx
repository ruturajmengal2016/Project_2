import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HouseIcon from "@mui/icons-material/House";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ContactsIcon from "@mui/icons-material/Contacts";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import style from "./SideNav.module.scss";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import { TweetProfile } from "../../../Components/TweetProfile";
import BadgeAvatars from "../../../Components/StyleBadged";
import { getUsers } from "../../../utils/localstorage";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SideNav() {
  const getName = getUsers();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = [
    {
      icon: <HouseIcon />,
      name: "Home",
    },
    {
      icon: <Grid3x3Icon />,
      name: "Explore",
    },
    {
      icon: <NotificationsNoneIcon />,
      name: "Notification",
    },
    {
      icon: <MessageIcon />,
      name: "Messages",
    },
    {
      icon: <BookmarkBorderIcon />,
      name: "Bookmarks",
    },
    {
      icon: <TwitterIcon />,
      name: "Twitter Blue",
    },
    {
      icon: <ContactsIcon />,
      name: "Profile",
    },
    {
      icon: <MoreHorizIcon />,
      name: "More",
    },
  ];

  return (
    <div className={style.root}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <TwitterIcon sx={{ color: "#42a5f5", fontSize: "2rem" }} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          {data.map((ele, index) => {
            return (
              <div key={index}>
                <span>
                  {" "}
                  <Button
                    className={style.navContent}
                    sx={{
                      borderRadius: 10,
                      color: "black",
                      textTransform: "none",
                      gap: 3,
                      "&:hover": {
                        backgroundColor: "rgb(231, 233, 234)",
                        opacity: [0.9, 0.8, 0.7],
                      },
                      fontSize: "1.5rem",
                      fontWeight: 550,
                    }}
                  >
                    {" "}
                    {ele.icon} {ele.name}
                  </Button>
                </span>
              </div>
            );
          })}
        </div>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            textTransform: "none",
            borderRadius: "5rem",
            width: "100%",
            backgroundColor: "#42a5f5",
            "&:hover": {
              backgroundColor: "#42a5f5",
            },
          }}
        >
          Tweet
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          PaperProps={{
            sx: {
              width: "50%",
              height: "fit-content",
              padding: "1rem",
              borderRadius: "1rem",
            },
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </div>
            <div style={{ width: "100%" }}>
              <TweetProfile closetweet={handleClose} />
            </div>
          </div>
        </Dialog>
      </div>
      {getName && (
        <div style={{ display: "flex", gap: "1rem" }} className={style.id}>
          <BadgeAvatars />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{getName[0].name}</span>
            <span>@{getName[0].name}</span>
          </div>
        </div>
      )}
    </div>
  );
}
