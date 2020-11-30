import React, { useState } from 'react';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';

export default function Sensor(props) {
  
  // console.log('sensors props:', props);

  const device = props.name;
  const type = props.type;

  return (
    <div>
      <li>
        {device} {type}
      </li>
    </div>
  );
}