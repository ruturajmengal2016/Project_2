import React from "react";
import Style from "./SlideRight.module.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
const SlideRight = () => {
  const selector = useSelector((state) => state.tweet.data);
  const selector2 = useSelector((state) => state.tweeterUsers.data);
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
          {selector[0] &&
            selector[0].slice(0, 4).map((ele, ind) => {
              return (
                <Happening
                  tweetedBy={ele.tweetedBy}
                  content={ele.content}
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
          {selector2[0] &&
            selector2[0].slice(8, 11).map((ele, ind) => {
              return <Follow key={ind} name={ele.name} avatar={ele.image} />;
            })}
        </div>
        <Button
          sx={{
            textTransform: "none",
            alignSelf: "flex-start",
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

const Happening = ({ tweetedBy, content }) => {
  return (
    <div className={Style.tag}>
      <div>{tweetedBy.name}</div>
      <strong>#{tweetedBy.name}</strong>
      <div style={{ width: "80%", height: "2.1rem", overflow: "hidden" }}>
        {content}
      </div>
    </div>
  );
};

const Follow = ({ name,avatar }) => {
  const [follow, setFollow] = React.useState(false);
  return (
    <div className={Style.follow}>
      <Avatar alt={name} src={avatar} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          justifyContent: "flex-start",
        }}
      >
        <strong>{name}</strong>
        <span>@{name}</span>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          setFollow(!follow);
        }}
      >
        {follow ? "Following" : "Follow"}
      </Button>
    </div>
  );
};

export default SlideRight;
