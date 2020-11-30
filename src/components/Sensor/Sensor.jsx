import React, { useState } from 'react';
import sensors from '../../data/sensors.json';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function Sensor(props) {
  
  //sensors.map(device => {return device.name});
  console.log('sensors props:', props);

  const device = props.name;
  const type = props.type;

  return (
    <div>
      <li>
        {device} - {type}
      </li>
    </div>
  );
}