
# Flight Booking System

### Overview
The **Flight Booking System** is a full-stack application designed for searching, booking, viewing, and canceling flights. It uses **Next.js** for the frontend, **Express** for the backend, and **MongoDB** for data storage.

---

### Prerequisites
To run this project, ensure the following tools are installed:

- Docker Desktop
- Node.js
- Git

---

### Setup

#### 1. Clone the Repository
```git clone https://github.com/Kobia77/flight-booking.git```

#### 2. Install Dependencies

- **Backend**:  
  Navigate to the `backend` directory and run:
  ```cd backend```
  ```npm install```

- **Frontend**:  
  Navigate to the `frontend` directory and run:
  ```cd frontend```
  ```npm install```

#### 3. Environment Variables
Create `.env` files in both `backend` and `frontend` directories with the following configurations:

- **Backend `.env`**
  
  ```
  MONGO_URI="mongodb+srv://flightsdb:Flights1234@flight-booking.ddp0d.mongodb.net/"
  PORT=3001
- **Frontend `.env.local`**
    
  ```
  BACKEND_URL=http://localhost:3001
---

### Running the Application

#### Backend (with Docker Compose)
To start the backend and MongoDB, use Docker Compose:
```
cd backend
docker-compose up --build
```
#### Frontend
To start the frontend development server:
```
cd frontend
npm run dev
```

Open `http://localhost:3000` in a browser.

---

### Testing the Application
After both frontend and backend are running, open http://localhost:3000 in a browser. You can search for flights, book them, and cancel them.
#### Run the tests manually
Go to the frontend folder: `cd frontend`.

run the command `npx cypress open` to see the tests visually or `npx cypress run` to see the tests only in the terminal. 

---

### CI/CD Pipeline
This project uses GitHub Actions for continuous integration and deployment. The pipeline:

- Runs on each push or pull request to the main branch.
- Builds and runs the backend and frontend containers.
- Executes Cypress end-to-end tests.

### Sample Flight Data

Here is sample JSON data for flights that exists in our DB:

```bash
  { "airline": "Air Georgia", "origin": "Tbilisi", "destination": "New York", "date": "2024-10-15", "price": 550 },
  { "airline": "SkyLine", "origin": "Paris", "destination": "Tokyo", "date": "2024-11-20", "price": 750},
  { "airline": "BlueJet", "origin": "London", "destination": "Dubai", "date": "2024-12-05", "price": 450},
  { "airline": "FlyHigh", "origin": "Berlin", "destination": "Moscow", "date": "2024-08-17", "price": 300 },
  { "airline": "Wings", "origin": "Rome", "destination": "Madrid", "date": "2024-09-10", "price": 280},
  { "airline": "AeroSky", "origin": "Amsterdam", "destination": "Toronto", "date": "2024-07-22", "price": 620},
  { "airline": "Pacific Airlines", "origin": "Los Angeles", "destination": "Sydney", "date": "2024-03-30", "price": 1200 },
  { "airline": "GlobalFly", "origin": "Hong Kong", "destination": "Bangkok", "date": "2024-05-05", "price": 350},
  { "airline": "EuroWings", "origin": "Vienna", "destination": "Zurich", "date": "2024-04-12", "price": 210 },
  { "airline": "EastJet", "origin": "Beijing", "destination": "Seoul", "date": "2024-06-18", "price": 480}
]
```

You can use them to search a flight and book it. after booking you will be able to see it in the booked flight page.
Also the titles in each page always leads you to the main page.

---

### License
This project is open-source and free to use.
