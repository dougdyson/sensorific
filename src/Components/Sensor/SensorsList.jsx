import React from 'react';
import readings from '../../data/readings';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';

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
      <p>{reading} {props.devices.units}<br></br>{type}</p>
    </div>
  );
}