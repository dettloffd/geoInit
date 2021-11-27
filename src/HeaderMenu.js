import { Grid, Box, AppBar, Typography } from "@mui/material";
import { React, useState, useContext } from "react";

import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import { GlobalState } from "./GlobalState.js";

const HeaderMenu = (props) => {
  const { gameState, setGameState, handleFlagClick, setDifficulty } =
    useContext(GlobalState);
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
    handleDifficultyClose();
  };

  return (
    <AppBar sx={{ backgroundColor: "primary" }} elevation={5} position="static">
      <Toolbar>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
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
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Typography>Shtee</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMenu;
