import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Register from "../Pages/Register/Register";
import RegisterFront from "./RegisterFront";
const DialogBox = ({open,handleClose,click,setClick}) => {
  return (
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
  )
}

export default DialogBox
