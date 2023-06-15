import React from "react";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import './landDetails.css'

function LandDetails() {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZ2VvcmdleDAyMDMiLCJhIjoiY2xnMTE5ZWQ1MWd6azNocXl4M3ZtbmVyaCJ9.fyd3VjwhS9S5MnyfspAzhg";

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current || "",
      style: "mapbox://styles/mapbox/streets-v9",
      center: [76.43708146069565, 9.460144297513693],
      zoom: 16,
      attributionControl: false,
      interactive: true,
      hash: true,
    });

    //When fetching from backend

    // map.current.on("load", async () => {
    //   // Replace with your backend API URL
    //   const API_URL = "https://your-backend-api-url/coordinates";

    //   // Fetch the coordinates from the backend using Axios
    //   const response = await axios.get(API_URL);
    //   const coordinates = response.data.coordinates;

    //   // Add a GeoJSON source containing the polygon coordinates
    //   map.current?.addSource("polygon", {
    //     type: "geojson",
    //     data: {
    //       type: "Feature",
    //       properties: {},
    //       geometry: {
    //         type: "Polygon",
    //         coordinates: [coordinates],
    //       },
    //     },
    //   });

    map.current.on("load", () => {
      // Add a GeoJSON source containing the polygon coordinates
      map.current?.addSource("polygon", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {}, // Add an empty properties object
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [76.43721546355016, 9.460912787582345],
                [76.43708146069565, 9.460144297513693],
                [76.43859912093797, 9.4598030873737],
                [76.43889829010368, 9.461232478944737],
                [76.43862093539059, 9.461297032021093],
                [76.43863340077269, 9.461330845506367],
                [76.4380607298014, 9.461492239982363],
                [76.43804254977005, 9.461429475472329],
                [76.43788801950706, 9.461442925011312],
                [76.43766076912044, 9.460864594371913],
                [76.43721546355016, 9.460912787582345],
              ],
            ],
          },
        },
      });

      // Add a layer to display the polygon
      map.current?.addLayer({
        id: "polygon",
        type: "fill",
        source: "polygon",
        layout: {},
        paint: {
          "fill-color": "#088", // Change the fill color of the polygon
          "fill-opacity": 0.8, // Change the opacity of the polygon
        },
      });
    });
  });

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
        <div
          ref={mapContainer}
          className="map-container"
          style={{ width: "700px", height: "600px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <h1 style={{fontFamily:'sans-serif', color:'#087EA4'}}>Details</h1>
        
      </div>
      
      <div
        className="details-container"
      >
        <Divider style={{width:'700px'}}/>
        
        <div className="detail-row">
          <h4>Area:</h4>
          <p>1000 sqft</p>
        </div>
        <div className="detail-row">
          <h4>Owner Address:</h4>
          <p>zksfuhwi64w3iuf87we4t83rw34thw837rhfaw74wd3g5384</p>
        </div>
        <div className="detail-row">
          <h4>Address:</h4>
          <p>kozhikode,kerala</p>
        </div>
        <div className="detail-row">
          <h4>Price:</h4>
          <p>50,000</p>
        </div>
        <div className="detail-row">
          <h4>Survey No:</h4>
          <p>13323443</p>
        </div>
        <div className="detail-row">
          <h4>Property ID:</h4>
          <p>43243</p>
        </div>
        <div className="detail-row">
        <h4>Document:</h4>
          <p><a href="">view document</a></p>
        </div>
      </div>
    </div>
  );
}

export default LandDetails;
