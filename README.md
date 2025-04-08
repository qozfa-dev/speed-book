# speed-book

Speed Book is a web application built during **HackLondon 2025** to simplify the process of booking driving lessons. It provides users with a clean, intuitive interface to schedule sessions with instructors and receive real-time updates (demo data for now!).

## Features
- Easy scheduling of driving lessons
- Real-time lesson update simulation
- Responsive front-end built with **React.js** and **CSS**
- Node.js backend to manage booking data

## Tech Stack
- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express
- **Other Tools:** Git, GitHub, Vite

## Installation & Setup
### 1. Clone the Repo
```bash
git clone https://github.com/qozfa-dev/speed-book.git
cd speed-book
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

### 3. Backend
```bash
cd backend
npm install
node app.js
```
If you're using nodemon for auto-restarting your server during development:
```bash
npx nodemon app.js
```

### Challenges
- We opted for hard-coded data for the live demo due to time constraints
- Time constraints also meant we focused on core flows rather than authentication or persistence.

### Credits
Developed in collaboration with [kanzah-dev][(https://github.com/teammates-github-handle)](https://github.com/kanzah259), who contributed to the idea, design, and development process.

### License
MIT
