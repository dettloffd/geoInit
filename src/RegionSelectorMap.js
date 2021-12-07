import React, { memo, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const RegionSelectorMap = (props) => {

  useEffect(() => {
  }, [props.mousedOverRegion]);

  return (
    <>
      <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}

                  style={{
                    default: {
                      fill: (props.mousedOverRegionCountries.includes(geo.properties.NAME) || geo.properties.REGION_UN === props.regionMousedOver) ? "#54a858" : "#D6D6DA" ,
                      outline: "none",
                      stroke: "black",
                      strokeWidth: ".025",
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
    </>
  );
};

export default memo(RegionSelectorMap);
