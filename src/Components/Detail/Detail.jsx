import React from 'react';
import { DateTime }  from 'luxon';
import { Link, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import readings from '../../data/readings';

export default function Details(){

  const { id } = useParams();
  const sensorId = +id;

  let sensorReadings = null;

  if (readings.length) {
    sensorReadings = readings.filter((reading) => (sensorId === reading.sensorId));
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