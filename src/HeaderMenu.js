import { Box, AppBar, Typography } from "@mui/material";
import { React, useState, useContext } from "react";

import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import { GlobalState } from "./GlobalState.js";

const HeaderMenu = (props) => {
  const { setDifficulty, fullReset } = useContext(GlobalState);
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

  function displayPercent(x) {
    if (isNaN(x)) {
      return 0;
    }
    return x;
  }

  return (
    <AppBar elevation={5} position="static">
      <Toolbar>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "50%",
            margin: "15px",
          }}
        >
          <Tooltip title="Restart game - resets all points and streaks to 0!">
            <Button
              sx={{ margin: "10px" }}
              variant="contained"
              onClick={props.handleResetButton}
              color="error"
            >
              Reset Game
            </Button>
          </Tooltip>
          <Button
            sx={{ backgroundColor: "green", margin: "10px" }}
            variant="contained"
            onClick={props.handleOpenRegionSelector}
          >
            Region Selector
          </Button>
          <Button
            sx={{ margin: "10px" }}
            variant="contained"
            color="secondary"
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
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <Tooltip title="Number/Percent of correct choices this game!">
            <Box
              sx={{
                padding: "5px",
                marginRight: "2rem",
              }}
            >
              <CheckCircleOutlineTwoToneIcon
                fontSize="large"
                sx={{
                  color: "lime",
                  padding: "5px",
                }}
              ></CheckCircleOutlineTwoToneIcon>

              <Typography variant="h5">
                {props.numCorrect}/{props.numIncorrect + props.numCorrect}
                {"(" + displayPercent(percentageRight) + "%)"}
              </Typography>
            </Box>
          </Tooltip>

          <Tooltip title="Number/Percent of incorrect choices this game!">
            <Box
              sx={{
                padding: "5px",
                marginRight: "2rem",
              }}
            >
              <DangerousOutlinedIcon
                fontSize="large"
                sx={{
                  color: "red",
                  padding: "5px",
                }}
              ></DangerousOutlinedIcon>
              <Typography variant="h5">
                {props.numIncorrect}/{props.numIncorrect + props.numCorrect}{" "}
                {"(" + displayPercent(percentageWrong) + "%)"}
              </Typography>
            </Box>
          </Tooltip>

          <Tooltip title="Number of correct guesses in a row!">
            <Box
              sx={{
                padding: "5px",
                marginRight: "2rem",
              }}
            >
              <LocalFireDepartmentOutlinedIcon
                fontSize="large"
                sx={{
                  color: "orange",
                  padding: "5px",
                }}
              >
                {" "}
              </LocalFireDepartmentOutlinedIcon>
              <Typography variant="h5">{props.streak}</Typography>
            </Box>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMenu;
