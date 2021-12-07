import { React, useState, useEffect, useContext, forwardRef } from "react";
import { GlobalState } from "./GlobalState.js";
import "./Game.css";
//import { v4 as uuidv4 } from "uuid";
import FlagCard from "./FlagCard.js";
import RegionSelectorPopup from "./UIcomponents/RegionSelectorPopup.js";
import "./Game.css";
import Fab from "@mui/material/Fab";

import Box from "@mui/material/Box";
import { Container } from "@mui/material";

import ReactTooltip from "react-tooltip";
import MapTing from "./MapTing.js";
import HeaderMenu from "./HeaderMenu.js";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

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

  const handleOpenRegionSelector = () => {
    setOpenRegionSelector(true);
  };

  const handleClose = () => {
    setOpenRegionSelector(false);
  };

  const displayHoveredOverFlag = (hoveredOver) => {
    setHoveredOverFlagName(hoveredOver);
  };

  const {
    gameState,
    constructArray,
    handleFlagClick,
    fullReset,
    continueGame,
    snackbarState,
    setSnackbarState,
  } = useContext(GlobalState);

  useEffect(() => {
    constructArray();
    setHoveredOverFlagName("");
  }, [gameState.difficulty, gameState.someCoords, gameState.chosenRegion]);

  const keepPlaying = () => {
    continueGame();
    setHoveredOverFlagName("");
  };

  const generateCards = () => {
    return (
      <Box
        maxWidth={gameState.difficulty === 8 ? "7.5%" : "10%"}
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
    );
  };

  let cards = generateCards();

  const generateSnackbar = () => {
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
          {snackbarState.severity === "success" ? "Correct!" : "Try again!"}
        </Alert>
      </Snackbar>
    );
  };
  let mysnack = generateSnackbar();

  return (
    <>
      <HeaderMenu
        handleOpenRegionSelector={handleOpenRegionSelector}
        handleResetButton={fullReset}
        hoveredOverFlagName={hoveredOverFlagName}
        numCorrect={gameState.correctChoices}
        numIncorrect={gameState.incorrectChoices}
        streak={gameState.streakCounter}
      ></HeaderMenu>
      <Container
        sx={{ display: "flex", flexDirection: "column", minWidth: "70%" }}
      >
        <RegionSelectorPopup open={openRegionSelector} onClose={handleClose} />

        {mysnack}

        <Box display="flex" justifyContent="space-around">
          <Box className="mapTest" minWidth="80%">
            {gameState.isWon === true ? (
              <Fab
                className="continue-fab"
                size="large"
                variant="extended"
                onClick={keepPlaying}
                sx={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  margin: "auto",
                  width: "300px",
                  backgroundColor: "#54a858",
                }}
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
      </Container>
    </>
  );
};

export default Game;
