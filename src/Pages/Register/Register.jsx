import React from "react";
import Style from "./Register.module.scss";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const navigate = useNavigate();
  const [details, setDetails] = React.useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    DOB: "",
  });
  return (
    <form
      method="post"
      className={Style.root}
      onSubmit={async (e) => {
        e.preventDefault();
        await axios
          .post("http://localhost:5500/api/create", details)
          .then((res) => alert(res.data))
          .then(() => localStorage.setItem("users", JSON.stringify(details)))
          .then(() => {
            navigate("/login");
          })
          .catch((error) => alert(error.response.data));
      }}
    >
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        onChange={(e) => {
          setDetails({ ...details, [e.target.name]: e.target.value });
        }}
      />
      <TextField
        name="email"
        type="email"
        label="Email"
        variant="outlined"
        onChange={(e) => {
          setDetails({ ...details, [e.target.name]: e.target.value });
        }}
      />
      <TextField
        name="password"
        type="password"
        label="Password"
        variant="outlined"
        onChange={(e) => {
          setDetails({ ...details, [e.target.name]: e.target.value });
        }}
      />
      <TextField
        label="Phone"
        name="phone"
        type="text"
        variant="outlined"
        onChange={(e) => {
          setDetails({ ...details, [e.target.name]: e.target.value });
        }}
      />
      <Typography variant="caption">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Date of birth
        </Typography>
        This will not be shown publicly. Confirm your own age, even if this
        account is for a business, a pet, or something else.
      </Typography>
      <TextField
        name="DOB"
        type="date"
        variant="outlined"
        onChange={(e) => {
          setDetails({ ...details, [e.target.name]: e.target.value });
        }}
      />
      <Button
        type="submit"
        variant="contained"
        className={Style.submit}
        sx={{
          textTransform: "none",
        }}
      >
        Next
      </Button>
      <ToastContainer />
    </form>
  );
};

export default Register;
