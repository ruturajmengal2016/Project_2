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
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import ClearIcon from "@mui/icons-material/Clear";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import PollIcon from "@mui/icons-material/Poll";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import PlaceIcon from "@mui/icons-material/Place";
import PublicIcon from "@mui/icons-material/Public";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SideNav() {
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
          PaperProps={{ sx: { width: "50%", position: "relative"} }}
        >
          <DialogActions sx={{marginTop :"2rem",marginBottom:"1rem"}}>
            <Button sx={{ position : "absolute" , left : 0,dislpay : "block",marginTop :"2rem",marginBottom:"1rem" }} onClick={handleClose}>
              <ClearIcon />
            </Button>
          </DialogActions>
          <DialogTitle >
            <Avatar
              alt="Travis Howard"
              src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
            />
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div className={style.inputOftweet}>
                <textarea
                  placeholder="What's happening?"
                  rows="5"
                  column="100"
                  className={style.textarea}
                />

                <Button
                  sx={{
                    textTransform: "none",
                    fontSize: ".75rem",
                    width: "30%",
                    borderRadius: 10,
                    "&:hover": {
                      backgroundColor: "rgb(231, 233, 234)",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  <PublicIcon />
                  Everyone can reply
                </Button>
                <hr></hr>

                <div className={style.tweet}>
                  <div className={style.tweetIcon}>
                    <ImageIcon sx={{ color: "skyblue" }} />
                    <GifBoxIcon sx={{ color: "skyblue" }} />
                    <PollIcon sx={{ color: "skyblue" }} />
                    <SentimentSatisfiedAltIcon sx={{ color: "skyblue" }} />
                    <PendingActionsIcon sx={{ color: "skyblue" }} />
                    <PlaceIcon sx={{ color: "skyblue" }} />
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      sx={{ borderRadius: 10, textTransform: "none" }}
                    >
                      tweet
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
