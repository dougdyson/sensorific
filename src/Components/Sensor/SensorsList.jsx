import React from 'react';
// import readings from '../data/readings.json';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';

export default function Sensor(props) {
  
  const device = props.devices.type.split(' ');
  const type = device[0]; 
  // const sensorID = props.devices.id;

  return (
    <div>
      {type}
    </div>
  );
}