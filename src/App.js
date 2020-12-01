import React, { useState, useEffect,  } from 'react';
import Room from './Components/Room/Room';

import sensorsData from './data/sensors.js';
// import readings from './data/readings.js';
import './App.css';

function App() {

  const [sensors, setSensors] = useState([]);
  // const [rooms, setRooms] = useState([]);

  const getSensors =  () => {
    const length = sensorsData.length;
    for (let index = 0; index < length; index++) {
      console.log('getSensors:', sensorsData[index].name);
    }
    setSensors(sensorsData);
  }
  
  useEffect(() => {
    getSensors();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          { sensors.map(sensor => (
            <Room name={sensor.name} />
        ))}
        </h2>
      </header>
    </div>
  );
}

export default App;


