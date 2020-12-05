import React from 'react';
import { DateTime }  from 'luxon';
import { Link, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import readings from '../../data/readings';

export default function Details(){

  let { id } = useParams();
  const sensorId = parseInt(id);
  const times = {};
  let sensorReadings = [];
  console.log(times.toLocaleString);

  if (sensorReadings) {
    sensorReadings = readings.filter((reading) => (sensorId === reading.sensorId));
  } else {
    sensorReadings.push = {time: '--', value: '--'}
  }

  

  return (
   <section>
     <h2>
        <Button 
            component={Link} 
            to={'/'} 
            size="large"
            variant="outlined">
            ...Home
        </Button>
      </h2>
     <p>{sensorReadings.map(sensorReading => (
       <p>{sensorReading.time} || {sensorReading.value}</p>
     ))}</p>
   </section> 
  )
}