import React, { useState, useEffect } from "react";
import * as mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { Button } from "@mui/material";

// Set your Mapbox access token here
(mapboxgl as any).accessToken =
  process.env.REACT_APP_MAPBOX_KEY ||
  "pk.eyJ1IjoiZ2VvcmdleDAyMDMiLCJhIjoiY2xnMTE5ZWQ1MWd6azNocXl4M3ZtbmVyaCJ9.fyd3VjwhS9S5MnyfspAzhg";
// mapboxgl.accessToken(process.env.REACT_APP_MAPBOX_KEY);

interface LatLng {
  lat: number;
  lng: number;
}

const Map: React.FC = () => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [draw, setDraw] = useState<MapboxDraw | null>(null);
  const [polygon, setPolygon] = useState<LatLng[]>([]);
  const [mapStyle, setMapStyle] = useState("streets");



  useEffect(() => {
    handleMapLoad();
  }, []); // Empty dependency array to run the effect only once

  const handleMapLoad = () => {
    const newMap = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [76.43786808224138, 9.460519999710499], // Initial center of the map
      zoom: 15, // Initial zoom level
    });

    const newDraw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: false,
        trash: false,
      },
    });

    newMap.addControl(newDraw);
    newMap.on("draw.create", handleDrawCreate);

    setMap(newMap);
    setDraw(newDraw);
  };

  const handleDrawCreate = (event: any) => {
    const { features } = event;
    const newPolygon = features[0].geometry.coordinates[0].map((coord: any) => ({
      lat: coord[1],
      lng: coord[0],
    }));
  
    console.log("Polygon:", newPolygon);
    setPolygon(newPolygon);
  };
  

  const handleDrawClick = () => {
    if (draw) {
      draw.changeMode("draw_polygon");
    }
  };

  const handleClearClick = () => {
    if (draw) {
      draw.deleteAll();
    }
  };

  const handleSaveClick = async () => {
    if (polygon.length > 0) {
      try {
        // Replace this with your actual smart contract implementation
        // await savePolygonToSmartContract(polygon);
        console.log("Polygon saved to the backend.");
      } catch (error) {
        console.error("Error saving polygon to the backend:", error);
      }
    } else {
      console.log("No polygon to save.");
    }
  };
  

  const handleStyleClick = () => {
    if (map) {
      const newStyle =
        mapStyle === "streets"
          ? "mapbox://styles/mapbox/satellite-v9"
          : "mapbox://styles/mapbox/streets-v11";
      setMapStyle(mapStyle === "streets" ? "satellite" : "streets");
      map.setStyle(newStyle);
    }
  };
  

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <div id="map-container" style={{ width: "1000px", height: "600px" }} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Button variant="contained" onClick={handleDrawClick}>
          Draw
        </Button>
        <Button variant="contained" onClick={handleClearClick} style={{ marginLeft: "10px" }}>
          Clear
        </Button>
        <Button variant="contained" onClick={handleSaveClick} style={{ marginLeft: "10px" }}>
          Save
        </Button>
        <Button variant="contained" onClick={handleStyleClick} style={{ marginLeft: "10px" }}>
          Switch Style
        </Button>
      </div>
    </div>
  );
};

export default Map;

