import React from 'react';
import { useNavigate } from "react-router-dom";
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">

      {/* Welcome & Quick Status Overview */}
      <section className="status-overview">
        <h2>Welcome, Sadia!</h2>
        <p>Let’s get you driving sooner!</p>
        <div className="status-details">
          <p><strong>Your Test Slot:</strong> Booked for March 15, 2025 – Looking for earlier slot</p>
          <p><strong>Your Lessons:</strong> 3 lessons booked | Next: March 5, 2025</p>
        </div>
        <div className="cta-buttons">
          <button className="cta-button" onClick={() => navigate("/slots")}>Find Earlier Test Slot</button>
          <button className="cta-button" onClick={() => navigate("/slots")}>Find More Lessons</button>
        </div>
      </section>

      {/* Test Slot Finder */}
      <section className="test-slot-finder">
        <h2>Test Slot Finder 🚗</h2>
        <p><strong>Current Test Date:</strong> March 15, 2025</p>
        <p><strong>Preferred Locations:</strong> [User-selected test centers]</p>
        <p><strong>Auto-Book Last-Minute Cancellations:</strong> ✅ Enabled</p>
        <p><strong>Waitlist Status:</strong> Position: #5 – Estimated match in ~3 days</p>
        <div className="cta-buttons">
          <button className="cta-button" onClick={() => navigate("/slots")}>Modify Preferences</button>
          <button className="cta-button" onClick={() => navigate("/slots")}>Check for Cancellations</button>
        </div>
      </section>

      {/* Lesson Booking Section */}
      <section className="lesson-booking">
        <h2>Lesson History 📅</h2>
        <p><strong>Past Instructor:</strong> Pam Kelly</p>
        <p><strong>Total lessons:</strong> 6</p>
        <div className="cta-buttons">
          <button className="cta-button">Add a review</button>
          <button className="cta-button" onClick={() => navigate("/slots")}>View Instructor</button>
        </div>
      </section>

      {/* Notifications & Alerts */}
      <section className="notifications">
        <h2>Notifications & Alerts 🔔</h2>
        <p>📌 New Test Slot Available – March 10, 2025 (Book Now!)</p>
        <p>📌 Instructor John Smith has a cancellation on March 7 – Claim Now!</p>
        <button className="cta-button" onClick={() => navigate("/slots")}>View All Notifications</button>
      </section>

      {/* Quick Actions Panel */}
      {/* <section className="quick-actions">
        <h2>Quick Actions ⚡</h2>
        <ul>
          <li>🛠 Modify My Availability</li>
          <li>🚗 Join Test Slot Waitlist</li>
          <li>📅 View My Lesson Schedule</li>
          <li>💬 Contact My Instructor</li>
        </ul>
      </section> */}

      {/* Settings & Account Management */} 
       {/* <section className="settings">
        <h2>Settings & Account Management ⚙️</h2>
        <ul>
          <li>Edit Personal Info</li>
          <li>Change Test Preferences</li>
          <li>Update Payment</li>
          <li>Logout</li>
        </ul>
      </section>  */}

      {/* Footer */}
      <footer className="footer">
        <p>📌 <a href="#">FAQ</a> | <a href="#">Contact</a> | <a href="#">Instructor Sign-Up</a> | <a href="#">Terms & Privacy</a></p>
      </footer>

    </div>
  );
}
  
  export default Dashboard;