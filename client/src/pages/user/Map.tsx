import React, { useState, useEffect } from "react";
import * as mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import SaveIcon from "@mui/icons-material/Save";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import { landPlotContext } from "./landPlotContext";
import { useNavigate, useLocation } from "react-router-dom";

(mapboxgl as any).accessToken =
  process.env.REACT_APP_MAPBOX_KEY ||
  "pk.eyJ1IjoiZ2VvcmdleDAyMDMiLCJhIjoiY2xnMTE5ZWQ1MWd6azNocXl4M3ZtbmVyaCJ9.fyd3VjwhS9S5MnyfspAzhg";

interface LatLng {
  lat: number;
  lng: number;
}
// interface MapPlotProviderProps {
//   children: React.ReactNode;
// }

// interface LocationState {
//   from: string;
//   setPolygon: (polygon: {
//     lat: number;
//     lng: number;
//   }[]) => void;
// }


interface LocationState {
  data: LatLng[];
}



const Map: React.FC = () => {

  const navigate = useNavigate();


  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [draw, setDraw] = useState<MapboxDraw | null>(null);
  const [polygon, setPolygon] = useState<LatLng[]>([]);
  const [mapStyle, setMapStyle] = useState("streets");



  useEffect(() => {
    handleMapLoad();
  }, []);

  const handleMapLoad = () => {
    const newMap = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [76.43786808224138, 9.460519999710499],
      zoom: 15,
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

    const geocoder = new MapboxGeocoder({
      accessToken: (mapboxgl as any).accessToken,
      mapboxgl: mapboxgl,
      marker: false,
    });

    newMap.addControl(geocoder);

    setMap(newMap);
    setDraw(newDraw);
  };

  const handleDrawCreate = (event: any) => {
    const { features } = event;
    const newPolygon = features[0].geometry.coordinates[0].map(
      (coord: any) => ({
        lng: coord[0],
        lat: coord[1],
      })
    );

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
    if (polygon.length >= 4) {
      try {


        console.log("Polygon saved to the backend.");
        navigate('/userdashboard/addland', { state: { polygon } })



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
          <AddIcon />
          Draw
        </Button>
        <Button
          variant="contained"
          onClick={handleClearClick}
          style={{ marginLeft: "10px" }}
        >
          <ClearIcon />
          Clear
        </Button>
        <Button
          variant="contained"
          onClick={handleSaveClick}
          style={{ marginLeft: "10px" }}
        >
          <SaveIcon />
          Save
        </Button>
        <Button
          variant="contained"
          onClick={handleStyleClick}
          style={{ marginLeft: "10px" }}
        >
          <ChangeCircleIcon />
          Switch Style
        </Button>
      </div>
      {/* <landPlotContext.Provider value={{ polygon, setPolygon }}>
        {children}
      </landPlotContext.Provider> */}
    </div>
  );
};

export default Map;
