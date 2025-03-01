import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">

      {/* Fixed Site Title */}
      <h1 className="site-title">Driving Mate</h1>

      {/* Hero Section */}
      <section className="hero">
        <h2 className="hero-title">Instant Driving Test & Lesson Matching – No More Waiting!</h2>
        <p className="hero-subtext">
          We auto-match you to last-minute test cancellations & open instructor slots. Stop refreshing, start driving!
        </p>
        <button className="cta-button">Sign Up Now</button>
      </section>

      {/* How It Works */}
      <section className="how-it-works card">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">✅ <strong>Tell Us Your Availability</strong> – Enter your test date & lesson needs.</div>
          <div className="step">✅ <strong>Get Auto-Matched</strong> – We find last-minute slots & book you in.</div>
          <div className="step">✅ <strong>Start Driving Sooner!</strong> – No more manual searching.</div>
        </div>
        <button className="cta-button">Find My Slot</button>
      </section>

      {/* Why Use This */}
      <section className="why-use card">
        <h2>Why Use This?</h2>
        <ul>
          <li>🔹 <strong>Test Sooner</strong> – Grab canceled test slots instantly.</li>
          <li>🔹 <strong>Find Lessons Fast</strong> – Get matched to nearby instructors.</li>
          <li>🔹 <strong>No Manual Searching</strong> – We notify & book for you.</li>
          <li>🔹 <strong>Save Time & Stress</strong> – Focus on passing, not hunting for slots.</li>
        </ul>
        <button className="cta-button">Join Now</button>
      </section>

      {/* Testimonials */}
      <section className="testimonials card">
        <h2>What Our Users Say</h2>
        <p>🗣️ “Got my test 3 weeks earlier! Lifesaver.” – Sarah K.</p>
        <p>📈 98% success in finding earlier test slots!</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>📌 <a href="#">FAQ</a> | <a href="#">Contact</a> | <a href="#">Instructor Sign-Up</a> | <a href="#">Terms & Privacy</a></p>
      </footer>

    </div>
  );
}


export default Home;
