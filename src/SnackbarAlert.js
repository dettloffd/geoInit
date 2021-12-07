import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarAlert = (props) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    props.onClose(false);
  };

  return (
    <Box>
      <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={props.isGameWon ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SnackbarAlert;
