// MapContainer.js
import React from "react";
import { GoogleMap, MarkerF, LoadScript } from '@react-google-maps/api';
import './MapContainer.css'; // Import the CSS file


const MapContainer = ({ coordinates }) => {
  const apiKey = "PUT_YOUR_API_KEY_HERE";

  const mapOptions = {
    zoom: 12,
    center: coordinates[0], // Center map around the first coordinate
  };
  return (
    <div className="map-container"> {/* Apply the map-container class */}
      {
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap mapContainerStyle={{ width: '100%', height: '500px' }} zoom={mapOptions.zoom} center={mapOptions.center}>
              {coordinates.map((coordinate, index) => (
                <MarkerF key={index} position={coordinate}/>
              ))}
            </GoogleMap>
          </LoadScript>
      }
    </div>
  );
};

export default MapContainer;
