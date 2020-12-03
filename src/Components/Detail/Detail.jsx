import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import readings from '../../data/readings';

export default function Details(){
  let { id } = useParams();

  function getSensorReadingsById (readings, id) {
    return readings.filter((reading) => (id === reading.sensorId));
  }

  const sensorReadings = getSensorReadingsById(readings, id);

  return (
   <div>
     <p>
        <Button 
            component={Link} 
            to={'/'} 
            size="large" 
            variant="outlined">
            ...Home
        </Button>
      </p>
     <p>{id}</p>
   </div> 
  )
}