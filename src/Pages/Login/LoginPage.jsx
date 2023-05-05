import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import TwitterIcon from "@mui/icons-material/Twitter";
import React, { useState } from "react";
import Style from "./LoginPage.module.scss";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import axios from "axios";
const Login = () => {
  const [open, setOpen] = React.useState(true);
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  return (
    <div>
      <Dialog
        open={open}
        PaperProps={{
          sx: {
            height: "80%",
            padding: "0rem 1rem 1rem 1rem",
            borderRadius: "1.5rem",
            minWidth: "40%",
            position: "relative",
          },
        }}
      >
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ position: "absolute", top: "1rem", left: "1rem" }}
          >
            <CloseIcon sx={{ color: "black" }} />
          </Button>
        </DialogActions>
        <DialogContent>
          <form
            className={Style.root}
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .post("https://twitterback.onrender.com/api/login", details)
                .then((res) => localStorage.setItem("login", res.data))
                .then(() => {
                  navigate("/home");
                })
                .catch((err) => alert(err.response.data));
            }}
          >
            <TwitterIcon
              sx={{ color: `#42a5f5`, fontSize: "2rem", alignSelf: "center" }}
            />
            <Typography
              variant="h4"
              sx={{ alignSelf: "center", fontWeight: "bold" }}
            >
              Sign in to Twitter
            </Typography>
            <Button
              sx={{
                backgroundColor: "white",
                borderRadius: "5rem",
                alignSelf: "center",
                textTransform: "none",
              }}
              variant="outlined"
            >
              <FcGoogle size={20} />
              &nbsp;Sign in with Google
            </Button>
            <Button
              sx={{
                backgroundColor: "white",
                borderRadius: "5rem",
                alignSelf: "center",
                textTransform: "none",
              }}
              variant="outlined"
            >
              <ImAppleinc size={20} />
              &nbsp;Sign in with Apple
            </Button>
            <TextField
              id="outlined-basic"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
              sx={{
                width: "50%",
                alignSelf: "center",
              }}
            />
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              name="password"
              variant="outlined"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
              sx={{
                width: "50%",
                alignSelf: "center",
              }}
            />
            {error && <Alert severity="error">{error}</Alert>}
            <Button
              type="submit"
              variant="contained"
              className={Style.submit}
              sx={{
                width: "50%",
                alignSelf: "center",
                textTransform: "none",
              }}
            >
              Submit
            </Button>
            <Button
              type="submit"
              variant="outlined"
              className={Style.submit}
              onClick={(e) => {
                e.preventDefault();
              }}
              sx={{
                width: "50%",
                alignSelf: "center",
                textTransform: "none",
              }}
            >
              Forgot password
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
