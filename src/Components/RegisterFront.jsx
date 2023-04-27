import React from "react";
import Style from "./RegisterFront.module.scss";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "@mui/material/Link";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
const RegisterFront = ({ click, setClick }) => {
  return (
    <div className={Style.root}>
      <TwitterIcon sx={{ color: `#42a5f5`, fontSize: "2rem" }} />
      <Button
        variant="outlined"
        sx={{
          backgroundColor: "white",
          borderRadius: "5rem",
          textTransform: "none",
        }}
      >
        <FcGoogle size={20} />
        &nbsp;Sign up with Google
      </Button>
      <Button
        variant="outlined"
        sx={{
          backgroundColor: "white",
          borderRadius: "5rem",
          textTransform: "none",
        }}
      >
        <ImAppleinc size={20} />
        &nbsp;Sign up with Apple
      </Button>
      <div>
        <span>or</span>
      </div>
      <Button
        onClick={() => {
          setClick(!click);
        }}
        variant="outlined"
        sx={{
          backgroundColor: "black",
          borderRadius: "5rem",
          color: "white",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      >
        Create Account
      </Button>
      <span>
        By signing up, you agree to the{" "}
        <Link href="#" underline="none">
          Terms of Service
        </Link>
        and
        <Link href="#" underline="none">
          Privacy Policy
        </Link>
        , including
        <Link href="#" underline="none">
          Cookie Use.
        </Link>
      </span>
      <div>
        Have an account already?
        <Link href="#" underline="none">
          {" "}
          Log in
        </Link>
      </div>
    </div>
  );
};

export default RegisterFront;
