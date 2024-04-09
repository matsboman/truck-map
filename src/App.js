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
    console.log(JSON.stringify(filteredCriteria));

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
    <div className="page-container"> {/* Add the page-container class */}
      <h1 className="page-title">Food Truck Locations</h1>
      <SearchForm onSearch={handleSearch} />
      <MapContainer coordinates={coordinates} />
    </div>
  );
};

export default App;
