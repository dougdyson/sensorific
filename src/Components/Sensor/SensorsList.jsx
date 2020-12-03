import React, { useParams } from 'react';
import readings from '../../data/readings';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Sensor(props) {
  
  const device = props.devices.type.split(' ');
  const type = device[0];

  // move to helpers
  function getLatestSensorReadingById (readings, id) {
    // assumes readings are sorted chronologically
    const sensorReadings = readings.filter((reading) => (id === reading.sensorId));
    // get last reading
    const lastReading = sensorReadings.pop();
    if (lastReading) {
      return lastReading;
    } else {
      return '--';
    }
  }
  
  const id = props.devices.id;
  const latestReading = getLatestSensorReadingById(readings, props.devices.id); 
  
  let reading = parseFloat(latestReading.value).toFixed(1);

  if (isNaN(reading)) {
    reading = '--';
  }
  
  return (
    <div>
      <p><Button 
          component={Link} 
          to={{ pathname: `/details/${id}`}}
          size="large" 
          variant="outlined">
          {reading} {props.devices.units}
        </Button>
      <br></br>{type}</p>
    </div>
  );
}