import React, { useState } from 'react';
import './SearchForm.css'; // Import CSS file for styling

const SearchForm = ({ onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    id: '',
    applicant: '',
    address: '',
    food_items: '',
    schedule: '',
    dayshours: '',
    location: '',
    zip_codes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchCriteria);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="form-column">
          <label htmlFor="applicant">Applicant:</label>
          <input type="text" id="applicant" name="applicant" className="form-control" value={searchCriteria.applicant} onChange={handleChange} />
        </div>
        <div className="form-column">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" className="form-control" value={searchCriteria.address} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group">
        <div className="form-column">
          <label htmlFor="food_items">Food Items:</label>
          <input type="text" id="food_items" name="food_items" className="form-control" value={searchCriteria.food_items} onChange={handleChange} />
        </div>
        <div className="form-column">
          <label htmlFor="dayshours">Days/Hours:</label>
          <input type="text" id="dayshours" name="dayshours" className="form-control" value={searchCriteria.dayshours} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group">
        <div className="form-column">
          <label htmlFor="schedule">Schedule:</label>
          <input type="text" id="schedule" name="schedule" className="form-control" value={searchCriteria.schedule} onChange={handleChange} />
        </div>
        <div className="form-column">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" className="form-control" value={searchCriteria.location} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group">
        <div className="form-column">
          <label htmlFor="zip_codes">Zip Codes:</label>
          <input type="text" id="zip_codes" name="zip_codes" className="form-control" value={searchCriteria.zip_codes} onChange={handleChange} />
        </div>
      </div>
      <button type="submit" className="btn btn-sm submit-button">Search</button>
    </form>
);
};

export default SearchForm;
