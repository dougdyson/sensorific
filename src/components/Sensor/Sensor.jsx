import React from 'react';
import sensors from '../../data/sensors.json';
import ListItem from '@material-ui/core/ListItem';

export default function Sensor(props) {
  
  const sensor = sensors[0].name;
  console.log('sensors:', sensor);

  return (
    <div>
      <ListItem>{sensor}</ListItem>
    </div>
  );
}