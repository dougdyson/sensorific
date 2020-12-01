import React, { useState, useEffect,  } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getRoomsData } from './Components/helpers/selectors';
import Room from './Components/Room/Room';

import sensorsData from './data/sensors.js';

import './App.css';

function App() {

  // const [sensors, setSensors] = useState([]);
  const [rooms, setRooms] = useState([]);

  const getRooms = () => {
    const roomsData = getRoomsData(sensorsData);
    setRooms(roomsData);
  }
  
  useEffect(() => {
    getRooms();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          {rooms.map(room => (
            <Room roomData={room} />
          ))}
        </h2>
      </header>
    </div>
  );
}

export default App;


