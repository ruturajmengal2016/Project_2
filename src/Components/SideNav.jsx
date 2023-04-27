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

export default function SideNav() {
  const [open, setOpen] = React.useState(false);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

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
    <div>
      <TwitterIcon sx={{ color: "skyblue" }} />
      {data.map((ele, index) => {
        return (
          <div className={style.parentDiv} key={index}>
            <span>
              {" "}
              <Button className={style.navContent}
                sx={{
                  borderRadius: 10,
                  color: "black",
                  textTransform: "none",
                  gap: 3,
                  '&:hover': {
                    backgroundColor: 'rgb(231, 233, 234)',
                    opacity: [0.9, 0.8, 0.7],
                },
                fontSize: "1.5rem",
                fontWeight : 550,

            }}
              >
                {" "}
                {ele.icon} {ele.name}
              </Button>
            </span>
          </div>
        );
      })}

      <div>
        <Button variant="contained" onClick={handleClickOpen}>
          Tweet
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          </DialogActions>
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
