import React from "react";
import Style from "./Register.module.scss";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import joi from "joi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [details, setDetails] = React.useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    DOB: "",
  });
  const navigate = useNavigate();
  return (
    <form className={Style.root}>
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
        onClick={(e) => {
          e.preventDefault();
          validation(details, navigate);
        }}
      >
        Next
      </Button>
      <ToastContainer />
    </form>
  );
};

const validation = (data, navigate) => {
  const notify = () => toast.error("Something went wrong!");
  const schema = joi.object({
    name: joi.string().min(1).max(30).required(),
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: joi.string().required(),
    phone: joi.number().min(10).required(),
    DOB: joi.date().required(),
  });
  schema
    .validateAsync(data)
    .then((res) => {
      const user = JSON.parse(localStorage.getItem("users"));
      if (user !== null) {
        user.forEach((element) => {
          if (element.email === data.email) {
            alert("This email is already registered!");
            return -1;
          }
        });
      }
    })
    .then(async (res) => {
      const value = [data];
      localStorage.setItem("users", JSON.stringify([...value]));
      await axios.post("https://twitterback.onrender.com/api/create", {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
      });
      navigate("/login");
    })
    .catch((err) => {
      notify();
    });
};

export default Register;
