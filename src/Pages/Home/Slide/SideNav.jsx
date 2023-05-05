import * as React from "react";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MailIcon from "@mui/icons-material/Mail";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
export default function Navbar() {
  return (
    <Box
      sx={{
        padding: "1rem 0rem",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        maxHeight: "fit-content",
        justifyContent: "flex-start",
        alignItems: "center"
      }}
    >
      <Typography component="div">
        <TwitterIcon
          sx={{
            fontSize: "2rem",
            color: "primary.main",
          }}
        />
      </Typography>
      <Typography
        component="div"
        sx={{
          boxSizing: "border-box",
          padding: "1rem",
          borderRadius: "5rem",
          display: "flex",
          gap: "1rem",
          "&:hover": {
            bgcolor: "lightgray",
          },
        }}
      >
        <HomeIcon
          sx={{
            fontSize: "2rem",
          }}
        />
        <Typography
          component="div"
          variant="h5"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          Home
        </Typography>
      </Typography>

      <Typography
        component="div"
        sx={{
          boxSizing: "border-box",
          padding: "1rem",
          borderRadius: "5rem",
          display: "flex",
          gap: "1rem",
          "&:hover": {
            bgcolor: "lightgray",
          },
        }}
      >
        <TagIcon
          sx={{
            fontSize: "2rem",
          }}
        />{" "}
        <Typography
          component="div"
          variant="h5"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          Explore
        </Typography>
      </Typography>
      <Typography
        component="div"
        sx={{
          boxSizing: "border-box",
          padding: "1rem",
          borderRadius: "5rem",
          display: "flex",
          gap: "1rem",
          "&:hover": {
            bgcolor: "lightgray",
          },
        }}
      >
        <NotificationsActiveIcon
          sx={{
            fontSize: "2rem",
          }}
        />{" "}
        <Typography
          component="div"
          variant="h5"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          Notifications
        </Typography>
      </Typography>
      <Typography
        component="div"
        sx={{
          boxSizing: "border-box",
          padding: "1rem",
          borderRadius: "5rem",
          display: "flex",
          gap: "1rem",
          "&:hover": {
            bgcolor: "lightgray",
          },
        }}
      >
        <MailIcon
          sx={{
            fontSize: "2rem",
          }}
        />{" "}
        <Typography
          component="div"
          variant="h5"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          Messages
        </Typography>
      </Typography>
      <Typography
        component="div"
        sx={{
          boxSizing: "border-box",
          padding: "1rem",
          borderRadius: "5rem",
          display: "flex",
          gap: "1rem",
          "&:hover": {
            bgcolor: "lightgray",
          },
        }}
      >
        <BookmarkBorderIcon
          sx={{
            fontSize: "2rem",
          }}
        />{" "}
        <Typography
          component="div"
          variant="h5"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          Bookmarks
        </Typography>
      </Typography>
      <Typography
        component="div"
        sx={{
          boxSizing: "border-box",
          padding: "1rem",
          borderRadius: "5rem",
          display: "flex",
          gap: "1rem",
          "&:hover": {
            bgcolor: "lightgray",
          },
        }}
      >
        <PersonIcon
          sx={{
            fontSize: "2rem",
          }}
        />{" "}
        <Typography
          component="div"
          variant="h5"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          Profile
        </Typography>
      </Typography>
      <Typography
        component="div"
        sx={{
          boxSizing: "border-box",
          padding: "1rem",
          borderRadius: "5rem",
          display: "flex",
          gap: "1rem",
          "&:hover": {
            bgcolor: "lightgray",
          },
        }}
      >
        <MoreHorizIcon
          sx={{
            fontSize: "2rem",
            borderRadius: "100%",
            border: "2px solid black",
          }}
        />{" "}
        <Typography
          component="div"
          variant="h5"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          More
        </Typography>
      </Typography>
    </Box>
  );
}
