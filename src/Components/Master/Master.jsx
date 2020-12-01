import React, { useState, useEffect,  } from 'react';
import { getRoomsData } from '../helpers/selectors';
import Room from '../Room/Room.jsx';

import sensorsData from '../../data/sensors';

export default function Home() {
  
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