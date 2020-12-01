import React from 'react';
import readings from '../../data/readings';
import Button from '@material-ui/core/Button';

export default function Sensor(props) {
  
  const device = props.devices.type.split(' ');
  const type = device[0];

  function getLatestSensorReadingById (readings, id) {
    // assumes data is sorted chronologically
    const sensorReadings = readings.filter((reading) => (
      id === reading.sensorId
    ));
    const lastReading = sensorReadings.pop();
    if (lastReading) {
      return lastReading;
    } else {
      return '--';
    }
  }

  const latestReading = getLatestSensorReadingById(readings, props.devices.id);
  
  let reading = parseFloat(latestReading.value).toFixed(1);

  if (isNaN(reading)) {
    reading = '--';
  }
  
  return (
    <div>
      <p><Button size="large" variant="outlined">{reading} {props.devices.units}</Button>
      <br></br>{type}</p>
    </div>
  );
}