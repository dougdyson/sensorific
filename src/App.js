import './App.css';

import sensors from './data/sensors.js';
import readings from './data/readings.js';

import Sensor from './components/Sensor/Sensor' //?

console.log('App.js sensors:', sensors);
console.log('App.js readings:', readings);

const device = sensors[0].name;
const reading = readings[2].value.toFixed(1);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sensor />
        <p>{device}</p>
        <p>{reading}°C</p>
      </header>
    </div>
  );
}

export default App;