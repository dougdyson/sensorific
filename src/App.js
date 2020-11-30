import './App.css';

import sensorsData from './data/sensors.js';
import readings from './data/readings.js';

import Sensor from './Components/Sensor/Sensor' //?
import { useState } from 'react';

// console.log('App.js readings:', readings);

// const reading = readings[2].value.toFixed(1);

function App() {
  
  const devices = sensorsData;
  console.log('App.js sensors:', devices);
  
  const [sensors, setSensors] = useState([devices]);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { devices.map(device => (
            <Sensor name={device.name} type={device.type} />
        ))}
        </ul>
      </header>
    </div>
  );
}

export default App;


