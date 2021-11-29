import { Grid, Box, AppBar, Typography } from "@mui/material";
import { React, useState, useContext } from "react";

import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import { GlobalState } from "./GlobalState.js";

const HeaderMenu = (props) => {
  const { setDifficulty, fullReset } = useContext(GlobalState);
  //console.log(props);
  const [anchorElem, setAnchorElem] = useState(null);
  const openMenu = Boolean(anchorElem);
  const handleDifficultyClose = () => {
    setAnchorElem(null);
  };

  const handleDifficultyClick = (e) => {
    setAnchorElem(e.currentTarget);
  };

  const handleDifficultySelection = (difficulty) => {
    setDifficulty(difficulty);
    fullReset();
    handleDifficultyClose();
  };


  let percentageRight = (
    (props.numCorrect / (props.numCorrect + props.numIncorrect)) *
    100
  ).toFixed(0);
  let percentageWrong = (
    (props.numIncorrect / (props.numCorrect + props.numIncorrect)) *
    100
  ).toFixed(0);

  function displayPercent(x){
      if (isNaN(x)){
          return 0;
      }
      return x;

  }

  return (
    <AppBar
      sx={{ backgroundColor: "primary", minHeight: 120 }}
      elevation={5}
      position="static"
    >
      <Toolbar>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "50%",
          }}
        >
          <Button
            variant="contained"
            color="inherit"
            onClick={props.handleOpenRegionSelector}
          >
            Open Region Dialog
          </Button>
          <Button
            color="inherit"
            aria-controls="difficulty"
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleDifficultyClick}
          >
            Difficulty
          </Button>
          <Menu
            id="difficulty"
            anchorEl={anchorElem}
            open={openMenu}
            onClose={handleDifficultyClose}
          >
            <MenuItem
              value={3}
              onClick={(e) => handleDifficultySelection(e.target.value)}
            >
              Easy
            </MenuItem>
            <MenuItem
              value={5}
              onClick={(e) => handleDifficultySelection(e.target.value)}
            >
              Normal
            </MenuItem>
            <MenuItem
              value={8}
              onClick={(e) => handleDifficultySelection(e.target.value)}
            >
              Hard
            </MenuItem>
          </Menu>
          {/* <Button variant="outlined" onClick={handleClickOpen}>
            Open Region Dialog
          </Button> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "50%",
          }}
        >
            <Box>
          <CheckCircleOutlineTwoToneIcon fontSize="large"></CheckCircleOutlineTwoToneIcon>
          {props.numCorrect}/{props.numIncorrect + props.numCorrect}
          {"(" + displayPercent(percentageRight) + "%)"}</Box>
          

          <Box>
          <CheckCircleOutlineTwoToneIcon fontSize="large"></CheckCircleOutlineTwoToneIcon>
          {props.numIncorrect}/{props.numIncorrect + props.numCorrect}{" "}
          {"(" + displayPercent(percentageWrong) + "%)"}</Box>

          <Box>nutting</Box>


        </Box>
      </Toolbar>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography variant="h4">{props.hoveredOverFlagName}</Typography>
        </Box>
      </Toolbar>

    </AppBar>
  );
};

export default HeaderMenu;
