// App.js
import MapContainer from './MapContainer';
import React, { useEffect, useState } from "react";
import SearchForm from './SearchForm';

const fetchCoordinates = async (criteria) => {
  const response = await fetch('http://localhost:8000/api/trucks/get/gps', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(criteria)
  });
  if (!response.ok) {
    throw new Error('Failed to fetch coordinates');
  }
  return await response.json();
};

const App = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({});

  const handleSearch = (criteria) => {
    const filteredCriteria = Object.fromEntries(
      Object.entries(criteria).filter(([key, value]) => value !== '')
    );
    setSearchCriteria(filteredCriteria);

    fetchCoordinates(filteredCriteria)
    .then(data => {
        setCoordinates(data);
    })
    .catch(error => {
        console.error('Error fetching coordinates:', error);
    });
  };

  useEffect(() => {
    fetchCoordinates(searchCriteria)
    .then(data => {
        setCoordinates(data);
    })
    .catch(error => {
        console.error('Error fetching coordinates:', error);
    });
  }, [searchCriteria]);

  return (
    <div className="app-container">
      <h1 className="app-title">Food Truck Locations</h1>
      <div className="search-panel">
        <SearchForm onSearch={handleSearch} />
      </div>
      <div className="map-container">
        <MapContainer coordinates={coordinates} />
      </div>
    </div>
  );
};

export default App;
