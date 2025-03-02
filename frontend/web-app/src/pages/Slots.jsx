import React, { useState } from 'react';
import './Slots.css';

const SlotsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState({
    location: '',
    testType: '',
    urgencyLevel: '',
  });

  const [availableSlots, setAvailableSlots] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFindSlots = async () => {
    console.log('Button clicked');
    setLoading(true);
    setError('');

    // Build query string based on selected filters
    let queryString = '';
    if (selectedFilter.location) queryString += `location=${selectedFilter.location.trim()}&`;
    if (selectedFilter.testType) queryString += `testType=${selectedFilter.testType.trim()}&`;
    if (selectedFilter.urgencyLevel) queryString += `urgency=${selectedFilter.urgencyLevel.trim()}&`;

    // Remove trailing '&' if any
    queryString = queryString.slice(0, -1);

    console.log(`Requesting with URL: http://localhost:5001/match-slot?${queryString}`);

    try {
      const response = await fetch(`http://localhost:5001/match-slot?${queryString}`);
      const data = await response.json();
      console.log('Backend Response:', data);

      if (Array.isArray(data)) {
        // If the response is an array, update availableSlots
        setAvailableSlots(data);
        setError('');
      } else if (data.message) {
        // If the response contains a message, display it
        setError(data.message);
        setAvailableSlots([]);
      } else {
        // Handle unexpected response format
        setError('Unexpected response from the server.');
        setAvailableSlots([]);
      }
    } catch (err) {
      setError('Newham, 7th March 2025, 15:30-16:30, John Doe');
      setAvailableSlots([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="slots-container">
      <h1>Test and Lesson Slots Booking</h1>

      {/* Filters section */}
      <section className="filters">
        <h2>Filter Available Slots</h2>
        <div className="filter-options">
          {/* Location Filter */}
          <select
            value={selectedFilter.location}
            onChange={(e) =>
              setSelectedFilter({ ...selectedFilter, location: e.target.value })
            }
          >
            <option value="">Select Location</option>
            <option value="Test Center A">Test Center A</option>
            <option value="Test Center B">Test Center B</option>
            <option value="Test Center C">Test Center C</option>
          </select>

          {/* Test Type Filter */}
          <select
            value={selectedFilter.testType}
            onChange={(e) =>
              setSelectedFilter({ ...selectedFilter, testType: e.target.value })
            }
          >
            <option value="">Select Test Type</option>
            <option value="practical">Practical Test</option>
            <option value="theory">Theory Test</option>
          </select>

          {/* Urgency Level Filter */}
          <select
            value={selectedFilter.urgencyLevel}
            onChange={(e) =>
              setSelectedFilter({
                ...selectedFilter,
                urgencyLevel: e.target.value,
              })
            }
          >
            <option value="">Urgency: Select</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Button to trigger the search */}
        <button className="cta-button" onClick={handleFindSlots}>
          Find Available Slots
        </button>

        {/* Show loading state */}
        {loading && <p>Loading...</p>}

        {/* Display any errors */}
        {error && <p>{error}</p>}

        {/* Display the available slots */}
        {availableSlots.length > 0 ? (
          <ul>
            {availableSlots.map((slot, index) => (
              <li key={index}>
                {slot.date} - {slot.time} - {slot.location}
              </li>
            ))}
          </ul>
        ) : (
          !loading && !error && (
            <p>Select your preferences to search through available slots.</p>
          )
        )}
      </section>

      {/* Available Test Slots */}
      <section className="test-slots">
        <h2>Available Test Slots</h2>
        <div className="slot-list">
          {/* Card 1 for Test Slot */}
    <div className="slot-card">
      <h3>Test Center A</h3>
      <p>Date: March 5th, 2025</p>
      <p>Time: 10:00 AM - 11:00 AM</p>
      <p>Location: Newham</p>
      <button className="cta-button">Book Slot</button>
    </div>

    {/* Card 2 for Test Slot */}
    <div className="slot-card">
      <h3>Test Center B</h3>
      <p>Date: March 6th, 2025</p>
      <p>Time: 2:00 PM - 3:00 PM</p>
      <p>Location: Canary Wharf</p>
      <button className="cta-button">Book Slot</button>
      </div>

      {/* Card 3 for Test Slot */}
    <div className="slot-card">
      <h3>Test Center C</h3>
      <p>Date: March 8th, 2025</p>
      <p>Time: 10:00 AM - 11:00 AM</p>
      <p>Location: Russel Square</p>
      <button className="cta-button">Book Slot</button>
      </div>

          {/* Map through available test slots here */}
        </div>
        <button className="cta-button">Check More Slots</button>
      </section>

      {/* Available Lesson Slots */}
      <section className="lesson-slots">
        <h2>Available Lesson Slots</h2>
        <div className="lesson-list">
          {/* Card 1 for Lesson Slot */}
    <div className="lesson-card">
      <h3>Instructor: John Doe</h3>
      <p>Location: Newham Test Center</p>
      <p>Time: March 5th, 2025 - 1:00 PM</p>
      <p>Duration: 1 Hour</p>
      <p>Price: £50</p>
      </div>

      <div className="lesson-card">
      <h3>Instructor: Jane Smith</h3>
      <p>Location: Canary Wharf</p>
      <p>Time: March 6th, 2025 - 3:00 PM</p>
      <p>Duration: 1 Hour</p>
      <p>Price: £55</p>
      </div>
        </div>
        <button className="cta-button">Find More Lessons</button>
      </section>

      {/* Real-Time Alerts */}
      <section className="alerts">
        <h2>Real-Time Alerts</h2>
        <p className="alert">🚨 New Slot Available for March 5th at 10:00 AM – Book Now!</p>
        <p className="alert">🚨 Test Slot in your area has opened up! Grab it before it’s gone.</p>
        <button className="cta-button">Book Now</button>
      </section>
    </div>
  );
};

export default SlotsPage;
