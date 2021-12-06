import React, { memo, useState, useContext, useEffect } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const RegionSelectorMap = (props) => {

  const [mapView, setMapView] = useState({
    mapCoords: [300, -20],
    mapZoom: 2.5,
  });

  console.log(mapView);

  useEffect(() => {
    //console.log("something..");
    //regionCoords();
  }, [props.mousedOverRegion]);

  console.log(props);



//   const getStuff = async () => {
//     const response = await axios.get(
//       "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
//     );
//     console.log(response.data.objects.ne_110m_admin_0_countries.geometries);
//     let testArray = response.data.objects.ne_110m_admin_0_countries.geometries;

//     for (let i = 0; i < testArray.length; i++) {
//       //if (testArray[i].properties.SUBREGION == "Eastern Europe") {
//       //if (testArray[i].properties.REGION_UN == "Africa"){
//       if (testArray[i].properties.CONTINENT == "Africa") {
//         console.log(testArray[i].properties.NAME);
//       }
//     }
//   };

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




                      fill: (props.mousedOverRegionCountries.includes(geo.properties.NAME) || geo.properties.REGION_UN == props.regionMousedOver) ? "#54a858" : "#D6D6DA" ,
                      //fill: geo.properties.REGION_UN == props.regionMousedOver ? "#378805" : "#D6D6DA" ,





                      //fill: geo.properties.REGION_UN == props.regionSettings ? "#378805" : "#D6D6DA" ,

                    //   fill:
                    //     geo.properties.NAME == props.pickedCountry
                    //       ? "#378805"
                    //       : "#D6D6DA",
                      //fill: props.regionSettings
                      //fill: "#D6D6DA",
                      outline: "none",
                      stroke: "black",
                      strokeWidth: ".025",
                      //outline: "#4CAF50 solid",
                    },
                    hover: {
                      fill: "#D6D6DA",

                      outline: "none",
                    },
                    pressed: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
      </ComposableMap>
      {props.chosenRegion}
      
      {/* <button value={"Europe"} onClick={(e) => chooseRegion(e.target.value) } >europe</button>
      <button value={"Asia"} onClick={(e) => chooseRegion("Asia") } >Asia</button>
      <button value={"Asia"} onClick={(e) => chooseRegion("Africa") } >Africa</button> */}
    </>
  );
};

export default memo(RegionSelectorMap);
