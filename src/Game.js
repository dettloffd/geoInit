//import React, { useState } from "react";
import { React, useState, useEffect, useContext, forwardRef } from "react";
import { randomCountry, countriesByRegionArray } from "./countries.js";
import { GlobalState } from "./GlobalState.js";
import "./Game.css";

//import { GlobalProvider } from "./GlobalState.js";
import { v4 as uuidv4 } from "uuid";
//import { uuid } from 'uuidv4';
//import uuid from 'uuid/v4';
//import { randomCountry } from "./countries.js";
import FlagCard from "./FlagCard.js";
import RegionSelectorPopup from "./UIcomponents/RegionSelectorPopup.js";

//import ButtonsRow from "./ButtonsRow.js";
import "./Game.css";
//import uuid from "uuid/v4";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Fab from "@mui/material/Fab";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

import ReactTooltip from "react-tooltip";
import MapTing from "./MapTing.js";
import HeaderMenu from "./HeaderMenu.js";
import SnackbarAlert from "./SnackbarAlert.js";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

// import "./Game.css";

const easy = 3;
const normal = 5;
const hard = 8;

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Game = () => {
  const [content, setContent] = useState("");
  const [hoveredOverFlagName, setHoveredOverFlagName] = useState("");
  const [openRegionSelector, setOpenRegionSelector] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarState((prevState) => ({
      ...prevState,

      openSnackbar: false,
    }));
  };

  function TransitionRight(props) {
    return <Slide {...props} direction="down" />;
  }

  const handleOpenRegionSelector = () => {
    setOpenRegionSelector(true);
  };

  const handleClose = () => {
    setOpenRegionSelector(false);
    //setSelectedValue(value);
  };

  const displayHoveredOverFlag = (hoveredOver) => {
    setHoveredOverFlagName(hoveredOver);
  };

  const {
    gameState,
    setGameState,
    constructArray,
    handleFlagClick,
    setDifficulty,
    fullReset,
    continueGame,
    scoreState,
    snackbarState,
    setSnackbarState,
  } = useContext(GlobalState);
  //const [flags, setFlags] = useState([]);
  //const [pickedCountry, setPickedCountry] = useState("");

  console.log(gameState);

  useEffect(() => {
    constructArray();
    setHoveredOverFlagName("");
  }, [gameState.difficulty, gameState.someCoords, gameState.chosenRegion]);

  const resetGame = () => {
    fullReset();
    setHoveredOverFlagName("");

    //constructArray();
  };

  const keepPlaying = () => {
    continueGame();
    setHoveredOverFlagName("");
  };

  const changeRegion = () => {
    setGameState((prevState) => ({
      ...prevState,
      chosenRegion: "Asia",
    }));
    constructArray();
  };

  const showstate = () => {
    console.log(gameState);
  };

  const generateCards = () => {
    return (
      <Box
        //maxWidth="10%"
        maxWidth={gameState.difficulty == 8 ? "7.5%" : "10%"}
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {gameState.flags.map((flag) => (
          <Box>
            <FlagCard
              key={flag.id}
              countryName={flag.name}
              flagImage={flag.src}
              handleFlagClick={handleFlagClick}
              isClicked={flag.isClicked}
              displayHoveredOverFlag={displayHoveredOverFlag}
              pickedCountry={gameState.pickedCountry}
            />
          </Box>
        ))}
      </Box>
      // </Grid>
    );
  };

  let cards = generateCards();

  const something = () => {
    return (
      <Snackbar
        open={snackbarState.openSnackbar}
        autoHideDuration={1500}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ width: "30%", height: "20%" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarState.severity}
          sx={{ width: "100%" }}
        >
          {snackbarState.severity == "success" ? "Correct!" : "Try again!"}
        </Alert>
      </Snackbar>
    );
  };
  let mysnack = something();

  return (
    <>
      <HeaderMenu
        handleOpenRegionSelector={handleOpenRegionSelector}
        handleResetButton={fullReset}
        hoveredOverFlagName={hoveredOverFlagName}
        numCorrect={gameState.correctChoices}
        numIncorrect={gameState.incorrectChoices}
        streak={gameState.streakCounter}
      >
        {/* <HeaderMenu handleOpenRegionSelector={() => handleOpenRegionSelector()}> */}
      </HeaderMenu>
      <Container
        sx={{ display: "flex", flexDirection: "column", minWidth: "70%" }}
      >
        {/* <SnackbarAlert open={snackbarState.openSnackbar} onClose={handleCloseSnackbar} messageType={snackbarState.severity}></SnackbarAlert> */}
        {/* {scoreState.incorrectChoices} */}
        <RegionSelectorPopup open={openRegionSelector} onClose={handleClose} />
        {/* <Grid border={"5px dashed grey"} container xs={9} spacing={2}> */}
        {/* <Button onClick={keepPlaying}>Keep Playing</Button> */}
        {mysnack}

        <Box display="flex" justifyContent="space-around">
          {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button variant="contained">clicky</Button>
            <Button variant="contained">clicky</Button>
            <Button variant="contained">cliiiiiiiiicky</Button>
            <CheckCircleOutlineTwoToneIcon fontSize="large"></CheckCircleOutlineTwoToneIcon>
            {gameState.correctChoices}
          </Box> */}

          <Box className="mapTest" minWidth="85%">
          {/* <Fab
          className="continue-fab"
          size="large"
          //color="primary"
          //aria-label="add"
          variant="extended"
          onClick={keepPlaying}
          
          
          sx={{position: "absolute", left: '0', right: '0', margin: "auto", width: '300px', backgroundColor: "#96D294" }}
        >
          Continue Playing?
        </Fab> */}
            {gameState.isWon == true ? (
          <Fab
          className="continue-fab"
          size="large"
          //color="primary"
          //aria-label="add"
          variant="extended"
          onClick={keepPlaying}
          
          
          sx={{position: "absolute", left: '0', right: '0', margin: "auto", width: '300px', backgroundColor: "#54a858" }}
        >
          Continue Playing?
        </Fab>
            ) : null}

            <MapTing
              setTooltipContent={setContent}
              someCoords={gameState.someCoords}
              regionSettings={gameState.chosenRegion}
              pickedCountry={gameState.pickedCountry}
              hoveredOverFlagName={hoveredOverFlagName}
            />

            <ReactTooltip>{content}</ReactTooltip>
          </Box>

          {cards}
        </Box>
        {/* <button onClick={() => setOpenPopup(true)}>launch modal</button> */}
        {/* <button onClick={resetGame}>reset</button> */}
      </Container>
    </>
  );
};

export default Game;
