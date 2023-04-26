import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Register from "../Pages/Register";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import RegisterFront from "./RegisterFront";
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
      <Dialog
        open={open}
        PaperProps={{
          sx: {
            height: "80%",
            padding: "0rem 1rem 1rem 1rem",
            borderRadius: "1.5rem",
            minWidth: "40%",
          },
        }}
      >
        <DialogContent>
          <DialogActions
            sx={{
              float: "left",
              width: "1.2rem",
            }}
          >
            <Button
              sx={{ display: "inline-block", height: "5rem" }}
              onClick={handleClose}
            >
              <CloseIcon sx={{ color: "black" }} />
            </Button>
          </DialogActions>
          {click ? (
            <RegisterFront click={click} setClick={setClick} />
          ) : (
            <>
              <DialogTitle>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Create your account
                </Typography>
              </DialogTitle>
              <Register />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
