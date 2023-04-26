import React, { useRef, useEffect, useState } from "react";
import { Card, Button, TextField } from "@mui/material/";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import { getUsers } from "../../utils/localstorage";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const Navigate = useNavigate();

  const [userdata, setUserdata] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  useEffect(() => {
    const data = getUsers();
    setUserdata(data);
  }, []);

  function handleClear(){
    Navigate("/")
  }

  function handleSignIn() {
    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      alert("FIll the form first");
      return;
    }

    const userObj = userdata.find(
      (obj) =>
        obj?.email === emailRef.current.value &&
        obj?.password === passwordRef.current.value
    );

    if (userObj !== undefined) {
      alert(`${userObj?.username} you are succ login`);
    } else {
      alert("Pls register first");
      return;
    }
  }
  return (
    <div>
      <div>
        <Card sx={{ minWidth: 275, maxWidth: 600 }} className = {styles.card}>
          <div className={styles.parentLogin}>
            <ClearIcon sx={{ display: "inline-block", cursor : "pointer"}} onClick={handleClear} />
            <div className={styles.loginContent}>
              <TwitterIcon sx={{color : "skyblue"}} />
              <h1>Sign In to Twitter</h1>
              <Button className={styles.btn} variant="contained">
                {" "}
                <GoogleIcon /> Sign In with Google
              </Button>
              <Button className={styles.btn} variant="contained">
                {" "}
                <AppleIcon /> Sign In with apple
              </Button>

              <TextField
                className={styles.input}
                ref={emailRef}
                label="Email, Phone or Username"
                required
              />

              <TextField
                className={styles.input}
                ref={passwordRef}
                label="Password"
                type="password"
                required
              />

              <Button className={styles.btn} variant="contained">
                {" "}
                Forgot Password?
              </Button>

              <Button
                className={styles.btn}
                variant="contained"
                onClick={handleSignIn}
              >
                {" "}
                Sign In{" "}
              </Button>

              <span>
                Don't have an account ?? <Link to={"/register"}>Sign Up</Link>
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
