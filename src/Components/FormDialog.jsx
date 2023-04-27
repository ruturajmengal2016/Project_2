import * as React from "react";
import Button from "@mui/material/Button";
import { DialogBox } from "./DialogBox";
import Register from "../Pages/Register/Register";
import { useNavigate } from "react-router-dom";
import RegisterFront from "./RegisterFront";
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [click, setClick] = React.useState(true);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/login");
        }}
        sx={{
          borderRadius: "5rem",
          boxShadow: "none",
          textTransform: "none",
          fontWeight:"bold",
          "&:hover": {
            boxShadow: "none",
          },
        }}
      >
        Log in
      </Button>
      &nbsp;
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "rgba(255,255,255,1.00)",
          borderRadius: "5rem",
          textTransform: "none",
          fontWeight:"bold",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,1.00)",
          },
        }}
      >
        Sign up
      </Button>
      <DialogBox
        open={open}
        handleClose={handleClose}
        click={click}
        setClick={setClick}
        element={{ Register, RegisterFront }}
        title="Create your account"
      />
    </div>
  );
}
