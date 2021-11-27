import { React, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { Box, ThemeProvider, createTheme, grid } from "@mui/system";

// import PersonIcon from '@mui/icons-material/Person';
// import AddIcon from '@mui/icons-material/Add';
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

//import { GlobalState } from "./GlobalState.js";

import { GlobalState } from "../GlobalState.js";
import RegionSelectorMap from "../RegionSelectorMap.js";
import { countriesByRegionArray  } from "../countries";

//const emails = ['username@gmail.com', 'user02@gmail.com'];
const regionNames = [
  "Americas",
  "South America",
  "North America",
  "Africa",
  "Asia",
  "Eastern Asia",
  "Western Asia",
  "Middle East",
  "Europe",
  "Eastern Europe",
];

export default function RegionSelectorPopup(props) {
  const { onClose, selectedValue, open } = props;
  const [mousedOverRegion, setMousedOverRegion] = useState("");

  const [mousedOverRegionCountries, setMousedOverRegionCountries] = useState("");

  const {
    gameState,
    setGameState,
    constructArray,
    handleFlagClick,
    setDifficulty,
    changeRegion,
    chooseRegion,
  } = useContext(GlobalState);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleRegionChoice = (regionChoice) => {
    chooseRegion(regionChoice);
    onClose();
  };

  const mouseOverRegionEvent = (region) => {
    setMousedOverRegion(region);
    //countriesByRegionArray("Middle East")
    setMousedOverRegionCountries(countriesByRegionArray(region));
  };

  console.log(mousedOverRegion);
  console.log(mousedOverRegionCountries);

  return (
    <Dialog
      // sx={{
      //   "& .MuiDialog-container": {
      //     justifyContent: "flex-start",
      //     alignItems: "flex-start",
      //     minWidth: "90%"
      //   }
      // }}
      //sx={{ "& .MuiDialog-container": { minWidth: "50%", maxHeight: "90%", maxWidth: "90%", borderBlock: "solid", backgroundColor: "red", display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'} }}
      sx={{
        "& .MuiDialog-paper": {
          minWidth: "50%",
          maxHeight: "100%",
          minHeight: "50%",
          borderBlock: "solid",
          display: "grid",
          gridTemplateColumns: " 1fr 4fr",
        },
      }}
      //sx={{ "& .MuiDialog-paper": { minWidth: "100%", maxHeight: "100%", minHeight: "100%", borderBlock: "solid", backgroundColor: "red", display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'} }}

      //sx={{ "& .MuiDialog-paper": { minWidth: "50%", maxHeight: "50%", maxWidth: "50%", borderBlock: "solid" } }}
      //sx={{ "& .MuiPaper-rounded": { minWidth: "90%", maxHeight: 500 } }}
      //sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}

      onClose={handleClose}
      open={open}

      //PaperProps={{ sx: { width: "30%", height: "100%" } }}
    >
      {/* <DialogTitle>Set backup account</DialogTitle> */}

      <List
        sx={{
          display: "grid",
          p: 1,
          bgcolor: "primary.main",
          borderRadius: 1,
          color: "white",
        }}
      >
        {regionNames.map((region) => (
          <ListItem
            button
            onClick={() => handleRegionChoice(region)}
            onMouseEnter={() => mouseOverRegionEvent(region)}
            key={region}
          >
            {region}

            {/* <Button onClick={() => handleRegionChoice(region)} key={region}>{region}</Button> */}
            {/* <Button onClick={() => handleRegionChoice(region)} key={region}>{region}</Button> */}
          </ListItem>
        ))}
      </List>

      <RegionSelectorMap mousedOverRegionCountries={mousedOverRegionCountries} regionMousedOver={mousedOverRegion}></RegionSelectorMap>
      {/* <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List> */}
    </Dialog>
  );
}

// RegionSelectorPopup.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };
