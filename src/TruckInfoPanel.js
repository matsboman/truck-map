// clickedCoordinatePanel.js
import React from 'react';

const clickedCoordinatePanel = ({ clickedCoordinate }) => {
    if (!clickedCoordinate) {
        return <div>No coordinate data available</div>;
    }

    return (
    <div className="truck-info-wrapper">
        <div className="truck-info-panel">
        <h2>Truck Information</h2>
        <ul>
            <li><strong>ID:</strong> {clickedCoordinate.id}</li>
            <li><strong>Applicant:</strong> {clickedCoordinate.applicant}</li>
            <li><strong>Facility Type:</strong> {clickedCoordinate.facility_type}</li>
            <li><strong>Location Description:</strong> {clickedCoordinate.location_description}</li>
            <li><strong>Address:</strong> {clickedCoordinate.address}</li>
            <li><strong>Status:</strong> {clickedCoordinate.status}</li>
            <li><strong>Food Items:</strong> {clickedCoordinate.food_items}</li>
            <li><strong>Latitude:</strong> {clickedCoordinate.latitude}</li>
            <li><strong>Longitude:</strong> {clickedCoordinate.longitude}</li>
            <li><strong>Schedule:</strong> {clickedCoordinate.schedule}</li>
            <li><strong>Days/Hours:</strong> {clickedCoordinate.dayshours}</li>
            <li><strong>Location:</strong> {clickedCoordinate.location}</li>
            <li><strong>Fire Prevention Districts:</strong> {clickedCoordinate.fire_prevention_districts}</li>
            <li><strong>Police Districts:</strong> {clickedCoordinate.police_districts}</li>
            <li><strong>Supervisor Districts:</strong> {clickedCoordinate.supervisor_districts}</li>
            <li><strong>Zip Codes:</strong> {clickedCoordinate.zip_codes}</li>
            <li><strong>Neighborhoods:</strong> {clickedCoordinate.neighborhoods}</li>
        </ul>
        </div>
    </div>
  );
};

export default clickedCoordinatePanel;
