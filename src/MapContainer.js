// MapContainer.js
import React, { useState } from "react";
import { GoogleMap, MarkerF, LoadScript } from '@react-google-maps/api';
import './MapContainer.css';
import TruckInfoPanel from './TruckInfoPanel';


const MapContainer = ({ coordinates }) => {
  const apiKey = "PUT_YOUR_API_KEY_HERE";
  const [clickedCoordinate, setClickedCoordinate] = useState(null);

  const handleMarkerClick = (coord) => {
    setClickedCoordinate(coord); // Update state with clicked coordinate
  };

  const mapOptions = {
    zoom: 12,
    center: coordinates[0], // Center map around the first coordinate
  };
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={{ width: '100%', height: '500px' }} zoom={mapOptions.zoom} center={mapOptions.center}>
        {coordinates.map((coordinate, index) => (
          <MarkerF
            key={index}
            position={coordinate}
            onClick={() => handleMarkerClick(coordinate)} // Attach click event listener
          />
        ))}
      </GoogleMap>
      {clickedCoordinate && <TruckInfoPanel clickedCoordinate={clickedCoordinate} />}
    </LoadScript>
  );
};

export default MapContainer;
