import React, { memo, useState, useContext, useEffect } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import axios from "axios";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapTing = (props) => {
  const [dynamicTing, setDynamicTing] = useState([10, 10]);

  const [mapView, setMapView] = useState({
    mapCoords: [300, -20],
    mapZoom: 2.5,
  });

  console.log(mapView);

  useEffect(() => {
    //console.log("something..");
    regionCoords();
  }, [props.regionSettings]);

  console.log(props);

  const regionCoords = () => {
    switch (props.regionSettings) {
      case "Americas":
        setMapView({
          mapCoords: [290, 5],
          mapZoom: 1.5,
        });
        break;
      case "North America":
        setMapView({
          mapCoords: [270, 30],
          mapZoom: 3.2,
        });
        break;
      case "South America":
        setMapView({
          mapCoords: [300, -20],
          mapZoom: 2.5,
        });
        break;

      case "Africa":
        //returnCoords = ([25,0]);
        setMapView({
          mapCoords: [25, 0],
          mapZoom: 2.3,
        });
        break;
      case "Asia":
        setMapView({
          // mapCoords: [300, 10],
          // mapZoom: 1.2,
          mapCoords: [80, 30],
          mapZoom: 2.2,
        });

        break;
      case "Western Asia":
        setMapView({
          mapCoords: [55, 30],
          mapZoom: 4.5,
          //mapCoords: [80, 30],
          //mapZoom: 2.2
        });
        break;
      case "Eastern Asia":
        setMapView({
          mapCoords: [95, 20],
          mapZoom: 3,
        });
        break;
        case "Middle East":
          setMapView({
            mapCoords: [48, 27.5],
            mapZoom: 5.25,
          });
          break;
      case "Europe":
        setMapView({
          mapCoords: [25, 47.5],
          mapZoom: 4.25,
        });
        break;
      case "Eastern Europe":
        setMapView({
          mapCoords: [40, 52.5],
          mapZoom: 6,
        });
        break;
      //returnCoords = ([0, 0]);
      //default:
      //returnCoords = ([0, 0]);
    }
  };

  // const regionCoords = () => {

  //   let returnCoords = [];
  //   switch(props.regionSettings){
  //     case "Africa":
  //       returnCoords = ([25,0]);
  //       break;
  //     case "Asia":
  //       returnCoords = ([75,20]);
  //       break;
  //     case "Europe":
  //       returnCoords = ([0, 0]);
  //     default:
  //       returnCoords = ([0, 0]);

  //   }

  //   return returnCoords;

  //  }

  //  console.log(regionCoords());

  //const [chosenRegion, setChosenRegion] = useState("Europe");

  const getStuff = async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
    );
    console.log(response.data.objects.ne_110m_admin_0_countries.geometries);
    let testArray = response.data.objects.ne_110m_admin_0_countries.geometries;

    for (let i = 0; i < testArray.length; i++) {
      //if (testArray[i].properties.SUBREGION == "Eastern Europe") {
      //if (testArray[i].properties.REGION_UN == "Africa"){
      if (testArray[i].properties.CONTINENT == "Africa") {
        console.log(testArray[i].properties.NAME);
      }
    }
  };

  // const chooseRegion = (region) => {
  //   setChosenRegion(region);

  // };
  ////props.geography.properties.NAME == "Afghanistan"

  // const regionSwitch = (region) =>{
  //   if (region == "World"){
  //     return {
  //       //fill: geo.properties.NAME == "Afghanistan" ? "#F53" : "#D6D6DA" ,

  //       fill:  "#F53",
  //       //fill: "#D6D6DA",
  //       outline: "none",
  //       stroke: "black",
  //       strokeWidth: ".025"
  //       //outline: "#4CAF50 solid",
  //     }

  //   }else {
  //     return {
  //       //fill: geo.properties.NAME == "Afghanistan" ? "#F53" : "#D6D6DA" ,

  //       fill: geo.properties.CONTINENT == props.regionSettings ? "#F53" : "#D6D6DA" ,
  //       //fill: "#D6D6DA",
  //       outline: "none",
  //       stroke: "black",
  //       strokeWidth: ".025"
  //       //outline: "#4CAF50 solid",
  //     }
  //   }

  // }

  return (
    <>
      <ComposableMap>
        <ZoomableGroup center={mapView.mapCoords} zoom={mapView.mapZoom}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  //   onMouseEnter={() => {
                  //     const { NAME, POP_EST } = geo.properties;
                  //     setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  //   }}
                  //   onMouseLeave={() => {
                  //     setTooltipContent("");
                  //   }}
                  style={{
                    //default: {regionSwitch},
                    default: {
                      //fill: geo.properties.NAME == "Afghanistan" ? "#F53" : "#D6D6DA" ,

                      //fill: geo.properties.CONTINENT == props.regionSettings ? "#F53" : "#D6D6DA" ,
                      //fill: geo.properties.REGION_UN == "Asia" ? "#378805" : "#D6D6DA" ,
                      //fill: geo.properties.REGION_UN == props.regionSettings ? "#378805" : "#D6D6DA" ,

                      fill:
                        geo.properties.NAME == props.pickedCountry
                          ? "#378805"
                          : "#D6D6DA",
                      //fill: props.regionSettings
                      //fill: "#D6D6DA",
                      outline: "none",
                      stroke: "black",
                      strokeWidth: ".03",
                      //outline: "#4CAF50 solid",
                    },
                    hover: {
                      fill: "#F53",

                      outline: "none",
                      //outline: "#4CAF50 solid",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      {props.chosenRegion}
      <button onClick={getStuff}>getgetget</button>
      {/* <button value={"Europe"} onClick={(e) => chooseRegion(e.target.value) } >europe</button>
      <button value={"Asia"} onClick={(e) => chooseRegion("Asia") } >Asia</button>
      <button value={"Asia"} onClick={(e) => chooseRegion("Africa") } >Africa</button> */}
    </>
  );
};

export default memo(MapTing);

////Europe?
{
  /* <ComposableMap projection="geoAzimuthalEqualArea" projectionConfig={{rotate: [-30.0, -52.0, 0], scale: 800 }}></ComposableMap> */
}
