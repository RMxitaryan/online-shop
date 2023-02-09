import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarFailed({ handleCloseSnackbarFailed }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    handleCloseSnackbarFailed();
  };
  return (
    <>
      <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          please select name or price or file
        </Alert>
      </Snackbar>
    </>
  );
}
