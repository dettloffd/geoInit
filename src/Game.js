//import React, { useState } from "react";
import { React, useState, useEffect, useContext } from "react";
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
// import "./Game.css";

const easy = 3;
const normal = 5;
const hard = 8;

const Game = () => {
  const [content, setContent] = useState("");


  const [openRegionSelector, setOpenRegionSelector] = useState(false);


  const handleOpenRegionSelector = () => {
    setOpenRegionSelector(true);
  }

  const [anchorElem, setAnchorElem] = useState(null);
  
  const handleDifficultyClick = (e) => {
    setAnchorElem(e.currentTarget);
  }


  const handleClose = () => {
    setOpenRegionSelector(false);
    //setSelectedValue(value);
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
  } = useContext(GlobalState);
  //const [flags, setFlags] = useState([]);
  //const [pickedCountry, setPickedCountry] = useState("");

  console.log(gameState);

  useEffect(() => {
    constructArray();
  }, [gameState.difficulty, gameState.someCoords, gameState.chosenRegion]);

  const resetGame = () => {
    fullReset();

    //constructArray();
  };

  const keepPlaying = () => {
    continueGame();
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

  //  const generateCards = () => {
  // return (
  //   <Grid container direction="column" className="someFlagCards">
  //     {gameState.flags.map((flag) => (
  //       <Grid item xs={1} sx={{backgroundColor: 'blue', backgroundSize: 'contain'}}>
  //       <FlagCard
  //         key={flag.id}
  //         countryName={flag.name}
  //         flagImage={flag.src}
  //         // isPicked={this.isPicked(flag)}
  //         handleFlagClick={handleFlagClick}
  //         isClicked={flag.isClicked}
  //         // gameState={this.gameState}
  //       />
  //       </Grid>
  //     ))}
  //   </Grid>
  // );
  //  };

  // const generateCards = () => {
  //   return (
  //     <List
  //     sx={{
  //       display: "grid",
  //       //direction: "row",
  //       //gridTemplateColumns: "1fr",

  //       p: 1,
  //       bgcolor: "primary.main",
  //       borderRadius: 1,
  //       color: "white",
  //     }}>
  //       {gameState.flags.map((flag) => (
  //         <ListItem
  //         sx={{

  //           border: '5px dashed grey'
  //         }}>
  //           <FlagCard
  //             key={flag.id}
  //             countryName={flag.name}
  //             flagImage={flag.src}
  //             // isPicked={this.isPicked(flag)}
  //             handleFlagClick={handleFlagClick}
  //             isClicked={flag.isClicked}
  //             // gameState={this.gameState}
  //           />
  //          </ListItem>
  //       ))}
  //     </List>
  //   );
  // };

  const generateCards = () => {
    return (
      //   <Grid
      //   container
      //   // overflow={"hidden"}
      //   xs={10}
      //   maxHeight={"50%"}
      //   className="flagDock"
      // >
      <div border={"5px dashed grey"}>
        {gameState.flags.map((flag) => (
          <Grid
            item
            // justifyContent={'center'}
            // alignContent={'center'}
            // alignItems={'center'}
            // align
            xs={8}
          >
            <FlagCard
              key={flag.id}
              countryName={flag.name}
              flagImage={flag.src}
              // isPicked={this.isPicked(flag)}
              handleFlagClick={handleFlagClick}
              isClicked={flag.isClicked}
              // gameState={this.gameState}
            />
          </Grid>
        ))}
      </div>
      // </Grid>
    );
  };

  // <FlagCard
  //   key={flag.id}
  //   countryName={flag.name}
  //   flagImage={flag.src}
  //   // isPicked={this.isPicked(flag)}
  //   handleFlagClick={handleFlagClick}
  //   isClicked={flag.isClicked}
  //   // gameState={this.gameState}
  // />

  // const generateCards = () => {
  //   return (
  //     <Grid container direction="column" xs={1} className="flagDock">
  //       {gameState.flags.map((flag) => (
  //         <Grid item xs={2} sx={{backgroundColor: 'blue'}}>
  //         <FlagCard
  //           key={flag.id}
  //           countryName={flag.name}
  //           flagImage={flag.src}
  //           // isPicked={this.isPicked(flag)}
  //           handleFlagClick={handleFlagClick}
  //           isClicked={flag.isClicked}

  //           // gameState={this.gameState}
  //         />
  //         </Grid>
  //       ))}
  //     </Grid>
  //   );
  // };

  let cards = generateCards();

  const setNewCoords = () => {
    setGameState((prevState) => ({
      ...prevState,
      someCoords: [50, 50],
    }));
  };

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
        <div>nutttinggg</div>
        <Grid item width="75%" xs={8}>
          <HeaderMenu handleOpenRegionSelector={handleOpenRegionSelector}>
          {/* <HeaderMenu handleOpenRegionSelector={() => handleOpenRegionSelector()}> */}

          </HeaderMenu>
          {/* <AppBar
            sx={{ backgroundColor: "primary" }}
            elevation={5}
            position="static"
          >
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
                  onClick={handleClickOpen}
                >
                  Open Region Dialog
                </Button>
                <Button
                  color="inherit"
                  aria-controls="difficulty"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={handleDifficultyClick}
                >
                  Difficulty
                </Button>
                <Menu id="difficulty"
                anchorEl
                open='true'
                onClose={()=>{}}
                >
                  <MenuItem>Easy</MenuItem>
                  <MenuItem>Normal</MenuItem>
                  <MenuItem>Hard</MenuItem>
                </Menu>
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
          </AppBar> */}
        </Grid>
        {/* {scoreState.incorrectChoices} */}
        <RegionSelectorPopup open={openRegionSelector} onClose={handleClose} />
        {/* <Grid border={"5px dashed grey"} container xs={9} spacing={2}> */}
        <Grid container xs={9} spacing={2}>
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
        <h1>Something</h1>
        {/* <button value={"Europe"} onClick={(e) => chooseRegion(e.target.value) } >europe</button>
      <button value={"Asia"} onClick={(e) => chooseRegion("Asia") } >Asia</button>
      <button value={"Asia"} onClick={(e) => chooseRegion("Africa") } >Africa</button> */}
        <button onClick={setNewCoords}>setNewCoords</button>
        <button onClick={constructArray}>construct</button>
        <br />
        <button value={3} onClick={(e) => setDifficulty(e.target.value)}>
          set to easy
        </button>
        <br />
        <button value={6} onClick={(e) => setDifficulty(e.target.value)}>
          set to normal
        </button>
        <br />
        <button value={9} onClick={(e) => setDifficulty(e.target.value)}>
          set to hard
        </button>
        <button onClick={showstate}>currstate</button>
        <button onClick={changeRegion}>Change region to..</button>
        <br />
        <button onClick={handleFlagClick}>flagclicktest</button>
        <br />
        <br />
        {/* <button onClick={()=>console.log(value)}>context testing</button> */}
        <br />
      </Grid>
    </>
  );
};

export default Game;
