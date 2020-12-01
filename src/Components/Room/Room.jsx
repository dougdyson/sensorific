import React from 'react';
import { Divider } from '@material-ui/core';

export default function Home(props) {
  
  const room = props.roomData.room;
  const sensorCount = props.roomData.sensorList.length;

  return (
    <div>
      <h2>{room}</h2>
      <p>{sensorCount} devices</p>
      <Divider light={false} />
    </div>
  );
}
