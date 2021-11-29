import { Grid, Box } from "@mui/material";
import { React, useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import { display, keyframes } from "@mui/system";
import { css } from "@emotion/react";
import { GlobalState } from "./GlobalState.js";


import "./FlagCard.css";


import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const rightChoice = "flag-card-right";
const wrongChoice = "flag-card-wrong";
const defaultFlagCard = "flag-card";

//// https://stackoverflow.com/questions/66400625/merge-a-single-css-property-in-emotion


const FlagCard = (props) => {

  //console.log(props);

  const innerclick = () => {
    props.handleFlagClick(props.countryName);
  };

   const hoverFlagDisplay = () => {
    props.displayHoveredOverFlag(props.countryName)
   };

  const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

  const transY = css`
translateY('-55px')
`;

  const hoverTing = keyframes`
 transform: translateY(-100px)

`;

  const cssGoofin = css({
    animation: `${moveInLeft} 0.8s`,
    "&:hover": {
      transform: `${hoverTing}`,
      boxShadow: "0 20px 20px rgba(0, 0, 0, 0.23)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
  });

  // @keyframes moveInLeft {
  //   0% {
  //     opacity: 0;
  //     transform: translateX(-100px);
  //   }

  //   80% {
  //     transform: translateX(10px);
  //   }

  //   100% {
  //     opacity: 1;
  //     transform: translate(0);
  //   }
  // }

  // const displayStatus = () => {
  //   if (this.props.isClicked === true && this.props.isPicked === true) {
  //     return rightChoice;
  //   } else if (this.props.isClicked === true && this.props.isPicked === false) {
  //     return wrongChoice;
  //   } else {
  //     return defaultFlagCard;
  //   }
  // }


  const displayStatus = () => {
    if (props.isClicked === true && props.countryName != props.pickedCountry) {
      return wrongChoice;
    } 
    else if (props.isClicked === true && props.countryName == props.pickedCountry){
      return rightChoice;
    }
    else{
      return defaultFlagCard;
    }
  }
  return (
    // <div height="200" width="300" onClick={() => props.handleFlagClick(props.name)}>
    // <div height="200" width="300" onClick={() => console.log(props.name)}>

    <Box
    className={displayStatus()}
      component="div"
      sx={{
        
        animation: `${moveInLeft} 0.8s`,
        ":hover": {
          //transform: `${hoverTing}`,
          transform: "translateY(-4px)",
          boxShadow: "0 20px 20px rgba(0, 0, 0, 0.23)",
          transition: "all 0.3s ease",
          cursor: "pointer",
        },
        //img: displa
      }}
      ////css={cssGoofin}

      //   sx={{
      //     '& > p': {
      //       fontSize: [2, 3, 4],
      //     },
      //     '&:hover': {
      //       color: 'accent',
      //     },
      //   }}

      //   css={css`
      //   color: #20b2aa;

      //   :hover {  transform: translateY(-5px);
      //     box-shadow: 0 20px 20px rgba(0, 0, 0, 0.23);
      //     transition: all 0.3s ease;
      //   }
      // `
      //   }
      onClick={innerclick}
      onMouseOver={hoverFlagDisplay}
    >
      {/* <img height="38%" width="62%" src={props.flagImage}/> */}
      <Box sx={{
        //padding: '5px',
      }}>
      <img height="100%" width="100%" src={props.flagImage} />
      </Box>
      {/* <p color="black">{props.countryName}</p> */}

      {/* <div height="100" width="150" onClick={innerclick}>
      <img height="100" width="150" src={props.flagImage} />
      <p color="black">{props.countryName}</p>
    </div> */}

    </Box>
  );
};

export default FlagCard;
