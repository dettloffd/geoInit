import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarAlert = (props) => {
  //const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.onClose(false);
  };

  return (
    // <Stack spacing={2} sx={{ width: '100%' }}>
        <Box>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.isGameWon ? "success" : "error"} sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      </Box>
      // <Alert severity="error">This is an error message!</Alert>
      //<Alert severity="warning">This is a warning message!</Alert>
      //<Alert severity="info">This is an information message!</Alert>
      //<Alert severity="success">This is a success message!</Alert>
    //</Stack>
  );
}

export default SnackbarAlert;