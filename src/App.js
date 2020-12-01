import React, { useState, useEffect,  } from 'react';
import { getRoomsData } from './Components/helpers/selectors';
import Room from './Components/Room/Room';

import sensorsData from './data/sensors.js';
// import readings from './data/readings.js';
import './App.css';

function App() {

  // const [sensors, setSensors] = useState([]);
  const [rooms, setRooms] = useState([]);

  const getRooms = () => {
    const roomsData = getRoomsData(sensorsData);
    console.log(roomsData);
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


