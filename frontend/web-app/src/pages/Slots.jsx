import React, { useState } from 'react';
import './Slots.css';



function Slots() {
  // Sample data for testing
  const testSlots = [
    { date: 'March 3, 2025', time: '10:00 AM', location: 'Test Center A', status: 'Available', waitlistPosition: null },
    { date: 'March 5, 2025', time: '2:00 PM', location: 'Test Center B', status: 'Limited Availability', waitlistPosition: 5 },
    { date: 'March 7, 2025', time: '11:00 AM', location: 'Test Center C', status: 'Available', waitlistPosition: null },
  ];

  const lessonSlots = [
    { instructor: 'John Smith', location: 'Central Park', time: 'March 5, 2025 - 2:00 PM', duration: '1 Hour', cost: '$50' },
    { instructor: 'Jane Doe', location: 'Downtown', time: 'March 6, 2025 - 10:00 AM', duration: '2 Hours', cost: '$90' },
  ];

  const [selectedFilter, setSelectedFilter] = useState({
    location: '',
    dateRange: '',
    testType: 'practical',
    urgencyLevel: 'High',
  });

  const handleSlotAction = (slot) => {
    // Slot action logic
    alert(`Booking ${slot.date} at ${slot.location}`);
  };

  const handleWaitlistAction = (slot) => {
    // Waitlist action logic
    alert(`Joined waitlist for ${slot.date} at ${slot.location}`);
  };

  return (
    <div className="slots-container">
      <h1>Test and Lesson Slots Booking</h1>

      {/* Filters Section */}
      <section className="filters">
        <h2>Filter Available Slots</h2>
        <div className="filter-options">
          <select
            value={selectedFilter.location}
            onChange={(e) => setSelectedFilter({ ...selectedFilter, location: e.target.value })}
          >
            <option value="">Select Location</option>
            <option value="Test Center A">Test Center A</option>
            <option value="Test Center B">Test Center B</option>
            <option value="Test Center C">Test Center C</option>
          </select>
          <select
            value={selectedFilter.dateRange}
            onChange={(e) => setSelectedFilter({ ...selectedFilter, dateRange: e.target.value })}
          >
            <option value="">Select Date Range</option>
            <option value="Next 7 days">Next 7 Days</option>
            <option value="Next 3 days">Next 3 Days</option>
            <option value="Custom">Custom Range</option>
          </select>
          <select
            value={selectedFilter.testType}
            onChange={(e) => setSelectedFilter({ ...selectedFilter, testType: e.target.value })}
          >
            <option value="practical">Practical Test</option>
            <option value="theory">Theory Test</option>
          </select>
          <select
            value={selectedFilter.urgencyLevel}
            onChange={(e) => setSelectedFilter({ ...selectedFilter, urgencyLevel: e.target.value })}
          >
            <option value="High">Urgency: High</option>
            <option value="Medium">Urgency: Medium</option>
            <option value="Low">Urgency: Low</option>
          </select>
        </div>
        <button className="cta-button">Find Available Slots</button>
      </section>

      {/* Available Test Slots */}
      <section className="test-slots">
        <h2>Available Test Slots</h2>
        <div className="slot-list">
          {testSlots.map((slot, index) => (
            <div key={index} className="slot-card">
              <p>{`${slot.date} - ${slot.time}`}</p>
              <p>{slot.location}</p>
              <p>Status: {slot.status}</p>
              <p>{slot.waitlistPosition ? `Waitlist Position: ${slot.waitlistPosition}` : null}</p>
              {slot.status === 'Available' ? (
                <button className="cta-button" onClick={() => handleSlotAction(slot)}>Book Slot</button>
              ) : (
                <button className="cta-button waitlist" onClick={() => handleWaitlistAction(slot)}>Join Waitlist</button>
              )}
            </div>
          ))}
        </div>
        <button className="cta-button">Check More Slots</button>
      </section>

      {/* Available Lesson Slots */}
      <section className="lesson-slots">
        <h2>Available Lesson Slots</h2>
        <div className="lesson-list">
          {lessonSlots.map((lesson, index) => (
            <div key={index} className="lesson-card">
              <p>{lesson.instructor}</p>
              <p>{lesson.location}</p>
              <p>{lesson.time}</p>
              <p>Duration: {lesson.duration}</p>
              <p>Cost: {lesson.cost}</p>
              <button className="cta-button">Book Lesson</button>
            </div>
          ))}
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
}
  
  export default Slots;