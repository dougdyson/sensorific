import React from 'react';
import sensors from '../../data/sensors.json';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';

export default function Sensor(props) {
  
  const sensor = sensors.map(device => {return device.name});
  console.log('sensors:', sensor);

  return (
    <div>
        <li>
          {sensor}
        </li>
    </div>
  );
}