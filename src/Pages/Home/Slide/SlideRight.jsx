import React from "react";
import Style from "./SlideRight.module.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
const SlideRight = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "sticky",
    top: 0,
    borderRadius: "5rem",
    backgroundColor: "rgb(239, 243, 244)",
    marginLeft: 0,
    width: "100%",
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
    },
  }));
  const tag = [
    { name: "Trending in India", tag: "#delhimetro", tweets: "9000 Tweets" },
    {
      name: "Entertainment.Trending",
      tag: "Warner Bros",
      tweets: "9000 Tweets",
    },
    { name: "Trending in India", tag: "Hoster", tweets: "9000 Tweets" },
    {
      name: "Entertainment.Trending",
      tag: "#ViratKohali",
      tweets: "9000 Tweets",
    },
  ];
  return (
    <div className={Style.root}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Twitter"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Box
        sx={{
          height: 500,
          width: "100%",
          backgroundColor: "rgb(239, 243, 244)",
          borderRadius: "1rem",
          boxSizing: "border-box",
          padding: "0.65rem",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          What’s happening
        </Typography>
        <div>
          {tag.map((ele, ind) => {
            return (
              <Happening
                tag={ele.tag}
                name={ele.name}
                tweets={ele.tweets}
                key={ind}
              />
            );
          })}
        </div>
        <Button
          sx={{
            textTransform: "none",
          }}
        >
          Show more
        </Button>
      </Box>
      <Box
        sx={{
          height: 500,
          width: "100%",
          backgroundColor: "rgb(239, 243, 244)",
          borderRadius: "1rem",
          boxSizing: "border-box",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Who to follow
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            gap: "1rem",
          }}
        >
          <Follow email="ruturajmengal@gmail.com" nick="@ruturaj" />
          <Follow email="ruturajmengal@gmail.com" nick="@ruturaj" />
          <Follow email="ruturajmengal@gmail.com" nick="@ruturaj" />
        </div>
        <Button
          sx={{
            textTransform: "none",
            alignSelf:"flex-start"
          }}
        >
          Show more
        </Button>
      </Box>
      <div>
        Terms of Service Privacy Policy Cookie Policy Accessibility Ads info
        More © 2023 X Corp.
      </div>
    </div>
  );
};

const Happening = ({ name, tag, tweets }) => {
  return (
    <div className={Style.tag}>
      <div>{name}</div>
      <strong>{tag}</strong>
      <div>{tweets}</div>
    </div>
  );
};

const Follow = ({ email, nick }) => {
  return (
    <div className={Style.follow}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{email}</span>
        <span>{nick}</span>
      </div>
      <Button variant="contained">Follow</Button>
    </div>
  );
};

export default SlideRight;
