import React, { useState } from 'react';
import SensorsList from './Components/Sensor/SensorsList' //?
import sensorsData from './data/sensors.js';
import readings from './data/readings.js';

import './App.css';



function App() {
  
  // find starting index for 'Sensor'
  // slice off ' Sensor ' for sensor.type
  
  const [sensors, setSensors] = useState([sensorsData]);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { sensorsData.map(sensor => (
            <SensorsList name={sensor.name} />
        ))}
        </ul>
      </header>
    </div>
  );
}

export default App;


