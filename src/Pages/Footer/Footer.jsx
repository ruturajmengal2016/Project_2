import React from "react";
import Style from "../Footer/Footer.module.scss";
import Box from "@mui/material/Box";
import FormDialog from "../../Components/FormDialog";
import Typography from "@mui/material/Typography";
const Footer = () => {
  return (
    <Box
      className={Style.root}
      sx={{
        backgroundColor: "primary.dark",
      }}
    >
      <div className={Style.text}>
        <Typography variant="h5">Don’t miss what’s happening</Typography>
        <Typography variant="caption" fontSize={15}>People on Twitter are the first to know.</Typography>
      </div>
      <div>
        <FormDialog />
      </div>
    </Box>
  );
};

export default Footer;
