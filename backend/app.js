const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors()); 

const availableSlots = [
  { date: '2025-03-02', time: '10:00 AM', location: 'Test Center A', type: 'practical', urgency: 'High' },
  { date: '2025-03-03', time: '3:00 PM', location: 'Test Center B', type: 'theory', urgency: 'Medium' },
  { date: '2025-03-10', time: '9:00 AM', location: 'Test Center A', type: 'practical', urgency: 'Low' },
  { date: '2025-03-04', time: '1:00 PM', location: 'Test Center C', type: 'theory', urgency: 'Low' },
  { date: '2025-03-05', time: '9:00 AM', location: 'Test Center B', type: 'theory', urgency: 'High' },
  { date: '2025-03-06', time: '11:00 AM', location: 'Test Center A', type: 'practical', urgency: 'Medium' },
  { date: '2025-03-07', time: '2:00 PM', location: 'Test Center C', type: 'theory', urgency: 'Low' },
  { date: '2025-03-08', time: '4:00 PM', location: 'Test Center B', type: 'theory', urgency: 'Low' },
];

app.get('/match-slot', (req, res) => {
    const { location, testType, urgency } = req.query;
  
    console.log('Received Filters:', { location, testType, urgency });
  
    // Filter slots based on the provided filters
    const filteredSlots = availableSlots.filter((slot) => {
      const matchesLocation = !location || slot.location === location;
      const matchesTestType = !testType || slot.type === testType;
      const matchesUrgency = !urgency || slot.urgency === urgency;
  
      return matchesLocation && matchesTestType && matchesUrgency;
    });
  
    console.log('Filtered Slots:', filteredSlots);
  
    if (filteredSlots.length > 0) {
      // Return the next available slot as an array
      res.json([filteredSlots[0]]); // Ensure the response is an array
    } else {
      // No matching slots found
      res.json({ message: 'No matching slots found.' }); // Ensure the response is an object with a message
    }
  });

// Start the server
const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

  
