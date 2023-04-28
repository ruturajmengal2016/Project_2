import React from "react";
import Style from "./Register.module.scss";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addData, setData } from "../../Redux/slice";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import joi from "joi";
const Register = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  //   localStorage.clear()
  // localStorage.setItem("users", JSON.stringify(selector));
  return (
    <form className={Style.root}>
      <TextField
        id="outlined-basic"
        label="Name"
        name="name"
        variant="outlined"
        onChange={(e) => {
          dispatch(setData({ text: e.target.value, name: e.target.name }));
        }}
      />
      <TextField
        id="outlined-basic"
        name="email"
        type="email"
        label="Email"
        variant="outlined"
        onChange={(e) => {
          dispatch(setData({ text: e.target.value, name: e.target.name }));
        }}
      />
      <TextField
        id="outlined-basic"
        name="password"
        type="password"
        label="Password"
        variant="outlined"
        onChange={(e) => {
          dispatch(setData({ text: e.target.value, name: e.target.name }));
        }}
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        name="phone"
        variant="outlined"
        onChange={(e) => {
          dispatch(setData({ text: e.target.value, name: e.target.name }));
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
        id="outlined-basic"
        name="DOB"
        type="date"
        variant="outlined"
        onChange={(e) => {
          dispatch(setData({ text: e.target.value, name: e.target.name }));
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
          dispatch(addData());
          validation(selector, navigate);
        }}
      >
        Next
      </Button>
    </form>
  );
};

const validation = (data, navigate) => {
  console.log(data);
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
      navigate("/login");
    })
    .catch((err) => {
      alert(err);
    });
};

export default Register;
