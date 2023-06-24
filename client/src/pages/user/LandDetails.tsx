import React, { useState } from "react";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Divider } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import './landDetails.css'


interface LandData {
  id: number;
  area: number;
  landAddress: string;
  landPrice: number;
  allLatitudeLongitude: string;
  propertyPID: number;
  physicalSurveyNumber: string;
  document: string;
  isforSell: boolean;
  ownerAddress: string;
  landVerified: boolean;
}

const LandDetails: React.FC = () => {

  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const location = useLocation();
  // const [plot, setPlot] = useState<any[][]>();
  const [product, setProduct] = useState<LandData | undefined>()

  useEffect(() => {
    const product = location.state?.item;
    console.log(product)
    setProduct(product)
  }, [location.state?.item])

  interface LatLng {
    lng: number;
    lat: number;
  }

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZ2VvcmdleDAyMDMiLCJhIjoiY2xnMTE5ZWQ1MWd6azNocXl4M3ZtbmVyaCJ9.fyd3VjwhS9S5MnyfspAzhg";

  useEffect(() => {
    const product = location.state?.item;
    const plot: LatLng[] = JSON.parse(product.allLatitudeLongitude)
    // console.log("arraypol: ", array)
    const array: number[][] = [];
    for (let i = 0; i < plot.length; i++) {
      const element = [plot[i].lng, plot[i].lat];
      array.push(element)
    }
    console.log("plot2: ", JSON.stringify(plot))
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current || "",
      style: "mapbox://styles/mapbox/streets-v9",
      center: plot[0],
      zoom: 16,
      attributionControl: false,
      interactive: true,
      hash: true,
    });
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
              array,
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
          "fill-color": "#ff0011", // Change the fill color of the polygon
          "fill-opacity": 0.5, // Change the opacity of the polygon
        },
      });
    });
  }, []);

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
        <h1 style={{ fontFamily: 'sans-serif', color: '#087EA4' }}>Details</h1>
      </div>
      {product &&
        <div
          className="details-container"
        >
          <Divider style={{ width: '700px' }} />
          <div className="detail-row">
            <h4>Area:</h4>
            <p>{product.area} sq.ft</p>
          </div>
          <div className="detail-row">
            <h4>Owner Address:</h4>
            <p>{product.ownerAddress}</p>
          </div>
          <div className="detail-row">
            <h4>Address:</h4>
            <p>{product.landAddress}</p>
          </div>
          <div className="detail-row">
            <h4>Price:</h4>
            <p>{product.landPrice}</p>
          </div>
          <div className="detail-row">
            <h4>Survey No:</h4>
            <p>{product.physicalSurveyNumber}</p>
          </div>
          <div className="detail-row">
            <h4>Property ID:</h4>
            <p>{product.propertyPID}</p>
          </div>
          <div className="detail-row">
            <h4>Document:</h4>
            <p><a href={product.document}>view document</a></p>
          </div>
        </div>
      }
    </div>
  );
}

export default LandDetails;
