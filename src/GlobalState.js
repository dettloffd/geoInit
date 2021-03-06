import React, { useState, createContext } from "react";
import { countryLoader } from "./countries.js";
import { v4 as uuidv4 } from "uuid";

// https://www.youtube.com/watch?v=v5bCFM8kZO8

export const GlobalState = createContext();

export const GlobalProvider = (props) => {
  const [gameState, setGameState] = useState({
    flags: [],
    pickedCountry: "",
    isWon: false,
    difficulty: 5,
    chosenRegion: "Europe",
    streakCounter: 0,
    correctChoices: 0,
    incorrectChoices: 0,
    thisRoundIncorrect: 0,
  });

  // const [scoreState, setScoreState] = useState({
  //   streakCounter: 0,
  //   correctChoices: 0,
  //   incorrectChoices: 0,
  //   thisRoundIncorrect: 0,
  // });

  const [snackbarState, setSnackbarState] = useState({
    openSnackbar: false,
    severity: ""
  })

  const constructArray = () => {

    let myArr = [];
    let uniqueSet = new Set();
    while (uniqueSet.size < gameState.difficulty) {
      let addition = countryLoader(gameState.chosenRegion);
      uniqueSet.add(addition);
    }
    myArr = [...uniqueSet];
    let picked = myArr[Math.floor(Math.random() * myArr.length)].name;
    for (let i = 0; i < myArr.length; i++) {
      myArr[i].id = uuidv4();
      myArr[i].isClicked = false;
    }

    setGameState((prevState) => ({
      ...prevState,
      flags: myArr,
      pickedCountry: picked,
      isWon: false,
    }));
  };

  const handleFlagClick = (param) => {

    const updatedArray = gameState.flags.map((item) => {
      if (item.name === param && item.isClicked === false && gameState.isWon === false) {
        const updatedItem = {
          ...item,
          isClicked: true,
        };

        updateStats(item);
        updateSnackbar(item);
        return updatedItem;
      }
      return item;
    });
    setGameState((prevState) => ({
      ...prevState,
      flags: updatedArray,
    }));
  };

  const updateSnackbar = (something) => {
    setSnackbarState({
      openSnackbar: true,
      severity: something.name === gameState.pickedCountry ? "success" : "error"

    });
  }

  const updateStats = (param) => {
    setGameState((prevState) => ({
      ...prevState,
      isWon: param.name === gameState.pickedCountry ? true : false,
      correctChoices:
        param.name === gameState.pickedCountry
          ? gameState.correctChoices + 1
          : gameState.correctChoices,

      incorrectChoices:
        param.name === gameState.pickedCountry
          ? gameState.incorrectChoices
          : gameState.incorrectChoices+1,
      thisRoundIncorrect:
        param.name === gameState.pickedCountry
          ? 0
          : gameState.thisRoundIncorrect+1,
      streakCounter:
        param.name === gameState.pickedCountry &&
        gameState.thisRoundIncorrect === 0
          ? gameState.streakCounter+1
          : 0,
    }));
    
  };

  const fullReset = () => {
    constructArray();
    setGameState((prevState) => ({
      ...prevState,
      correctChoices: 0,
      incorrectChoices: 0,
      thisRoundIncorrect: 0,
      streakCounter: 0,
    }));
  };

  const continueGame = () => {
    constructArray();
    setGameState((prevState) => ({
      ...prevState,
    }));
  };

  const setDifficulty = (choice) => {
    setGameState((prevState) => ({
      ...prevState,
      difficulty: Number(choice),
    }));
  };

  const chooseRegion = (region) => {
    setGameState((prevState) => ({
      ...prevState,
      chosenRegion: region,
    }));
    constructArray();
  };

  const changeRegion = () => {
    setGameState((prevState) => ({
      ...prevState,
      chosenRegion: "Asia",
    }));
    constructArray();
  };

  return (
    <GlobalState.Provider
      value={{
        gameState,
        setGameState,
        constructArray,
        handleFlagClick,
        setDifficulty,
        chooseRegion,
        changeRegion,
        fullReset,
        continueGame,
        //scoreState,
        snackbarState,
        setSnackbarState,
        updateSnackbar
      }}
      mapSettings
    >
      {props.children}
    </GlobalState.Provider>
  );
};
