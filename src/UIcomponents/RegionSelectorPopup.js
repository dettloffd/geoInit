import { React, useState, useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Dialog from "@mui/material/Dialog";
import { GlobalState } from "../GlobalState.js";
import RegionSelectorMap from "../RegionSelectorMap.js";
import { countriesByRegionArray } from "../countries";

const regionNames = [
  "Americas",
  "South America",
  "North America",
  "Africa",
  "Asia",
  "Eastern Asia",
  "Western Asia",
  "Middle East",
  "Europe",
  "Eastern Europe",
];

export default function RegionSelectorPopup(props) {
  const { onClose, selectedValue, open } = props;
  const [mousedOverRegion, setMousedOverRegion] = useState("");

  const [mousedOverRegionCountries, setMousedOverRegionCountries] =
    useState("");

  const { chooseRegion } = useContext(GlobalState);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleRegionChoice = (regionChoice) => {
    chooseRegion(regionChoice);
    onClose();
  };

  const mouseOverRegionEvent = (region) => {
    setMousedOverRegion(region);
    setMousedOverRegionCountries(countriesByRegionArray(region));
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          minWidth: "50%",
          maxHeight: "100%",
          minHeight: "50%",
          borderBlock: "solid",
          display: "grid",
          gridTemplateColumns: " 1fr 4fr",
        },
      }}
      onClose={handleClose}
      open={open}
    >
      <List
        sx={{
          display: "grid",
          p: 1,
          bgcolor: "primary.main",
          borderRadius: 1,
          color: "white",
        }}
      >
        {regionNames.map((region) => (
          <ListItem
            button
            onClick={() => handleRegionChoice(region)}
            onMouseEnter={() => mouseOverRegionEvent(region)}
            key={region}
          >
            {region}
          </ListItem>
        ))}
      </List>

      <RegionSelectorMap
        mousedOverRegionCountries={mousedOverRegionCountries}
        regionMousedOver={mousedOverRegion}
      ></RegionSelectorMap>
    </Dialog>
  );
}
