import React, { useState, useReducer, createContext } from "react";
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
    someCoords: [10, 10],
    chosenRegion: "Europe",
    streakCounter: 0,
    correctChoices: 0,
    incorrectChoices: 0,
    thisRoundIncorrect: 0,
  });

  const [scoreState, setScoreState] = useState({
    streakCounter: 0,
    correctChoices: 0,
    incorrectChoices: 0,
    thisRoundIncorrect: 0,
  });



  const constructArray = () => {
    // let myArr = [];
    // let uniqueSet = new Set();
    // while (uniqueSet.size < gameState.difficulty) {
    //   let addition = randomCountry();
    //   uniqueSet.add(addition);
    // }
    // myArr = [...uniqueSet];
    // let picked = myArr[Math.floor(Math.random() * myArr.length)];
    // for (let i = 0; i < myArr.length; i++) {
    //   myArr[i].id = uuidv4();
    //   myArr[i].isClicked = false;
    // }

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
    //console.log(param);

    const updatedArray = gameState.flags.map((item) => {
      //console.log(item.name);
      if (item.name == param && item.isClicked == false && gameState.isWon == false) {
        const updatedItem = {
          ...item,
          isClicked: true,
        };
        console.log("UPDATED>....");
        console.log(updatedItem);

        console.log("noot UPDATED>....");
        console.log(item);

        updateStats(item);
        return updatedItem;
      }
      return item;
    });

    // const updatedArray = gameState.flags.map((item) => {
    //   //console.log(item.name);
    //   if (item.name == param && item.isClicked == false) {
    //     const updatedItem = {
    //       ...item,
    //       isClicked: true,
    //     };

    //     return updatedItem;
    //   }
    //   return item;
    // });

    //updateStats(param);

    // if (param == gameState.pickedCountry){
    //   setGameState((prevState) => ({
    //     ...prevState,
    //     flags: updatedArray,
    //     isWon: true
    //   }));

    // }else{
    //   setGameState((prevState) => ({
    //     ...prevState,
    //     flags: updatedArray,
    //   }));
    // }

    setGameState((prevState) => ({
      ...prevState,
      flags: updatedArray,

      // isWon: param == gameState.pickedCountry ? true : false,
      // correctChoices: param == gameState.pickedCountry ? gameState.correctChoices++ : gameState.correctChoices,
      // incorrectChoices: param == gameState.pickedCountry ? gameState.incorrectChoices: gameState.incorrectChoices++,
      // thisRoundIncorrect: param == gameState.pickedCountry ? 0 : gameState.thisRoundIncorrect++,
      // streakCounter: (param == gameState.pickedCountry && gameState.thisRoundIncorrect == 0) ? gameState.streakCounter++ : 0,
    }));
    //updateStats(param);

    console.log(gameState.flags);

    //updateStats(param);
    //console.log(gameScore);
    //console.log("PARAM ISSSSS...")
    //console.log(param);
  };

  const updateStats = (param) => {
    setGameState((prevState) => ({
      ...prevState,
      //flags: updatedArray,
      isWon: param.name == gameState.pickedCountry ? true : false,
      correctChoices:
        param.name == gameState.pickedCountry
          ? gameState.correctChoices + 1
          : gameState.correctChoices,
      //correctChoices: param == gameState.pickedCountry ? gameState.correctChoices++ : gameState.correctChoices,

      incorrectChoices:
        param.name == gameState.pickedCountry
          ? gameState.incorrectChoices
          : gameState.incorrectChoices+1,
      thisRoundIncorrect:
        param.name == gameState.pickedCountry
          ? 0
          : gameState.thisRoundIncorrect+1,
      streakCounter:
        param.name == gameState.pickedCountry &&
        gameState.thisRoundIncorrect == 0
          ? gameState.streakCounter+1
          : 0,
    }));
    //param.name != gameState.pickedCountry ? setScoreState.incorrectChoices(1) : setOtherState(0);
    console.log("PARAM ISSSSS...");
    console.log(gameState.flags[param]);
  };


  // const updateStats = (param) => {
  //   setScoreState((prevState) => ({
  //     ...prevState,
  //     //flags: updatedArray,
  //     isWon: param.name == gameState.pickedCountry ? true : false,
  //     correctChoices:
  //       param.name == gameState.pickedCountry
  //         ? gameState.correctChoices++
  //         : gameState.correctChoices,
  //     correctChoices: param == gameState.pickedCountry ? gameState.correctChoices++ : gameState.correctChoices,

  //     incorrectChoices:
  //       param.name != gameState.pickedCountry
  //         ? scoreState.incorrectChoices + 1
  //         : scoreState.incorrectChoices,
  //     thisRoundIncorrect:
  //       param.name == gameState.pickedCountry
  //         ? 0
  //         : gameState.thisRoundIncorrect+1,
  //     streakCounter:
  //       param.name == gameState.pickedCountry &&
  //       gameState.thisRoundIncorrect == 0
  //         ? gameState.streakCounter++
  //         : 0,
  //   }));
  //  // param.name != gameState.pickedCountry ? setScoreState({incorrectChoices: scoreState.incorrectChoices + 1}) : setScoreState({incorrectChoices: scoreState.incorrectChoices});
  // };



  const fullReset = () => {
    constructArray();
    setGameState((prevState) => ({
      ...prevState,
      //flags: updatedArray,
      //isWon: param == gameState.pickedCountry ? true : false,
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
      //flags: updatedArray,
      //isWon: param == gameState.pickedCountry ? true : false,
      //correctChoices: 0,
      //incorrectChoices: 0,
      //thisRoundIncorrect: 0,
      //streakCounter: 0,
    }));
  };

  const setDifficulty = (choice) => {
    setGameState((prevState) => ({
      ...prevState,
      difficulty: Number(choice),
    }));

    //setGameState({difficulty: easy});
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
        scoreState,
        // gameScore,
        // setGameScore
      }}
      mapSettings
    >
      {props.children}
    </GlobalState.Provider>
  );
};
