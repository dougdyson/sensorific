import React from 'react';
import SensorsList from '../Sensor/SensorsList';

export default function Home(props) {
  
  const room = props.roomData.room;
  const sensorCount = props.roomData.sensorList.length;
  const sensors = props.roomData.sensorList;
  
  return (
    <section>
      <h2>{room}</h2>
      <p>{sensorCount} devices</p>
      <p>{sensors.map(sensor => (
        <SensorsList devices={sensor} />
      ))}</p>
    </section>
  );
}
