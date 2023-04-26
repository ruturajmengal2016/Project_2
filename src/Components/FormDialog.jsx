import * as React from "react";
import Button from "@mui/material/Button";
import DialogBox from "./DialogBox";
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [click, setClick] = React.useState(true);

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
        onClick={handleClickOpen}
        sx={{
          borderRadius: "5rem",
          boxShadow: "none",
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
      />
    </div>
  );
}
