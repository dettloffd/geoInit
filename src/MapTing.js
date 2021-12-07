import React, { memo, useState, useEffect } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapTing = (props) => {
  const [mapView, setMapView] = useState({
    mapCoords: [300, -20],
    mapZoom: 2.5,
  });

  useEffect(() => {
    regionCoords();
  }, [props.regionSettings]);

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
        setMapView({
          mapCoords: [25, 0],
          mapZoom: 2.3,
        });
        break;
      case "Asia":
        setMapView({
          mapCoords: [80, 30],
          mapZoom: 2.2,
        });

        break;
      case "Western Asia":
        setMapView({
          mapCoords: [55, 30],
          mapZoom: 4.5,
        });
        break;
      case "Eastern Asia":
        setMapView({
          mapCoords: [95, 17],
          mapZoom: 2.75,
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
        default:
          setMapView({
            mapCoords: [0, 0],
            mapZoom: 2,
          });

    }
  };
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
                  style={{
                    default: {
                      fill:
                        geo.properties.NAME === props.pickedCountry ||
                        geo.properties.name_long === props.pickedCountry
                          ? "#54a858"
                          : "#e1e1e6",
                      outline: "none",
                      stroke: "black",
                      strokeWidth: ".03",
                    },
                    hover: {
                      fill:
                        geo.properties.NAME === props.pickedCountry
                          ? "#54a858"
                          : "#D6D6DA",
                      outline: "none",
                      stroke: "red",
                      strokeWidth: ".03",
                    },
                    pressed: {
                      fill: "#e1e1e6",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapTing);
