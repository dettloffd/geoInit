import { Box } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";

import "./FlagCard.css";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const rightChoice = "flag-card-right";
const wrongChoice = "flag-card-wrong";
const defaultFlagCard = "flag-card";

//// https://stackoverflow.com/questions/66400625/merge-a-single-css-property-in-emotion

const FlagCard = (props) => {

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip placement="left" {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(28),
      border: "1px solid #dadde9",
    },
  }));

  const innerclick = () => {
    props.handleFlagClick(props.countryName);
  };

  const hoverFlagDisplay = () => {
    props.displayHoveredOverFlag(props.countryName);
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


  const displayStatus = () => {
    if (props.isClicked === true && props.countryName !== props.pickedCountry) {
      return wrongChoice;
    } else if (
      props.isClicked === true &&
      props.countryName === props.pickedCountry
    ) {
      return rightChoice;
    } else {
      return defaultFlagCard;
    }
  };
  return (
    <Box
      className={displayStatus()}
      component="div"
      sx={{
        animation: `${moveInLeft} 0.8s`,
        ":hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 20px 20px rgba(0, 0, 0, 0.23)",
          transition: "all 0.3s ease",
          cursor: "pointer",
        },
      }}
      onClick={innerclick}
      onMouseOver={hoverFlagDisplay}
    >
      <HtmlTooltip
        title={
          <React.Fragment>
            <em>{props.countryName}</em>
          </React.Fragment>
        }
      >
        <Box>
          <img height="100%" width="100%" src={props.flagImage} alt={props.countryName} />
        </Box>
      </HtmlTooltip>
    </Box>
  );
};

export default FlagCard;
