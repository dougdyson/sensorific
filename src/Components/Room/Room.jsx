import React from 'react';
import Divider from '@material-ui/core/Divider';
import SensorsList from '../Sensor/SensorsList';

export default function Home(props) {
  
  const room = props.roomData.room;
  const sensorCount = props.roomData.sensorList.length;
  const sensors = props.roomData.sensorList;
  
  return (
    <section>
      <h2>{room}</h2>
      <p>{sensorCount} sensors</p>
      <p>{sensors.map(sensor => (
        <SensorsList devices={sensor} />
      ))}</p>
      <Divider />
    </section>
  );
}
