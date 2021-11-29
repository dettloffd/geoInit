//import React, { useState } from "react";
import { React, useState, useEffect, useContext, forwardRef } from "react";
import { randomCountry, countriesByRegionArray } from "./countries.js";
import { GlobalState } from "./GlobalState.js";
//import { GlobalProvider } from "./GlobalState.js";
import { v4 as uuidv4 } from "uuid";
//import { uuid } from 'uuidv4';
//import uuid from 'uuid/v4';
//import { randomCountry } from "./countries.js";
import FlagCard from "./FlagCard.js";
import RegionSelectorPopup from "./UIcomponents/RegionSelectorPopup.js";

//import ButtonsRow from "./ButtonsRow.js";
//import "./Game.css";
//import uuid from "uuid/v4";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ReactTooltip from "react-tooltip";
import MapTing from "./MapTing.js";
import HeaderMenu from "./HeaderMenu.js";
import SnackbarAlert from "./SnackbarAlert.js";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Slide from '@mui/material/Slide';


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
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarState((prevState) => ({
      ...prevState,
      
      openSnackbar: false
    }))
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
    setSnackbarState
  } = useContext(GlobalState);
  //const [flags, setFlags] = useState([]);
  //const [pickedCountry, setPickedCountry] = useState("");

  console.log(gameState);

  useEffect(() => {
    constructArray();
    setHoveredOverFlagName("");
  }, [gameState.difficulty, gameState.someCoords, gameState.chosenRegion]);

  // useEffect(() => {
  //   something();
  // }, [snackbarState.severity]);

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
      <div border={"5px dashed grey"}>
        {gameState.flags.map((flag) => (
          <Grid item xs={8}>
            <FlagCard
              key={flag.id}
              countryName={flag.name}
              flagImage={flag.src}
              handleFlagClick={handleFlagClick}
              isClicked={flag.isClicked}
              displayHoveredOverFlag={displayHoveredOverFlag}
              pickedCountry={gameState.pickedCountry}
            />
          </Grid>
        ))}
      </div>
      // </Grid>
    );
  };

  let cards = generateCards();

  const setNewCoords = () => {
    setGameState((prevState) => ({
      ...prevState,
      someCoords: [50, 50],
    }));
  };

  
  const something = () => {
    return (
      <Snackbar open={snackbarState.openSnackbar} autoHideDuration={1500} onClose={handleSnackbarClose}>
        <Alert onClose={handleClose} severity={snackbarState.severity} sx={{ width: '100%' }}>{snackbarState.severity == "success" ? 'okay cool' : 'nuh bruh'}</Alert>
      </Snackbar>
    );
  };
  let mysnack = something();

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="mainDiv"

        //maxHeight={'80vh'}
      >
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Open Region Dialog
        </Button> */}
        Streak: {gameState.streakCounter}
        <br />
        Correct this game: {gameState.correctChoices}
        <br />
        Incorrect this game: {gameState.incorrectChoices}
        <br />
        Incorrect this round: {gameState.thisRoundIncorrect}
        <Button onClick={keepPlaying}>Keep Playing</Button>
        
        <Grid item width="75%" xs={8}>
          <HeaderMenu
            handleOpenRegionSelector={handleOpenRegionSelector}
            hoveredOverFlagName={hoveredOverFlagName}
            numCorrect={gameState.correctChoices}
            numIncorrect={gameState.incorrectChoices}
            
          >
            {/* <HeaderMenu handleOpenRegionSelector={() => handleOpenRegionSelector()}> */}
          </HeaderMenu>

          {/* <SnackbarAlert open={snackbarState.openSnackbar} onClose={handleCloseSnackbar} messageType={snackbarState.severity}></SnackbarAlert> */}
        </Grid>
        {/* {scoreState.incorrectChoices} */}
        <RegionSelectorPopup open={openRegionSelector} onClose={handleClose} />
        {/* <Grid border={"5px dashed grey"} container xs={9} spacing={2}> */}
        
        <Grid container xs={8} spacing={2}>
        {mysnack}
          <Grid item xs={10} className="mapTest">
            <MapTing
              setTooltipContent={setContent}
              someCoords={gameState.someCoords}
              regionSettings={gameState.chosenRegion}
              pickedCountry={gameState.pickedCountry}
            />

            <ReactTooltip>{content}</ReactTooltip>
          </Grid>
          <Grid
            container
            direction={"row"}
            //justifyContent={'center'}
            //overflow={"hidden"}
            xs={2}
            //maxHeight={"100%"}
            className="flagDock"
            alignItems="center"
            justifyContent="space-between"
          >
            {cards}
          </Grid>

          {/* <button onClick={() => setOpenPopup(true)}>launch modal</button> */}
        </Grid>
        <button onClick={resetGame}>reset</button>

      </Grid>
    </>
  );
};

export default Game;
